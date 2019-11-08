/** @jsx jsx */
import { __makeTemplateObject } from "tslib";
import styled from '@emotion/styled';
import { gridSize } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
export var HEADER_HEIGHT = gridSize() * 6;
export var FOOTER_HEIGHT = gridSize() * 6;
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
export var Section = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n"], ["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n"])));
export var HelpBody = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-grow: 1;\n  overflow: auto;\n  min-height: 0;\n  position: relative;\n"], ["\n  flex-grow: 1;\n  overflow: auto;\n  min-height: 0;\n  position: relative;\n"])));
export var DefaultContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", ";\n  overflow: auto;\n"], ["\n  height: ", ";\n  overflow: auto;\n"])), function (props) { return (props.isArticleVisible ? '100%' : 'auto'); });
var FOOTER_BORDER_TOP = 2;
export var HelpFooter = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: ", "px 0;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-top: ", "px solid ", ";\n  justify-content: space-between;\n"], ["\n  padding: ", "px 0;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-top: ", "px solid ", ";\n  justify-content: space-between;\n"])), gridSize(), colors.N10, FOOTER_BORDER_TOP, colors.N30);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map