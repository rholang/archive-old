"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function Indentation(props) {
    return (React.createElement("div", { className: "fabric-editor-block-mark fabric-editor-indentation-mark", "data-level": props.level }, props.children));
}
exports.default = Indentation;
//# sourceMappingURL=indentation.js.map