"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/theme/constants");
var config_1 = require("./config");
exports.centerX = "\n  display: flex;\n  justify-content: center;\n";
exports.antialiased = "\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n";
exports.centerSelfY = "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n";
exports.centerSelfX = "\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n";
exports.centerSelf = "\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n";
exports.borderRadiusLeft = "\n  border-top-left-radius: " + constants_1.borderRadius() + ";\n  border-bottom-left-radius: " + constants_1.borderRadius() + ";\n";
exports.spaceAround = "\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n";
exports.transition = function (propertyName) {
    if (propertyName === void 0) { propertyName = 'all'; }
    return "\n  transition: " + propertyName + " " + config_1.defaultTransitionDuration + ";\n";
};
exports.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16)
        : null;
};
exports.rgba = function (hex, opacity) {
    return "rgba(" + exports.hexToRgb(hex) + ", " + opacity + ")";
};
exports.capitalize = "\n  &::first-letter {\n    text-transform: uppercase;\n  }\n";
exports.withAppearance = function (styleMap) { return function (_a) {
    var appearance = _a.appearance;
    return (appearance && styleMap[appearance]) || '';
}; };
//# sourceMappingURL=mixins.js.map