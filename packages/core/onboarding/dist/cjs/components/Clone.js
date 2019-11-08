"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Target_1 = require("../styled/Target");
function cloneAndOverrideStyles(node) {
    var shouldCloneChildren = true;
    var clonedNode = node.cloneNode(shouldCloneChildren);
    clonedNode.style.margin = '0';
    clonedNode.style.position = 'static';
    // The target may have other transforms applied. Avoid unintended side effects
    // by zeroing out "translate" rather than applying a value of "none".
    clonedNode.style.transform = 'translate(0, 0) translate3d(0, 0, 0)';
    return clonedNode;
}
var Clone = function (props) {
    var pulse = props.pulse, style = props.style, target = props.target, targetBgColor = props.targetBgColor, targetOnClick = props.targetOnClick, targetNode = props.targetNode, targetRadius = props.targetRadius;
    return (react_1.default.createElement(Target_1.TargetInner, { pulse: pulse, bgColor: targetBgColor, radius: targetRadius, style: style },
        react_1.default.createElement("div", { 
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: cloneAndOverrideStyles(targetNode).outerHTML,
            }, style: { pointerEvents: 'none' } }),
        react_1.default.createElement(Target_1.TargetOverlay, { onClick: targetOnClick ? function (event) { return targetOnClick({ event: event, target: target }); } : undefined })));
};
exports.default = Clone;
//# sourceMappingURL=Clone.js.map