"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var getCSSUnitValue_1 = require("../utils/getCSSUnitValue");
var breakpoint_1 = require("../utils/breakpoint");
var getSelectedBorderStyle_1 = require("../styles/getSelectedBorderStyle");
var getWrapperHeight = function (dimensions) {
    return dimensions && dimensions.height
        ? "height: " + getCSSUnitValue_1.getCSSUnitValue(dimensions.height) + "; max-height: 100%;"
        : '';
};
var getWrapperWidth = function (dimensions) {
    return dimensions && dimensions.width
        ? "width: " + getCSSUnitValue_1.getCSSUnitValue(dimensions.width) + "; max-width: 100%;"
        : '';
};
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var dimensions = _a.dimensions, _b = _a.breakpointSize, breakpointSize = _b === void 0 ? 'medium' : _b, shouldUsePointerCursor = _a.shouldUsePointerCursor;
    return "\n      " + breakpoint_1.breakpointStyles({ breakpointSize: breakpointSize }) + "\n      " + getWrapperHeight(dimensions) + "\n      " + getWrapperWidth(dimensions) + "\n      cursor: " + (shouldUsePointerCursor ? 'pointer' : 'default') + ";\n    ";
});
exports.Wrapper.displayName = 'CardViewWrapper';
exports.InlinePlayerWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  overflow: hidden;\n  border-radius: ", ";\n  position: relative;\n\n  max-width: 100%;\n  max-height: 100%;\n\n  ", "\n\n  video {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  overflow: hidden;\n  border-radius: ", ";\n  position: relative;\n\n  max-width: 100%;\n  max-height: 100%;\n\n  ", "\n\n  video {\n    width: 100%;\n    height: 100%;\n  }\n"])), constants_1.borderRadius(), getSelectedBorderStyle_1.getSelectedBorderStyle);
exports.InlinePlayerWrapper.displayName = 'InlinePlayerWrapper';
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map