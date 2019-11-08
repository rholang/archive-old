import { __assign, __extends, __rest } from "tslib";
import Select, { CreatableSelect, components, mergeStyles, } from '@atlaskit/select';
import { createLocalizationProvider, } from '@atlaskit/locale';
import pick from 'lodash.pick';
// eslint-disable-next-line no-restricted-imports
import { format, isValid } from 'date-fns';
import React from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { B100 } from '@atlaskit/theme/colors';
import { gridSize } from '@atlaskit/theme/constants';
import { name as packageName, version as packageVersion, } from '../version.json';
import { ClearIndicator, defaultTimes, DropdownIndicator, defaultTimeFormat, placeholderDatetime, } from '../internal';
import parseTime from '../internal/parseTime';
import FixedLayer from '../internal/FixedLayer';
var menuStyles = {
    /* Need to remove default absolute positioning as that causes issues with position fixed */
    position: 'static',
    /* Need to add overflow to the element with max-height, otherwise causes overflow issues in IE11 */
    overflowY: 'auto',
};
var FixedLayerMenu = function (_a) {
    var selectProps = _a.selectProps, rest = __rest(_a, ["selectProps"]);
    return (React.createElement(FixedLayer, { inputValue: selectProps.inputValue, containerRef: selectProps.fixedLayerRef, content: React.createElement(components.Menu, __assign({}, rest, { menuShouldScrollIntoView: false })) }));
};
function noop() { }
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerRef = null;
        _this.state = {
            isOpen: _this.props.defaultIsOpen,
            value: _this.props.defaultValue,
            isFocused: false,
            l10n: createLocalizationProvider(_this.props.locale),
        };
        // All state needs to be accessed via this function so that the state is mapped from props
        // correctly to allow controlled/uncontrolled usage.
        _this.getSafeState = function () {
            return __assign(__assign({}, _this.state), pick(_this.props, ['value', 'isOpen']));
        };
        _this.onChange = function (v) {
            var value = v ? v.value : '';
            _this.setState({ value: value });
            _this.props.onChange(value);
        };
        /** Only allow custom times if timeIsEditable prop is true  */
        _this.onCreateOption = function (inputValue) {
            if (_this.props.timeIsEditable) {
                var _a = _this.props, parseInputValue = _a.parseInputValue, timeFormat = _a.timeFormat;
                // TODO parseInputValue doesn't accept `timeFormat` as an function arg yet...
                var value = format(parseInputValue(inputValue, timeFormat || defaultTimeFormat), 'HH:mm') || '';
                _this.setState({ value: value });
                _this.props.onChange(value);
            }
            else {
                _this.onChange(inputValue);
            }
        };
        _this.onMenuOpen = function () {
            _this.setState({ isOpen: true });
        };
        _this.onMenuClose = function () {
            _this.setState({ isOpen: false });
        };
        _this.setContainerRef = function (ref) {
            var oldRef = _this.containerRef;
            _this.containerRef = ref;
            // Cause a re-render if we're getting the container ref for the first time
            // as the layered menu requires it for dimension calculation
            if (oldRef == null && ref != null) {
                _this.forceUpdate();
            }
        };
        _this.onBlur = function (event) {
            _this.setState({ isFocused: false });
            _this.props.onBlur(event);
        };
        _this.onFocus = function (event) {
            _this.setState({ isFocused: true });
            _this.props.onFocus(event);
        };
        _this.getSubtleControlStyles = function (selectStyles) {
            if (selectStyles.control)
                return {};
            return {
                border: "2px solid " + (_this.getSafeState().isFocused ? "" + B100 : "transparent"),
                backgroundColor: 'transparent',
                padding: '1px',
            };
        };
        /**
         * There are multiple props that can change how the time is formatted.
         * The priority of props used is:
         *   1. formatDisplayLabel
         *   2. timeFormat
         *   3. locale
         */
        _this.formatTime = function (time) {
            var _a = _this.props, formatDisplayLabel = _a.formatDisplayLabel, timeFormat = _a.timeFormat;
            var l10n = _this.getSafeState().l10n;
            if (formatDisplayLabel) {
                return formatDisplayLabel(time, timeFormat || defaultTimeFormat);
            }
            var date = parseTime(time);
            if (!(date instanceof Date)) {
                return '';
            }
            if (!isValid(date)) {
                return time;
            }
            if (timeFormat) {
                return format(date, timeFormat);
            }
            return l10n.formatTime(date);
        };
        _this.getPlaceholder = function () {
            var placeholder = _this.props.placeholder;
            if (placeholder) {
                return placeholder;
            }
            var l10n = _this.getSafeState().l10n;
            return l10n.formatTime(placeholderDatetime);
        };
        return _this;
    }
    TimePicker.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setState({ l10n: createLocalizationProvider(nextProps.locale) });
        }
    };
    TimePicker.prototype.getOptions = function () {
        var _this = this;
        return this.props.times.map(function (time) {
            return {
                label: _this.formatTime(time),
                value: time,
            };
        });
    };
    TimePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, autoFocus = _a.autoFocus, id = _a.id, innerProps = _a.innerProps, isDisabled = _a.isDisabled, name = _a.name, selectProps = _a.selectProps, spacing = _a.spacing;
        var ICON_PADDING = 2;
        var BORDER_WIDTH = 2;
        var _b = this.getSafeState(), _c = _b.value, value = _c === void 0 ? '' : _c, isOpen = _b.isOpen;
        var validationState = this.props.isInvalid ? 'error' : 'default';
        var icon = this.props.appearance === 'subtle' || this.props.hideIcon
            ? null
            : this.props.icon;
        var _d = selectProps.styles, selectStyles = _d === void 0 ? {} : _d, otherSelectProps = __rest(selectProps, ["styles"]);
        var controlStyles = this.props.appearance === 'subtle'
            ? this.getSubtleControlStyles(selectStyles)
            : {};
        var SelectComponent = this.props.timeIsEditable
            ? CreatableSelect
            : Select;
        var labelAndValue = value && {
            label: this.formatTime(value),
            value: value,
        };
        return (React.createElement("div", __assign({}, innerProps, { ref: this.setContainerRef }),
            React.createElement("input", { name: name, type: "hidden", value: value }),
            React.createElement(SelectComponent, __assign({ autoFocus: autoFocus, components: {
                    ClearIndicator: ClearIndicator,
                    DropdownIndicator: DropdownIndicator,
                    Menu: FixedLayerMenu,
                }, instanceId: id, isClearable: true, isDisabled: isDisabled, menuIsOpen: isOpen && !isDisabled, menuPlacement: "auto", openMenuOnFocus: true, onBlur: this.onBlur, onCreateOption: this.onCreateOption, onChange: this.onChange, options: this.getOptions(), onFocus: this.onFocus, onMenuOpen: this.onMenuOpen, onMenuClose: this.onMenuClose, placeholder: this.getPlaceholder(), styles: mergeStyles(selectStyles, {
                    control: function (base) { return (__assign(__assign({}, base), controlStyles)); },
                    menu: function (base) { return (__assign(__assign(__assign({}, base), menuStyles), {
                        // Fixed positioned elements no longer inherit width from their parent, so we must explicitly set the
                        // menu width to the width of our container
                        width: _this.containerRef
                            ? _this.containerRef.getBoundingClientRect().width
                            : 'auto',
                    })); },
                    indicatorsContainer: function (base) { return (__assign(__assign({}, base), { paddingLeft: icon ? ICON_PADDING : 0, paddingRight: icon ? gridSize() - BORDER_WIDTH : 0 })); },
                }), value: labelAndValue, spacing: spacing, dropdownIndicatorIcon: icon, fixedLayerRef: this.containerRef, validationState: validationState }, otherSelectProps))));
    };
    TimePicker.defaultProps = {
        appearance: 'default',
        autoFocus: false,
        defaultIsOpen: false,
        defaultValue: '',
        hideIcon: false,
        id: '',
        innerProps: {},
        isDisabled: false,
        isInvalid: false,
        name: '',
        onBlur: noop,
        onChange: noop,
        onFocus: noop,
        parseInputValue: function (time) { return parseTime(time); },
        selectProps: {},
        spacing: 'default',
        times: defaultTimes,
        timeIsEditable: false,
        locale: 'en-US',
    };
    return TimePicker;
}(React.Component));
export { TimePicker as TimePickerWithoutAnalytics };
export default withAnalyticsContext({
    componentName: 'timePicker',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onChange: createAndFireEvent('atlaskit')({
        action: 'selectedTime',
        actionSubject: 'timePicker',
        attributes: {
            componentName: 'timePicker',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(TimePicker));
//# sourceMappingURL=TimePicker.js.map