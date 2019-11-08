"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function LayoutSection(props) {
    return (React.createElement("div", { "data-layout-column": true, "data-column-width": props.width, style: { flexBasis: props.width + "%" } }, props.children));
}
exports.default = LayoutSection;
//# sourceMappingURL=layoutColumn.js.map