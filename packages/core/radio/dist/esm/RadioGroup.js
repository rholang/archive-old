import { __assign, __extends, __rest } from "tslib";
import React, { Component, Fragment, } from 'react';
import Radio from './Radio';
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.getProp = function (key) {
            return _this.props[key] ? _this.props[key] : _this.state[key];
        };
        _this.onChange = function (event) {
            _this.setState({
                value: event.currentTarget.value,
            });
            _this.props.onChange(event);
        };
        _this.buildOptions = function () {
            var _a = _this.props, options = _a.options, isDisabled = _a.isDisabled, isRequired = _a.isRequired, onInvalid = _a.onInvalid;
            var value = _this.getProp('value');
            if (!options.length)
                return [];
            return options.map(function (_a, index) {
                var testId = _a.testId, optionProps = __rest(_a, ["testId"]);
                if (typeof isDisabled !== 'undefined') {
                    optionProps.isDisabled = isDisabled;
                }
                if (value !== null && optionProps.value === value) {
                    optionProps.isChecked = true;
                }
                return (React.createElement(Radio, __assign({}, optionProps, { key: index, onChange: _this.onChange, onInvalid: onInvalid, isRequired: isRequired, testId: testId })));
            });
        };
        _this.state = {
            value: _this.props.value !== undefined
                ? _this.props.value
                : _this.props.defaultValue,
        };
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var options = this.buildOptions();
        return React.createElement(Fragment, null, options);
    };
    RadioGroup.defaultProps = {
        onChange: function () { },
        options: [],
    };
    return RadioGroup;
}(Component));
export default RadioGroup;
//# sourceMappingURL=RadioGroup.js.map