"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 100%;\n  overflow-y: scroll;\n\n  padding: 0 28px;\n"], ["\n  height: 100%;\n  overflow-y: scroll;\n\n  padding: 0 28px;\n"])));
exports.GridCell = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", " margin-top: 5px;\n"], ["\n  ", " margin-top: 5px;\n"])), function (_a) {
    var width = _a.width;
    return "width: " + width + "px;";
});
exports.Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  color: #091e42;\n  font-size: 20px;\n  margin-top: 15px;\n"], ["\n  color: #091e42;\n  font-size: 20px;\n  margin-top: 15px;\n"])));
exports.ButtonContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
exports.WarningContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n\n  /* Required to allow end users to select text in the error message */\n  cursor: auto;\n  user-select: text;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n\n  /* Required to allow end users to select text in the error message */\n  cursor: auto;\n  user-select: text;\n"])));
exports.WarningIconWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  width: 92px;\n"], ["\n  width: 92px;\n"])));
exports.WarningImage = styled_components_1.default.img(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  width: 200px;\n"], ["\n  width: 200px;\n"])));
exports.WarningHeading = styled_components_1.default.p(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"], ["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"])));
exports.WarningSuggestion = styled_components_1.default.p(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  margin-top: 5px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  margin-top: 5px;\n"])), colors_1.N300);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styles.js.map