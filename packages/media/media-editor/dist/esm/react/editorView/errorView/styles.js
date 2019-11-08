import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { N0, N900, N70 } from '@atlaskit/theme/colors';
import Button from '@atlaskit/button';
export var ErrorPopup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])), N0);
export var ErrorIconWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 92px;\n"], ["\n  width: 92px;\n"])));
export var ErrorMessage = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"], ["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"])), N900);
export var ErrorHint = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"], ["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"])), N70);
export var ErrorButton = function (props) { return (React.createElement(Button, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), { display: 'inline-flex', width: '84px', margin: '2px', justifyContent: 'center' }) }, rest);
    } }))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map