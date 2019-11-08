import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { borderRadius } from '@atlaskit/theme/constants';
import { N30 } from '@atlaskit/theme/colors';
var ReadViewContentWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: ", "px;\n  display: inline-block;\n  max-width: 100%;\n  transition: background 0.2s;\n  width: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: ", "px;\n  display: inline-block;\n  max-width: 100%;\n  transition: background 0.2s;\n  width: ",
    ";\n\n  &:hover {\n    background: ", ";\n  }\n"])), borderRadius(), function (_a) {
    var readViewFitContainerWidth = _a.readViewFitContainerWidth;
    return readViewFitContainerWidth ? '100%' : 'auto';
}, N30);
ReadViewContentWrapper.displayName = 'ReadViewContentWrapper';
export default ReadViewContentWrapper;
var templateObject_1;
//# sourceMappingURL=ReadViewContentWrapper.js.map