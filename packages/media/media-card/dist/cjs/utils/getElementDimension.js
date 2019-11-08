"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ReactDOM = tslib_1.__importStar(require("react-dom"));
exports.getElementDimension = function (component, dimension) {
    var element = ReactDOM.findDOMNode(component);
    var dimensionValue = element.getBoundingClientRect()[dimension];
    return Math.round(dimensionValue);
};
//# sourceMappingURL=getElementDimension.js.map