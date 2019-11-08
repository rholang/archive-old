import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import { Input } from './styled';
import { Theme } from './theme';
var getPercentValue = function (value, min, max) {
    var percent = '0';
    if (min < max && value > min) {
        percent = (((value - min) / (max - min)) * 100).toFixed(2);
    }
    return percent;
};
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
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
        var _a = this.props, isDisabled = _a.isDisabled, defaultValue = _a.defaultValue, theme = _a.theme, rest = __rest(_a, ["isDisabled", "defaultValue", "theme"]);
        var _b = this.props, min = _b.min, max = _b.max;
        var value = this.getValue();
        return (React.createElement(Theme.Provider, { value: theme },
            React.createElement(Theme.Consumer, null, function (computedTheme) { return (React.createElement(Input, __assign({}, computedTheme, { type: "range", value: value, disabled: isDisabled, valuePercent: getPercentValue(value, min, max), innerRef: function (ref) {
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
}(Component));
export default Slider;
//# sourceMappingURL=Range.js.map