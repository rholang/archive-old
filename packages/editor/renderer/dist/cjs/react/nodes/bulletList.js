"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
function BulletList(props) {
    return React.createElement("ul", { className: adf_schema_1.bulletListSelector.substr(1) }, props.children);
}
exports.default = BulletList;
//# sourceMappingURL=bulletList.js.map