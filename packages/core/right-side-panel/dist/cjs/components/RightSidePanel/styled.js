"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var constants_1 = require("./constants");
exports.RightSidePanelDrawer = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: white;\n  width: ", "px;\n  flex: 0 0 ", "px;\n  position relative;\n  overflow: hidden;\n"], ["\n  background-color: white;\n  width: ", "px;\n  flex: 0 0 ", "px;\n  position relative;\n  overflow: hidden;\n"])), constants_1.panelWidth, constants_1.panelWidth);
exports.RightSidePanelDrawerContent = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  flex: 1;\n  border-left: 3px solid ", ";\n  overflow: hidden;\n  flex-direction: column;\n  width: ", "px;\n  height: 100%;\n  position: fixed;\n"], ["\n  box-sizing: border-box;\n  flex: 1;\n  border-left: 3px solid ", ";\n  overflow: hidden;\n  flex-direction: column;\n  width: ", "px;\n  height: 100%;\n  position: fixed;\n"])), colors.N30, constants_1.panelWidth);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map