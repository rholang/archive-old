"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var typography_1 = require("@atlaskit/theme/typography");
var getTruncationStyles = function (_a) {
    var truncate = _a.truncate;
    return truncate
        ? "\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "
        : null;
};
exports.Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: ", "px 0 ", "px 0;\n"], ["\n  margin: ", "px 0 ", "px 0;\n"])), constants_1.gridSize() * 3, constants_1.gridSize() * 2);
exports.StyledTitle = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", " line-height: ", "px;\n  margin-top: 0;\n"], ["\n  ", ";\n  ", " line-height: ", "px;\n  margin-top: 0;\n"])), typography_1.h700(), getTruncationStyles, constants_1.gridSize() * 4);
exports.TitleWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  align-items: flex-start;\n  display: flex;\n  ", "\n"], ["\n  align-items: flex-start;\n  display: flex;\n  ",
    "\n"])), function (_a) {
    var truncate = _a.truncate;
    return truncate ? 'flex-wrap: no-wrap;' : 'flex-wrap: wrap;';
});
exports.TitleContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  flex: 1 0 auto;\n  ", "\n  margin-bottom: ", "px;\n  max-width: 100%;\n  min-width: 0;\n"], ["\n  flex: 1 0 auto;\n  ", "\n  margin-bottom: ", "px;\n  max-width: 100%;\n  min-width: 0;\n"])), function (_a) {
    var truncate = _a.truncate;
    return (truncate ? 'flex-shrink: 1;' : null);
}, constants_1.gridSize());
exports.ActionsWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  flex: 0 0 auto;\n  margin-bottom: ", "px;\n  margin-left: auto;\n  max-width: 100%;\n  padding-left: ", "px;\n  white-space: nowrap;\n\n  > {\n    text-align: right;\n  }\n"], ["\n  flex: 0 0 auto;\n  margin-bottom: ", "px;\n  margin-left: auto;\n  max-width: 100%;\n  padding-left: ", "px;\n  white-space: nowrap;\n\n  > {\n    text-align: right;\n  }\n"])), constants_1.gridSize(), constants_1.gridSize() * 4);
exports.BottomBarWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), constants_1.gridSize() * 2);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map