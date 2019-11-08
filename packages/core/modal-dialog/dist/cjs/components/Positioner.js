"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Modal_1 = require("../styled/Modal");
var Positioner = function Positioner(_a) {
    var scrollBehavior = _a.scrollBehavior, props = tslib_1.__rest(_a, ["scrollBehavior"]);
    var PositionComponent = scrollBehavior === 'inside' ? Modal_1.PositionerAbsolute : Modal_1.PositionerRelative;
    return react_1.default.createElement(PositionComponent, tslib_1.__assign({}, props));
};
exports.default = Positioner;
//# sourceMappingURL=Positioner.js.map