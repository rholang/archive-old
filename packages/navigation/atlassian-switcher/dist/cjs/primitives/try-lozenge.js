"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var lozenge_1 = tslib_1.__importDefault(require("@atlaskit/lozenge"));
var theme_1 = require("@atlaskit/theme");
exports.OuterLozengeContainer = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  margin-left: ", "px;\n"], ["\n  display: inline-block;\n  margin-left: ", "px;\n"])), theme_1.gridSize());
exports.InnerLozengeContainer = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding-left: ", "px;\n  padding-right: ", "px;\n"], ["\n  padding-left: ", "px;\n  padding-right: ", "px;\n"])), theme_1.gridSize(), theme_1.gridSize());
exports.default = (function (_a) {
    var children = _a.children, _b = _a.isBold, isBold = _b === void 0 ? true : _b, props = tslib_1.__rest(_a, ["children", "isBold"]);
    return (React.createElement(exports.OuterLozengeContainer, null,
        React.createElement(lozenge_1.default, tslib_1.__assign({ appearance: "inprogress", isBold: isBold }, props),
            React.createElement(exports.InnerLozengeContainer, null, children))));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=try-lozenge.js.map