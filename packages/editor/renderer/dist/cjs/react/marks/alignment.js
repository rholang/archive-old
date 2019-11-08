"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var MarkWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (props) {
    return props['data-align'] && styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      text-align: ", ";\n    "], ["\n      text-align: ", ";\n    "])), adf_schema_1.alignmentPositionMap[props['data-align']]);
});
function Alignment(props) {
    return (React.createElement(MarkWrapper, { className: "fabric-editor-block-mark", "data-align": props.align }, props.children));
}
exports.default = Alignment;
var templateObject_1, templateObject_2;
//# sourceMappingURL=alignment.js.map