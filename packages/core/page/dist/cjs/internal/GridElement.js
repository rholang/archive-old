"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var vars_1 = require("./vars");
var getMargin = function (props) {
    return props.theme.isNestedGrid ? "-" + vars_1.spacing[props.theme.spacing] + "px" : 'auto';
};
exports.getMargin = getMargin;
var getMaxWidth = function (props) {
    return props.layout === 'fixed'
        ? vars_1.defaultGridColumnWidth * props.theme.columns + "px"
        : '100%';
};
exports.getMaxWidth = getMaxWidth;
var getPadding = function (props) { return vars_1.spacing[props.theme.spacing] / 2 + "px"; };
exports.getPadding = getPadding;
var Grid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 ", ";\n  max-width: ", ";\n  padding: 0 ", ";\n  position: relative;\n"], ["\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 ", ";\n  max-width: ", ";\n  padding: 0 ", ";\n  position: relative;\n"])), getMargin, getMaxWidth, getPadding);
exports.default = Grid;
var templateObject_1;
//# sourceMappingURL=GridElement.js.map