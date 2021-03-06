import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import { borderRadius } from '@atlaskit/theme/constants';
import { R300, R200, N500, R500 } from '@atlaskit/theme/colors';
import { buttonWidthUnitless, focusRingColor } from '../constants';
var focusColor = themed({ light: R300, dark: R200 });
// NOTE:
// "-moz-focus-inner" removes some inbuilt padding that Firefox adds (taken from reduced-ui-pack)
// the focus ring is red unless combined with hover, then uses default blue
export var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  align-self: center;\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  height: 16px;\n  margin: 0;\n  padding: 0;\n\n  &::-moz-focus-inner {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  &:hover {\n    color: ", ";\n\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n      outline: none;\n    }\n  }\n"], ["\n  align-items: center;\n  align-self: center;\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ",
    ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  height: 16px;\n  margin: 0;\n  padding: 0;\n\n  &::-moz-focus-inner {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  &:hover {\n    color: ", ";\n\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n      outline: none;\n    }\n  }\n"])), function (_a) {
    var isRounded = _a.isRounded;
    return isRounded ? buttonWidthUnitless / 2 + "px" : borderRadius() + "px";
}, N500, focusColor, R500, focusRingColor);
var templateObject_1;
//# sourceMappingURL=styled.js.map