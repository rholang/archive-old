import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { fontFamily } from '@atlaskit/theme/constants';
import { N30 } from '@atlaskit/theme/colors';
var MIN_HEIGHT = '498px';
export var MediaPickerPopupWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  cursor: default;\n  user-select: none;\n  font-family: ", ";\n  border-radius: 3px;\n  position: relative;\n\n  /* Ensure that the modal has a static size */\n  width: 968px;\n"], ["\n  display: flex;\n  cursor: default;\n  user-select: none;\n  font-family: ", ";\n  border-radius: 3px;\n  position: relative;\n\n  /* Ensure that the modal has a static size */\n  width: 968px;\n"])), fontFamily());
export var SidebarWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 235px;\n  min-width: 235px;\n  background-color: ", ";\n  min-height: ", ";\n"], ["\n  width: 235px;\n  min-width: 235px;\n  background-color: ", ";\n  min-height: ", ";\n"])), N30, MIN_HEIGHT);
export var ViewWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  /* Height of the Popup should never change */\n  height: calc(100vh - 200px);\n\n  background-color: white;\n  min-height: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  /* Height of the Popup should never change */\n  height: calc(100vh - 200px);\n\n  background-color: white;\n  min-height: ", ";\n"])), MIN_HEIGHT);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map