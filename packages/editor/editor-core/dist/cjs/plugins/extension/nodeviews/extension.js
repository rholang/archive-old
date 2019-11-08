"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var nodeviews_1 = require("../../../nodeviews");
var Extension_1 = tslib_1.__importDefault(require("../ui/Extension"));
var utils_1 = require("../../../utils");
var ExtensionNode = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensionNode, _super);
    function ExtensionNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionNode.prototype.ignoreMutation = function (mutation) {
        // Extensions can perform async operations that will change the DOM.
        // To avoid having their tree rebuilt, we need to ignore the mutation
        // for atom based extensions if its not a layout, we need to give
        // children a chance to recalc
        return this.node.type.isAtom || mutation.attributeName !== 'data-layout';
    };
    ExtensionNode.prototype.getContentDOM = function () {
        if (this.node.isInline) {
            return;
        }
        var dom = document.createElement('div');
        dom.className = this.node.type.name + "-content-dom-wrapper";
        return { dom: dom };
    };
    ExtensionNode.prototype.render = function (props, forwardRef) {
        return (React.createElement("span", null,
            React.createElement(Extension_1.default, { editorView: this.view, node: this.node, providerFactory: props.providerFactory, handleContentDOMRef: forwardRef, extensionHandlers: props.extensionHandlers }),
            this.node.type.name === 'inlineExtension' && utils_1.ZeroWidthSpace));
    };
    return ExtensionNode;
}(nodeviews_1.ReactNodeView));
function ExtensionNodeView(portalProviderAPI, providerFactory, extensionHandlers) {
    return function (node, view, getPos) {
        return new ExtensionNode(node, view, getPos, portalProviderAPI, {
            providerFactory: providerFactory,
            extensionHandlers: extensionHandlers,
        }).init();
    };
}
exports.default = ExtensionNodeView;
//# sourceMappingURL=extension.js.map