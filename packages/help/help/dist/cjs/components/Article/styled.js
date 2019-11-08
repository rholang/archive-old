"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var core_1 = require("@emotion/core");
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.ArticleContainer = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: ", "px ", "px ", "px\n    ", "px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: #ffffff;\n  left: 100%;\n  flex: 1;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 1;\n"], ["\n  padding: ", "px ", "px ", "px\n    ", "px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: #ffffff;\n  left: 100%;\n  flex: 1;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 1;\n"])), constants_1.gridSize() * 2, constants_1.gridSize() * 3, constants_1.gridSize() * 2, constants_1.gridSize() * 3);
var shimmer = core_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    0% {\n        background-position: -300px 0;\n    }\n    100% {\n        background-position: 1000px 0;\n    }\n"], ["\n    0% {\n        background-position: -300px 0;\n    }\n    100% {\n        background-position: 1000px 0;\n    }\n"])));
exports.LoadingRectangle = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  height: ", ";\n  margin-top: ", ";\n  width: ", ";\n  border-radius: 2px;\n  animation-duration: 1.2s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: ", ";\n  animation-timing-function: linear;\n  background-color: ", ";\n  background-image: linear-gradient(\n    to right,\n    ", " 10%,\n    ", " 20%,\n    ", " 30%\n  );\n  background-repeat: no-repeat;\n"], ["\n  position: relative;\n  height: ", ";\n  margin-top: ",
    ";\n  width: ", ";\n  border-radius: 2px;\n  animation-duration: 1.2s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: ", ";\n  animation-timing-function: linear;\n  background-color: ", ";\n  background-image: linear-gradient(\n    to right,\n    ", " 10%,\n    ", " 20%,\n    ", " 30%\n  );\n  background-repeat: no-repeat;\n"])), function (props) { return (props.contentHeight ? props.contentHeight : '1rem'); }, function (props) {
    return props.marginTop ? props.marginTop : constants_1.gridSize() + 'px';
}, function (props) { return (props.contentWidth ? props.contentWidth : '100%'); }, shimmer, colors.N30, colors.N30, colors.N40, colors.N30);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map