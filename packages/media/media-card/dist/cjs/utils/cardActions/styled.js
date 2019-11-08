"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var media_ui_1 = require("@atlaskit/media-ui");
var styles_1 = require("../../styles");
exports.Wrapper = styled_components_1.default(styles_1.Root)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  position: relative;\n  line-height: 0;\n"], ["\n  display: flex;\n  position: relative;\n  line-height: 0;\n"])));
exports.CardActionButton = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", " ", " ", " color: ", ";\n\n  &:hover {\n    cursor: pointer;\n    background-color: rgba(9, 30, 66, 0.06);\n  }\n"], ["\n  ", " ", " ", " color: ", ";\n\n  &:hover {\n    cursor: pointer;\n    background-color: rgba(9, 30, 66, 0.06);\n  }\n"])), media_ui_1.center, media_ui_1.borderRadius, media_ui_1.size(26), colors_1.N500);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map