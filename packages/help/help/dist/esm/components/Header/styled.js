import { __makeTemplateObject } from "tslib";
/** @jsx jsx */
import styled from '@emotion/styled';
import { gridSize } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
import { HEADER_HEIGHT } from '../styled';
var HEADER_TITLE_BORDER_BOTTOM = 2;
export var HeaderContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: ", "px solid ", ";\n  justify-content: space-between;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"], ["\n  box-sizing: border-box;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: ", "px solid ", ";\n  justify-content: space-between;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"])), HEADER_HEIGHT, colors.N10, HEADER_TITLE_BORDER_BOTTOM, colors.N30, gridSize() - HEADER_TITLE_BORDER_BOTTOM / 2, gridSize() - HEADER_TITLE_BORDER_BOTTOM / 2);
export var CloseButtonContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  right: ", "px;\n  top: ", "px;\n"], ["\n  position: absolute;\n  right: ", "px;\n  top: ", "px;\n"])), gridSize(), gridSize());
export var BackButtonContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), gridSize(), gridSize());
export var HeaderTitle = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  text-align: center;\n  font-size: 1rem;\n  height: ", "px;\n  line-height: ", "px;\n  width: 100%;\n"], ["\n  color: ", ";\n  text-align: center;\n  font-size: 1rem;\n  height: ", "px;\n  line-height: ", "px;\n  width: 100%;\n"])), colors.N500, gridSize() * 4, gridSize() * 4);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map