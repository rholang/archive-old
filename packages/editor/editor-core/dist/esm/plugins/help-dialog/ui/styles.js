import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { borderRadius, colors } from '@atlaskit/theme';
import { akEditorUnitZIndex } from '@atlaskit/editor-common';
export var Header = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: ", ";\n  min-height: 24px;\n  padding: 20px 40px;\n  font-size: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: ", ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "px;\n"], ["\n  z-index: ", ";\n  min-height: 24px;\n  padding: 20px 40px;\n  font-size: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: ",
    ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "px;\n"])), akEditorUnitZIndex, function (props) {
    return props.showKeyline ? "0 2px 0 " + colors.N30 : 'none';
}, colors.N400, colors.N0, borderRadius());
export var Footer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: ", ";\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  padding: 24px;\n  text-align: right;\n  box-shadow: ", ";\n"], ["\n  z-index: ", ";\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  padding: 24px;\n  text-align: right;\n  box-shadow: ",
    ";\n"])), akEditorUnitZIndex, colors.N300, function (props) {
    return props.showKeyline ? "0 -2px 0 " + colors.N30 : 'none';
});
export var ContentWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 18px 20px;\n  border-bottom-right-radius: ", "px;\n  overflow: auto;\n  position: relative;\n  color: ", ";\n  background-color: ", ";\n"], ["\n  padding: 18px 20px;\n  border-bottom-right-radius: ", "px;\n  overflow: auto;\n  position: relative;\n  color: ", ";\n  background-color: ", ";\n"])), borderRadius(), colors.N400, colors.N0);
export var Line = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #fff;\n  content: '';\n  display: block;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  min-width: 604px;\n"], ["\n  background: #fff;\n  content: '';\n  display: block;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  min-width: 604px;\n"])));
export var Content = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-width: 524px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  min-width: 524px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"])));
export var ColumnLeft = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 44%;\n"], ["\n  width: 44%;\n"])));
export var ColumnRight = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 44%;\n"], ["\n  width: 44%;\n"])));
export var Row = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"])));
export var Title = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 400;\n"], ["\n  font-size: 18px;\n  font-weight: 400;\n"])));
export var CodeSm = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  width: 24px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  width: 24px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n"])), colors.N20, borderRadius());
export var CodeMd = styled.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  width: 50px;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  width: 50px;\n  text-align: center;\n"])), colors.N20, borderRadius());
export var CodeLg = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 10px;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 10px;\n  text-align: center;\n"])), colors.N20, borderRadius());
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styles.js.map