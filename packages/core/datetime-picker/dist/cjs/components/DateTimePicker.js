"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var calendar_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/calendar"));
var select_1 = require("@atlaskit/select");
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var lodash_pick_1 = tslib_1.__importDefault(require("lodash.pick"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var react_1 = tslib_1.__importDefault(require("react"));
// eslint-disable-next-line no-restricted-imports
var date_fns_1 = require("date-fns");
var version_json_1 = require("../version.json");
var DatePicker_1 = tslib_1.__importDefault(require("./DatePicker"));
var TimePicker_1 = tslib_1.__importDefault(require("./TimePicker"));
var internal_1 = require("../internal");
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
var Flex = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n  border-radius: ", "px;\n  display: flex;\n  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;\n  &:hover {\n    cursor: ", ";\n    ", "\n    ", "\n  }\n"], ["\n  ", "\n  ", "\n  border-radius: ", "px;\n  display: flex;\n  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;\n  &:hover {\n    cursor: ", ";\n    ", "\n    ", "\n  }\n"])), getBackgroundColor, getBorder, constants_1.borderRadius(), function (props) { return (props.isDisabled ? 'default' : 'pointer'); }, getBackgroundColorHover, getBorderColorHover);
var FlexItem = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-basis: 0;\n  flex-grow: 1;\n"], ["\n  flex-basis: 0;\n  flex-grow: 1;\n"])));
// react-select overrides (via @atlaskit/select).
var styles = {
    control: function (style) { return (tslib_1.__assign(tslib_1.__assign({}, style), { backgroundColor: 'transparent', border: 2, borderRadius: 0, paddingLeft: 0, ':hover': {
            backgroundColor: 'transparent',
            cursor: 'inherit',
        } })); },
};
function noop() { }
var DateTimePicker = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimePicker, _super);
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
            var mappedState = tslib_1.__assign(tslib_1.__assign({}, _this.state), lodash_pick_1.default(_this.props, ['value']));
            return tslib_1.__assign(tslib_1.__assign({}, mappedState), _this.parseValue(mappedState.value, mappedState.dateValue, mappedState.timeValue, mappedState.zoneValue));
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
            _this.onValueChange(tslib_1.__assign(tslib_1.__assign({}, _this.getSafeState()), { dateValue: dateValue }));
        };
        _this.onTimeChange = function (timeValue) {
            _this.onValueChange(tslib_1.__assign(tslib_1.__assign({}, _this.getSafeState()), { timeValue: timeValue }));
        };
        return _this;
    }
    DateTimePicker.prototype.parseValue = function (value, dateValue, timeValue, zoneValue) {
        if (this.props.parseValue) {
            return this.props.parseValue(value, dateValue, timeValue, zoneValue);
        }
        var parsed = date_fns_1.parse(value);
        var valid = date_fns_1.isValid(parsed);
        return valid
            ? {
                dateValue: date_fns_1.format(parsed, 'YYYY-MM-DD'),
                timeValue: date_fns_1.format(parsed, 'HH:mm'),
                zoneValue: date_fns_1.format(parsed, 'ZZ'),
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
            var value = internal_1.formatDateTimeZoneIntoIso(dateValue, timeValue, zoneValue);
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
            : calendar_1.default;
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
        var mergedDatePickerSelectProps = tslib_1.__assign(tslib_1.__assign({}, datePickerSelectProps), { styles: select_1.mergeStyles(styles, datePickerStyles) });
        var mergedTimePickerSelectProps = tslib_1.__assign(tslib_1.__assign({}, timePickerSelectProps), { styles: select_1.mergeStyles(styles, timePickerStyles) });
        return (react_1.default.createElement(Flex, tslib_1.__assign({}, innerProps, { isFocused: isFocused, isDisabled: isDisabled, isInvalid: this.props.isInvalid, appearance: this.props.appearance }),
            react_1.default.createElement("input", { name: name, type: "hidden", value: value }),
            react_1.default.createElement(FlexItem, null,
                react_1.default.createElement(DatePicker_1.default, tslib_1.__assign({}, bothProps, { autoFocus: autoFocus, dateFormat: dateFormat, icon: null, id: id, onChange: this.onDateChange, selectProps: mergedDatePickerSelectProps, value: dateValue, locale: locale }, datePickerProps))),
            react_1.default.createElement(FlexItem, null,
                react_1.default.createElement(TimePicker_1.default, tslib_1.__assign({}, bothProps, { icon: icon, onChange: this.onTimeChange, selectProps: mergedTimePickerSelectProps, value: timeValue, timeIsEditable: timeIsEditable, times: times, timeFormat: timeFormat, locale: locale }, timePickerProps)))));
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
        times: internal_1.defaultTimes,
        spacing: 'default',
        locale: 'en-US',
    };
    return DateTimePicker;
}(react_1.default.Component));
exports.DateTimePickerWithoutAnalytics = DateTimePicker;
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'dateTimePicker',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onChange: analytics_next_1.createAndFireEvent('atlaskit')({
        action: 'changed',
        actionSubject: 'dateTimePicker',
        attributes: {
            componentName: 'dateTimePicker',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(DateTimePicker));
var templateObject_1, templateObject_2;
//# sourceMappingURL=DateTimePicker.js.map