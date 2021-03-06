import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { borderRadius, gridSize, math, elevation, 
// @ts-ignore - it's exported the type is just missing
fontSizeSmall, } from '@atlaskit/theme';
import { headerBgColor, headerBgColorDisabledUser, headerTextColorInactive, headerTextColor, appLabelBgColor, appLabelTextColor, labelTextColor, labelIconColor, bgColor, } from '../styled/constants';
var getFullNameMargin = function (props) {
    return props.noMeta
        ? gridSize() * 4.5 + "px 0 " + gridSize() * 1.5 + "px 0"
        : gridSize() * 1.5 + "px 0 0 0";
};
export var CardContainerEmpty = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var CardTriggerWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inherit;\n"], ["\n  display: inherit;\n"])));
export var CardElevationWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  ", ";\n  width: ", "px;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  ",
    ";\n  width: ", "px;\n"])), bgColor, borderRadius, function (props) {
    return props.customElevation
        ? elevation[props.customElevation] || ''
        : elevation.e200;
}, math.multiply(gridSize, 45));
export var ProfileImage = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), math.multiply(gridSize, 3), math.multiply(gridSize, 3));
export var ActionsFlexSpacer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1 0 auto;\n"], ["\n  flex: 1 0 auto;\n"])));
export var ActionButtonGroup = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  user-select: none;\n  margin: ", "px 0 0 0;\n  text-align: right;\n\n  button {\n    margin-left: ", "px;\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"], ["\n  user-select: none;\n  margin: ", "px 0 0 0;\n  text-align: right;\n\n  button {\n    margin-left: ", "px;\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"])), math.multiply(gridSize, 2), gridSize);
export var CardContent = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: ", "px;\n"])), math.multiply(gridSize, 17));
export var DetailsGroup = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  width: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  width: ", "px;\n"])), math.multiply(gridSize, 14.5), math.multiply(gridSize, 24.5));
export var DisabledInfo = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: ", ";\n  margin: ", "px 0 0 0;\n  line-height: ", "px;\n"], ["\n  font-size: ", "px;\n  color: ", ";\n  margin: ", "px 0 0 0;\n  line-height: ", "px;\n"])), fontSizeSmall, labelTextColor, math.multiply(gridSize, 1.5), math.multiply(gridSize, 2));
export var FullNameLabel = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font-size: 18px;\n  color: ", ";\n  margin: ", ";\n  line-height: ", "em;\n"], ["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font-size: 18px;\n  color: ",
    ";\n  margin: ", ";\n  line-height: ", "em;\n"])), function (props) {
    return props.isDisabledAccount ? headerTextColorInactive : headerTextColor;
}, function (props) { return getFullNameMargin(props); }, math.divide(function () { return 24; }, 18));
export var LozengeWrapper = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-top: ", "px;\n  text-transform: uppercase;\n  display: block;\n"], ["\n  margin-top: ", "px;\n  text-transform: uppercase;\n  display: block;\n"])), math.multiply(gridSize, 2));
export var JobTitleLabel = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font-size: 14px;\n  color: ", ";\n  margin: 0 0 ", "px 0;\n  line-height: ", "em;\n"], ["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font-size: 14px;\n  color: ", ";\n  margin: 0 0 ", "px 0;\n  line-height: ", "em;\n"])), headerTextColor, math.multiply(gridSize, 1.5), math.divide(function () { return 24; }, 14));
export var AppTitleLabel = styled.span(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  padding: 0 6px;\n  width: fit-content;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  font-size: 12px;\n  margin: 4px 0 ", "px 0;\n  line-height: ", "em;\n"], ["\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  padding: 0 6px;\n  width: fit-content;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  font-size: 12px;\n  margin: 4px 0 ", "px 0;\n  line-height: ", "em;\n"])), appLabelBgColor, appLabelTextColor, borderRadius(), math.multiply(gridSize, 1.5), math.divide(function () { return 24; }, 14));
export var SpinnerContainer = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  position: relative;\n"], ["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  position: relative;\n"])), math.multiply(gridSize, 12));
export var CardContainer = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-image: linear-gradient(\n    to bottom,\n    ", "\n      0%,\n    ", "\n      100%\n  );\n  background-repeat: no-repeat;\n  background-size: 100% ", "px;\n  box-sizing: content-box;\n  padding: ", "px;\n"], ["\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-image: linear-gradient(\n    to bottom,\n    ",
    "\n      0%,\n    ",
    "\n      100%\n  );\n  background-repeat: no-repeat;\n  background-size: 100% ", "px;\n  box-sizing: content-box;\n  padding: ", "px;\n"])), function (props) {
    return props.isDisabledUser ? headerBgColorDisabledUser : headerBgColor;
}, function (props) {
    return props.isDisabledUser ? headerBgColorDisabledUser : headerBgColor;
}, math.multiply(gridSize, 12), math.multiply(gridSize, 3));
export var DetailsLabel = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  line-height: ", "px;\n  font-size: ", "px;\n  margin: ", "px 0 0 0;\n  white-space: nowrap;\n\n  & + & {\n    margin-top: ", "px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  line-height: ", "px;\n  font-size: ", "px;\n  margin: ", "px 0 0 0;\n  white-space: nowrap;\n\n  & + & {\n    margin-top: ", "px;\n  }\n"])), math.multiply(gridSize, 3), math.multiply(gridSize, 1.5), math.multiply(gridSize, 2), math.multiply(gridSize, 0.25));
export var DetailsLabelIcon = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: flex;\n  flex-shrink: 0;\n  color: ", ";\n  width: ", "px;\n  height: ", "px;\n  padding: ", "px;\n  vertical-align: top;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  display: flex;\n  flex-shrink: 0;\n  color: ", ";\n  width: ", "px;\n  height: ", "px;\n  padding: ", "px;\n  vertical-align: top;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])), labelIconColor, math.multiply(gridSize, 2), math.multiply(gridSize, 2), math.multiply(gridSize, 0.5));
export var DetailsLabelText = styled.span(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  padding-left: ", "px;\n"], ["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  padding-left: ", "px;\n"])), labelTextColor, math.multiply(gridSize, 0.5));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
//# sourceMappingURL=Card.js.map