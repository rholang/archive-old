import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { borderRadius } from '@atlaskit/theme/constants';
import { N50A } from '@atlaskit/theme/colors';
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  border-radius: ", "px;\n"], ["\n  position: relative;\n  overflow: hidden;\n  border-radius: ", "px;\n"])), borderRadius());
export var ImageContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  /* Is needed so image is not selected, when dragged */\n  -webkit-user-select: none; /* Chrome all / Safari all */\n  -moz-user-select: none; /* Firefox all */\n  -ms-user-select: none; /* IE 10+ */\n  user-select: none; /* Likely future */\n  border-radius: ", "px;\n"], ["\n  position: absolute;\n  /* Is needed so image is not selected, when dragged */\n  -webkit-user-select: none; /* Chrome all / Safari all */\n  -moz-user-select: none; /* Firefox all */\n  -ms-user-select: none; /* IE 10+ */\n  user-select: none; /* Likely future */\n  border-radius: ", "px;\n"])), borderRadius());
export var CONTAINER_PADDING = 28;
var Mask = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  bottom: ", "px;\n  left: ", "px;\n  right: ", "px;\n  box-shadow: 0 0 0 100px rgba(255, 255, 255, 0.5);\n"], ["\n  position: absolute;\n  top: ", "px;\n  bottom: ", "px;\n  left: ", "px;\n  right: ", "px;\n  box-shadow: 0 0 0 100px rgba(255, 255, 255, 0.5);\n"])), CONTAINER_PADDING, CONTAINER_PADDING, CONTAINER_PADDING, CONTAINER_PADDING);
export var RectMask = styled(Mask)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-radius: ", "px;\n"], ["\n  border-radius: ", "px;\n"])), borderRadius());
export var CircularMask = styled(Mask)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 500px;\n"], ["\n  border-radius: 500px;\n"])));
export var DragOverlay = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: move;\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: move;\n"])));
export var RemoveImageContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  right: 4px;\n  top: 4px;\n"], ["\n  position: absolute;\n  right: 4px;\n  top: 4px;\n"])));
export var RemoveImageButton = styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border-radius: ", "px;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n\n  svg {\n    position: absolute;\n    top: 4px;\n    left: 4px;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  border-radius: ", "px;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n\n  svg {\n    position: absolute;\n    top: 4px;\n    left: 4px;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), borderRadius(), N50A);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map