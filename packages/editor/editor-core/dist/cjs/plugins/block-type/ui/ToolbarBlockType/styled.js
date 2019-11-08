"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var editor_common_1 = require("@atlaskit/editor-common");
var styles_1 = require("../../../../ui/styles");
exports.BlockTypeMenuItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  > {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 0;\n    }\n  }\n  ", ";\n"], ["\n  ", ";\n  > {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 0;\n    }\n  }\n  ", ";\n"])), editor_common_1.headingsSharedStyles, function (props) { return (props.selected ? props.tagName + " { color: white }" : ''); });
exports.KeyboardShortcut = styled_components_1.default(styles_1.Shortcut)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", "\n  margin-left: 16px;\n"], ["\n  ",
    "\n  margin-left: 16px;\n"])), function (props) {
    return props.selected ? "color: " + theme_1.colors.N400 + ";" : '';
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map