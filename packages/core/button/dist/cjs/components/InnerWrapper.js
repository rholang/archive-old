"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
exports.default = (function (_a) {
    var fit = _a.fit, children = _a.children, rest = tslib_1.__rest(_a, ["fit", "children"]);
    return (core_1.jsx("span", tslib_1.__assign({ css: tslib_1.__assign(tslib_1.__assign({ alignSelf: 'center', display: 'inline-flex', flexWrap: 'nowrap', maxWidth: '100%', position: 'relative' }, (fit && { width: '100%' })), (fit && { justifyContent: 'center' })) }, rest), children));
});
//# sourceMappingURL=InnerWrapper.js.map