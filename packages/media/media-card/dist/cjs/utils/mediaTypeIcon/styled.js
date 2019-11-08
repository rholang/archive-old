"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var typeToColorMap = {
    image: colors_1.Y200,
    audio: colors_1.P200,
    video: '#ff7143',
    doc: colors_1.B300,
    unknown: '#3dc7dc',
};
exports.IconWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  color: ",
    ";\n"])), function (_a) {
    var type = _a.type;
    return typeToColorMap[type] || typeToColorMap.unknown;
});
var templateObject_1;
//# sourceMappingURL=styled.js.map