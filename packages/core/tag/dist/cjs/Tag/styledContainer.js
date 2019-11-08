"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("../constants");
var removeAnimation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  0% {\n    animation-timing-function: cubic-bezier(0.23830050393398, 0, 0.25586732616931, 0.79011192334632);\n    max-width: ", ";\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.21787238302442, 0.98324004924648, 0.58694150667646, 1);\n    max-width: ", "px;\n  }\n  100% { max-width: 0; }\n"], ["\n  0% {\n    animation-timing-function: cubic-bezier(0.23830050393398, 0, 0.25586732616931, 0.79011192334632);\n    max-width: ", ";\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.21787238302442, 0.98324004924648, 0.58694150667646, 1);\n    max-width: ", "px;\n  }\n  100% { max-width: 0; }\n"])), constants_1.maxWidth, constants_1.maxWidthUnitless * 0.8);
function getRemovedStyles(_a) {
    var isRemoved = _a.isRemoved;
    var styles;
    if (isRemoved)
        styles = 'width: 0; visibility: hidden;';
    return styles;
}
function getRemovingStyles(_a) {
    var isRemoving = _a.isRemoving;
    var styles;
    if (isRemoving)
        styles = "animation: " + removeAnimation + " 250ms forwards; will-change: width;";
    return styles;
}
exports.default = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  display: inline-block;\n\n  ", " ", ";\n"], ["\n  box-sizing: border-box;\n  display: inline-block;\n\n  ", " ", ";\n"])), getRemovingStyles, getRemovedStyles);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styledContainer.js.map