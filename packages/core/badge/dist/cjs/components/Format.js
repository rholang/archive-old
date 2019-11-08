"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Fragment = react_1.default.Fragment;
var Format = function (props) {
    var formatted = '';
    var _a = props.children, children = _a === void 0 ? 0 : _a, _b = props.max, max = _b === void 0 ? 0 : _b;
    if (children < 0) {
        children = 0;
    }
    if (max < 0) {
        max = 0;
    }
    if (max && max < children) {
        formatted = max + "+";
    }
    else if (children === Infinity) {
        formatted = '∞';
    }
    else {
        formatted = children;
    }
    return react_1.default.createElement(Fragment, null, formatted);
};
exports.default = Format;
//# sourceMappingURL=Format.js.map