"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var WithProviders = /** @class */ (function (_super) {
    tslib_1.__extends(WithProviders, _super);
    function WithProviders(props) {
        var _this = _super.call(this, props) || this;
        _this.handleProvider = function (name, provider) {
            _this.setState(function (_a) {
                var _b;
                var providers = _a.providers;
                return {
                    providers: tslib_1.__assign(tslib_1.__assign({}, providers), (_b = {}, _b[name] = provider, _b)),
                };
            });
        };
        var providers = {};
        _this.props.providers.forEach(function (name) {
            providers[name] = undefined;
        });
        _this.state = {
            providers: providers,
        };
        return _this;
    }
    WithProviders.prototype.UNSAFE_componentWillMount = function () {
        var _this = this;
        var _a = this.props, providers = _a.providers, providerFactory = _a.providerFactory;
        providers.forEach(function (name) {
            providerFactory.subscribe(name, _this.handleProvider);
        });
    };
    WithProviders.prototype.componentWillUnmount = function () {
        var _this = this;
        var _a = this.props, providers = _a.providers, providerFactory = _a.providerFactory;
        providers.forEach(function (name) {
            providerFactory.unsubscribe(name, _this.handleProvider);
        });
    };
    WithProviders.prototype.render = function () {
        var _a = this, state = _a.state, props = _a.props;
        var renderNode = props.renderNode;
        return renderNode(state.providers);
    };
    return WithProviders;
}(react_1.PureComponent));
exports.WithProviders = WithProviders;
//# sourceMappingURL=withProviders.js.map