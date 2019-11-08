"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
exports.default = (function (_a) {
    var id = _a.id, annotationType = _a.annotationType, children = _a.children;
    return (React.createElement("span", { "data-mark-type": "annotation", "data-mark-annotation-type": annotationType, "data-id": id }, children));
});
//# sourceMappingURL=annotation.js.map