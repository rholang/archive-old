"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var react_intl_1 = require("react-intl");
var version_wrapper_1 = require("./version-wrapper");
var editor_common_1 = require("@atlaskit/editor-common");
var smart_card_1 = require("@atlaskit/smart-card");
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var create_editor_1 = require("./create-editor");
var actions_1 = tslib_1.__importDefault(require("./actions"));
var create_editor_2 = require("./create-editor");
var EditorContext_1 = tslib_1.__importDefault(require("./ui/EditorContext"));
var PortalProvider_1 = require("./ui/PortalProvider");
var version_wrapper_2 = require("./version-wrapper");
var nodeviews_1 = require("./nodeviews");
var measure_enum_1 = tslib_1.__importDefault(require("./utils/performance/measure-enum"));
var analytics_1 = require("./plugins/analytics");
var ErrorBoundary_1 = tslib_1.__importDefault(require("./create-editor/ErrorBoundary"));
// allows connecting external React.Context through to nodeviews
var ContextAdapter = nodeviews_1.createContextAdapter({
    card: smart_card_1.Context,
});
var Editor = /** @class */ (function (_super) {
    tslib_1.__extends(Editor, _super);
    function Editor(props, context) {
        var _this = _super.call(this, props) || this;
        _this.handleSave = function (view) {
            if (!_this.props.onSave) {
                return;
            }
            // ED-4021: if you type a short amount of content
            // inside a content-editable on Android, Chrome only sends a
            // compositionend when it feels like it.
            //
            // to work around the PM editable being out of sync with
            // the document, force a DOM sync before calling onSave
            // if we've already started typing
            // @ts-ignore
            if (view['inDOMChange']) {
                // @ts-ignore
                view['inDOMChange'].finish(true);
            }
            return _this.props.onSave(view);
        };
        _this.providerFactory = new editor_common_1.ProviderFactory();
        _this.deprecationWarnings(props);
        _this.onEditorCreated = _this.onEditorCreated.bind(_this);
        _this.onEditorDestroyed = _this.onEditorDestroyed.bind(_this);
        _this.editorActions = (context || {}).editorActions || new actions_1.default();
        editor_common_1.startMeasure(measure_enum_1.default.EDITOR_MOUNTED);
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        editor_common_1.stopMeasure(measure_enum_1.default.EDITOR_MOUNTED, function (duration, startTime) {
            if (_this.createAnalyticsEvent) {
                analytics_1.fireAnalyticsEvent(_this.createAnalyticsEvent)({
                    payload: {
                        action: analytics_1.ACTION.EDITOR_MOUNTED,
                        actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
                        attributes: { duration: duration, startTime: startTime },
                        eventType: analytics_1.EVENT_TYPE.OPERATIONAL,
                    },
                });
            }
        });
        this.handleProviders(this.props);
    };
    Editor.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.handleProviders(nextProps);
    };
    Editor.prototype.componentWillUnmount = function () {
        this.unregisterEditorFromActions();
        this.providerFactory.destroy();
        editor_common_1.clearMeasure(measure_enum_1.default.EDITOR_MOUNTED);
    };
    Editor.prototype.onEditorCreated = function (instance) {
        this.registerEditorForActions(instance.view, instance.eventDispatcher, instance.transformer);
    };
    Editor.prototype.deprecationWarnings = function (props) {
        var nextVersion = version_wrapper_2.nextMajorVersion();
        var deprecatedProperties = {
            mediaProvider: {
                message: 'To pass media provider use media property – <Editor media={{ provider }} />',
                type: 'removed',
            },
            allowTasksAndDecisions: {
                message: 'To allow tasks and decisions use taskDecisionProvider – <Editor taskDecisionProvider={{ provider }} />',
                type: 'removed',
            },
            allowPlaceholderCursor: {
                type: 'removed',
            },
            allowConfluenceInlineComment: {
                message: 'To integrate inline comments use experimental annotationProvider – <Editor annotationProvider={{ provider }} />',
                type: 'removed',
            },
            addonToolbarComponents: {
                type: 'removed',
            },
            cardProvider: {
                type: 'removed',
            },
            allowCodeBlocks: {
                message: 'To disable codeBlocks use - <Editor allowBlockTypes={{ exclude: ["codeBlocks"] }} />',
            },
            allowLists: {},
            allowHelpDialog: {},
            allowGapCursor: {
                type: 'removed',
            },
            allowUnsupportedContent: {
                message: 'Deprecated. Defaults to true.',
                type: 'removed',
            },
        };
        Object.keys(deprecatedProperties).forEach(function (property) {
            if (props.hasOwnProperty(property)) {
                var meta = deprecatedProperties[property];
                var type = meta.type || 'enabled by default';
                // eslint-disable-next-line no-console
                console.warn(property + " property is deprecated. " + (meta.message ||
                    '') + " [Will be " + type + " in editor-core@" + nextVersion + "]");
            }
        });
        if (props.hasOwnProperty('quickInsert') &&
            typeof props.quickInsert === 'boolean') {
            // eslint-disable-next-line no-console
            console.warn("quickInsert property is deprecated. [Will be enabled by default in editor-core@" + nextVersion + "]");
        }
        if (props.hasOwnProperty('allowTables') &&
            typeof props.allowTables !== 'boolean' &&
            (!props.allowTables || !props.allowTables.advanced)) {
            // eslint-disable-next-line no-console
            console.warn("Advanced table options are deprecated (except isHeaderRowRequired) to continue using advanced table features use - <Editor allowTables={{ advanced: true }} /> [Will be changed in editor-core@" + nextVersion + "]");
        }
    };
    Editor.prototype.onEditorDestroyed = function (_instance) {
        this.unregisterEditorFromActions();
    };
    Editor.prototype.registerEditorForActions = function (editorView, eventDispatcher, contentTransformer) {
        this.editorActions._privateRegisterEditor(editorView, eventDispatcher, contentTransformer);
    };
    Editor.prototype.unregisterEditorFromActions = function () {
        if (this.editorActions) {
            this.editorActions._privateUnregisterEditor();
        }
    };
    Editor.prototype.handleProviders = function (props) {
        var emojiProvider = props.emojiProvider, mentionProvider = props.mentionProvider, mediaProvider = props.mediaProvider, taskDecisionProvider = props.taskDecisionProvider, contextIdentifierProvider = props.contextIdentifierProvider, collabEditProvider = props.collabEditProvider, activityProvider = props.activityProvider, presenceProvider = props.presenceProvider, macroProvider = props.macroProvider, legacyImageUploadProvider = props.legacyImageUploadProvider, media = props.media, collabEdit = props.collabEdit, quickInsert = props.quickInsert, autoformattingProvider = props.autoformattingProvider, UNSAFE_cards = props.UNSAFE_cards;
        this.providerFactory.setProvider('emojiProvider', emojiProvider);
        this.providerFactory.setProvider('mentionProvider', mentionProvider);
        this.providerFactory.setProvider('taskDecisionProvider', taskDecisionProvider);
        this.providerFactory.setProvider('contextIdentifierProvider', contextIdentifierProvider);
        this.providerFactory.setProvider('mediaProvider', media && media.provider ? media.provider : mediaProvider);
        this.providerFactory.setProvider('imageUploadProvider', legacyImageUploadProvider);
        this.providerFactory.setProvider('collabEditProvider', collabEdit && collabEdit.provider
            ? collabEdit.provider
            : collabEditProvider);
        this.providerFactory.setProvider('activityProvider', activityProvider);
        this.providerFactory.setProvider('presenceProvider', presenceProvider);
        this.providerFactory.setProvider('macroProvider', macroProvider);
        if (UNSAFE_cards && UNSAFE_cards.provider) {
            this.providerFactory.setProvider('cardProvider', UNSAFE_cards.provider);
        }
        this.providerFactory.setProvider('autoformattingProvider', autoformattingProvider);
        if (quickInsert && typeof quickInsert !== 'boolean') {
            this.providerFactory.setProvider('quickInsertProvider', quickInsert.provider);
        }
    };
    Editor.prototype.render = function () {
        var _this = this;
        var Component = create_editor_1.getUiComponent(this.props.appearance);
        var overriddenEditorProps = tslib_1.__assign(tslib_1.__assign({}, this.props), { onSave: this.props.onSave ? this.handleSave : undefined });
        var editor = (React.createElement(ErrorBoundary_1.default, { contextIdentifierProvider: this.props.contextIdentifierProvider },
            React.createElement(editor_common_1.WidthProvider, null,
                React.createElement(EditorContext_1.default, { editorActions: this.editorActions },
                    React.createElement(analytics_namespaced_context_1.FabricEditorAnalyticsContext, { data: {
                            packageName: version_wrapper_1.name,
                            packageVersion: version_wrapper_1.version,
                            componentName: 'editorCore',
                            appearance: editor_common_1.getAnalyticsAppearance(this.props.appearance),
                        } },
                        React.createElement(editor_common_1.WithCreateAnalyticsEvent, { render: function (createAnalyticsEvent) {
                                return (_this.createAnalyticsEvent = createAnalyticsEvent) && (React.createElement(ContextAdapter, null,
                                    React.createElement(PortalProvider_1.PortalProvider, { render: function (portalProviderAPI) { return (React.createElement(React.Fragment, null,
                                            React.createElement(create_editor_2.ReactEditorView, { editorProps: overriddenEditorProps, createAnalyticsEvent: createAnalyticsEvent, portalProviderAPI: portalProviderAPI, providerFactory: _this.providerFactory, onEditorCreated: _this.onEditorCreated, onEditorDestroyed: _this.onEditorDestroyed, allowAnalyticsGASV3: _this.props.allowAnalyticsGASV3, disabled: _this.props.disabled, render: function (_a) {
                                                    var editor = _a.editor, view = _a.view, eventDispatcher = _a.eventDispatcher, config = _a.config, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
                                                    return (React.createElement(editor_common_1.BaseTheme, { dynamicTextSizing: _this.props.allowDynamicTextSizing &&
                                                            _this.props.appearance !== 'full-width' },
                                                        React.createElement(Component, { appearance: _this.props.appearance, disabled: _this.props.disabled, editorActions: _this.editorActions, editorDOMElement: editor, editorView: view, providerFactory: _this.providerFactory, eventDispatcher: eventDispatcher, dispatchAnalyticsEvent: dispatchAnalyticsEvent, maxHeight: _this.props.maxHeight, onSave: _this.props.onSave
                                                                ? _this.handleSave
                                                                : undefined, onCancel: _this.props.onCancel, popupsMountPoint: _this.props.popupsMountPoint, popupsBoundariesElement: _this.props.popupsBoundariesElement, popupsScrollableElement: _this.props.popupsScrollableElement, contentComponents: config.contentComponents, primaryToolbarComponents: config.primaryToolbarComponents, secondaryToolbarComponents: config.secondaryToolbarComponents, insertMenuItems: _this.props.insertMenuItems, customContentComponents: _this.props.contentComponents, customPrimaryToolbarComponents: _this.props.primaryToolbarComponents, customSecondaryToolbarComponents: _this.props.secondaryToolbarComponents, addonToolbarComponents: _this.props.addonToolbarComponents, collabEdit: _this.props.collabEdit, allowAnnotation: !!_this.props.annotationProvider })));
                                                } }),
                                            React.createElement(PortalProvider_1.PortalRenderer, { portalProviderAPI: portalProviderAPI }))); } })));
                            } }))))));
        return this.context.intl ? (editor) : (React.createElement(react_intl_1.IntlProvider, { locale: "en" }, editor));
    };
    Editor.defaultProps = {
        appearance: 'comment',
        disabled: false,
        extensionHandlers: {},
        allowNewInsertionBehaviour: true,
    };
    Editor.contextTypes = {
        editorActions: PropTypes.object,
        intl: react_intl_1.intlShape,
    };
    return Editor;
}(React.Component));
exports.default = Editor;
//# sourceMappingURL=editor.js.map