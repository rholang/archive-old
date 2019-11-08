import { __assign } from "tslib";
import { Feature } from '../types';
var propToFeature = function (props, key) {
    switch (key) {
        case Feature.xflow:
            return typeof props.triggerXFlow === 'function';
        default:
            return Boolean(props[key]);
    }
};
export default function mapPropsToFeatures(props) {
    return Object.keys(Feature).reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = propToFeature(props, key), _a)));
    }, {});
}
//# sourceMappingURL=map-props-to-features.js.map