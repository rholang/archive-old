import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { N500, N30, N0 } from '@atlaskit/theme/colors';
export var TOTAL_CIRCLE_SIZE = 18;
export var MainArea = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 15px;\n  background-color: ", ";\n"], ["\n  box-sizing: border-box;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 15px;\n  background-color: ", ";\n"])), TOTAL_CIRCLE_SIZE, TOTAL_CIRCLE_SIZE, function (props) { return (props.isActive ? N500 : N30); });
export var FrontArea = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  background-color: ", ";\n"], ["\n  box-sizing: border-box;\n  background-color: ", ";\n"])), function (props) { return (props.isActive ? N0 : N500); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=lineWidthButtonStyles.js.map