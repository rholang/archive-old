"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
function OrderedList(props) {
    return (React.createElement("ol", { className: adf_schema_1.orderedListSelector.substr(1), start: props.start }, props.children));
}
exports.default = OrderedList;
//# sourceMappingURL=orderedList.js.map