"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  left: 0;\n  top: 0;\n  display: ", ";\n  text-align: center;\n  z-index: 100;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  left: 0;\n  top: 0;\n  display: ", ";\n  text-align: center;\n  z-index: 100;\n  align-items: center;\n  justify-content: center;\n"])), function (props) { return (props.isActive ? 'flex' : 'none'); });
var dropzoneAppear = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  from {\n    opacity: 0;\n    transform: translate(0, 30px);\n  }\n"], ["\n  from {\n    opacity: 0;\n    transform: translate(0, 30px);\n  }\n"])));
exports.Content = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  animation: ", " 0.5s;\n"], ["\n  animation: ", " 0.5s;\n"])), dropzoneAppear);
// TODO: Use Atlaskit color
// https://product-fabric.atlassian.net/browse/MSW-156
exports.Label = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  margin-top: 10px;\n  font-size: 16px;\n  color: #165ecc;\n"], ["\n  margin-top: 10px;\n  font-size: 16px;\n  color: #165ecc;\n"])));
/* needed to prevent child dragleave events */
exports.Glass = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 101;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 101;\n"])));
exports.StyledIcon = styled_components_1.default.svg(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  width: 70px;\n  height: 70px;\n"], ["\n  width: 70px;\n  height: 70px;\n"])));
exports.StyledSvgGroup = styled_components_1.default.g(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map