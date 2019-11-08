"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("../types");
var propToFeature = function (props, key) {
    switch (key) {
        case types_1.Feature.xflow:
            return typeof props.triggerXFlow === 'function';
        default:
            return Boolean(props[key]);
    }
};
function mapPropsToFeatures(props) {
    return Object.keys(types_1.Feature).reduce(function (acc, key) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = propToFeature(props, key), _a)));
    }, {});
}
exports.default = mapPropsToFeatures;
//# sourceMappingURL=map-props-to-features.js.map