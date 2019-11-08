"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEllipsis = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  padding: 0 8px;\n"], ["\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  padding: 0 8px;\n"])));
function renderEllipsis(_a) {
    var key = _a.key;
    return react_1.default.createElement(StyledEllipsis, { key: key }, "...");
}
exports.default = renderEllipsis;
var templateObject_1;
//# sourceMappingURL=renderEllipsis.js.map