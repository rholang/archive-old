"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var images_1 = require("./images");
var layout_const_1 = require("../avatar-picker-dialog/layout-const");
var spin = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"], ["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"])));
exports.ImageBg = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 256px;\n  height: 256px;\n  background: url('", "');\n  border-radius: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 256px;\n  height: 256px;\n  background: url('", "');\n  border-radius: ", ";\n"])), images_1.checkeredBg, constants_1.borderRadius());
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  box-sizing: border-box;\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  position: relative;\n"], ["\n  width: ", "px;\n  box-sizing: border-box;\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  position: relative;\n"])), constants_1.gridSize() * 32);
exports.SliderContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-top: ", "px;\n\n  input {\n    box-sizing: content-box;\n    padding: 0;\n  }\n  background-color: #fff;\n"], ["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-top: ", "px;\n\n  input {\n    box-sizing: content-box;\n    padding: 0;\n  }\n  background-color: #fff;\n"])), constants_1.gridSize());
exports.FileInput = styled_components_1.default.input(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
exports.ImageUploader = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px 20px 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px 20px 10px;\n"])));
var droppingAnimation = "\n  border-color: #0e56c4;\n  animation: " + spin + " 8s linear infinite;\n";
exports.DragZone = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  position: relative;\n  border-radius: 100%;\n  transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &::after {\n    content: '';\n    border: ", ";\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n  }\n\n  ", ";\n"], ["\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  position: relative;\n  border-radius: 100%;\n  transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &::after {\n    content: '';\n    border: ",
    ";\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n  }\n\n  ",
    ";\n"])), function (props) {
    return props.showBorder ? '2px dashed #d0d6d0' : 'none';
}, function (props) {
    return (props.isDroppingFile &&
        "\n    background-color: #ddecfe;\n    &:after {\n      " + droppingAnimation + "\n    }\n  ") ||
        '';
});
exports.DragZone.displayName = 'DragZone';
exports.DragZoneImage = styled_components_1.default.img(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  width: 100px;\n"], ["\n  width: 100px;\n"])));
exports.DragZoneText = styled_components_1.default.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  text-align: center;\n  color: ", ";\n  ", ";\n"], ["\n  text-align: center;\n  color: ", ";\n  ",
    ";\n"])), colors_1.N200, function (props) {
    return props.isFullSize
        ? "width: " + (layout_const_1.AVATAR_DIALOG_WIDTH - constants_1.gridSize() * 8) + "px"
        : 'width: auto';
});
exports.SelectionBlocker = styled_components_1.default.div(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  user-select: none;\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  user-select: none;\n"])));
exports.PaddedBreak = styled_components_1.default.p(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n  margin-top: 10px !important;\n  margin-bottom: 10px;\n"], ["\n  margin-top: 10px !important;\n  margin-bottom: 10px;\n"])));
exports.SliderWrapper = styled_components_1.default.div(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  .zoom_button svg {\n    position: relative;\n    left: -2px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  .zoom_button svg {\n    position: relative;\n    left: -2px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map