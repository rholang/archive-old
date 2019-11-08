"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_view_1 = require("prosemirror-view");
var react_intl_1 = require("react-intl");
var editor_common_1 = require("@atlaskit/editor-common");
var event_dispatcher_1 = require("../event-dispatcher");
var utils_1 = require("../utils");
var nodes_1 = require("../utils/nodes");
var create_plugins_list_1 = tslib_1.__importDefault(require("./create-plugins-list"));
var analytics_1 = require("../plugins/analytics");
var editor_disabled_1 = require("../plugins/editor-disabled");
var analytics_2 = require("../analytics");
var create_editor_1 = require("./create-editor");
var document_logger_1 = require("../utils/document-logger");
var is_full_page_1 = require("../utils/is-full-page");
var measure_enum_1 = tslib_1.__importDefault(require("../utils/performance/measure-enum"));
var document_1 = require("../utils/document");
function handleEditorFocus(view) {
    if (view.hasFocus()) {
        return;
    }
    return window.setTimeout(function () {
        view.focus();
    }, 0);
}
var ReactEditorView = /** @class */ (function (_super) {
    tslib_1.__extends(ReactEditorView, _super);
    function ReactEditorView(props) {
        var _this = _super.call(this, props) || this;
        // ProseMirror is instantiated prior to the initial React render cycle,
        // so we allow transactions by default, to avoid discarding the initial one.
        _this.canDispatchTransactions = true;
        _this.broadcastDisabled = function (disabled) {
            var editorView = _this.view;
            if (editorView) {
                var tr = editorView.state.tr.setMeta(editor_disabled_1.pluginKey, {
                    editorDisabled: disabled,
                });
                tr.setMeta('isLocal', true);
                editorView.dispatch(tr);
            }
        };
        _this.formatFullWidthAppearance = function (appearance) {
            if (appearance === 'full-width') {
                return analytics_1.FULL_WIDTH_MODE.FULL_WIDTH;
            }
            return analytics_1.FULL_WIDTH_MODE.FIXED_WIDTH;
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
            _this.config = create_editor_1.processPluginsList(_this.getPlugins(props.editorProps, _this.props.editorProps, props.createAnalyticsEvent), props.editorProps);
            var state = _this.editorState;
            var plugins = create_editor_1.createPMPlugins({
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
            return _this.view.update(tslib_1.__assign(tslib_1.__assign({}, _this.view.props), { state: newState }));
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
            _this.config = create_editor_1.processPluginsList(_this.getPlugins(options.props.editorProps, undefined, options.props.createAnalyticsEvent), options.props.editorProps);
            var schema = create_editor_1.createSchema(_this.config);
            var _a = options.props.editorProps, contentTransformerProvider = _a.contentTransformerProvider, defaultValue = _a.defaultValue;
            var plugins = create_editor_1.createPMPlugins({
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
                        : utils_1.processRawValue(schema, defaultValue, options.props.providerFactory, options.props.editorProps.sanitizePrivateContent);
            }
            var selection;
            if (doc) {
                // ED-4759: Don't set selection at end for full-page editor - should be at start
                selection = is_full_page_1.isFullPage(options.props.editorProps.appearance)
                    ? prosemirror_state_1.Selection.atStart(doc)
                    : prosemirror_state_1.Selection.atEnd(doc);
            }
            // Workaround for ED-3507: When media node is the last element, scrollIntoView throws an error
            var patchedSelection = selection
                ? prosemirror_state_1.Selection.findFrom(selection.$head, -1, true) || undefined
                : undefined;
            return prosemirror_state_1.EditorState.create({
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
            var nodes = nodes_1.findChangedNodesFromTransaction(transaction);
            if (nodes_1.validateNodes(nodes)) {
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
                    new: document_logger_1.getDocStructure(transaction.doc),
                    prev: document_logger_1.getDocStructure(transaction.docs[0]),
                };
                analytics_2.analyticsService.trackEvent('atlaskit.fabric.editor.invalidtransaction', { documents: JSON.stringify(documents) });
                _this.dispatchAnalyticsEvent({
                    action: analytics_1.ACTION.DISPATCHED_INVALID_TRANSACTION,
                    actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
                    eventType: analytics_1.EVENT_TYPE.OPERATIONAL,
                    attributes: {
                        analyticsEventPayloads: analytics_1.getAnalyticsEventsFromTransaction(transaction),
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
            editor_common_1.measureRender(measure_enum_1.default.PROSEMIRROR_RENDERED, function (duration, startTime) {
                if (_this.view) {
                    _this.dispatchAnalyticsEvent({
                        action: analytics_1.ACTION.PROSEMIRROR_RENDERED,
                        actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
                        attributes: {
                            duration: duration,
                            startTime: startTime,
                            nodes: document_1.getNodesCount(_this.view.state.doc),
                            ttfb: editor_common_1.getResponseEndTime(),
                        },
                        eventType: analytics_1.EVENT_TYPE.OPERATIONAL,
                    });
                }
            });
            // Creates the editor-view from this.editorState. If an editor has been mounted
            // previously, this will contain the previous state of the editor.
            _this.view = new prosemirror_view_1.EditorView({ mount: node }, _this.getDirectEditorProps());
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
                var dispatch = event_dispatcher_1.createDispatch(_this.eventDispatcher);
                dispatch(analytics_1.analyticsEventKey, {
                    payload: payload,
                });
            }
        };
        _this.eventDispatcher = new event_dispatcher_1.EventDispatcher();
        _this.dispatch = event_dispatcher_1.createDispatch(_this.eventDispatcher);
        _this.errorReporter = create_editor_1.createErrorReporter(props.editorProps.errorReporterHandler);
        _this.editorState = _this.createEditorState({ props: props, replaceDoc: true });
        var createAnalyticsEvent = props.createAnalyticsEvent, allowAnalyticsGASV3 = props.allowAnalyticsGASV3;
        if (allowAnalyticsGASV3) {
            _this.activateAnalytics(createAnalyticsEvent);
        }
        create_editor_1.initAnalytics(props.editorProps.analyticsHandler);
        _this.dispatchAnalyticsEvent({
            action: analytics_1.ACTION.STARTED,
            actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
            attributes: { platform: analytics_1.PLATFORMS.WEB },
            eventType: analytics_1.EVENT_TYPE.UI,
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
                    action: analytics_1.ACTION.CHANGED_FULL_WIDTH_MODE,
                    actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
                    eventType: analytics_1.EVENT_TYPE.TRACK,
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
            this.eventDispatcher.off(analytics_1.analyticsEventKey, this.analyticsEventHandler);
        }
    };
    /**
     * Create analytics event handler, if createAnalyticsEvent exist
     * @param createAnalyticsEvent
     */
    ReactEditorView.prototype.activateAnalytics = function (createAnalyticsEvent) {
        if (createAnalyticsEvent) {
            this.analyticsEventHandler = analytics_1.fireAnalyticsEvent(createAnalyticsEvent);
            this.eventDispatcher.on(analytics_1.analyticsEventKey, this.analyticsEventHandler);
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
        return create_plugins_list_1.default(editorProps, prevEditorProps, createAnalyticsEvent);
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
        intl: react_intl_1.intlShape,
    };
    return ReactEditorView;
}(React.Component));
exports.default = ReactEditorView;
function getUAPrefix() {
    if (editor_common_1.browser.chrome) {
        return 'ua-chrome';
    }
    else if (editor_common_1.browser.ie) {
        return 'ua-ie';
    }
    else if (editor_common_1.browser.gecko) {
        return 'ua-firefox';
    }
    return '';
}
//# sourceMappingURL=ReactEditorView.js.map