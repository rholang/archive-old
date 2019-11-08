"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("./constants");
var Skeleton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  border-radius: ", ";\n  background-color: ", ";\n  border: ", "px solid transparent;\n  opacity: ", ";\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  border-radius: ",
    ";\n  background-color: ", ";\n  border: ", "px solid transparent;\n  opacity: ", ";\n"])), function (_a) {
    var size = _a.size;
    return constants_1.AVATAR_SIZES[size || 'small'];
}, function (_a) {
    var size = _a.size;
    return constants_1.AVATAR_SIZES[size || 'small'];
}, function (props) {
    return props.size && props.appearance === 'square'
        ? constants_1.AVATAR_RADIUS[props.size] + "px"
        : '50%';
}, function (_a) {
    var color = _a.color;
    return color || 'currentColor';
}, function (_a) {
    var size = _a.size;
    return constants_1.BORDER_WIDTH[size || 'small'];
}, function (_a) {
    var weight = _a.weight;
    return (weight === 'strong' ? 0.3 : 0.15);
});
exports.default = Skeleton;
var templateObject_1;
//# sourceMappingURL=Skeleton.js.map