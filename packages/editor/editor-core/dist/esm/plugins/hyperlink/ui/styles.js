import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import UiToolbarButton from '../../../ui/ToolbarButton';
import UiFloatingToolbar from '../../../ui/FloatingToolbar';
import UiSeparator from '../../../ui/Separator';
// `line-height: 1` to fix extra 1px height from toolbar wrapper
export var FloatingToolbar = styled(UiFloatingToolbar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: 350px;\n  min-height: 32px;\n  height: initial;\n  & > div {\n    line-height: 1;\n  }\n  & > div > button:last-child {\n    margin-right: 0;\n  }\n  .normal& input {\n    min-width: 244px;\n    margin-right: 2px;\n  }\n  .recent-search& {\n    padding: 8px 0 0;\n    input {\n      padding: 0 8px 8px;\n    }\n  }\n"], ["\n  max-height: 350px;\n  min-height: 32px;\n  height: initial;\n  & > div {\n    line-height: 1;\n  }\n  & > div > button:last-child {\n    margin-right: 0;\n  }\n  .normal& input {\n    min-width: 244px;\n    margin-right: 2px;\n  }\n  .recent-search& {\n    padding: 8px 0 0;\n    input {\n      padding: 0 8px 8px;\n    }\n  }\n"])));
// `a&` because `Button` uses it and it produces a more specific selector `a.xyz`
export var ToolbarButton = function (props) { return (React.createElement(UiToolbarButton, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), { padding: 0, width: '24px', margin: '0 2px', 'a&': {
                    width: '24px',
                    margin: '0 2px',
                } }) }, rest);
    } }))); };
// Need fixed height because parent has height inherit and `height: 100%` doesn't work because of that
export var Separator = styled(UiSeparator)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 2px 6px;\n  height: 20px;\n"], ["\n  margin: 2px 6px;\n  height: 20px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map