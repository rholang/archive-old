"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore: unused variable
// prettier-ignore
var react_lazily_render_1 = tslib_1.__importDefault(require("react-lazily-render"));
// @ts-ignore: unused variable
// prettier-ignore
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var media_ui_1 = require("@atlaskit/media-ui");
// We need to override the element provided by the library
// in order to make it get the parent dimensions.
exports.Wrapper = styled_components_1.default(react_lazily_render_1.default)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), media_ui_1.size());
var templateObject_1;
//# sourceMappingURL=styled.js.map