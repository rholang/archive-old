"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
// z-index is set to 200 for the main container to be above the dropzone which has z-index 100
exports.CenterView = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  overflow: hidden;\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  overflow: hidden;\n"])), colors_1.N700A);
var templateObject_1;
//# sourceMappingURL=styles.js.map