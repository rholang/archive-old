"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var features_1 = require("../util/features");
var FeaturesContext = React.createContext({
    features: undefined,
});
function injectFeatures(Component) {
    return function (props) { return (React.createElement(FeaturesContext.Consumer, null, function (_a) {
        var features = _a.features;
        return (React.createElement(Component, tslib_1.__assign({}, props, { features: features || features_1.DEFAULT_FEATURES })));
    })); };
}
exports.injectFeatures = injectFeatures;
var FeaturesProvider = /** @class */ (function (_super) {
    tslib_1.__extends(FeaturesProvider, _super);
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
exports.default = FeaturesProvider;
//# sourceMappingURL=FeaturesProvider.js.map