import { __assign, __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { MediaSingle, WithProviders, DEFAULT_IMAGE_HEIGHT, DEFAULT_IMAGE_WIDTH, browser, } from '@atlaskit/editor-common';
import { NodeSelection } from 'prosemirror-state';
import { SelectionBasedNodeView } from '../../../nodeviews/ReactNodeView';
import MediaItem from './media';
import WithPluginState from '../../../ui/WithPluginState';
import { pluginKey as widthPluginKey } from '../../width';
import { setNodeSelection } from '../../../utils';
import ResizableMediaSingle from '../ui/ResizableMediaSingle';
import { createDisplayGrid } from '../../../plugins/grid';
import { stateKey as mediaPluginKey } from '../pm-plugins/main';
import { isMobileUploadCompleted } from '../commands/helpers';
import { MediaNodeUpdater } from './mediaNodeUpdater';
import { getViewMediaClientConfigFromMediaProvider } from '../utils/media-common';
import { findParentNodeOfTypeClosestToPos } from 'prosemirror-utils';
var MediaSingleNode = /** @class */ (function (_super) {
    __extends(MediaSingleNode, _super);
    function MediaSingleNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            width: undefined,
            height: undefined,
            viewMediaClientConfig: undefined,
        };
        _this.createMediaNodeUpdater = function (props) {
            var node = _this.props.node.firstChild;
            return new MediaNodeUpdater(__assign(__assign({}, props), { isMediaSingle: true, node: node ? node : _this.props.node, dispatchAnalyticsEvent: _this.props.dispatchAnalyticsEvent }));
        };
        _this.setViewMediaClientConfig = function (props) { return __awaiter(_this, void 0, void 0, function () {
            var mediaProvider, viewMediaClientConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, props.mediaProvider];
                    case 1:
                        mediaProvider = _a.sent();
                        if (!mediaProvider) return [3 /*break*/, 3];
                        return [4 /*yield*/, getViewMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        viewMediaClientConfig = _a.sent();
                        this.setState({
                            viewMediaClientConfig: viewMediaClientConfig,
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.updateMediaNodeAttributes = function (props) { return __awaiter(_this, void 0, void 0, function () {
            var mediaNodeUpdater, node, updatedDimensions, contextId, isNodeFromDifferentCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaNodeUpdater = this.createMediaNodeUpdater(props);
                        node = this.props.node.firstChild;
                        if (!node) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, mediaNodeUpdater.getRemoteDimensions()];
                    case 1:
                        updatedDimensions = _a.sent();
                        if (updatedDimensions) {
                            mediaNodeUpdater.updateDimensions(updatedDimensions);
                        }
                        if (!(node.attrs.type === 'external')) return [3 /*break*/, 4];
                        if (!mediaNodeUpdater.isMediaBlobUrl()) return [3 /*break*/, 3];
                        // we try to copy the image using the encoded metadata, otherwise we keep it as external
                        return [4 /*yield*/, mediaNodeUpdater.copyNodeFromBlobUrl(this.props.getPos())];
                    case 2:
                        // we try to copy the image using the encoded metadata, otherwise we keep it as external
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        contextId = mediaNodeUpdater.getCurrentContextId();
                        if (!!contextId) return [3 /*break*/, 6];
                        return [4 /*yield*/, mediaNodeUpdater.updateContextId()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, mediaNodeUpdater.isNodeFromDifferentCollection()];
                    case 7:
                        isNodeFromDifferentCollection = _a.sent();
                        if (isNodeFromDifferentCollection) {
                            mediaNodeUpdater.copyNode();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onExternalImageLoaded = function (_a) {
            var width = _a.width, height = _a.height;
            _this.setState({
                width: width,
                height: height,
            }, function () {
                _this.forceUpdate();
            });
        };
        _this.selectMediaSingle = function (_a) {
            var event = _a.event;
            // We need to call "stopPropagation" here in order to prevent the browser from navigating to
            // another URL if the media node is wrapped in a link mark.
            event.stopPropagation();
            setNodeSelection(_this.props.view, _this.props.getPos());
        };
        _this.updateSize = function (width, layout) {
            var _a = _this.props.view, state = _a.state, dispatch = _a.dispatch;
            var pos = _this.props.getPos();
            if (typeof pos === 'undefined') {
                return;
            }
            return dispatch(state.tr.setNodeMarkup(pos, undefined, __assign(__assign({}, _this.props.node.attrs), { layout: layout,
                width: width })));
        };
        return _this;
    }
    MediaSingleNode.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.mediaProvider !== this.props.mediaProvider) {
            this.setViewMediaClientConfig(nextProps);
        }
        // We need to call this method on any prop change since attrs can get removed with collab editing
        // the method internally checks if we already have all attrs
        this.createMediaNodeUpdater(nextProps).updateFileAttrs();
    };
    MediaSingleNode.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contextIdentifierProvider, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        contextIdentifierProvider = this.props.contextIdentifierProvider;
                        return [4 /*yield*/, Promise.all([
                                this.setViewMediaClientConfig(this.props),
                                this.updateMediaNodeAttributes(this.props),
                            ])];
                    case 1:
                        _c.sent();
                        _a = this.setState;
                        _b = {};
                        return [4 /*yield*/, contextIdentifierProvider];
                    case 2:
                        _a.apply(this, [(_b.contextIdentifierProvider = _c.sent(),
                                _b)]);
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaSingleNode.prototype.render = function () {
        var _a = this.props, selected = _a.selected, getPos = _a.getPos, node = _a.node, mediaPluginOptions = _a.mediaPluginOptions, fullWidthMode = _a.fullWidthMode, state = _a.view.state;
        var contextIdentifierProvider = this.state.contextIdentifierProvider;
        var _b = node.attrs, layout = _b.layout, mediaSingleWidth = _b.width;
        var childNode = node.firstChild;
        var _c = childNode.attrs, width = _c.width, height = _c.height, type = _c.type;
        if (type === 'external') {
            var _d = this.state, stateWidth = _d.width, stateHeight = _d.height;
            if (width === null) {
                width = stateWidth || DEFAULT_IMAGE_WIDTH;
            }
            if (height === null) {
                height = stateHeight || DEFAULT_IMAGE_HEIGHT;
            }
        }
        if (width === null || height === null) {
            width = DEFAULT_IMAGE_WIDTH;
            height = DEFAULT_IMAGE_HEIGHT;
        }
        var cardWidth = this.props.width;
        var cardHeight = (height / width) * cardWidth;
        var cardDimensions = {
            width: cardWidth + "px",
            height: cardHeight + "px",
        };
        var props = {
            layout: layout,
            width: width,
            height: height,
            containerWidth: this.props.width,
            lineLength: this.props.lineLength,
            pctWidth: mediaSingleWidth,
            fullWidthMode: fullWidthMode,
        };
        var uploadComplete = isMobileUploadCompleted(this.props.mediaPluginState, childNode.attrs.id);
        var MediaChild = (React.createElement(MediaItem, { view: this.props.view, node: childNode, getPos: this.props.getPos, cardDimensions: cardDimensions, viewMediaClientConfig: this.state.viewMediaClientConfig, selected: selected(), onClick: this.selectMediaSingle, onExternalImageLoaded: this.onExternalImageLoaded, allowLazyLoading: mediaPluginOptions && mediaPluginOptions.allowLazyLoading, uploadComplete: uploadComplete, url: childNode.attrs.url, contextIdentifierProvider: contextIdentifierProvider }));
        var canResize = !!this.props.mediaOptions.allowResizing;
        if (!this.props.mediaOptions.allowResizingInTables) {
            // If resizing not allowed in tables, check parents for tables
            var pos = getPos();
            if (pos) {
                var $pos = state.doc.resolve(pos);
                var table = state.schema.nodes.table;
                var disabledNode = !!findParentNodeOfTypeClosestToPos($pos, [table]);
                canResize = canResize && !disabledNode;
            }
        }
        return canResize ? (React.createElement(ResizableMediaSingle, __assign({}, props, { view: this.props.view, getPos: getPos, updateSize: this.updateSize, displayGrid: createDisplayGrid(this.props.eventDispatcher), gridSize: 12, viewMediaClientConfig: this.state.viewMediaClientConfig, state: this.props.view.state, allowBreakoutSnapPoints: mediaPluginOptions && mediaPluginOptions.allowBreakoutSnapPoints, selected: this.props.selected() }), MediaChild)) : (React.createElement(MediaSingle, __assign({}, props), MediaChild));
    };
    MediaSingleNode.defaultProps = {
        mediaOptions: {},
    };
    return MediaSingleNode;
}(Component));
export default MediaSingleNode;
var MediaSingleNodeView = /** @class */ (function (_super) {
    __extends(MediaSingleNodeView, _super);
    function MediaSingleNodeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastOffsetLeft = 0;
        _this.forceViewUpdate = false;
        return _this;
    }
    MediaSingleNodeView.prototype.createDomRef = function () {
        var domRef = document.createElement('div');
        if (browser.chrome &&
            this.reactComponentProps.mediaPluginOptions &&
            this.reactComponentProps.mediaPluginOptions.allowMediaSingleEditable) {
            // workaround Chrome bug in https://product-fabric.atlassian.net/browse/ED-5379
            // see also: https://github.com/ProseMirror/prosemirror/issues/884
            domRef.contentEditable = 'true';
        }
        return domRef;
    };
    MediaSingleNodeView.prototype.viewShouldUpdate = function (nextNode) {
        if (this.forceViewUpdate) {
            this.forceViewUpdate = false;
            return true;
        }
        if (this.node.attrs !== nextNode.attrs) {
            return true;
        }
        return _super.prototype.viewShouldUpdate.call(this, nextNode);
    };
    MediaSingleNodeView.prototype.getNodeMediaId = function (node) {
        if (node.firstChild) {
            return node.firstChild.attrs.id;
        }
        return undefined;
    };
    MediaSingleNodeView.prototype.update = function (node, decorations, isValidUpdate) {
        var _this = this;
        if (!isValidUpdate) {
            isValidUpdate = function (currentNode, newNode) {
                return _this.getNodeMediaId(currentNode) === _this.getNodeMediaId(newNode);
            };
        }
        return _super.prototype.update.call(this, node, decorations, isValidUpdate);
    };
    MediaSingleNodeView.prototype.render = function () {
        var _this = this;
        var _a = this.reactComponentProps, eventDispatcher = _a.eventDispatcher, fullWidthMode = _a.fullWidthMode, providerFactory = _a.providerFactory, mediaOptions = _a.mediaOptions, mediaPluginOptions = _a.mediaPluginOptions, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
        return (React.createElement(WithProviders, { providers: ['mediaProvider', 'contextIdentifierProvider'], providerFactory: providerFactory, renderNode: function (_a) {
                var mediaProvider = _a.mediaProvider, contextIdentifierProvider = _a.contextIdentifierProvider;
                return (React.createElement(WithPluginState, { editorView: _this.view, plugins: {
                        width: widthPluginKey,
                        mediaPluginState: mediaPluginKey,
                    }, render: function (_a) {
                        var width = _a.width, mediaPluginState = _a.mediaPluginState;
                        var selection = _this.view.state.selection;
                        var isSelected = function () {
                            return _this.isSelectionInsideNode(selection.from, selection.to) ||
                                (selection instanceof NodeSelection &&
                                    selection.from === _this.getPos());
                        };
                        return (React.createElement(MediaSingleNode, { width: width.width, lineLength: width.lineLength, node: _this.node, getPos: _this.getPos, mediaProvider: mediaProvider, contextIdentifierProvider: contextIdentifierProvider, mediaOptions: mediaOptions || {}, view: _this.view, fullWidthMode: fullWidthMode, selected: isSelected, eventDispatcher: eventDispatcher, mediaPluginOptions: mediaPluginOptions, mediaPluginState: mediaPluginState, dispatchAnalyticsEvent: dispatchAnalyticsEvent }));
                    } }));
            } }));
    };
    MediaSingleNodeView.prototype.ignoreMutation = function () {
        // DOM has changed; recalculate if we need to re-render
        if (this.dom) {
            var offsetLeft = this.dom.offsetLeft;
            if (offsetLeft !== this.lastOffsetLeft) {
                this.lastOffsetLeft = offsetLeft;
                this.forceViewUpdate = true;
                this.update(this.node, [], function () { return true; });
            }
        }
        return true;
    };
    return MediaSingleNodeView;
}(SelectionBasedNodeView));
export var ReactMediaSingleNode = function (portalProviderAPI, eventDispatcher, providerFactory, mediaOptions, pluginOptions, fullWidthMode, dispatchAnalyticsEvent) {
    if (mediaOptions === void 0) { mediaOptions = {}; }
    return function (node, view, getPos) {
        return new MediaSingleNodeView(node, view, getPos, portalProviderAPI, {
            eventDispatcher: eventDispatcher,
            mediaPluginOptions: pluginOptions,
            fullWidthMode: fullWidthMode,
            providerFactory: providerFactory,
            mediaOptions: mediaOptions,
            dispatchAnalyticsEvent: dispatchAnalyticsEvent,
        }).init();
    };
};
//# sourceMappingURL=mediaSingle.js.map