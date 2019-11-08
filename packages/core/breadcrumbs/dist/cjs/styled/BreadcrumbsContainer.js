"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var ThemeColor = components_1.themed({ light: colors_1.N300, dark: colors_1.N300 });
var BreadcrumbsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n"])), ThemeColor);
BreadcrumbsContainer.displayName = 'BreadcrumbsContainer';
exports.default = BreadcrumbsContainer;
var templateObject_1;
//# sourceMappingURL=BreadcrumbsContainer.js.map