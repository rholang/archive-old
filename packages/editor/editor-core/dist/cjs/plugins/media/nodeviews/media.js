"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var media_card_1 = require("@atlaskit/media-card");
var main_1 = require("../pm-plugins/main");
// This is being used by DropPlaceholder now
exports.MEDIA_HEIGHT = 125;
exports.FILE_WIDTH = 156;
var MediaNode = /** @class */ (function (_super) {
    tslib_1.__extends(MediaNode, _super);
    function MediaNode(props) {
        var _this = _super.call(this, props) || this;
        _this.handleNewNode = function (props) {
            var node = props.node;
            // +1 indicates the media node inside the mediaSingle nodeview
            _this.mediaPluginState.handleMediaNodeMount(node, function () { return _this.props.getPos() + 1; });
        };
        var view = _this.props.view;
        _this.mediaPluginState = main_1.stateKey.getState(view.state);
        return _this;
    }
    MediaNode.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props.selected !== nextProps.selected ||
            this.props.viewMediaClientConfig !== nextProps.viewMediaClientConfig ||
            this.props.uploadComplete !== nextProps.uploadComplete ||
            this.props.node.attrs.id !== nextProps.node.attrs.id ||
            this.props.node.attrs.collection !== nextProps.node.attrs.collection ||
            this.props.cardDimensions.height !== nextProps.cardDimensions.height ||
            this.props.cardDimensions.width !== nextProps.cardDimensions.width ||
            this.props.contextIdentifierProvider !==
                nextProps.contextIdentifierProvider) {
            return true;
        }
        return false;
    };
    MediaNode.prototype.componentDidMount = function () {
        this.handleNewNode(this.props);
    };
    MediaNode.prototype.componentWillUnmount = function () {
        var node = this.props.node;
        this.mediaPluginState.handleMediaNodeUnmount(node);
    };
    MediaNode.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.node.attrs.id !== this.props.node.attrs.id) {
            this.mediaPluginState.handleMediaNodeUnmount(prevProps.node);
            this.handleNewNode(this.props);
        }
        this.mediaPluginState.updateElement();
    };
    MediaNode.prototype.render = function () {
        var _a = this.props, node = _a.node, selected = _a.selected, cardDimensions = _a.cardDimensions, onClick = _a.onClick, allowLazyLoading = _a.allowLazyLoading, viewMediaClientConfig = _a.viewMediaClientConfig, uploadComplete = _a.uploadComplete, contextIdentifierProvider = _a.contextIdentifierProvider;
        var _b = node.attrs, id = _b.id, type = _b.type, collection = _b.collection, url = _b.url;
        if (type !== 'external' &&
            (!viewMediaClientConfig ||
                (typeof uploadComplete === 'boolean' && !uploadComplete))) {
            return React.createElement(media_card_1.CardLoading, { dimensions: cardDimensions });
        }
        var identifier = type === 'external'
            ? {
                dataURI: url,
                name: url,
                mediaItemType: 'external-image',
            }
            : {
                id: id,
                mediaItemType: 'file',
                collectionName: collection,
            };
        var contextId = contextIdentifierProvider && contextIdentifierProvider.objectId;
        // mediaClientConfig is not needed for "external" case. So we have to cheat here.
        // there is a possibility mediaClientConfig will be part of a identifier,
        // so this might be not an issue
        var mediaClientConfig = viewMediaClientConfig || {
            authProvider: function () { return ({}); },
        };
        return (React.createElement(media_card_1.Card, { mediaClientConfig: mediaClientConfig, resizeMode: "stretchy-fit", dimensions: cardDimensions, identifier: identifier, selectable: true, selected: selected, disableOverlay: true, onClick: onClick, useInlinePlayer: allowLazyLoading, isLazy: allowLazyLoading, contextId: contextId }));
    };
    return MediaNode;
}(react_1.Component));
exports.default = editor_common_1.withImageLoader(MediaNode);
//# sourceMappingURL=media.js.map