import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { gridSize, borderRadius, colors } from '@atlaskit/theme';
export var ButtonContent = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 24px;\n  line-height: 24px;\n  min-width: 70px;\n"], ["\n  display: flex;\n  height: 24px;\n  line-height: 24px;\n  min-width: 70px;\n"])));
export var Wrapper = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  margin-right: ", "px;\n"], ["\n  display: flex;\n  margin-right: ",
    "px;\n"])), function (_a) {
    var width = _a.width;
    return !width || width === 'large' ? 0 : gridSize();
});
export var ConfirmationPopup = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: #fff;\n  border-radius: ", "px;\n  box-shadow: 0 4px 8px -2px ", ", 0 0 1px ", ";\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: auto;\n  max-height: none;\n  height: 410px;\n  width: 280px;\n"], ["\n  background: #fff;\n  border-radius: ", "px;\n  box-shadow: 0 4px 8px -2px ", ", 0 0 1px ", ";\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: auto;\n  max-height: none;\n  height: 410px;\n  width: 280px;\n"])), borderRadius(), colors.N60A, colors.N60A);
export var ConfirmationText = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  word-spacing: 4px;\n  line-height: 22px;\n  color: ", ";\n  margin-top: 30px;\n  padding: 20px;\n  & > div {\n    width: 240px;\n  }\n  & > div:first-of-type {\n    margin-bottom: 12px;\n  }\n  & > div:nth-of-type(2) {\n    margin-bottom: 20px;\n  }\n"], ["\n  font-size: 14px;\n  word-spacing: 4px;\n  line-height: 22px;\n  color: ", ";\n  margin-top: 30px;\n  padding: 20px;\n  & > div {\n    width: 240px;\n  }\n  & > div:first-of-type {\n    margin-bottom: 12px;\n  }\n  & > div:nth-of-type(2) {\n    margin-bottom: 20px;\n  }\n"])), colors.N400);
export var ConfirmationHeader = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 100px;\n  width: 100%;\n  display: inline-block;\n"], ["\n  background-color: ", ";\n  height: 100px;\n  width: 100%;\n  display: inline-block;\n"])), colors.P400);
export var ConfirmationImg = styled.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100px;\n  display: block;\n  margin: 25px auto 0 auto;\n"], ["\n  width: 100px;\n  display: block;\n  margin: 25px auto 0 auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styles.js.map