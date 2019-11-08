import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import ReactNodeView from '../../../nodeviews/ReactNodeView';
import { Filmstrip } from '@atlaskit/media-filmstrip';
import { stateKey as mediaStateKey, } from '../pm-plugins/main';
import { setNodeSelection } from '../../../utils';
import WithPluginState from '../../../ui/WithPluginState';
import { stateKey as reactNodeViewStateKey } from '../../../plugins/base/pm-plugins/react-nodeview';
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import { pluginKey as editorDisabledPluginKey, } from '../../editor-disabled';
import { WithProviders, } from '@atlaskit/editor-common';
import { MediaNodeUpdater } from './mediaNodeUpdater';
var MediaGroup = /** @class */ (function (_super) {
    __extends(MediaGroup, _super);
    function MediaGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            viewMediaClientConfig: undefined,
        };
        _this.setMediaItems = function (props) {
            var node = props.node;
            _this.mediaNodes = [];
            node.forEach(function (item, childOffset) {
                _this.mediaPluginState.mediaGroupNodes[item.attrs.id] = {
                    node: item,
                    getPos: function () { return props.getPos() + childOffset + 1; },
                };
                _this.mediaNodes.push(item);
            });
        };
        _this.renderChildNodes = function () {
            var viewMediaClientConfig = _this.state.viewMediaClientConfig;
            var items = _this.mediaNodes.map(function (item, idx) {
                var identifier = {
                    id: item.attrs.id,
                    mediaItemType: 'file',
                    collectionName: item.attrs.collection,
                };
                var nodePos = _this.props.getPos() + idx + 1;
                return {
                    identifier: identifier,
                    selectable: true,
                    isLazy: _this.props.allowLazyLoading,
                    selected: _this.props.selected === nodePos,
                    onClick: function () {
                        setNodeSelection(_this.props.view, nodePos);
                    },
                    actions: [
                        {
                            handler: _this.props.disabled
                                ? function () { }
                                : _this.mediaPluginState.handleMediaNodeRemoval.bind(null, undefined, function () { return nodePos; }),
                            icon: React.createElement(EditorCloseIcon, { label: "delete" }),
                        },
                    ],
                };
            });
            return (React.createElement(Filmstrip, { items: items, mediaClientConfig: viewMediaClientConfig }));
        };
        _this.mediaNodes = [];
        _this.mediaPluginState = mediaStateKey.getState(props.view.state);
        _this.setMediaItems(props);
        return _this;
    }
    MediaGroup.prototype.componentDidMount = function () {
        var _this = this;
        this.updateMediaClientConfig();
        this.mediaNodes.forEach(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var _a, view, mediaProvider, contextIdentifierProvider, mediaNodeUpdater, contextId, isNodeFromDifferentCollection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (node.attrs.type === 'external') {
                            return [2 /*return*/];
                        }
                        _a = this.props, view = _a.view, mediaProvider = _a.mediaProvider, contextIdentifierProvider = _a.contextIdentifierProvider;
                        mediaNodeUpdater = new MediaNodeUpdater({
                            view: view,
                            mediaProvider: mediaProvider,
                            contextIdentifierProvider: contextIdentifierProvider,
                            node: node,
                            isMediaSingle: false,
                        });
                        contextId = mediaNodeUpdater.getCurrentContextId();
                        if (!!contextId) return [3 /*break*/, 2];
                        return [4 /*yield*/, mediaNodeUpdater.updateContextId()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, mediaNodeUpdater.isNodeFromDifferentCollection()];
                    case 3:
                        isNodeFromDifferentCollection = _b.sent();
                        if (isNodeFromDifferentCollection) {
                            mediaNodeUpdater.copyNode();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MediaGroup.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.updateMediaClientConfig();
        this.setMediaItems(props);
    };
    MediaGroup.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props.selected !== nextProps.selected ||
            this.props.node !== nextProps.node ||
            this.state.viewMediaClientConfig !==
                this.mediaPluginState.mediaClientConfig) {
            return true;
        }
        return false;
    };
    MediaGroup.prototype.updateMediaClientConfig = function () {
        var viewMediaClientConfig = this.state.viewMediaClientConfig;
        var mediaClientConfig = this.mediaPluginState.mediaClientConfig;
        if (!viewMediaClientConfig && mediaClientConfig) {
            this.setState({
                viewMediaClientConfig: mediaClientConfig,
            });
        }
    };
    MediaGroup.prototype.render = function () {
        return this.renderChildNodes();
    };
    return MediaGroup;
}(React.Component));
export default MediaGroup;
var MediaGroupNodeView = /** @class */ (function (_super) {
    __extends(MediaGroupNodeView, _super);
    function MediaGroupNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaGroupNodeView.prototype.render = function (props, forwardRef) {
        var _this = this;
        var allowLazyLoading = props.allowLazyLoading, editorAppearance = props.editorAppearance, providerFactory = props.providerFactory;
        return (React.createElement(WithProviders, { providers: ['mediaProvider', 'contextIdentifierProvider'], providerFactory: providerFactory, renderNode: function (_a) {
                var mediaProvider = _a.mediaProvider, contextIdentifierProvider = _a.contextIdentifierProvider;
                var renderFn = function (_a) {
                    var editorDisabledPlugin = _a.editorDisabledPlugin;
                    var nodePos = _this.getPos();
                    var _b = _this.view.state.selection, $anchor = _b.$anchor, $head = _b.$head;
                    var isSelected = nodePos < $anchor.pos && $head.pos < nodePos + _this.node.nodeSize;
                    return (React.createElement(MediaGroup, { node: _this.node, getPos: _this.getPos, view: _this.view, forwardRef: forwardRef, selected: isSelected ? $anchor.pos : null, disabled: (editorDisabledPlugin || {}).editorDisabled, allowLazyLoading: allowLazyLoading, editorAppearance: editorAppearance, mediaProvider: mediaProvider, contextIdentifierProvider: contextIdentifierProvider }));
                };
                return (React.createElement(WithPluginState, { editorView: _this.view, plugins: {
                        reactNodeViewState: reactNodeViewStateKey,
                        editorDisabledPlugin: editorDisabledPluginKey,
                    }, render: renderFn }));
            } }));
    };
    return MediaGroupNodeView;
}(ReactNodeView));
export var ReactMediaGroupNode = function (portalProviderAPI, providerFactory, allowLazyLoading, editorAppearance) { return function (node, view, getPos) {
    return new MediaGroupNodeView(node, view, getPos, portalProviderAPI, {
        allowLazyLoading: allowLazyLoading,
        providerFactory: providerFactory,
        editorAppearance: editorAppearance,
    }).init();
}; };
//# sourceMappingURL=mediaGroup.js.map