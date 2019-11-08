import { __assign, __extends, __makeTemplateObject } from "tslib";
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { mergeStyles } from '@atlaskit/select';
import { borderRadius } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
import styled from '@emotion/styled';
import pick from 'lodash.pick';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { parse, format, isValid } from 'date-fns';
import { name as packageName, version as packageVersion, } from '../version.json';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { defaultTimes, formatDateTimeZoneIntoIso } from '../internal';
var getBorder = function (_a) {
    var appearance = _a.appearance, isFocused = _a.isFocused, isInvalid = _a.isInvalid;
    var color = colors.N20;
    if (appearance === 'subtle')
        color = 'transparent';
    if (isFocused)
        color = colors.B100;
    if (isInvalid)
        color = colors.R400;
    return "border: 2px solid " + color + ";";
};
var getBorderColorHover = function (_a) {
    var isFocused = _a.isFocused, isInvalid = _a.isInvalid, isDisabled = _a.isDisabled;
    var color = colors.N30;
    if (isFocused || isDisabled)
        return "";
    if (isInvalid)
        color = colors.R400;
    return "border-color: " + color + ";";
};
var getBackgroundColor = function (_a) {
    var appearance = _a.appearance, isFocused = _a.isFocused;
    var color = colors.N20;
    if (isFocused)
        color = colors.N0;
    if (appearance === 'subtle')
        color = 'transparent';
    return "background-color: " + color + ";";
};
var getBackgroundColorHover = function (_a) {
    var isFocused = _a.isFocused, isInvalid = _a.isInvalid, isDisabled = _a.isDisabled;
    var color = colors.N30;
    if (isFocused || isDisabled)
        return "";
    if (isInvalid)
        color = colors.N0;
    return "background-color: " + color + ";";
};
var Flex = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  border-radius: ", "px;\n  display: flex;\n  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;\n  &:hover {\n    cursor: ", ";\n    ", "\n    ", "\n  }\n"], ["\n  ", "\n  ", "\n  border-radius: ", "px;\n  display: flex;\n  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;\n  &:hover {\n    cursor: ", ";\n    ", "\n    ", "\n  }\n"])), getBackgroundColor, getBorder, borderRadius(), function (props) { return (props.isDisabled ? 'default' : 'pointer'); }, getBackgroundColorHover, getBorderColorHover);
var FlexItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-basis: 0;\n  flex-grow: 1;\n"], ["\n  flex-basis: 0;\n  flex-grow: 1;\n"])));
// react-select overrides (via @atlaskit/select).
var styles = {
    control: function (style) { return (__assign(__assign({}, style), { backgroundColor: 'transparent', border: 2, borderRadius: 0, paddingLeft: 0, ':hover': {
            backgroundColor: 'transparent',
            cursor: 'inherit',
        } })); },
};
function noop() { }
var DateTimePicker = /** @class */ (function (_super) {
    __extends(DateTimePicker, _super);
    function DateTimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: 0,
            dateValue: '',
            isFocused: false,
            timeValue: '',
            value: _this.props.defaultValue,
            zoneValue: '',
        };
        // All state needs to be accessed via this function so that the state is mapped from props
        // correctly to allow controlled/uncontrolled usage.
        _this.getSafeState = function () {
            var mappedState = __assign(__assign({}, _this.state), pick(_this.props, ['value']));
            return __assign(__assign({}, mappedState), _this.parseValue(mappedState.value, mappedState.dateValue, mappedState.timeValue, mappedState.zoneValue));
        };
        _this.onBlur = function (event) {
            _this.setState({ isFocused: false });
            _this.props.onBlur(event);
        };
        _this.onFocus = function (event) {
            _this.setState({ isFocused: true });
            _this.props.onFocus(event);
        };
        _this.onDateChange = function (dateValue) {
            _this.onValueChange(__assign(__assign({}, _this.getSafeState()), { dateValue: dateValue }));
        };
        _this.onTimeChange = function (timeValue) {
            _this.onValueChange(__assign(__assign({}, _this.getSafeState()), { timeValue: timeValue }));
        };
        return _this;
    }
    DateTimePicker.prototype.parseValue = function (value, dateValue, timeValue, zoneValue) {
        if (this.props.parseValue) {
            return this.props.parseValue(value, dateValue, timeValue, zoneValue);
        }
        var parsed = parse(value);
        var valid = isValid(parsed);
        return valid
            ? {
                dateValue: format(parsed, 'YYYY-MM-DD'),
                timeValue: format(parsed, 'HH:mm'),
                zoneValue: format(parsed, 'ZZ'),
            }
            : {
                dateValue: dateValue,
                timeValue: timeValue,
                zoneValue: zoneValue,
            };
    };
    DateTimePicker.prototype.onValueChange = function (_a) {
        var dateValue = _a.dateValue, timeValue = _a.timeValue, zoneValue = _a.zoneValue;
        this.setState({ dateValue: dateValue, timeValue: timeValue, zoneValue: zoneValue });
        if (dateValue && timeValue) {
            var value = formatDateTimeZoneIntoIso(dateValue, timeValue, zoneValue);
            this.setState({ value: value });
            this.props.onChange(value);
            // If the date or time value was cleared when there is an existing datetime value, then clear the value.
        }
        else if (this.getSafeState().value) {
            this.setState({ value: '' });
            this.props.onChange('');
        }
    };
    DateTimePicker.prototype.render = function () {
        var _a = this.props, autoFocus = _a.autoFocus, id = _a.id, innerProps = _a.innerProps, isDisabled = _a.isDisabled, name = _a.name, timeIsEditable = _a.timeIsEditable, dateFormat = _a.dateFormat, datePickerProps = _a.datePickerProps, datePickerSelectProps = _a.datePickerSelectProps, timePickerProps = _a.timePickerProps, timePickerSelectProps = _a.timePickerSelectProps, times = _a.times, timeFormat = _a.timeFormat, locale = _a.locale;
        var _b = this.getSafeState(), isFocused = _b.isFocused, value = _b.value, dateValue = _b.dateValue, timeValue = _b.timeValue;
        var icon = this.props.appearance === 'subtle' || this.props.hideIcon
            ? null
            : CalendarIcon;
        var bothProps = {
            isDisabled: isDisabled,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            isInvalid: this.props.isInvalid,
            appearance: this.props.appearance,
            spacing: this.props.spacing,
        };
        var _c = datePickerSelectProps.styles, datePickerStyles = _c === void 0 ? {} : _c;
        var _d = timePickerSelectProps.styles, timePickerStyles = _d === void 0 ? {} : _d;
        var mergedDatePickerSelectProps = __assign(__assign({}, datePickerSelectProps), { styles: mergeStyles(styles, datePickerStyles) });
        var mergedTimePickerSelectProps = __assign(__assign({}, timePickerSelectProps), { styles: mergeStyles(styles, timePickerStyles) });
        return (React.createElement(Flex, __assign({}, innerProps, { isFocused: isFocused, isDisabled: isDisabled, isInvalid: this.props.isInvalid, appearance: this.props.appearance }),
            React.createElement("input", { name: name, type: "hidden", value: value }),
            React.createElement(FlexItem, null,
                React.createElement(DatePicker, __assign({}, bothProps, { autoFocus: autoFocus, dateFormat: dateFormat, icon: null, id: id, onChange: this.onDateChange, selectProps: mergedDatePickerSelectProps, value: dateValue, locale: locale }, datePickerProps))),
            React.createElement(FlexItem, null,
                React.createElement(TimePicker, __assign({}, bothProps, { icon: icon, onChange: this.onTimeChange, selectProps: mergedTimePickerSelectProps, value: timeValue, timeIsEditable: timeIsEditable, times: times, timeFormat: timeFormat, locale: locale }, timePickerProps)))));
    };
    DateTimePicker.defaultProps = {
        appearance: 'default',
        autoFocus: false,
        isDisabled: false,
        name: '',
        onBlur: noop,
        onChange: noop,
        onFocus: noop,
        innerProps: {},
        id: '',
        defaultValue: '',
        timeIsEditable: false,
        isInvalid: false,
        hideIcon: false,
        datePickerProps: {},
        timePickerProps: {},
        datePickerSelectProps: {},
        timePickerSelectProps: {},
        times: defaultTimes,
        spacing: 'default',
        locale: 'en-US',
    };
    return DateTimePicker;
}(React.Component));
export { DateTimePicker as DateTimePickerWithoutAnalytics };
export default withAnalyticsContext({
    componentName: 'dateTimePicker',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onChange: createAndFireEvent('atlaskit')({
        action: 'changed',
        actionSubject: 'dateTimePicker',
        attributes: {
            componentName: 'dateTimePicker',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(DateTimePicker));
var templateObject_1, templateObject_2;
//# sourceMappingURL=DateTimePicker.js.map