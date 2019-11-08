import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
export var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n\n  height: 80px;\n  padding: 26px 15px 23px 18px;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n\n  height: 80px;\n  padding: 26px 15px 23px 18px;\n"])));
export var InsertButton = function (props) { return (React.createElement(Button, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), { marginRight: '5px' }) }, rest);
    } }))); };
export var CancelButton = function (props) { return React.createElement(Button, __assign({}, props)); };
var templateObject_1;
//# sourceMappingURL=styled.js.map