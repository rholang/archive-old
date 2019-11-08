"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var mixins_1 = require("../../../mixins");
var borderRadius = "border-radius: 3px 3px 0 0;";
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  height: 0;\n  padding-bottom: 56.25%;\n  color: ", ";\n  ", " background-color: ", ";\n  ", ";\n"], ["\n  position: relative;\n  height: 0;\n  padding-bottom: 56.25%;\n  color: ", ";\n  ", " background-color: ", ";\n  ", ";\n"])), colors_1.N40A, borderRadius, colors_1.N30, mixins_1.fadeIn);
exports.IconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
exports.ImageWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ", " ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ", " ",
    ";\n"])), borderRadius, function (_a) {
    var url = _a.url;
    return "\n    background-image: url(" + url + ");\n    background-repeat: no-repeat, repeat;\n    background-position: center, center;\n    background-size: cover, auto;\n  ";
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map