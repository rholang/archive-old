"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Decision_1 = tslib_1.__importDefault(require("../ui/Decision"));
var nodeviews_1 = require("../../../nodeviews");
var Decision = /** @class */ (function (_super) {
    tslib_1.__extends(Decision, _super);
    function Decision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Decision.prototype.isContentEmpty = function (node) {
        return node.content.childCount === 0;
    };
    Decision.prototype.createDomRef = function () {
        var domRef = document.createElement('li');
        domRef.style['list-style-type'] = 'none';
        return domRef;
    };
    Decision.prototype.getContentDOM = function () {
        return { dom: document.createElement('div') };
    };
    Decision.prototype.render = function (_props, forwardRef) {
        return (React.createElement(Decision_1.default, { contentRef: forwardRef, showPlaceholder: this.isContentEmpty(this.node) }));
    };
    Decision.prototype.viewShouldUpdate = function (nextNode) {
        /**
         * To ensure the placeholder is correctly toggled we need to allow react to re-render
         * on first character insertion.
         * Note: last character deletion is handled externally and automatically re-renders.
         */
        return this.isContentEmpty(this.node) && !!nextNode.content.childCount;
    };
    Decision.prototype.update = function (node, decorations) {
        var _this = this;
        return _super.prototype.update.call(this, node, decorations, 
        // Toggle the placeholder based on whether user input exists.
        function (_currentNode, _newNode) { return !_this.isContentEmpty(_newNode); });
    };
    return Decision;
}(nodeviews_1.ReactNodeView));
exports.decisionItemNodeView = function (portalProviderAPI) { return function (node, view, getPos) {
    return new Decision(node, view, getPos, portalProviderAPI, {}).init();
}; };
//# sourceMappingURL=decisionItem.js.map