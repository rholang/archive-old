import { __makeTemplateObject } from "tslib";
import styled, { keyframes } from 'styled-components';
import { borderRadius, gridSize } from '@atlaskit/theme/constants';
import { N200 } from '@atlaskit/theme/colors';
import { checkeredBg } from './images';
import { AVATAR_DIALOG_WIDTH } from '../avatar-picker-dialog/layout-const';
var spin = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"], ["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"])));
export var ImageBg = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 256px;\n  height: 256px;\n  background: url('", "');\n  border-radius: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 256px;\n  height: 256px;\n  background: url('", "');\n  border-radius: ", ";\n"])), checkeredBg, borderRadius());
export var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  box-sizing: border-box;\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  position: relative;\n"], ["\n  width: ", "px;\n  box-sizing: border-box;\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  position: relative;\n"])), gridSize() * 32);
export var SliderContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-top: ", "px;\n\n  input {\n    box-sizing: content-box;\n    padding: 0;\n  }\n  background-color: #fff;\n"], ["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-top: ", "px;\n\n  input {\n    box-sizing: content-box;\n    padding: 0;\n  }\n  background-color: #fff;\n"])), gridSize());
export var FileInput = styled.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
export var ImageUploader = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px 20px 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px 20px 10px;\n"])));
var droppingAnimation = "\n  border-color: #0e56c4;\n  animation: " + spin + " 8s linear infinite;\n";
export var DragZone = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  position: relative;\n  border-radius: 100%;\n  transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &::after {\n    content: '';\n    border: ", ";\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n  }\n\n  ", ";\n"], ["\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  position: relative;\n  border-radius: 100%;\n  transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &::after {\n    content: '';\n    border: ",
    ";\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n  }\n\n  ",
    ";\n"])), function (props) {
    return props.showBorder ? '2px dashed #d0d6d0' : 'none';
}, function (props) {
    return (props.isDroppingFile &&
        "\n    background-color: #ddecfe;\n    &:after {\n      " + droppingAnimation + "\n    }\n  ") ||
        '';
});
DragZone.displayName = 'DragZone';
export var DragZoneImage = styled.img(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100px;\n"], ["\n  width: 100px;\n"])));
export var DragZoneText = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: center;\n  color: ", ";\n  ", ";\n"], ["\n  text-align: center;\n  color: ", ";\n  ",
    ";\n"])), N200, function (props) {
    return props.isFullSize
        ? "width: " + (AVATAR_DIALOG_WIDTH - gridSize() * 8) + "px"
        : 'width: auto';
});
export var SelectionBlocker = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  user-select: none;\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  user-select: none;\n"])));
export var PaddedBreak = styled.p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-top: 10px !important;\n  margin-bottom: 10px;\n"], ["\n  margin-top: 10px !important;\n  margin-bottom: 10px;\n"])));
export var SliderWrapper = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  .zoom_button svg {\n    position: relative;\n    left: -2px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  .zoom_button svg {\n    position: relative;\n    left: -2px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map