import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { absolute, borderRadius, size } from '@atlaskit/media-ui';
import { themed } from '@atlaskit/theme/components';
import { N20, DN50, N0 } from '@atlaskit/theme/colors';
import { Root, cardShadow } from '../../styles';
import { getSelectedBorderStyle } from '../../styles/getSelectedBorderStyle';
var getShadowAttribute = function (props) {
    var disableOverlay = props.disableOverlay;
    return disableOverlay ? '' : cardShadow;
};
var getBackgroundColor = function (props) {
    var mediaType = props.mediaType;
    return "background: " + (mediaType === 'image'
        ? 'transparent'
        : themed({ light: N20, dark: DN50 })(props)) + ";";
};
export var Wrapper = styled(Root)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n\n  line-height: normal;\n  position: relative;\n\n  ", "\n\n  ", " .wrapper {\n    ", ";\n    display: block;\n    height: inherit;\n    position: relative;\n\n    .img-wrapper {\n      position: relative;\n      width: inherit;\n      height: inherit;\n      display: block;\n      overflow: hidden;\n      ", "\n    }\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n\n  line-height: normal;\n  position: relative;\n\n  ", "\n\n  ", " .wrapper {\n    ", ";\n    display: block;\n    height: inherit;\n    position: relative;\n\n    .img-wrapper {\n      position: relative;\n      width: inherit;\n      height: inherit;\n      display: block;\n      overflow: hidden;\n      ", "\n    }\n  }\n"])), getShadowAttribute, borderRadius, getBackgroundColor, getSelectedBorderStyle, size(), borderRadius, borderRadius);
export var PlayIconWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  /* we want to override default icon size and hover state */\n  &:hover > * {\n    width: 64px;\n    height: 64px;\n  }\n\n  > * {\n    background: rgba(23, 43, 77, 0.7);\n    width: 56px;\n    height: 56px;\n    border-radius: 100%;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.1s;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  /* we want to override default icon size and hover state */\n  &:hover > * {\n    width: 64px;\n    height: 64px;\n  }\n\n  > * {\n    background: rgba(23, 43, 77, 0.7);\n    width: 56px;\n    height: 56px;\n    border-radius: 100%;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.1s;\n  }\n"])));
var bodyHeight = 26;
export var ProgressBarWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  height: inherit;\n"], ["\n  position: relative;\n  height: inherit;\n"])));
export var Overlay = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", " ", " border-radius: inherit;\n  background-color: rgba(9, 30, 66, 0.5);\n"], ["\n  ", " ", " border-radius: inherit;\n  background-color: rgba(9, 30, 66, 0.5);\n"])), absolute(), size());
export var Title = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", " width: 100%;\n  padding: 8px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 18px;\n  word-wrap: break-word;\n"], ["\n  ", " width: 100%;\n  padding: 8px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 18px;\n  word-wrap: break-word;\n"])), absolute(), N0);
export var Body = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 8px;\n  color: ", ";\n"], ["\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 8px;\n  color: ", ";\n"])), N0);
export var ProgressWrapper = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex-grow: 1;\n\n  /*\n    force the height to always be 20px (the height of the cancel icon),\n    so that the height of the progress bar doesn't jump when cards with\n    and without a cancel icon are rendered side-by-side.\n  */\n  height: ", "px;\n\n  /*\n    vertically center the progress bar within the 20px, keeping the progress bar full width\n  */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  flex-grow: 1;\n\n  /*\n    force the height to always be 20px (the height of the cancel icon),\n    so that the height of the progress bar doesn't jump when cards with\n    and without a cancel icon are rendered side-by-side.\n  */\n  height: ", "px;\n\n  /*\n    vertically center the progress bar within the 20px, keeping the progress bar full width\n  */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])), bodyHeight);
export var CardActionsWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-left: 4px;\n  /*\n    button must appear above overlay\n   */\n  z-index: 2;\n"], ["\n  margin-left: 4px;\n  /*\n    button must appear above overlay\n   */\n  z-index: 2;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map