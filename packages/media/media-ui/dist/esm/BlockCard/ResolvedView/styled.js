import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { N900, N300, N800, N30 } from '@atlaskit/theme/colors';
import { ellipsis, borderRadius, size } from '../../mixins';
var thumbnailWidth = 40;
export var maxAvatarCount = 6;
export var ContentWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 8px 12px 12px 12px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 8px 12px 12px 12px;\n"])));
export var LeftWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* FIXME: top padding dependent on content */\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 4px;\n  margin-right: 8px;\n  min-width: ", "px;\n"], ["\n  /* FIXME: top padding dependent on content */\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 4px;\n  margin-right: 8px;\n  min-width: ", "px;\n"])), thumbnailWidth);
export var RightWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-grow: 1;\n  min-width: 0; /* for Chrome ellipsis */\n  flex-basis: 0; /* for IE ellipsis */\n"], ["\n  flex-grow: 1;\n  min-width: 0; /* for Chrome ellipsis */\n  flex-basis: 0; /* for IE ellipsis */\n"])));
export var FooterWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 8px;\n"], ["\n  display: flex;\n  margin-top: 8px;\n"])));
export var Title = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"])), N900, 20 / 16, 20 * 4);
export var Byline = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 4px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  ", ";\n"], ["\n  margin-top: 4px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  ", ";\n"])), N300, 16 / 12, ellipsis('100%'));
export var Description = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 7px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"], ["\n  margin-top: 7px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"])), N800, 18 / 12, 18 * 3);
export var IconWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-top: 4px;\n"], ["\n  margin-top: 4px;\n"])));
export var Thumbnail = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", " ", " float: right;\n  margin: 4px 0 12px 12px;\n  background-color: ", ";\n  background-image: url(", ");\n  background-size: cover;\n"], ["\n  ", " ", " float: right;\n  margin: 4px 0 12px 12px;\n  background-color: ", ";\n  background-image: url(", ");\n  background-size: cover;\n"])), borderRadius, size(48), N30, function (_a) {
    var src = _a.src;
    return src;
});
export var UsersWrapper = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"])));
export var ActionsWrapper = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-top: 8px;\n  text-align: right;\n\n  > * {\n    margin-top: 4px;\n  }\n\n  > * + * {\n    margin-left: 4px;\n  }\n"], ["\n  margin-top: 8px;\n  text-align: right;\n\n  > * {\n    margin-top: 4px;\n  }\n\n  > * + * {\n    margin-left: 4px;\n  }\n"])));
export var AlertWrapper = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  /* z-index has to be 1 higher than the number of avatars in the avatar stack */\n  z-index: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  /* z-index has to be 1 higher than the number of avatars in the avatar stack */\n  z-index: ", ";\n"])), maxAvatarCount + 1);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map