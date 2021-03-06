import { __assign, __awaiter, __generator } from "tslib";
import assert from 'assert';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { insertPoint } from 'prosemirror-transform';
import { Decoration, DecorationSet } from 'prosemirror-view';
import { NodeSelection, Plugin, PluginKey, } from 'prosemirror-state';
import { findDomRefAtPos } from 'prosemirror-utils';
import { ErrorReporter, } from '@atlaskit/editor-common';
import analyticsService from '../../../analytics/service';
import { isImage } from '../../../utils';
import DropPlaceholder from '../ui/Media/DropPlaceholder';
import { insertMediaGroupNode } from '../utils/media-files';
import { removeMediaNode, splitMediaGroup, getViewMediaClientConfigFromMediaProvider, getUploadMediaClientConfigFromMediaProvider, } from '../utils/media-common';
import PickerFacade from '../picker-facade';
import { insertMediaSingleNode, isMediaSingle } from '../utils/media-single';
import { INPUT_METHOD, } from '../../../plugins/analytics';
import * as helpers from '../commands/helpers';
import { updateMediaNodeAttrs } from '../commands';
var MEDIA_RESOLVED_STATES = ['ready', 'error', 'cancelled'];
var MediaPluginState = /** @class */ (function () {
    function MediaPluginState(state, options, reactContext, mediaPluginOptions) {
        var _this = this;
        this.allowsUploads = false;
        this.ignoreLinks = false;
        this.waitForMediaUpload = true;
        this.allUploadsFinished = true;
        this.showDropzone = false;
        this.layout = 'center';
        this.mediaNodes = [];
        this.mediaGroupNodes = {};
        this.mobileUploadComplete = {};
        this.pendingTask = Promise.resolve(null);
        this.destroyed = false;
        this.pickers = [];
        this.pickerPromises = [];
        this.removeOnCloseListener = function () { };
        this.onPopupToogleCallback = function () { };
        this.onContextIdentifierProvider = function (_name, provider) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!provider) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, provider];
                    case 1:
                        _a.contextIdentifierProvider = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.setMediaProvider = function (mediaProvider) { return __awaiter(_this, void 0, void 0, function () {
            var _a, viewMediaClientConfig, _b, err_1, wrappedError, _c, _d, view, allowsUploads, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!mediaProvider) {
                            this.destroyPickers();
                            this.allowsUploads = false;
                            if (!this.destroyed) {
                                this.view.dispatch(this.view.state.tr.setMeta(stateKey, {
                                    allowsUploads: this.allowsUploads,
                                }));
                            }
                            return [2 /*return*/];
                        }
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 7, , 8]);
                        _a = this;
                        return [4 /*yield*/, mediaProvider];
                    case 2:
                        _a.mediaProvider = _f.sent();
                        if (!!this.mediaProvider.viewMediaClientConfig) return [3 /*break*/, 4];
                        return [4 /*yield*/, getViewMediaClientConfigFromMediaProvider(this.mediaProvider)];
                    case 3:
                        viewMediaClientConfig = _f.sent();
                        if (viewMediaClientConfig) {
                            this
                                .mediaProvider.viewMediaClientConfig = viewMediaClientConfig;
                        }
                        _f.label = 4;
                    case 4:
                        if (!!this.mediaProvider.uploadMediaClientConfig) return [3 /*break*/, 6];
                        _b = this.mediaProvider;
                        return [4 /*yield*/, getUploadMediaClientConfigFromMediaProvider(this.mediaProvider)];
                    case 5:
                        _b.uploadMediaClientConfig = _f.sent();
                        _f.label = 6;
                    case 6:
                        assert(this.mediaProvider.viewMediaClientConfig, "MediaProvider promise did not resolve to a valid instance of MediaProvider - " + this.mediaProvider);
                        return [3 /*break*/, 8];
                    case 7:
                        err_1 = _f.sent();
                        wrappedError = new Error("Media functionality disabled due to rejected provider: " + err_1.message);
                        this.errorReporter.captureException(wrappedError);
                        this.destroyPickers();
                        this.allowsUploads = false;
                        if (!this.destroyed) {
                            this.view.dispatch(this.view.state.tr.setMeta(stateKey, {
                                allowsUploads: this.allowsUploads,
                            }));
                        }
                        return [2 /*return*/];
                    case 8:
                        _c = this;
                        return [4 /*yield*/, this.mediaProvider.viewMediaClientConfig];
                    case 9:
                        _c.mediaClientConfig = _f.sent();
                        this.allowsUploads = !!(this.mediaProvider.uploadContext ||
                            this.mediaProvider.uploadMediaClientConfig);
                        _d = this, view = _d.view, allowsUploads = _d.allowsUploads;
                        // make sure editable DOM node is mounted
                        if (!this.destroyed && view.dom.parentNode) {
                            // make PM plugin aware of the state change to update UI during 'apply' hook
                            view.dispatch(view.state.tr.setMeta(stateKey, { allowsUploads: allowsUploads }));
                        }
                        if (!this.allowsUploads) return [3 /*break*/, 14];
                        _e = this;
                        return [4 /*yield*/, this.mediaProvider
                                .uploadMediaClientConfig];
                    case 10:
                        _e.uploadMediaClientConfig = _f.sent();
                        if (!(this.mediaProvider.uploadParams && this.uploadMediaClientConfig)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.initPickers(this.mediaProvider.uploadParams, PickerFacade, this.reactContext)];
                    case 11:
                        _f.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        this.destroyPickers();
                        _f.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        this.destroyPickers();
                        _f.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        }); };
        this.getMediaOptions = function () { return _this.options; };
        this.hasUserAuthProvider = function () {
            return _this.uploadMediaClientConfig &&
                _this.uploadMediaClientConfig.userAuthProvider;
        };
        /**
         * we insert a new file by inserting a initial state for that file.
         *
         * called when we insert a new file via the picker (connected via pickerfacade)
         */
        this.insertFile = function (mediaState, onMediaStateChanged, pickerType) {
            var mediaStateWithContext = __assign(__assign({}, mediaState), { contextId: _this.contextIdentifierProvider
                    ? _this.contextIdentifierProvider.objectId
                    : undefined });
            var collection = _this.collectionFromProvider();
            if (collection === undefined) {
                return;
            }
            if (_this.mediaPluginOptions &&
                _this.mediaPluginOptions.allowMarkingUploadsAsIncomplete) {
                _this.mobileUploadComplete[mediaStateWithContext.id] = false;
            }
            _this.allUploadsFinished = false;
            if (isMediaSingle(_this.view.state.schema, mediaStateWithContext.fileMimeType)) {
                insertMediaSingleNode(_this.view, mediaStateWithContext, _this.getInputMethod(pickerType), collection);
            }
            else {
                insertMediaGroupNode(_this.view, [mediaStateWithContext], collection);
            }
            // do events when media state changes
            onMediaStateChanged(_this.handleMediaState);
            // handle waiting for upload complete
            var isEndState = function (state) {
                return state.status && MEDIA_RESOLVED_STATES.indexOf(state.status) !== -1;
            };
            if (!isEndState(mediaStateWithContext)) {
                var updater = function (promise) {
                    // Chain the previous promise with a new one for this media item
                    return new Promise(function (resolve) {
                        var onStateChange = function (newState) {
                            // When media item reaches its final state, remove listener and resolve
                            if (isEndState(newState)) {
                                resolve(newState);
                            }
                        };
                        onMediaStateChanged(onStateChange);
                    }).then(function () { return promise; });
                };
                _this.pendingTask = updater(_this.pendingTask);
                _this.pendingTask.then(function () {
                    _this.allUploadsFinished = true;
                });
            }
            // refocus the view
            var view = _this.view;
            if (!view.hasFocus()) {
                view.focus();
            }
        };
        this.splitMediaGroup = function () { return splitMediaGroup(_this.view); };
        this.onPopupPickerClose = function () {
            _this.onPopupToogleCallback(false);
        };
        this.showMediaPicker = function () {
            if (_this.openMediaPickerBrowser && !_this.hasUserAuthProvider()) {
                return _this.openMediaPickerBrowser();
            }
            if (!_this.popupPicker) {
                return;
            }
            _this.popupPicker.show();
            _this.onPopupToogleCallback(true);
        };
        this.setBrowseFn = function (browseFn) {
            _this.openMediaPickerBrowser = browseFn;
        };
        this.onPopupToggle = function (onPopupToogleCallback) {
            _this.onPopupToogleCallback = onPopupToogleCallback;
        };
        /**
         * Returns a promise that is resolved after all pending operations have been finished.
         * An optional timeout will cause the promise to reject if the operation takes too long
         *
         * NOTE: The promise will resolve even if some of the media have failed to process.
         */
        this.waitForPendingTasks = function (timeout, lastTask) {
            if (lastTask && _this.pendingTask === lastTask) {
                return lastTask;
            }
            var chainedPromise = _this.pendingTask.then(function () {
                // Call ourselves to make sure that no new pending tasks have been
                // added before the current promise has resolved.
                return _this.waitForPendingTasks(undefined, _this.pendingTask);
            });
            if (!timeout) {
                return chainedPromise;
            }
            var rejectTimeout;
            var timeoutPromise = new Promise(function (_resolve, reject) {
                rejectTimeout = window.setTimeout(function () {
                    return reject(new Error("Media operations did not finish in " + timeout + " ms"));
                }, timeout);
            });
            return Promise.race([
                timeoutPromise,
                chainedPromise.then(function () {
                    clearTimeout(rejectTimeout);
                }),
            ]);
        };
        /**
         * Called from React UI Component when user clicks on "Delete" icon
         * inside of it
         */
        this.handleMediaNodeRemoval = function (node, getPos) {
            var getNode = node;
            if (!getNode) {
                getNode = _this.view.state.doc.nodeAt(getPos());
            }
            removeMediaNode(_this.view, getNode, getPos);
        };
        /**
         * Called from React UI Component on componentDidMount
         */
        this.handleMediaNodeMount = function (node, getPos) {
            _this.mediaNodes.unshift({ node: node, getPos: getPos });
        };
        /**
         * Called from React UI Component on componentWillUnmount and UNSAFE_componentWillReceiveProps
         * when React component's underlying node property is replaced with a new node
         */
        this.handleMediaNodeUnmount = function (oldNode) {
            _this.mediaNodes = _this.mediaNodes.filter(function (_a) {
                var node = _a.node;
                return oldNode !== node;
            });
        };
        this.findMediaNode = function (id) {
            return helpers.findMediaSingleNode(_this, id);
        };
        this.destroyAllPickers = function (pickers) {
            pickers.forEach(function (picker) { return picker.destroy(); });
            _this.pickers.splice(0, _this.pickers.length);
        };
        this.destroyPickers = function () {
            var _a = _this, pickers = _a.pickers, pickerPromises = _a.pickerPromises;
            // If pickerPromises and pickers are the same length
            // All pickers have resolved and we safely destroy them
            // Otherwise wait for them to resolve then destroy.
            if (pickerPromises.length === pickers.length) {
                _this.destroyAllPickers(_this.pickers);
            }
            else {
                Promise.all(pickerPromises).then(function (resolvedPickers) {
                    return _this.destroyAllPickers(resolvedPickers);
                });
            }
            _this.popupPicker = undefined;
            _this.customPicker = undefined;
        };
        this.getInputMethod = function (pickerType) {
            switch (pickerType) {
                case 'popup':
                    return INPUT_METHOD.PICKER_CLOUD;
                case 'clipboard':
                    return INPUT_METHOD.CLIPBOARD;
                case 'dropzone':
                    return INPUT_METHOD.DRAG_AND_DROP;
            }
            return;
        };
        this.updateMediaNodeAttrs = function (id, attrs, isMediaSingle) {
            var view = _this.view;
            if (!view) {
                return;
            }
            return updateMediaNodeAttrs(id, attrs, isMediaSingle)(view.state, view.dispatch);
        };
        this.handleMediaState = function (state) {
            switch (state.status) {
                case 'error':
                    var uploadErrorHandler = _this.options.uploadErrorHandler;
                    if (uploadErrorHandler) {
                        uploadErrorHandler(state);
                    }
                    break;
                case 'mobile-upload-end':
                    var attrs = {
                        id: state.publicId || state.id,
                    };
                    if (typeof state.collection === 'string') {
                        attrs.collection = state.collection;
                    }
                    _this.updateMediaNodeAttrs(state.id, attrs, isMediaSingle(_this.view.state.schema, state.fileMimeType));
                    // mark mobile upload as complete
                    _this.mobileUploadComplete[attrs.id] = true;
                    delete _this.mediaGroupNodes[state.id];
                    break;
            }
        };
        this.isMobileUploadCompleted = function (mediaId) {
            return helpers.isMobileUploadCompleted(_this, mediaId);
        };
        this.removeNodeById = function (state) {
            var id = state.id;
            var mediaNodeWithPos = helpers.findMediaNode(_this, id, isImage(state.fileMimeType));
            if (mediaNodeWithPos) {
                removeMediaNode(_this.view, mediaNodeWithPos.node, mediaNodeWithPos.getPos);
            }
        };
        this.removeSelectedMediaContainer = function () {
            var view = _this.view;
            var selectedNode = _this.selectedMediaContainerNode();
            if (!selectedNode) {
                return false;
            }
            var from = view.state.selection.from;
            removeMediaNode(view, selectedNode.firstChild, function () { return from + 1; });
            return true;
        };
        this.selectedMediaContainerNode = function () {
            var _a = _this.view.state, selection = _a.selection, schema = _a.schema;
            if (selection instanceof NodeSelection &&
                (selection.node.type === schema.nodes.mediaSingle ||
                    selection.node.type === schema.nodes.mediaGroup)) {
                return selection.node;
            }
            return;
        };
        this.handleDrag = function (dragState) {
            var isActive = dragState === 'enter';
            if (_this.showDropzone === isActive) {
                return;
            }
            _this.showDropzone = isActive;
            var _a = _this.view, dispatch = _a.dispatch, state = _a.state;
            // Trigger state change to be able to pick it up in the decorations handler
            dispatch(state.tr);
        };
        this.reactContext = reactContext;
        this.options = options;
        this.mediaPluginOptions = mediaPluginOptions;
        this.waitForMediaUpload =
            options.waitForMediaUpload === undefined
                ? true
                : options.waitForMediaUpload;
        var nodes = state.schema.nodes;
        assert(nodes.media && (nodes.mediaGroup || nodes.mediaSingle), 'Editor: unable to init media plugin - media or mediaGroup/mediaSingle node absent in schema');
        options.providerFactory.subscribe('mediaProvider', function (_name, provider) {
            return _this.setMediaProvider(provider);
        });
        options.providerFactory.subscribe('contextIdentifierProvider', this.onContextIdentifierProvider);
        this.errorReporter = options.errorReporter || new ErrorReporter();
    }
    MediaPluginState.prototype.updateElement = function () {
        var newElement;
        var selectedContainer = this.selectedMediaContainerNode();
        var mediaSingle = this.view.state.schema.nodes.mediaSingle;
        if (selectedContainer && selectedContainer.type === mediaSingle) {
            newElement = this.getDomElement(this.view.domAtPos.bind(this.view));
        }
        if (this.element !== newElement) {
            this.element = newElement;
        }
    };
    MediaPluginState.prototype.getDomElement = function (domAtPos) {
        var _a = this.view.state, selection = _a.selection, schema = _a.schema;
        if (!(selection instanceof NodeSelection)) {
            return;
        }
        if (selection.node.type !== schema.nodes.mediaSingle) {
            return;
        }
        var node = findDomRefAtPos(selection.from, domAtPos);
        if (node) {
            if (!node.childNodes.length) {
                return node.parentNode;
            }
            var target = node.querySelector('.wrapper') || node;
            return target;
        }
        return;
    };
    MediaPluginState.prototype.setView = function (view) {
        this.view = view;
    };
    MediaPluginState.prototype.destroy = function () {
        if (this.destroyed) {
            return;
        }
        this.destroyed = true;
        var mediaNodes = this.mediaNodes;
        mediaNodes.splice(0, mediaNodes.length);
        this.removeOnCloseListener();
        this.destroyPickers();
    };
    MediaPluginState.prototype.initPickers = function (uploadParams, Picker, reactContext) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errorReporter, pickers, pickerPromises, pickerFacadeConfig, defaultPickerConfig, customPicker, _b, _c, _d, popupPicker, _e, _f, _g;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (this.destroyed || !this.uploadMediaClientConfig) {
                            return [2 /*return*/];
                        }
                        _a = this, errorReporter = _a.errorReporter, pickers = _a.pickers, pickerPromises = _a.pickerPromises;
                        if (!!pickers.length) return [3 /*break*/, 5];
                        pickerFacadeConfig = {
                            mediaClientConfig: this.uploadMediaClientConfig,
                            errorReporter: errorReporter,
                        };
                        defaultPickerConfig = {
                            uploadParams: uploadParams,
                            proxyReactContext: reactContext(),
                        };
                        if (!this.options.customMediaPicker) return [3 /*break*/, 2];
                        customPicker = new Picker('customMediaPicker', pickerFacadeConfig, this.options.customMediaPicker).init();
                        pickerPromises.push(customPicker);
                        _c = (_b = pickers).push;
                        _d = this;
                        return [4 /*yield*/, customPicker];
                    case 1:
                        _c.apply(_b, [(_d.customPicker = _h.sent())]);
                        return [3 /*break*/, 4];
                    case 2:
                        if (!this.hasUserAuthProvider()) return [3 /*break*/, 4];
                        popupPicker = new Picker('popup', pickerFacadeConfig, defaultPickerConfig).init();
                        pickerPromises.push(popupPicker);
                        _f = (_e = pickers).push;
                        _g = this;
                        return [4 /*yield*/, popupPicker];
                    case 3:
                        _f.apply(_e, [(_g.popupPicker = _h.sent())]);
                        this.removeOnCloseListener = this.popupPicker.onClose(this.onPopupPickerClose);
                        _h.label = 4;
                    case 4:
                        pickers.forEach(function (picker) {
                            picker.onNewMedia(_this.insertFile);
                            picker.onNewMedia(_this.trackNewMediaEvent);
                        });
                        _h.label = 5;
                    case 5:
                        // set new upload params for the pickers
                        pickers.forEach(function (picker) { return picker.setUploadParams(uploadParams); });
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaPluginState.prototype.trackNewMediaEvent = function (mediaState, onMediaStateChanged, pickerType) {
        analyticsService.trackEvent("atlassian.editor.media.file." + pickerType, mediaState.fileMimeType ? { fileMimeType: mediaState.fileMimeType } : {});
    };
    MediaPluginState.prototype.collectionFromProvider = function () {
        return (this.mediaProvider &&
            this.mediaProvider.uploadParams &&
            this.mediaProvider.uploadParams.collection);
    };
    return MediaPluginState;
}());
export { MediaPluginState };
var createDropPlaceholder = function (allowDropLine) {
    var dropPlaceholder = document.createElement('div');
    if (allowDropLine) {
        ReactDOM.render(React.createElement(DropPlaceholder, { type: 'single' }), dropPlaceholder);
    }
    else {
        ReactDOM.render(React.createElement(DropPlaceholder), dropPlaceholder);
    }
    return dropPlaceholder;
};
export var stateKey = new PluginKey('mediaPlugin');
export var getMediaPluginState = function (state) {
    return stateKey.getState(state);
};
export var createPlugin = function (_schema, options, reactContext, dispatch, mediaPluginOptions) {
    var dropPlaceholder = createDropPlaceholder(mediaPluginOptions && mediaPluginOptions.allowDropzoneDropLine);
    return new Plugin({
        state: {
            init: function (_config, state) {
                return new MediaPluginState(state, options, reactContext, mediaPluginOptions);
            },
            apply: function (tr, pluginState) {
                // remap editing media single position if we're in collab
                if (typeof pluginState.editingMediaSinglePos === 'number') {
                    pluginState.editingMediaSinglePos = tr.mapping.map(pluginState.editingMediaSinglePos);
                }
                var meta = tr.getMeta(stateKey);
                if (meta && dispatch) {
                    var showMediaPicker = pluginState.showMediaPicker;
                    var allowsUploads = meta.allowsUploads;
                    dispatch(stateKey, __assign(__assign({}, pluginState), { allowsUploads: typeof allowsUploads === 'undefined'
                            ? pluginState.allowsUploads
                            : allowsUploads, showMediaPicker: showMediaPicker }));
                }
                // NOTE: We're not calling passing new state to the Editor, because we depend on the view.state reference
                //       throughout the lifetime of view. We injected the view into the plugin state, because we dispatch()
                //       transformations from within the plugin state (i.e. when adding a new file).
                return pluginState;
            },
        },
        key: stateKey,
        view: function (view) {
            var pluginState = getMediaPluginState(view.state);
            pluginState.setView(view);
            pluginState.updateElement();
            return {
                update: function () {
                    pluginState.updateElement();
                },
            };
        },
        props: {
            decorations: function (state) {
                var pluginState = getMediaPluginState(state);
                if (!pluginState.showDropzone) {
                    return;
                }
                var schema = state.schema, $anchor = state.selection.$anchor;
                // When a media is already selected
                if (state.selection instanceof NodeSelection) {
                    var node = state.selection.node;
                    if (node.type === schema.nodes.mediaSingle) {
                        var deco = Decoration.node(state.selection.from, state.selection.to, {
                            class: 'mediaSingle-selected',
                        });
                        return DecorationSet.create(state.doc, [deco]);
                    }
                    return;
                }
                var pos = $anchor.pos;
                if ($anchor.parent.type !== schema.nodes.paragraph &&
                    $anchor.parent.type !== schema.nodes.codeBlock) {
                    pos = insertPoint(state.doc, pos, schema.nodes.mediaGroup);
                }
                if (pos === null || pos === undefined) {
                    return;
                }
                var dropPlaceholders = [
                    Decoration.widget(pos, dropPlaceholder, { key: 'drop-placeholder' }),
                ];
                return DecorationSet.create(state.doc, dropPlaceholders);
            },
            nodeViews: options.nodeViews,
            handleTextInput: function (view) {
                getMediaPluginState(view.state).splitMediaGroup();
                return false;
            },
        },
    });
};
//# sourceMappingURL=main.js.map