import { __assign, __extends, __makeTemplateObject, __read } from "tslib";
import Calendar from '@atlaskit/calendar';
import pick from 'lodash.pick';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import Select, { mergeStyles } from '@atlaskit/select';
import styled from '@emotion/styled';
import { createLocalizationProvider, } from '@atlaskit/locale';
import { borderRadius, layers, gridSize } from '@atlaskit/theme/constants';
import { N20, B100 } from '@atlaskit/theme/colors';
import { e200 } from '@atlaskit/theme/elevation';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
// eslint-disable-next-line no-restricted-imports
import { format, isValid, parse, lastDayOfMonth } from 'date-fns';
import React from 'react';
import { name as packageName, version as packageVersion, } from '../version.json';
import { ClearIndicator, defaultDateFormat, padToTwo, placeholderDatetime, } from '../internal';
import FixedLayer from '../internal/FixedLayer';
function getDateObj(date) {
    return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    };
}
function getValidDate(iso) {
    var date = parse(iso);
    return isValid(date) ? getDateObj(date) : {};
}
var StyledMenu = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  z-index: ", ";\n  ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  z-index: ", ";\n  ", ";\n"])), N20, borderRadius(), layers.dialog, e200);
var Menu = function (_a) {
    var selectProps = _a.selectProps, innerProps = _a.innerProps;
    return (React.createElement(FixedLayer, { inputValue: selectProps.inputValue, containerRef: selectProps.calendarContainerRef, content: React.createElement(StyledMenu, null,
            React.createElement(Calendar, __assign({}, getValidDate(selectProps.calendarValue), getValidDate(selectProps.calendarView), { disabled: selectProps.calendarDisabled, onChange: selectProps.onCalendarChange, onSelect: selectProps.onCalendarSelect, ref: selectProps.calendarRef, selected: [selectProps.calendarValue], innerProps: innerProps, locale: selectProps.calendarLocale }))) }));
};
function noop() { }
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.calendarRef = null;
        _this.containerRef = null;
        // All state needs to be accessed via this function so that the state is mapped from props
        // correctly to allow controlled/uncontrolled usage.
        _this.getSafeState = function () {
            return __assign(__assign(__assign({}, _this.state), pick(_this.props, ['value', 'isOpen'])), pick(_this.props.selectProps, ['inputValue']));
        };
        _this.isDateDisabled = function (date) {
            return _this.props.disabled.indexOf(date) > -1;
        };
        _this.onCalendarChange = function (_a) {
            var iso = _a.iso;
            var _b = __read(iso.split('-'), 3), year = _b[0], month = _b[1], date = _b[2];
            var newIso = iso;
            var parsedDate = parseInt(date, 10);
            var parsedMonth = parseInt(month, 10);
            var parsedYear = parseInt(year, 10);
            var lastDayInMonth = lastDayOfMonth(new Date(parsedYear, parsedMonth - 1)).getDate();
            if (lastDayInMonth < parsedDate) {
                newIso = year + "-" + padToTwo(parsedMonth) + "-" + padToTwo(lastDayInMonth);
            }
            else {
                newIso = year + "-" + padToTwo(parsedMonth) + "-" + padToTwo(parsedDate);
            }
            _this.setState({ view: newIso });
        };
        _this.onCalendarSelect = function (_a) {
            var iso = _a.iso;
            _this.setState({
                inputValue: '',
                isOpen: false,
                selectedValue: iso,
                view: iso,
                value: iso,
            });
            _this.props.onChange(iso);
        };
        _this.onInputClick = function () {
            if (!_this.getSafeState().isOpen)
                _this.setState({ isOpen: true });
        };
        _this.onSelectBlur = function (event) {
            _this.setState({ isOpen: false });
            _this.props.onBlur(event);
        };
        _this.onSelectFocus = function (event) {
            var value = _this.getSafeState().value;
            _this.setState({
                isOpen: true,
                view: value,
            });
            _this.props.onFocus(event);
        };
        _this.onSelectInput = function (event) {
            var value = event.target.value;
            if (value) {
                var parsed = _this.parseDate(value);
                // Only try to set the date if we have month & day
                if (parsed && isValid(parsed)) {
                    // We format the parsed date to YYYY-MM-DD here because
                    // this is the format expected by the @atlaskit/calendar component
                    _this.setState({ view: format(parsed, 'YYYY-MM-DD') });
                }
            }
            _this.setState({ isOpen: true });
        };
        _this.onSelectKeyDown = function (event) {
            var key = event.key, target = event.target;
            var _a = _this.getSafeState(), view = _a.view, selectedValue = _a.selectedValue;
            var keyPressed = key.toLowerCase();
            switch (keyPressed) {
                case 'arrowup':
                case 'arrowdown':
                    if (_this.calendarRef) {
                        event.preventDefault();
                        var key_1 = keyPressed === 'arrowup' ? 'up' : 'down';
                        _this.calendarRef.navigate(key_1);
                    }
                    _this.setState({ isOpen: true });
                    break;
                case 'arrowleft':
                case 'arrowright':
                    if (_this.calendarRef) {
                        event.preventDefault();
                        var key_2 = keyPressed === 'arrowleft' ? 'left' : 'right';
                        _this.calendarRef.navigate(key_2);
                    }
                    break;
                case 'escape':
                case 'tab':
                    _this.setState({ isOpen: false });
                    break;
                case 'backspace':
                case 'delete':
                    if (selectedValue &&
                        target instanceof HTMLInputElement &&
                        target.value.length < 1) {
                        _this.setState({
                            selectedValue: '',
                            value: '',
                            view: _this.props.defaultValue || format(new Date(), 'YYYY-MM-DD'),
                        });
                        _this.props.onChange('');
                    }
                    break;
                case 'enter':
                    if (!_this.isDateDisabled(view)) {
                        _this.setState({
                            inputValue: '',
                            isOpen: false,
                            selectedValue: view,
                            value: view,
                            view: view,
                        });
                        _this.props.onChange(view);
                    }
                    break;
                default:
                    break;
            }
        };
        _this.refCalendar = function (ref) {
            _this.calendarRef = ref;
        };
        _this.handleInputChange = function (inputValue, actionMeta) {
            var onInputChange = _this.props.selectProps.onInputChange;
            if (onInputChange)
                onInputChange(inputValue, actionMeta);
            _this.setState({ inputValue: inputValue });
        };
        _this.getContainerRef = function (ref) {
            var oldRef = _this.containerRef;
            _this.containerRef = ref;
            // Cause a re-render if we're getting the container ref for the first time
            // as the layered menu requires it for dimension calculation
            if (oldRef == null && ref != null) {
                _this.forceUpdate();
            }
        };
        _this.getSubtleControlStyles = function (isOpen) { return ({
            border: "2px solid " + (isOpen ? B100 : "transparent"),
            backgroundColor: 'transparent',
            padding: '1px',
        }); };
        /**
         * There are two props that can change how the date is parsed.
         * The priority of props used is:
         *   1. parseInputValue
         *   2. locale
         */
        _this.parseDate = function (date) {
            var _a = _this.props, parseInputValue = _a.parseInputValue, dateFormat = _a.dateFormat;
            if (parseInputValue) {
                return parseInputValue(date, dateFormat || defaultDateFormat);
            }
            var l10n = _this.getSafeState().l10n;
            return l10n.parseDate(date);
        };
        /**
         * There are multiple props that can change how the date is formatted.
         * The priority of props used is:
         *   1. formatDisplayLabel
         *   2. dateFormat
         *   3. locale
         */
        _this.formatDate = function (value) {
            var _a = _this.props, formatDisplayLabel = _a.formatDisplayLabel, dateFormat = _a.dateFormat;
            var l10n = _this.getSafeState().l10n;
            if (formatDisplayLabel) {
                return formatDisplayLabel(value, dateFormat || defaultDateFormat);
            }
            var date = parse(value);
            if (dateFormat) {
                return format(date, dateFormat);
            }
            return l10n.formatDate(date);
        };
        _this.getPlaceholder = function () {
            var placeholder = _this.props.placeholder;
            if (placeholder) {
                return placeholder;
            }
            var l10n = _this.getSafeState().l10n;
            return l10n.formatDate(placeholderDatetime);
        };
        var _a = getDateObj(new Date()), day = _a.day, month = _a.month, year = _a.year;
        _this.state = {
            isOpen: _this.props.defaultIsOpen,
            inputValue: _this.props.selectProps.inputValue,
            selectedValue: _this.props.value || _this.props.defaultValue,
            value: _this.props.defaultValue,
            view: _this.props.value ||
                _this.props.defaultValue ||
                year + "-" + padToTwo(month) + "-" + padToTwo(day),
            l10n: createLocalizationProvider(_this.props.locale),
        };
        return _this;
    }
    DatePicker.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setState({
                l10n: createLocalizationProvider(nextProps.locale),
            });
        }
    };
    DatePicker.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, autoFocus = _a.autoFocus, disabled = _a.disabled, hideIcon = _a.hideIcon, icon = _a.icon, id = _a.id, innerProps = _a.innerProps, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, name = _a.name, selectProps = _a.selectProps, spacing = _a.spacing, locale = _a.locale;
        var BORDER_WIDTH = 2;
        var ICON_PADDING = 2;
        var _b = this.getSafeState(), value = _b.value, view = _b.view, isOpen = _b.isOpen, inputValue = _b.inputValue;
        var dropDownIcon = appearance === 'subtle' || hideIcon ? null : icon;
        var _c = selectProps.styles, selectStyles = _c === void 0 ? {} : _c;
        var controlStyles = appearance === 'subtle' ? this.getSubtleControlStyles(isOpen) : {};
        var disabledStyle = isDisabled ? { pointerEvents: 'none' } : {};
        var calendarProps = {
            calendarContainerRef: this.containerRef,
            calendarRef: this.refCalendar,
            calendarDisabled: disabled,
            calendarValue: value,
            calendarView: view,
            onCalendarChange: this.onCalendarChange,
            onCalendarSelect: this.onCalendarSelect,
            calendarLocale: locale,
        };
        return (React.createElement("div", __assign({}, innerProps, { role: "presentation", onClick: this.onInputClick, onInput: this.onSelectInput, onKeyDown: this.onSelectKeyDown, ref: this.getContainerRef }),
            React.createElement("input", { name: name, type: "hidden", value: value }),
            React.createElement(Select, __assign({ menuIsOpen: isOpen && !isDisabled, openMenuOnFocus: true, closeMenuOnSelect: true, autoFocus: autoFocus, instanceId: id, isDisabled: isDisabled, onBlur: this.onSelectBlur, onFocus: this.onSelectFocus, inputValue: inputValue, onInputChange: this.handleInputChange, components: {
                    ClearIndicator: ClearIndicator,
                    DropdownIndicator: dropDownIcon,
                    Menu: Menu,
                }, styles: mergeStyles(selectStyles, {
                    control: function (base) { return (__assign(__assign(__assign({}, base), controlStyles), disabledStyle)); },
                    indicatorsContainer: function (base) { return (__assign(__assign({}, base), { paddingLeft: ICON_PADDING, paddingRight: gridSize() - BORDER_WIDTH })); },
                }), placeholder: this.getPlaceholder(), value: value && {
                    label: this.formatDate(value),
                    value: value,
                } }, selectProps, calendarProps, { spacing: spacing, validationState: isInvalid ? 'error' : 'default' }))));
    };
    DatePicker.defaultProps = {
        appearance: 'default',
        autoFocus: false,
        defaultIsOpen: false,
        defaultValue: '',
        disabled: [],
        hideIcon: false,
        icon: CalendarIcon,
        id: '',
        innerProps: {},
        isDisabled: false,
        isInvalid: false,
        name: '',
        onBlur: noop,
        onChange: noop,
        onFocus: noop,
        selectProps: {},
        spacing: 'default',
        locale: 'en-US',
    };
    return DatePicker;
}(React.Component));
export { DatePicker as DatePickerWithoutAnalytics };
export default withAnalyticsContext({
    componentName: 'datePicker',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onChange: createAndFireEvent('atlaskit')({
        action: 'selectedDate',
        actionSubject: 'datePicker',
        attributes: {
            componentName: 'datePicker',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(DatePicker));
var templateObject_1;
//# sourceMappingURL=DatePicker.js.map