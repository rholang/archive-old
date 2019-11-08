"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
exports.blanketColor = colors_1.N700A;
var overlayZindex = constants_1.layers.modal();
exports.MediaEditorContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n"], ["\n  position: absolute;\n  top: 0;\n"])));
exports.MediaEditorContainer.displayName = 'MediaEditorContainer';
exports.OutputArea = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  overflow: hidden;\n"], ["\n  position: absolute;\n  overflow: hidden;\n"])));
exports.OutputArea.displayName = 'OutputArea';
exports.DrawingCanvas = styled_components_1.default.canvas(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n"])));
exports.DrawingCanvas.displayName = 'DrawingCanvas';
exports.SupplementaryCanvas = styled_components_1.default.canvas(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n"], ["\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n"])));
exports.SupplementaryCanvas.displayName = 'SupplementaryCanvas';
// TODO Check with transparent canvas, because DefaultKeyboardInput makes the text area visible to get focus.
// https://jira.atlassian.com/browse/FIL-4059
exports.HiddenTextArea = styled_components_1.default.textarea(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow to get the keyboard focus */\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  resize: none;\n  opacity: 0;\n"], ["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow to get the keyboard focus */\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  resize: none;\n  opacity: 0;\n"])));
exports.HiddenTextArea.displayName = 'HiddenTextArea';
exports.HiddenTextHelperDiv = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow us to call getClientBoundingRect() for children */\n  left: 0;\n  top: 0;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  white-space: pre; /* to preserve multiple whitespace characters and not to break lines */\n"], ["\n  position: absolute;\n  display: block;\n  visibility: hidden; /* display:none won't allow us to call getClientBoundingRect() for children */\n  left: 0;\n  top: 0;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  white-space: pre; /* to preserve multiple whitespace characters and not to break lines */\n"])));
exports.HiddenTextHelperDiv.displayName = 'HiddenTextHelperDiv';
exports.ToolbarContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  width: 32px;\n  height: 392px;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 8px;\n"], ["\n  width: 32px;\n  height: 392px;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 8px;\n"])), colors_1.N600A);
exports.ToolbarContainer.displayName = 'ToolbarContainer';
exports.ColorSquare = styled_components_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  background-color: ", ";\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: ", ";\n  border-style: solid;\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  background-color: ", ";\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: ", ";\n  border-style: solid;\n"])), function (props) { return props.color || 'transparent'; }, colors_1.N50A);
exports.ColorSquare.displayName = 'ColorSquare';
exports.LineWidthBackCircle = styled_components_1.default.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 6px;\n  background-color: ", ";\n  border-radius: 10px;\n"], ["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 6px;\n  background-color: ", ";\n  border-radius: 10px;\n"])), colors_1.N200);
exports.LineWidthBackCircle.displayName = 'LineWidthBackCircle';
exports.LineWidthFrontCircle = styled_components_1.default.div(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  margin: ", ";\n"], ["\n  width: ",
    ";\n  height: ",
    ";\n  background-color: ", ";\n  border-radius: 50%;\n  margin: ",
    ";\n"])), function (props) {
    return props.width ? props.width + "px" : '0';
}, function (props) {
    return props.width ? props.width + "px" : '0';
}, colors_1.N40, function (props) {
    return props.width ? 10 - props.width / 2 + "px" : '0';
});
exports.LineWidthFrontCircle.displayName = 'LineWidthFrontCircle';
exports.ToolIcon = styled_components_1.default.div(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  color: ", ";\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  color: ", ";\n"])), colors_1.N40);
exports.ToolIcon.displayName = 'ToolIcon';
// TODO This is copy paste from media-viewer
exports.Blanket = styled_components_1.default.div(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"])), exports.blanketColor, overlayZindex);
exports.Blanket.displayName = 'Blanket';
exports.SpinnerWrapper = styled_components_1.default.div(templateObject_13 || (templateObject_13 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
exports.SpinnerWrapper.displayName = 'SpinnerWrapper';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=styled.js.map