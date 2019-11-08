"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.HEADER_HEIGHT = constants_1.gridSize() * 6;
exports.FOOTER_HEIGHT = constants_1.gridSize() * 6;
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
exports.Section = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n"], ["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n"])));
exports.HelpBody = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex-grow: 1;\n  overflow: auto;\n  min-height: 0;\n  position: relative;\n"], ["\n  flex-grow: 1;\n  overflow: auto;\n  min-height: 0;\n  position: relative;\n"])));
exports.DefaultContent = styled_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  height: ", ";\n  overflow: auto;\n"], ["\n  height: ", ";\n  overflow: auto;\n"])), function (props) { return (props.isArticleVisible ? '100%' : 'auto'); });
var FOOTER_BORDER_TOP = 2;
exports.HelpFooter = styled_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  padding: ", "px 0;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-top: ", "px solid ", ";\n  justify-content: space-between;\n"], ["\n  padding: ", "px 0;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-top: ", "px solid ", ";\n  justify-content: space-between;\n"])), constants_1.gridSize(), colors.N10, FOOTER_BORDER_TOP, colors.N30);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map