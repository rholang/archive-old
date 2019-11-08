import * as React from 'react';
import { media, mediaGroup, mediaSingle } from '@atlaskit/adf-schema';
import { stateKey as pluginKey, createPlugin, } from './pm-plugins/main';
import { createPlugin as createMediaEditorPlugin, pluginKey as mediaEditorPluginKey, } from './pm-plugins/media-editor';
import keymapMediaSinglePlugin from './pm-plugins/keymap-media-single';
import keymapPlugin from './pm-plugins/keymap';
import linkingPlugin from './pm-plugins/linking';
import ToolbarMedia from './ui/ToolbarMedia';
import { ReactMediaGroupNode } from './nodeviews/mediaGroup';
import { ReactMediaSingleNode } from './nodeviews/mediaSingle';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { floatingToolbar } from './toolbar';
import { addAnalytics, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT_ID, } from '../analytics';
import { IconImages } from '../quick-insert/assets';
import WithPluginState from '../../ui/WithPluginState';
import MediaEditor from './ui/MediaEditor';
import { MediaPickerComponents } from './ui/MediaPicker';
export { insertMediaSingleNode } from './utils/media-single';
var mediaPlugin = function (options, pluginOptions, appearance) { return ({
    name: 'media',
    nodes: function () {
        return [
            { name: 'mediaGroup', node: mediaGroup },
            { name: 'mediaSingle', node: mediaSingle },
            { name: 'media', node: media },
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
                    return createPlugin(schema, {
                        providerFactory: providerFactory,
                        nodeViews: {
                            mediaGroup: ReactMediaGroupNode(portalProviderAPI, providerFactory, pluginOptions && pluginOptions.allowLazyLoading, props.appearance),
                            mediaSingle: ReactMediaSingleNode(portalProviderAPI, eventDispatcher, providerFactory, options, pluginOptions, pluginOptions && pluginOptions.fullWidthEnabled, dispatchAnalyticsEvent),
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
            { name: 'mediaKeymap', plugin: function () { return keymapPlugin(); } },
        ];
        if (options && options.allowMediaSingle) {
            pmPlugins.push({
                name: 'mediaSingleKeymap',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return keymapMediaSinglePlugin(schema);
                },
            });
        }
        if (options && options.allowAnnotation) {
            pmPlugins.push({ name: 'mediaEditor', plugin: createMediaEditorPlugin });
        }
        if (options && options.allowLinking) {
            pmPlugins.push({
                name: 'mediaLinking',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return linkingPlugin(dispatch);
                },
            });
        }
        return pmPlugins;
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView, eventDispatcher = _a.eventDispatcher;
        // render MediaEditor separately because it doesn't depend on media plugin state
        // so we can utilise EventDispatcher-based rerendering
        var mediaEditor = options && options.allowAnnotation ? (React.createElement(WithPluginState, { editorView: editorView, plugins: { mediaEditorState: mediaEditorPluginKey }, eventDispatcher: eventDispatcher, render: function (_a) {
                var mediaEditorState = _a.mediaEditorState;
                return (React.createElement(MediaEditor, { mediaEditorState: mediaEditorState, view: editorView }));
            } })) : null;
        return (React.createElement(React.Fragment, null,
            React.createElement(WithPluginState, { editorView: editorView, plugins: {
                    mediaState: pluginKey,
                }, render: function (_a) {
                    var mediaState = _a.mediaState;
                    return (React.createElement(MediaPickerComponents, { mediaState: mediaState }));
                } }),
            mediaEditor));
    },
    secondaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, eventDispatcher = _a.eventDispatcher, disabled = _a.disabled;
        return (React.createElement(ToolbarMedia, { editorView: editorView, eventDispatcher: eventDispatcher, pluginKey: pluginKey, isDisabled: disabled, isReducedSpacing: true }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.filesAndImages),
                    description: formatMessage(messages.filesAndImagesDescription),
                    priority: 400,
                    keywords: ['media', 'attachment'],
                    icon: function () { return (React.createElement(IconImages, { label: formatMessage(messages.filesAndImages) })); },
                    action: function (insert, state) {
                        var pluginState = pluginKey.getState(state);
                        pluginState.showMediaPicker();
                        var tr = insert('');
                        return addAnalytics(state, tr, {
                            action: ACTION.OPENED,
                            actionSubject: ACTION_SUBJECT.PICKER,
                            actionSubjectId: ACTION_SUBJECT_ID.PICKER_CLOUD,
                            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                            eventType: EVENT_TYPE.UI,
                        });
                    },
                },
            ];
        },
        floatingToolbar: function (state, intl, providerFactory) {
            return floatingToolbar(state, intl, {
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
export default mediaPlugin;
//# sourceMappingURL=index.js.map