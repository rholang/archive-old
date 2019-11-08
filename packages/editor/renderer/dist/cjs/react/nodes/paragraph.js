"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var inline_1 = tslib_1.__importDefault(require("./inline"));
function Paragraph(_a) {
    var children = _a.children;
    return (React.createElement("p", null,
        React.createElement(inline_1.default, null, children)));
}
exports.default = Paragraph;
//# sourceMappingURL=paragraph.js.map