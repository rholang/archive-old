"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var MIN_HEIGHT = '498px';
exports.MediaPickerPopupWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  cursor: default;\n  user-select: none;\n  font-family: ", ";\n  border-radius: 3px;\n  position: relative;\n\n  /* Ensure that the modal has a static size */\n  width: 968px;\n"], ["\n  display: flex;\n  cursor: default;\n  user-select: none;\n  font-family: ", ";\n  border-radius: 3px;\n  position: relative;\n\n  /* Ensure that the modal has a static size */\n  width: 968px;\n"])), constants_1.fontFamily());
exports.SidebarWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 235px;\n  min-width: 235px;\n  background-color: ", ";\n  min-height: ", ";\n"], ["\n  width: 235px;\n  min-width: 235px;\n  background-color: ", ";\n  min-height: ", ";\n"])), colors_1.N30, MIN_HEIGHT);
exports.ViewWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  /* Height of the Popup should never change */\n  height: calc(100vh - 200px);\n\n  background-color: white;\n  min-height: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  /* Height of the Popup should never change */\n  height: calc(100vh - 200px);\n\n  background-color: white;\n  min-height: ", ";\n"])), MIN_HEIGHT);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map