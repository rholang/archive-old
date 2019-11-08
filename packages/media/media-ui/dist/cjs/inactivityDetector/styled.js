"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var __1 = require("..");
var handleControlsVisibility = function (_a) {
    var controlsAreVisible = _a.controlsAreVisible;
    return "\n  transition: opacity .3s;\n  opacity: " + (controlsAreVisible ? '1' : '0') + ";\n";
};
exports.InactivityDetectorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  .", " {\n    ", ";\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  .", " {\n    ", ";\n  }\n"])), __1.hideControlsClassName, handleControlsVisibility);
exports.InactivityDetectorWrapper.displayName = 'InactivityDetectorWrapper';
var templateObject_1;
//# sourceMappingURL=styled.js.map