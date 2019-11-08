"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var math_1 = require("@atlaskit/theme/math");
var elevation_1 = require("@atlaskit/theme/elevation");
var backgroundColor = components_1.themed({ light: colors_1.N0, dark: colors_1.DN50 });
var textColor = components_1.themed({ light: colors_1.N900, dark: colors_1.DN600 });
// eslint-disable-next-line import/prefer-default-export
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  border-radius: ", "px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ", ";\n  max-height: ", "px;\n  max-width: ", "px;\n  padding: ", "px ", "px;\n  z-index: ", ";\n\n  ", ";\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  background: ", ";\n  border-radius: ", "px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ", ";\n  max-height: ", "px;\n  max-width: ", "px;\n  padding: ", "px ", "px;\n  z-index: ", ";\n\n  ", ";\n\n  &:focus {\n    outline: none;\n  }\n"])), backgroundColor, constants_1.borderRadius, textColor, math_1.multiply(constants_1.gridSize, 56), math_1.multiply(constants_1.gridSize, 56), math_1.multiply(constants_1.gridSize, 2), math_1.multiply(constants_1.gridSize, 3), constants_1.layers.dialog, elevation_1.e200);
var templateObject_1;
//# sourceMappingURL=styled.js.map