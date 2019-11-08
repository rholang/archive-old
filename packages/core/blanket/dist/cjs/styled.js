"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var backgroundColor = components_1.themed({ light: colors_1.N100A, dark: colors_1.DN90A });
exports.opacity = function (p) { return (p.isTinted ? 1 : 0); };
exports.pointerEvents = function (p) {
    return p.canClickThrough ? 'none' : 'initial';
};
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  opacity: ", ";\n  pointer-events: ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ", ";\n"], ["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  opacity: ", ";\n  pointer-events: ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ", ";\n"])), backgroundColor, exports.opacity, exports.pointerEvents, constants_1.layers.blanket);
var templateObject_1;
//# sourceMappingURL=styled.js.map