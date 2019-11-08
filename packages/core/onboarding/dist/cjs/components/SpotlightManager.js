"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var constants_1 = require("@atlaskit/theme/constants");
var Animation_1 = require("./Animation");
var Blanket_1 = tslib_1.__importDefault(require("../styled/Blanket"));
var noop = function () { };
var _a = react_1.createContext(undefined), TargetConsumer = _a.Consumer, TargetProvider = _a.Provider;
exports.TargetConsumer = TargetConsumer;
var _b = react_1.createContext({
    opened: noop,
    closed: noop,
    targets: {},
}), SpotlightStateConsumer = _b.Consumer, SpotlightStateProvider = _b.Provider;
exports.SpotlightConsumer = SpotlightStateConsumer;
var Container = function (_a) {
    var Wrapper = _a.component, children = _a.children;
    return react_1.default.createElement(Wrapper, null, children);
};
var SpotlightManager = /** @class */ (function (_super) {
    tslib_1.__extends(SpotlightManager, _super);
    function SpotlightManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            spotlightCount: 0,
            targets: {},
        };
        _this.targetRef = function (name) { return function (element) {
            _this.setState(function (state) {
                var _a;
                return ({
                    targets: tslib_1.__assign(tslib_1.__assign({}, state.targets), (_a = {}, _a[name] = element || undefined, _a)),
                });
            });
        }; };
        _this.spotlightOpen = function () {
            _this.setState(function (state) { return ({ spotlightCount: state.spotlightCount + 1 }); });
        };
        _this.spotlightClose = function () {
            _this.setState(function (state) { return ({ spotlightCount: state.spotlightCount - 1 }); });
        };
        _this.getStateProviderValue = memoize_one_1.default(function (targets) { return ({
            opened: _this.spotlightOpen,
            closed: _this.spotlightClose,
            targets: targets,
        }); });
        return _this;
    }
    SpotlightManager.prototype.componentDidMount = function () {
        if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
            if (this.props.component) {
                // eslint-disable-next-line no-console
                console.warn("Atlaskit: The SpotlightManager 'component' prop is deprecated. Please wrap the SpotlightManager in the component instead.");
            }
        }
    };
    SpotlightManager.prototype.render = function () {
        var _a = this.props, blanketIsTinted = _a.blanketIsTinted, children = _a.children, Tag = _a.component;
        return (react_1.default.createElement(SpotlightStateProvider, { value: this.getStateProviderValue(this.state.targets) },
            react_1.default.createElement(TargetProvider, { value: this.targetRef },
                react_1.default.createElement(Container, { component: Tag || react_1.default.Fragment },
                    react_1.default.createElement(Animation_1.Fade, { in: this.state.spotlightCount > 0 }, function (animationStyles) { return (react_1.default.createElement(portal_1.default, { zIndex: constants_1.layers.spotlight() },
                        react_1.default.createElement(Blanket_1.default, { style: animationStyles, isTinted: blanketIsTinted }))); }),
                    children))));
    };
    SpotlightManager.defaultProps = {
        blanketIsTinted: true,
    };
    return SpotlightManager;
}(react_1.PureComponent));
exports.default = SpotlightManager;
//# sourceMappingURL=SpotlightManager.js.map