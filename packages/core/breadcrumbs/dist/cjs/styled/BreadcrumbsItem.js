"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var height = (constants_1.gridSize() * 3) / parseInt(constants_1.fontSize(), 10);
var BreadcrumbsItemElement = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  height: ", "em;\n  line-height: ", "em;\n  padding: 0;\n  box-sizing: border-box;\n  max-width: 100%;\n"], ["\n  display: flex;\n  flex-direction: row;\n  height: ", "em;\n  line-height: ", "em;\n  padding: 0;\n  box-sizing: border-box;\n  max-width: 100%;\n"])), height, height);
BreadcrumbsItemElement.displayName = 'BreadcrumbsItemElement';
exports.default = BreadcrumbsItemElement;
var templateObject_1;
//# sourceMappingURL=BreadcrumbsItem.js.map