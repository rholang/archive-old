import { __assign, __extends } from "tslib";
import * as React from 'react';
import { DEFAULT_FEATURES, } from '../util/features';
var FeaturesContext = React.createContext({
    features: undefined,
});
export function injectFeatures(Component) {
    return function (props) { return (React.createElement(FeaturesContext.Consumer, null, function (_a) {
        var features = _a.features;
        return (React.createElement(Component, __assign({}, props, { features: features || DEFAULT_FEATURES })));
    })); };
}
var FeaturesProvider = /** @class */ (function (_super) {
    __extends(FeaturesProvider, _super);
    function FeaturesProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            features: _this.props.features,
        };
        return _this;
    }
    FeaturesProvider.prototype.render = function () {
        var children = this.props.children;
        var features = this.state.features;
        return (React.createElement(FeaturesContext.Provider, { value: { features: features } }, children));
    };
    return FeaturesProvider;
}(React.Component));
export default FeaturesProvider;
//# sourceMappingURL=FeaturesProvider.js.map