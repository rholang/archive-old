"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function Inline(props) {
    var children = props.children;
    var childCount = React.Children.toArray(children).length;
    if (!childCount) {
        return React.createElement(React.Fragment, null, "\u00A0");
    }
    return children;
}
exports.default = Inline;
//# sourceMappingURL=inline.js.map