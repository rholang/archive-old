import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { borderRadius, colors, elevation, typography } from '@atlaskit/theme';
import gridSizeTimes from '../../util/gridSizeTimes';
var getSelectedCardColor = function (props) {
    return props.isSelected && "" + colors.B50;
};
export var Screen = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 640px;\n  margin-bottom: ", "px;\n"], ["\n  width: 640px;\n  margin-bottom: ", "px;\n"])), gridSizeTimes(4));
export var Title = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"], ["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"])), typography.h700, gridSizeTimes(4));
export var SectionCard = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  padding: ", "px;\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px;\n  ", ";\n  margin-top: ", "px;\n"], ["\n  position: relative;\n  display: flex;\n  padding: ", "px;\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px;\n  ", ";\n  margin-top: ", "px;\n"])), gridSizeTimes(2.5), function (props) { return getSelectedCardColor(props); }, borderRadius(), elevation.e200, gridSizeTimes(2));
export var Avatar = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"])), gridSizeTimes(2.5), gridSizeTimes(1));
export var UserDetails = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px;\n  font-weight: 600;\n  color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px;\n  font-weight: 600;\n  color: ", ";\n"])), gridSizeTimes(1.5), colors.B400);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map