"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function PreventClickThrough(_a) {
    var children = _a.children;
    return (React.createElement("span", { onClick: function (event) {
            event.stopPropagation();
            event.preventDefault();
        } }, children));
}
exports.PreventClickThrough = PreventClickThrough;
//# sourceMappingURL=preventClickThrough.js.map