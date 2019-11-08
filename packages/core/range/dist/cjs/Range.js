"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var theme_1 = require("./theme");
var getPercentValue = function (value, min, max) {
    var percent = '0';
    if (min < max && value > min) {
        percent = (((value - min) / (max - min)) * 100).toFixed(2);
    }
    return percent;
};
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value !== undefined
                ? _this.props.value
                : _this.props.defaultValue,
        };
        _this.getValue = function () {
            return _this.props.value !== undefined ? _this.props.value : _this.state.value;
        };
        _this.handleChange = function (e) {
            var value = parseFloat(e.target.value);
            var onChange = _this.props.onChange;
            _this.setState({ value: value });
            if (onChange) {
                onChange(value);
            }
        };
        return _this;
    }
    Slider.prototype.componentDidMount = function () {
        if (this.range) {
            if (this.props.inputRef) {
                this.props.inputRef(this.range);
            }
        }
    };
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this.props, isDisabled = _a.isDisabled, defaultValue = _a.defaultValue, theme = _a.theme, rest = tslib_1.__rest(_a, ["isDisabled", "defaultValue", "theme"]);
        var _b = this.props, min = _b.min, max = _b.max;
        var value = this.getValue();
        return (react_1.default.createElement(theme_1.Theme.Provider, { value: theme },
            react_1.default.createElement(theme_1.Theme.Consumer, null, function (computedTheme) { return (react_1.default.createElement(styled_1.Input, tslib_1.__assign({}, computedTheme, { type: "range", value: value, disabled: isDisabled, valuePercent: getPercentValue(value, min, max), innerRef: function (ref) {
                    _this.range = ref;
                } }, rest, { onChange: _this.handleChange }))); })));
    };
    Slider.defaultProps = {
        isDisabled: false,
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 1,
        onChange: function () { },
    };
    return Slider;
}(react_1.Component));
exports.default = Slider;
//# sourceMappingURL=Range.js.map