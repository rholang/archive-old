"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var constants_1 = require("@atlaskit/theme/constants");
exports.SearchContainer = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding-bottom: ", "px;\n"], ["\n  padding-bottom: ", "px;\n"])), constants_1.gridSize() * 3);
exports.SearchResultsList = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding-top: ", "px;\n  position: relative;\n"], ["\n  padding-top: ", "px;\n  position: relative;\n"])), 3 * constants_1.gridSize());
exports.SearchResultEmptyMessage = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  padding-top: ", "px;\n  text-align: center;\n  font-weight: bold;\n"], ["\n  padding-top: ", "px;\n  text-align: center;\n  font-weight: bold;\n"])), 3 * constants_1.gridSize());
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map