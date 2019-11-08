"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var constants_1 = require("@atlaskit/theme/constants");
exports.ellipsis = function (maxWidth) {
    if (maxWidth === void 0) { maxWidth = '100%'; }
    var unit = typeof maxWidth === 'number' ? 'px' : '';
    return "\n    max-width: " + maxWidth + unit + ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
};
exports.size = function (value) {
    if (value === void 0) { value = '100%'; }
    var unit = typeof value === 'number' ? 'px' : '';
    return "\n    width: " + value + unit + ";\n    height: " + value + unit + ";\n  ";
};
exports.center = "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n";
exports.absolute = function (top, left) {
    if (top === void 0) { top = 0; }
    if (left === void 0) { left = 0; }
    return "\n  position: absolute;\n  top: " + top + "px;\n  left: " + left + "px;\n";
};
exports.borderRadius = "\n  border-radius: " + constants_1.borderRadius() + "px;\n";
exports.borderRadiusBottom = "\n  border-bottom-left-radius: " + constants_1.borderRadius() + "px;\n  border-bottom-right-radius: " + constants_1.borderRadius() + "px;\n";
exports.easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
exports.fadeInKeyframe = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  0%{\n    opacity: 0;\n  }\n\n  100%{\n    opacity: 1;\n  }\n"], ["\n  0%{\n    opacity: 0;\n  }\n\n  100%{\n    opacity: 1;\n  }\n"])));
exports.fadeIn = "\n  animation: " + exports.fadeInKeyframe + " .3s " + exports.easeInOutCubic + ";\n";
var templateObject_1;
//# sourceMappingURL=mixins.js.map