import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { layers } from '@atlaskit/theme/constants';
import { N700A, N600A, N50A, N200, N40 } from '@atlaskit/theme/colors';
export var blanketColor = N700A;
var overlayZindex = layers.modal();
export var MediaEditorContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n"], ["\n  position: absolute;\n  top: 0;\n"])));
MediaEditorContainer.displayName = 'MediaEditorContainer';
export var OutputArea = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  overflow: hidden;\n"], ["\n  position: absolute;\n  overflow: hidden;\n"])));
OutputArea.displayName = 'OutputArea';
export var DrawingCanvas = styled.canvas(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n"])));
DrawingCanvas.displayName = 'DrawingCanvas';
export var SupplementaryCanvas = styled.canvas(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n"], ["\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n"])));
SupplementaryCanvas.displayName = 'SupplementaryCanvas';
// TODO Check with transparent canvas, because DefaultKeyboardInput makes the text area visible to get focus.
// https://jira.atlassian.com/browse/FIL-4059
export var HiddenTextArea = styled.textarea(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow to get the keyboard focus */\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  resize: none;\n  opacity: 0;\n"], ["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow to get the keyboard focus */\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  resize: none;\n  opacity: 0;\n"])));
HiddenTextArea.displayName = 'HiddenTextArea';
export var HiddenTextHelperDiv = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow us to call getClientBoundingRect() for children */\n  left: 0;\n  top: 0;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  white-space: pre; /* to preserve multiple whitespace characters and not to break lines */\n"], ["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow us to call getClientBoundingRect() for children */\n  left: 0;\n  top: 0;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  white-space: pre; /* to preserve multiple whitespace characters and not to break lines */\n"])));
HiddenTextHelperDiv.displayName = 'HiddenTextHelperDiv';
export var ToolbarContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 32px;\n  height: 392px;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 8px;\n"], ["\n  width: 32px;\n  height: 392px;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 8px;\n"])), N600A);
ToolbarContainer.displayName = 'ToolbarContainer';
export var ColorSquare = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  background-color: ", ";\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: ", ";\n  border-style: solid;\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  background-color: ", ";\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: ", ";\n  border-style: solid;\n"])), function (props) { return props.color || 'transparent'; }, N50A);
ColorSquare.displayName = 'ColorSquare';
export var LineWidthBackCircle = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 6px;\n  background-color: ", ";\n  border-radius: 10px;\n"], ["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 6px;\n  background-color: ", ";\n  border-radius: 10px;\n"])), N200);
LineWidthBackCircle.displayName = 'LineWidthBackCircle';
export var LineWidthFrontCircle = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  margin: ", ";\n"], ["\n  width: ",
    ";\n  height: ",
    ";\n  background-color: ", ";\n  border-radius: 50%;\n  margin: ",
    ";\n"])), function (props) {
    return props.width ? props.width + "px" : '0';
}, function (props) {
    return props.width ? props.width + "px" : '0';
}, N40, function (props) {
    return props.width ? 10 - props.width / 2 + "px" : '0';
});
LineWidthFrontCircle.displayName = 'LineWidthFrontCircle';
export var ToolIcon = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  color: ", ";\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  color: ", ";\n"])), N40);
ToolIcon.displayName = 'ToolIcon';
// TODO This is copy paste from media-viewer
export var Blanket = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"])), blanketColor, overlayZindex);
Blanket.displayName = 'Blanket';
export var SpinnerWrapper = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
SpinnerWrapper.displayName = 'SpinnerWrapper';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=styled.js.map