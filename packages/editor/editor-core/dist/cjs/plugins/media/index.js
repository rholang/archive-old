"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var main_1 = require("./pm-plugins/main");
var media_editor_1 = require("./pm-plugins/media-editor");
var keymap_media_single_1 = tslib_1.__importDefault(require("./pm-plugins/keymap-media-single"));
var keymap_1 = tslib_1.__importDefault(require("./pm-plugins/keymap"));
var linking_1 = tslib_1.__importDefault(require("./pm-plugins/linking"));
var ToolbarMedia_1 = tslib_1.__importDefault(require("./ui/ToolbarMedia"));
var mediaGroup_1 = require("./nodeviews/mediaGroup");
var mediaSingle_1 = require("./nodeviews/mediaSingle");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var toolbar_1 = require("./toolbar");
var analytics_1 = require("../analytics");
var assets_1 = require("../quick-insert/assets");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var MediaEditor_1 = tslib_1.__importDefault(require("./ui/MediaEditor"));
var MediaPicker_1 = require("./ui/MediaPicker");
var media_single_1 = require("./utils/media-single");
exports.insertMediaSingleNode = media_single_1.insertMediaSingleNode;
var mediaPlugin = function (options, pluginOptions, appearance) { return ({
    name: 'media',
    nodes: function () {
        return [
            { name: 'mediaGroup', node: adf_schema_1.mediaGroup },
            { name: 'mediaSingle', node: adf_schema_1.mediaSingle },
            { name: 'media', node: adf_schema_1.media },
        ].filter(function (node) {
            var _a = options || {}, _b = _a.allowMediaGroup, allowMediaGroup = _b === void 0 ? true : _b, _c = _a.allowMediaSingle, allowMediaSingle = _c === void 0 ? false : _c;
            if (node.name === 'mediaGroup') {
                return allowMediaGroup;
            }
            if (node.name === 'mediaSingle') {
                return allowMediaSingle;
            }
            return true;
        });
    },
    pmPlugins: function () {
        var pmPlugins = [
            {
                name: 'media',
                plugin: function (_a) {
                    var schema = _a.schema, props = _a.props, dispatch = _a.dispatch, eventDispatcher = _a.eventDispatcher, providerFactory = _a.providerFactory, errorReporter = _a.errorReporter, portalProviderAPI = _a.portalProviderAPI, reactContext = _a.reactContext, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
                    return main_1.createPlugin(schema, {
                        providerFactory: providerFactory,
                        nodeViews: {
                            mediaGroup: mediaGroup_1.ReactMediaGroupNode(portalProviderAPI, providerFactory, pluginOptions && pluginOptions.allowLazyLoading, props.appearance),
                            mediaSingle: mediaSingle_1.ReactMediaSingleNode(portalProviderAPI, eventDispatcher, providerFactory, options, pluginOptions, pluginOptions && pluginOptions.fullWidthEnabled, dispatchAnalyticsEvent),
                        },
                        errorReporter: errorReporter,
                        uploadErrorHandler: props.uploadErrorHandler,
                        waitForMediaUpload: props.waitForMediaUpload,
                        customDropzoneContainer: options && options.customDropzoneContainer,
                        customMediaPicker: options && options.customMediaPicker,
                        allowResizing: !!(options && options.allowResizing),
                    }, reactContext, dispatch, pluginOptions);
                },
            },
            { name: 'mediaKeymap', plugin: function () { return keymap_1.default(); } },
        ];
        if (options && options.allowMediaSingle) {
            pmPlugins.push({
                name: 'mediaSingleKeymap',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return keymap_media_single_1.default(schema);
                },
            });
        }
        if (options && options.allowAnnotation) {
            pmPlugins.push({ name: 'mediaEditor', plugin: media_editor_1.createPlugin });
        }
        if (options && options.allowLinking) {
            pmPlugins.push({
                name: 'mediaLinking',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return linking_1.default(dispatch);
                },
            });
        }
        return pmPlugins;
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView, eventDispatcher = _a.eventDispatcher;
        // render MediaEditor separately because it doesn't depend on media plugin state
        // so we can utilise EventDispatcher-based rerendering
        var mediaEditor = options && options.allowAnnotation ? (React.createElement(WithPluginState_1.default, { editorView: editorView, plugins: { mediaEditorState: media_editor_1.pluginKey }, eventDispatcher: eventDispatcher, render: function (_a) {
                var mediaEditorState = _a.mediaEditorState;
                return (React.createElement(MediaEditor_1.default, { mediaEditorState: mediaEditorState, view: editorView }));
            } })) : null;
        return (React.createElement(React.Fragment, null,
            React.createElement(WithPluginState_1.default, { editorView: editorView, plugins: {
                    mediaState: main_1.stateKey,
                }, render: function (_a) {
                    var mediaState = _a.mediaState;
                    return (React.createElement(MediaPicker_1.MediaPickerComponents, { mediaState: mediaState }));
                } }),
            mediaEditor));
    },
    secondaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, eventDispatcher = _a.eventDispatcher, disabled = _a.disabled;
        return (React.createElement(ToolbarMedia_1.default, { editorView: editorView, eventDispatcher: eventDispatcher, pluginKey: main_1.stateKey, isDisabled: disabled, isReducedSpacing: true }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.filesAndImages),
                    description: formatMessage(ToolbarInsertBlock_1.messages.filesAndImagesDescription),
                    priority: 400,
                    keywords: ['media', 'attachment'],
                    icon: function () { return (React.createElement(assets_1.IconImages, { label: formatMessage(ToolbarInsertBlock_1.messages.filesAndImages) })); },
                    action: function (insert, state) {
                        var pluginState = main_1.stateKey.getState(state);
                        pluginState.showMediaPicker();
                        var tr = insert('');
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.OPENED,
                            actionSubject: analytics_1.ACTION_SUBJECT.PICKER,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.PICKER_CLOUD,
                            attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                            eventType: analytics_1.EVENT_TYPE.UI,
                        });
                    },
                },
            ];
        },
        floatingToolbar: function (state, intl, providerFactory) {
            return toolbar_1.floatingToolbar(state, intl, {
                providerFactory: providerFactory,
                // appearance, // TODO: required?
                allowResizing: options && options.allowResizing,
                allowResizingInTables: options && options.allowResizingInTables,
                allowAnnotation: options && options.allowAnnotation,
                allowLinking: options && options.allowLinking,
                allowAdvancedToolBarOptions: pluginOptions && pluginOptions.allowAdvancedToolBarOptions,
            });
        },
    },
}); };
exports.default = mediaPlugin;
//# sourceMappingURL=index.js.map