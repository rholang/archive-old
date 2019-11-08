"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var styled_2 = require("../styled");
var HEADER_TITLE_BORDER_BOTTOM = 2;
exports.HeaderContainer = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: ", "px solid ", ";\n  justify-content: space-between;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"], ["\n  box-sizing: border-box;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: ", "px solid ", ";\n  justify-content: space-between;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"])), styled_2.HEADER_HEIGHT, colors.N10, HEADER_TITLE_BORDER_BOTTOM, colors.N30, constants_1.gridSize() - HEADER_TITLE_BORDER_BOTTOM / 2, constants_1.gridSize() - HEADER_TITLE_BORDER_BOTTOM / 2);
exports.CloseButtonContainer = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  right: ", "px;\n  top: ", "px;\n"], ["\n  position: absolute;\n  right: ", "px;\n  top: ", "px;\n"])), constants_1.gridSize(), constants_1.gridSize());
exports.BackButtonContainer = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), constants_1.gridSize(), constants_1.gridSize());
exports.HeaderTitle = styled_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  text-align: center;\n  font-size: 1rem;\n  height: ", "px;\n  line-height: ", "px;\n  width: 100%;\n"], ["\n  color: ", ";\n  text-align: center;\n  font-size: 1rem;\n  height: ", "px;\n  line-height: ", "px;\n  width: 100%;\n"])), colors.N500, constants_1.gridSize() * 4, constants_1.gridSize() * 4);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map