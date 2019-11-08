"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
exports.ErrorPopup = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])), colors_1.N0);
exports.ErrorIconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 92px;\n"], ["\n  width: 92px;\n"])));
exports.ErrorMessage = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"], ["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"])), colors_1.N900);
exports.ErrorHint = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"], ["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"])), colors_1.N70);
exports.ErrorButton = function (props) { return (React.createElement(button_1.default, tslib_1.__assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
        return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { display: 'inline-flex', width: '84px', margin: '2px', justifyContent: 'center' }) }, rest);
    } }))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map