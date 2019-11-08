import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import { createAndFireEvent, withAnalyticsContext, withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion } from './version.json';
import RadioIcon from './RadioIcon';
import { RadioInputWrapper, HiddenInput } from './styled/RadioInput';
import { Label, LabelText } from './styled/Radio';
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isHovered: false,
            isFocused: false,
            isActive: false,
            isMouseDown: false,
        };
        _this.onBlur = function (event) {
            _this.setState({
                // onBlur is called after onMouseDown if the checkbox was focused, however
                // in this case on blur is called immediately after, and we need to check
                // whether the mouse is down.
                isActive: _this.state.isMouseDown && _this.state.isActive,
                isFocused: false,
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };
        _this.onFocus = function (event) {
            _this.setState({ isFocused: true });
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };
        _this.onMouseLeave = function (event) {
            _this.setState({ isActive: false, isHovered: false });
            if (_this.props.onMouseLeave) {
                _this.props.onMouseLeave(event);
            }
        };
        _this.onMouseEnter = function (event) {
            _this.setState({ isHovered: true });
            if (_this.props.onMouseEnter) {
                _this.props.onMouseEnter(event);
            }
        };
        _this.onMouseUp = function (event) {
            _this.setState({ isActive: false, isMouseDown: false });
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(event);
            }
        };
        _this.onMouseDown = function (event) {
            _this.setState({ isActive: true, isMouseDown: true });
            if (_this.props.onMouseDown) {
                _this.props.onMouseDown(event);
            }
        };
        return _this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, isDisabled = _a.isDisabled, isRequired = _a.isRequired, isInvalid = _a.isInvalid, isChecked = _a.isChecked, label = _a.label, name = _a.name, onChange = _a.onChange, onInvalid = _a.onInvalid, value = _a.value, testId = _a.testId, rest = __rest(_a, ["ariaLabel", "isDisabled", "isRequired", "isInvalid", "isChecked", "label", "name", "onChange", "onInvalid", "value", "testId"]);
        var _b = this.state, isFocused = _b.isFocused, isHovered = _b.isHovered, isActive = _b.isActive;
        return (React.createElement(Label, { isDisabled: isDisabled, onMouseDown: this.onMouseDown, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onMouseUp: this.onMouseUp, "data-testid": testId && testId + "--radio-label" },
            React.createElement(RadioInputWrapper, null,
                React.createElement(HiddenInput, __assign({ "aria-label": ariaLabel, checked: isChecked, disabled: isDisabled, name: name, onChange: onChange, onBlur: this.onBlur, onInvalid: onInvalid, onFocus: this.onFocus, required: isRequired, type: "radio", value: value }, rest, { "data-testid": testId && testId + "--hidden-radio" })),
                React.createElement(RadioIcon, { isActive: isActive, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isHovered: isHovered, isInvalid: isInvalid })),
            label ? React.createElement(LabelText, null, label) : null));
    };
    Radio.defaultProps = {
        isDisabled: false,
        isInvalid: false,
        isChecked: false,
    };
    return Radio;
}(Component));
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export { Radio as RadioWithoutAnalytics };
export default withAnalyticsContext({
    componentName: 'radio',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onChange: createAndFireEventOnAtlaskit({
        action: 'changed',
        actionSubject: 'radio',
        attributes: {
            componentName: 'radio',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(Radio));
//# sourceMappingURL=Radio.js.map