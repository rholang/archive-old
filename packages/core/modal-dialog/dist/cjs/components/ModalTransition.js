"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var _a = react_1.default.createContext({
    isOpen: true,
    onExited: function () { },
}), Consumer = _a.Consumer, Provider = _a.Provider;
// checks if children exist and are truthy
var hasChildren = function (children) {
    return react_1.default.Children.count(children) > 0 &&
        react_1.default.Children.map(children, function (child) { return !!child; }).filter(Boolean).length > 0;
};
var Transition = /** @class */ (function (_super) {
    tslib_1.__extends(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentChildren: undefined,
        };
        _this.onExited = function () {
            _this.setState({
                currentChildren: _this.props.children,
            });
        };
        return _this;
    }
    Transition.getDerivedStateFromProps = function (props, state) {
        var previousChildren = state.currentChildren;
        var exiting = hasChildren(previousChildren) && !hasChildren(props.children);
        return {
            currentChildren: exiting ? previousChildren : props.children,
        };
    };
    Transition.prototype.render = function () {
        return (react_1.default.createElement(Provider, { value: {
                onExited: this.onExited,
                isOpen: hasChildren(this.props.children),
            } }, this.state.currentChildren));
    };
    return Transition;
}(react_1.default.Component));
exports.ModalTransitionConsumer = Consumer;
exports.default = Transition;
//# sourceMappingURL=ModalTransition.js.map