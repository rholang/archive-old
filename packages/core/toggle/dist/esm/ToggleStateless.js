import { __assign, __extends } from "tslib";
import { uid } from 'react-uid';
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import CloseIcon from '@atlaskit/icon/glyph/cross';
import ConfirmIcon from '@atlaskit/icon/glyph/check';
import { name as packageName, version as packageVersion } from './version.json';
import { Handle, IconWrapper, Inner, Input, Label, Slide } from './styled';
var ToggleStateless = /** @class */ (function (_super) {
    __extends(ToggleStateless, _super);
    function ToggleStateless() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFocused: false,
        };
        _this.handleBlur = function (event) {
            _this.setState({ isFocused: false });
            _this.props.onBlur(event);
        };
        _this.handleFocus = function (event) {
            _this.setState({ isFocused: true });
            _this.props.onFocus(event);
        };
        _this.handleChange = function (event) {
            if (_this.props.isDisabled) {
                return;
            }
            _this.props.onChange(event);
        };
        return _this;
    }
    ToggleStateless.prototype.render = function () {
        var _a = this.props, isChecked = _a.isChecked, isDisabled = _a.isDisabled, label = _a.label, name = _a.name, size = _a.size, value = _a.value, testId = _a.testId;
        var isFocused = this.state.isFocused;
        var styledProps = {
            isChecked: isChecked,
            isDisabled: isDisabled,
            isFocused: isFocused,
            size: size,
        };
        var Icon = isChecked ? ConfirmIcon : CloseIcon;
        var id = uid({ id: this.constructor.name });
        return (React.createElement(Label, { htmlFor: id, "data-testid": testId },
            React.createElement(Input, { checked: isChecked, disabled: isDisabled, id: id, name: name, onBlur: this.handleBlur, onChange: this.handleChange, onFocus: this.handleFocus, type: "checkbox", value: value, "data-testid": testId && testId + "--input" }),
            React.createElement(Slide, __assign({}, styledProps),
                React.createElement(Inner, __assign({}, styledProps),
                    React.createElement(Handle, { isChecked: isChecked, isDisabled: isDisabled, size: size }),
                    React.createElement(IconWrapper, { isChecked: isChecked, size: size },
                        React.createElement(Icon, { label: label || (isChecked ? 'Uncheck' : 'Check'), size: size === 'large' ? undefined : 'small', primaryColor: "inherit" }))))));
    };
    ToggleStateless.defaultProps = {
        isDisabled: false,
        onBlur: function () { },
        onChange: function () { },
        onFocus: function () { },
        size: 'regular',
        label: '',
        name: '',
        value: '',
        isChecked: false,
    };
    return ToggleStateless;
}(Component));
export { ToggleStateless as ToggleStatelessWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'toggle',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'toggle',
        attributes: {
            componentName: 'toggle',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
    onChange: createAndFireEventOnAtlaskit({
        action: 'changed',
        actionSubject: 'toggle',
        attributes: {
            componentName: 'toggle',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'toggle',
        attributes: {
            componentName: 'toggle',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(ToggleStateless));
//# sourceMappingURL=ToggleStateless.js.map