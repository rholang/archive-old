"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
// NOTE:
// we can't use @atlaskit/blanket
// because it has to sit on top of other layered elements (i.e. Modal).
var backgroundColor = components_1.themed({ light: colors_1.N100A, dark: colors_1.DN90A });
// IE11 and Edge: z-index needed because fixed position calculates z-index relative
// to body instead of nearest stacking context (Portal in our case).
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ", ";\n"], ["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ", ";\n"])), function (p) { return (p.isTinted ? backgroundColor : 'transparent'); }, constants_1.layers.spotlight);
var templateObject_1;
//# sourceMappingURL=Blanket.js.map