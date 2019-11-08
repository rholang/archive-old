"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var typestyle_1 = require("typestyle");
var animationTime = 300;
exports.countStyle = typestyle_1.style({
    fontSize: '12px',
    lineHeight: '24px',
    color: theme_1.colors.N90,
    overflow: 'hidden',
    height: 24,
    transition: "width " + animationTime + "ms ease-in-out",
});
exports.highlightStyle = typestyle_1.style({
    color: theme_1.colors.B400,
    fontWeight: 600,
});
exports.containerStyle = typestyle_1.style({
    display: 'flex',
    flexDirection: 'column',
});
var slideAnimation = function (start, end) {
    var animation = typestyle_1.keyframes({
        '0%': {
            transform: "translateY(" + start + "%)",
        },
        '100%': {
            transform: "translateY(" + end + "%)",
        },
    });
    return animation + " " + animationTime + "ms ease-in-out";
};
var counterAnimation = function (start, end) {
    return typestyle_1.style({ animation: slideAnimation(start, end) });
};
exports.slideUpStyle = counterAnimation(0, -50);
exports.slideDownStyle = counterAnimation(-50, 0);
var Counter = /** @class */ (function (_super) {
    tslib_1.__extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.getLabel = function (value) {
            var overLimitLabel = _this.props.overLimitLabel;
            if (_this.hasReachedLimit(value)) {
                return overLimitLabel || '';
            }
            else {
                return value.toString();
            }
        };
        _this.hasReachedLimit = function (value) {
            return _this.props.limit && value >= _this.props.limit;
        };
        _this.renderPrevious = function () {
            var _a;
            var previous = _this.state.previous;
            if (previous !== undefined) {
                var className = classnames_1.default((_a = {}, _a[exports.highlightStyle] = previous.highlight, _a));
                return (React.createElement("div", { key: previous.value, className: className }, _this.getLabel(previous.value)));
            }
            return null;
        };
        _this.clearPrevious = function () {
            _this.setState({ previous: undefined });
        };
        _this.state = {
            previous: undefined,
        };
        return _this;
    }
    Counter.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _a = this.props, value = _a.value, highlight = _a.highlight;
        if (value !== undefined &&
            value !== nextProps.value &&
            (!this.hasReachedLimit(value) || !this.hasReachedLimit(nextProps.value))) {
            this.setState({ previous: { value: value, highlight: highlight } });
        }
    };
    Counter.prototype.render = function () {
        var _a;
        var _b = this.props, value = _b.value, highlight = _b.highlight, classNameProp = _b.className;
        var previous = this.state.previous;
        var label = this.getLabel(value);
        var increase = previous !== undefined && previous.value < value;
        var decrease = previous !== undefined && previous.value > value;
        var enterClass = increase
            ? exports.slideUpStyle
            : decrease
                ? exports.slideDownStyle
                : undefined;
        var className = classnames_1.default(exports.countStyle, classNameProp);
        var currentClassName = classnames_1.default((_a = {}, _a[exports.highlightStyle] = highlight, _a));
        return (React.createElement("div", { className: className, style: { width: label.length * 10 } },
            React.createElement(react_transition_group_1.CSSTransition, { classNames: { enter: enterClass }, timeout: animationTime, in: increase || decrease, onEntered: this.clearPrevious },
                React.createElement("div", { className: exports.containerStyle },
                    increase ? this.renderPrevious() : null,
                    React.createElement("div", { className: currentClassName, key: value }, label),
                    decrease ? this.renderPrevious() : null))));
    };
    Counter.defaultProps = {
        highlight: false,
        limit: 100,
        overLimitLabel: '99+',
        className: undefined,
    };
    return Counter;
}(React.PureComponent));
exports.Counter = Counter;
//# sourceMappingURL=Counter.js.map