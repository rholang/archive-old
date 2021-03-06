import { __assign, __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { EditorState, Selection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { intlShape } from 'react-intl';
import { browser, getResponseEndTime, measureRender, } from '@atlaskit/editor-common';
import { createDispatch, EventDispatcher } from '../event-dispatcher';
import { processRawValue } from '../utils';
import { findChangedNodesFromTransaction, validateNodes } from '../utils/nodes';
import createPluginList from './create-plugins-list';
import { ACTION, ACTION_SUBJECT, analyticsEventKey, EVENT_TYPE, fireAnalyticsEvent, FULL_WIDTH_MODE, getAnalyticsEventsFromTransaction, PLATFORMS, } from '../plugins/analytics';
import { pluginKey as editorDisabledPluginKey, } from '../plugins/editor-disabled';
import { analyticsService } from '../analytics';
import { createErrorReporter, createPMPlugins, createSchema, initAnalytics, processPluginsList, } from './create-editor';
import { getDocStructure } from '../utils/document-logger';
import { isFullPage } from '../utils/is-full-page';
import measurements from '../utils/performance/measure-enum';
import { getNodesCount } from '../utils/document';
function handleEditorFocus(view) {
    if (view.hasFocus()) {
        return;
    }
    return window.setTimeout(function () {
        view.focus();
    }, 0);
}
var ReactEditorView = /** @class */ (function (_super) {
    __extends(ReactEditorView, _super);
    function ReactEditorView(props) {
        var _this = _super.call(this, props) || this;
        // ProseMirror is instantiated prior to the initial React render cycle,
        // so we allow transactions by default, to avoid discarding the initial one.
        _this.canDispatchTransactions = true;
        _this.broadcastDisabled = function (disabled) {
            var editorView = _this.view;
            if (editorView) {
                var tr = editorView.state.tr.setMeta(editorDisabledPluginKey, {
                    editorDisabled: disabled,
                });
                tr.setMeta('isLocal', true);
                editorView.dispatch(tr);
            }
        };
        _this.formatFullWidthAppearance = function (appearance) {
            if (appearance === 'full-width') {
                return FULL_WIDTH_MODE.FULL_WIDTH;
            }
            return FULL_WIDTH_MODE.FIXED_WIDTH;
        };
        _this.reconfigureState = function (props) {
            if (!_this.view) {
                return;
            }
            // We cannot currently guarentee when all the portals will have re-rendered during a reconfigure
            // so we blur here to stop ProseMirror from trying to apply selection to detached nodes or
            // nodes that haven't been re-rendered to the document yet.
            if (_this.view.dom instanceof HTMLElement && _this.view.hasFocus()) {
                _this.view.dom.blur();
            }
            _this.config = processPluginsList(_this.getPlugins(props.editorProps, _this.props.editorProps, props.createAnalyticsEvent), props.editorProps);
            var state = _this.editorState;
            var plugins = createPMPlugins({
                schema: state.schema,
                dispatch: _this.dispatch,
                errorReporter: _this.errorReporter,
                editorConfig: _this.config,
                props: props.editorProps,
                prevProps: _this.props.editorProps,
                eventDispatcher: _this.eventDispatcher,
                providerFactory: props.providerFactory,
                portalProviderAPI: props.portalProviderAPI,
                reactContext: function () { return _this.context; },
                dispatchAnalyticsEvent: _this.dispatchAnalyticsEvent,
            });
            var newState = state.reconfigure({ plugins: plugins });
            // need to update the state first so when the view builds the nodeviews it is
            // using the latest plugins
            _this.view.updateState(newState);
            return _this.view.update(__assign(__assign({}, _this.view.props), { state: newState }));
        };
        _this.createEditorState = function (options) {
            if (_this.view) {
                /**
                 * There's presently a number of issues with changing the schema of a
                 * editor inflight. A significant issue is that we lose the ability
                 * to keep track of a user's history as the internal plugin state
                 * keeps a list of Steps to undo/redo (which are tied to the schema).
                 * Without a good way to do work around this, we prevent this for now.
                 */
                // eslint-disable-next-line no-console
                console.warn('The editor does not support changing the schema dynamically.');
                return _this.editorState;
            }
            _this.config = processPluginsList(_this.getPlugins(options.props.editorProps, undefined, options.props.createAnalyticsEvent), options.props.editorProps);
            var schema = createSchema(_this.config);
            var _a = options.props.editorProps, contentTransformerProvider = _a.contentTransformerProvider, defaultValue = _a.defaultValue;
            var plugins = createPMPlugins({
                schema: schema,
                dispatch: _this.dispatch,
                errorReporter: _this.errorReporter,
                editorConfig: _this.config,
                props: options.props.editorProps,
                eventDispatcher: _this.eventDispatcher,
                providerFactory: options.props.providerFactory,
                portalProviderAPI: _this.props.portalProviderAPI,
                reactContext: function () { return _this.context; },
                dispatchAnalyticsEvent: _this.dispatchAnalyticsEvent,
            });
            _this.contentTransformer = contentTransformerProvider
                ? contentTransformerProvider(schema)
                : undefined;
            var doc;
            if (options.replaceDoc) {
                doc =
                    _this.contentTransformer && typeof defaultValue === 'string'
                        ? _this.contentTransformer.parse(defaultValue)
                        : processRawValue(schema, defaultValue, options.props.providerFactory, options.props.editorProps.sanitizePrivateContent);
            }
            var selection;
            if (doc) {
                // ED-4759: Don't set selection at end for full-page editor - should be at start
                selection = isFullPage(options.props.editorProps.appearance)
                    ? Selection.atStart(doc)
                    : Selection.atEnd(doc);
            }
            // Workaround for ED-3507: When media node is the last element, scrollIntoView throws an error
            var patchedSelection = selection
                ? Selection.findFrom(selection.$head, -1, true) || undefined
                : undefined;
            return EditorState.create({
                schema: schema,
                plugins: plugins,
                doc: doc,
                selection: patchedSelection,
            });
        };
        _this.dispatchTransaction = function (transaction) {
            if (!_this.view) {
                return;
            }
            var nodes = findChangedNodesFromTransaction(transaction);
            if (validateNodes(nodes)) {
                // go ahead and update the state now we know the transaction is good
                var editorState = _this.view.state.apply(transaction);
                _this.view.updateState(editorState);
                if (_this.props.editorProps.onChange && transaction.docChanged) {
                    _this.props.editorProps.onChange(_this.view);
                }
                _this.editorState = editorState;
            }
            else {
                var documents = {
                    new: getDocStructure(transaction.doc),
                    prev: getDocStructure(transaction.docs[0]),
                };
                analyticsService.trackEvent('atlaskit.fabric.editor.invalidtransaction', { documents: JSON.stringify(documents) });
                _this.dispatchAnalyticsEvent({
                    action: ACTION.DISPATCHED_INVALID_TRANSACTION,
                    actionSubject: ACTION_SUBJECT.EDITOR,
                    eventType: EVENT_TYPE.OPERATIONAL,
                    attributes: {
                        analyticsEventPayloads: getAnalyticsEventsFromTransaction(transaction),
                        documents: documents,
                    },
                });
            }
        };
        _this.getDirectEditorProps = function (state) {
            return {
                state: state || _this.editorState,
                dispatchTransaction: function (tr) {
                    // Block stale transactions:
                    // Prevent runtime exeptions from async transactions that would attempt to
                    // update the DOM after React has unmounted the Editor.
                    if (_this.canDispatchTransactions) {
                        _this.dispatchTransaction(tr);
                    }
                },
                // Disables the contentEditable attribute of the editor if the editor is disabled
                editable: function (_state) { return !_this.props.editorProps.disabled; },
                attributes: { 'data-gramm': 'false' },
            };
        };
        _this.createEditorView = function (node) {
            measureRender(measurements.PROSEMIRROR_RENDERED, function (duration, startTime) {
                if (_this.view) {
                    _this.dispatchAnalyticsEvent({
                        action: ACTION.PROSEMIRROR_RENDERED,
                        actionSubject: ACTION_SUBJECT.EDITOR,
                        attributes: {
                            duration: duration,
                            startTime: startTime,
                            nodes: getNodesCount(_this.view.state.doc),
                            ttfb: getResponseEndTime(),
                        },
                        eventType: EVENT_TYPE.OPERATIONAL,
                    });
                }
            });
            // Creates the editor-view from this.editorState. If an editor has been mounted
            // previously, this will contain the previous state of the editor.
            _this.view = new EditorView({ mount: node }, _this.getDirectEditorProps());
        };
        _this.handleEditorViewRef = function (node) {
            if (!_this.view && node) {
                _this.createEditorView(node);
                var view = _this.view;
                _this.props.onEditorCreated({
                    view: view,
                    config: _this.config,
                    eventDispatcher: _this.eventDispatcher,
                    transformer: _this.contentTransformer,
                });
                if (_this.props.editorProps.shouldFocus &&
                    (view.props.editable && view.props.editable(view.state))) {
                    _this.focusTimeoutId = handleEditorFocus(view);
                }
                // Set the state of the EditorDisabled plugin to the current value
                _this.broadcastDisabled(!!_this.props.editorProps.disabled);
                // Force React to re-render so consumers get a reference to the editor view
                _this.forceUpdate();
            }
            else if (_this.view && !node) {
                // When the appearance is changed, React will call handleEditorViewRef with node === null
                // to destroy the old EditorView, before calling this method again with node === div to
                // create the new EditorView
                _this.props.onEditorDestroyed({
                    view: _this.view,
                    config: _this.config,
                    eventDispatcher: _this.eventDispatcher,
                    transformer: _this.contentTransformer,
                });
                _this.view.destroy(); // Destroys the dom node & all node views
                _this.view = undefined;
            }
        };
        _this.dispatchAnalyticsEvent = function (payload) {
            if (_this.props.allowAnalyticsGASV3 && _this.eventDispatcher) {
                var dispatch = createDispatch(_this.eventDispatcher);
                dispatch(analyticsEventKey, {
                    payload: payload,
                });
            }
        };
        _this.eventDispatcher = new EventDispatcher();
        _this.dispatch = createDispatch(_this.eventDispatcher);
        _this.errorReporter = createErrorReporter(props.editorProps.errorReporterHandler);
        _this.editorState = _this.createEditorState({ props: props, replaceDoc: true });
        var createAnalyticsEvent = props.createAnalyticsEvent, allowAnalyticsGASV3 = props.allowAnalyticsGASV3;
        if (allowAnalyticsGASV3) {
            _this.activateAnalytics(createAnalyticsEvent);
        }
        initAnalytics(props.editorProps.analyticsHandler);
        _this.dispatchAnalyticsEvent({
            action: ACTION.STARTED,
            actionSubject: ACTION_SUBJECT.EDITOR,
            attributes: { platform: PLATFORMS.WEB },
            eventType: EVENT_TYPE.UI,
        });
        return _this;
    }
    ReactEditorView.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.view &&
            this.props.editorProps.disabled !== nextProps.editorProps.disabled) {
            this.broadcastDisabled(!!nextProps.editorProps.disabled);
            // Disables the contentEditable attribute of the editor if the editor is disabled
            this.view.setProps({
                editable: function (_state) { return !nextProps.editorProps.disabled; },
            });
            if (!nextProps.editorProps.disabled &&
                nextProps.editorProps.shouldFocus) {
                this.focusTimeoutId = handleEditorFocus(this.view);
            }
        }
        // Activate or deactivate analytics if change property
        if (this.props.allowAnalyticsGASV3 !== nextProps.allowAnalyticsGASV3) {
            if (nextProps.allowAnalyticsGASV3) {
                this.activateAnalytics(nextProps.createAnalyticsEvent);
            }
            else {
                this.deactivateAnalytics();
            }
        }
        else {
            // Allow analytics is the same, check if we receive a new create analytics prop
            if (this.props.allowAnalyticsGASV3 &&
                nextProps.createAnalyticsEvent !== this.props.createAnalyticsEvent) {
                this.deactivateAnalytics(); // Deactivate the old one
                this.activateAnalytics(nextProps.createAnalyticsEvent); // Activate the new one
            }
        }
        var appearance = this.props.editorProps.appearance;
        var nextAppearance = nextProps.editorProps.appearance;
        if (nextAppearance !== appearance) {
            this.reconfigureState(nextProps);
            if (nextAppearance === 'full-width' || appearance === 'full-width') {
                this.dispatchAnalyticsEvent({
                    action: ACTION.CHANGED_FULL_WIDTH_MODE,
                    actionSubject: ACTION_SUBJECT.EDITOR,
                    eventType: EVENT_TYPE.TRACK,
                    attributes: {
                        previousMode: this.formatFullWidthAppearance(appearance),
                        newMode: this.formatFullWidthAppearance(nextAppearance),
                    },
                });
            }
        }
    };
    /**
     * Deactivate analytics event handler, if exist any.
     */
    ReactEditorView.prototype.deactivateAnalytics = function () {
        if (this.analyticsEventHandler) {
            this.eventDispatcher.off(analyticsEventKey, this.analyticsEventHandler);
        }
    };
    /**
     * Create analytics event handler, if createAnalyticsEvent exist
     * @param createAnalyticsEvent
     */
    ReactEditorView.prototype.activateAnalytics = function (createAnalyticsEvent) {
        if (createAnalyticsEvent) {
            this.analyticsEventHandler = fireAnalyticsEvent(createAnalyticsEvent);
            this.eventDispatcher.on(analyticsEventKey, this.analyticsEventHandler);
        }
    };
    ReactEditorView.prototype.componentDidMount = function () {
        // Transaction dispatching is already enabled by default prior to
        // mounting, but we reset it here, just in case the editor view
        // instance is ever recycled (mounted again after unmounting) with
        // the same key.
        // Although storing mounted state is an anti-pattern in React,
        // we do so here so that we can intercept and abort asynchronous
        // ProseMirror transactions when a dismount is imminent.
        this.canDispatchTransactions = true;
    };
    /**
     * Clean up any non-PM resources when the editor is unmounted
     */
    ReactEditorView.prototype.componentWillUnmount = function () {
        // We can ignore any transactions from this point onwards.
        // This serves to avoid potential runtime exceptions which could arise
        // from an async dispatched transaction after it's unmounted.
        this.canDispatchTransactions = false;
        this.eventDispatcher.destroy();
        clearTimeout(this.focusTimeoutId);
        if (this.view) {
            // Destroy the state if the Editor is being unmounted
            var editorState_1 = this.view.state;
            editorState_1.plugins.forEach(function (plugin) {
                var state = plugin.getState(editorState_1);
                if (state && state.destroy) {
                    state.destroy();
                }
            });
        }
        // this.view will be destroyed when React unmounts in handleEditorViewRef
    };
    // Helper to allow tests to inject plugins directly
    ReactEditorView.prototype.getPlugins = function (editorProps, prevEditorProps, createAnalyticsEvent) {
        return createPluginList(editorProps, prevEditorProps, createAnalyticsEvent);
    };
    ReactEditorView.prototype.render = function () {
        var editor = (React.createElement("div", { className: getUAPrefix(), key: "ProseMirror", ref: this.handleEditorViewRef }));
        return this.props.render
            ? this.props.render({
                editor: editor,
                view: this.view,
                config: this.config,
                eventDispatcher: this.eventDispatcher,
                transformer: this.contentTransformer,
                dispatchAnalyticsEvent: this.dispatchAnalyticsEvent,
            })
            : editor;
    };
    ReactEditorView.contextTypes = {
        getAtlaskitAnalyticsEventHandlers: PropTypes.func,
        intl: intlShape,
    };
    return ReactEditorView;
}(React.Component));
export default ReactEditorView;
function getUAPrefix() {
    if (browser.chrome) {
        return 'ua-chrome';
    }
    else if (browser.ie) {
        return 'ua-ie';
    }
    else if (browser.gecko) {
        return 'ua-firefox';
    }
    return '';
}
//# sourceMappingURL=ReactEditorView.js.map