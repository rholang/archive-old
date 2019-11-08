"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var adf_schema_1 = require("@atlaskit/adf-schema");
var editor_common_1 = require("@atlaskit/editor-common");
var nodeviews_1 = require("../../nodeviews");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var width_1 = require("../width");
var LayoutButton_1 = tslib_1.__importDefault(require("./ui/LayoutButton"));
var is_supported_node_1 = require("./utils/is-supported-node");
var constants_1 = require("./constants");
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .ProseMirror > .breakoutView-content-wrap &[data-layout='full-width'],\n  .ProseMirror > .breakoutView-content-wrap &[data-layout='wide'] {\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n"], ["\n  .ProseMirror > .breakoutView-content-wrap &[data-layout='full-width'],\n  .ProseMirror > .breakoutView-content-wrap &[data-layout='wide'] {\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n"])));
exports.pluginKey = new prosemirror_state_1.PluginKey('breakoutPlugin');
exports.getPluginState = function (state) { return exports.pluginKey.getState(state); };
var BreakoutView = /** @class */ (function (_super) {
    tslib_1.__extends(BreakoutView, _super);
    function BreakoutView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakoutView.prototype.getContentDOM = function () {
        var dom = document.createElement('div');
        // MutationObserver bug with nodeviews @see ED-6062
        dom.className = constants_1.BreakoutCssClassName.BREAKOUT_MARK_DOM;
        return { dom: dom };
    };
    BreakoutView.prototype.render = function (_props, forwardRef) {
        var mode = this.node.attrs.mode;
        return (React.createElement(WithPluginState_1.default, { editorView: this.view, plugins: { widthState: width_1.pluginKey }, render: function (_a) {
                var _b = _a.widthState, widthState = _b === void 0 ? { width: 0 } : _b;
                return (React.createElement(exports.Wrapper, { className: "fabric-editor-breakout-mark", "data-layout": mode, style: { width: editor_common_1.calcBreakoutWidth(mode, widthState.width) } },
                    React.createElement("div", { ref: forwardRef })));
            } }));
    };
    return BreakoutView;
}(nodeviews_1.ReactNodeView));
function createPlugin(_a) {
    var portalProviderAPI = _a.portalProviderAPI, providerFactory = _a.providerFactory, dispatch = _a.dispatch;
    return new prosemirror_state_1.Plugin({
        state: {
            init: function () {
                return {
                    breakoutNode: null,
                };
            },
            apply: function (tr, pluginState) {
                var breakoutNode = prosemirror_utils_1.findParentNode(is_supported_node_1.isSupportedNodeForBreakout)(tr.selection);
                var node = breakoutNode ? breakoutNode.node : null;
                if (node !== pluginState.breakoutNode) {
                    var nextPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { breakoutNode: node });
                    dispatch(exports.pluginKey, nextPluginState);
                    return nextPluginState;
                }
                return pluginState;
            },
        },
        key: exports.pluginKey,
        props: {
            nodeViews: {
                breakout: function (node, view, getPos) {
                    return new BreakoutView(node, view, getPos, portalProviderAPI, {
                        providerFactory: providerFactory,
                    }).init();
                },
            },
        },
    });
}
var breakoutPlugin = function (options) { return ({
    name: 'breakout',
    pmPlugins: function () {
        return [{ name: 'breakout', plugin: createPlugin }];
    },
    marks: function () {
        return [{ name: 'breakout', mark: adf_schema_1.breakout }];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement;
        // This is a bit crappy, but should be resolved once we move to a static schema.
        if (options && !options.allowBreakoutButton) {
            return null;
        }
        return (React.createElement(WithPluginState_1.default, { plugins: {
                pluginState: exports.pluginKey,
            }, render: function (_a) {
                var pluginState = _a.pluginState;
                return (React.createElement(LayoutButton_1.default, { editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, node: pluginState.breakoutNode }));
            } }));
    },
}); };
exports.default = breakoutPlugin;
var templateObject_1;
//# sourceMappingURL=index.js.map