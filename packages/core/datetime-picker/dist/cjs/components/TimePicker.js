"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var select_1 = tslib_1.__importStar(require("@atlaskit/select"));
var locale_1 = require("@atlaskit/locale");
var lodash_pick_1 = tslib_1.__importDefault(require("lodash.pick"));
// eslint-disable-next-line no-restricted-imports
var date_fns_1 = require("date-fns");
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("@atlaskit/theme/constants");
var version_json_1 = require("../version.json");
var internal_1 = require("../internal");
var parseTime_1 = tslib_1.__importDefault(require("../internal/parseTime"));
var FixedLayer_1 = tslib_1.__importDefault(require("../internal/FixedLayer"));
var menuStyles = {
    /* Need to remove default absolute positioning as that causes issues with position fixed */
    position: 'static',
    /* Need to add overflow to the element with max-height, otherwise causes overflow issues in IE11 */
    overflowY: 'auto',
};
var FixedLayerMenu = function (_a) {
    var selectProps = _a.selectProps, rest = tslib_1.__rest(_a, ["selectProps"]);
    return (react_1.default.createElement(FixedLayer_1.default, { inputValue: selectProps.inputValue, containerRef: selectProps.fixedLayerRef, content: react_1.default.createElement(select_1.components.Menu, tslib_1.__assign({}, rest, { menuShouldScrollIntoView: false })) }));
};
function noop() { }
var TimePicker = /** @class */ (function (_super) {
    tslib_1.__extends(TimePicker, _super);
    function TimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerRef = null;
        _this.state = {
            isOpen: _this.props.defaultIsOpen,
            value: _this.props.defaultValue,
            isFocused: false,
            l10n: locale_1.createLocalizationProvider(_this.props.locale),
        };
        // All state needs to be accessed via this function so that the state is mapped from props
        // correctly to allow controlled/uncontrolled usage.
        _this.getSafeState = function () {
            return tslib_1.__assign(tslib_1.__assign({}, _this.state), lodash_pick_1.default(_this.props, ['value', 'isOpen']));
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
                var value = date_fns_1.format(parseInputValue(inputValue, timeFormat || internal_1.defaultTimeFormat), 'HH:mm') || '';
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
                border: "2px solid " + (_this.getSafeState().isFocused ? "" + colors_1.B100 : "transparent"),
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
                return formatDisplayLabel(time, timeFormat || internal_1.defaultTimeFormat);
            }
            var date = parseTime_1.default(time);
            if (!(date instanceof Date)) {
                return '';
            }
            if (!date_fns_1.isValid(date)) {
                return time;
            }
            if (timeFormat) {
                return date_fns_1.format(date, timeFormat);
            }
            return l10n.formatTime(date);
        };
        _this.getPlaceholder = function () {
            var placeholder = _this.props.placeholder;
            if (placeholder) {
                return placeholder;
            }
            var l10n = _this.getSafeState().l10n;
            return l10n.formatTime(internal_1.placeholderDatetime);
        };
        return _this;
    }
    TimePicker.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setState({ l10n: locale_1.createLocalizationProvider(nextProps.locale) });
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
        var _d = selectProps.styles, selectStyles = _d === void 0 ? {} : _d, otherSelectProps = tslib_1.__rest(selectProps, ["styles"]);
        var controlStyles = this.props.appearance === 'subtle'
            ? this.getSubtleControlStyles(selectStyles)
            : {};
        var SelectComponent = this.props.timeIsEditable
            ? select_1.CreatableSelect
            : select_1.default;
        var labelAndValue = value && {
            label: this.formatTime(value),
            value: value,
        };
        return (react_1.default.createElement("div", tslib_1.__assign({}, innerProps, { ref: this.setContainerRef }),
            react_1.default.createElement("input", { name: name, type: "hidden", value: value }),
            react_1.default.createElement(SelectComponent, tslib_1.__assign({ autoFocus: autoFocus, components: {
                    ClearIndicator: internal_1.ClearIndicator,
                    DropdownIndicator: internal_1.DropdownIndicator,
                    Menu: FixedLayerMenu,
                }, instanceId: id, isClearable: true, isDisabled: isDisabled, menuIsOpen: isOpen && !isDisabled, menuPlacement: "auto", openMenuOnFocus: true, onBlur: this.onBlur, onCreateOption: this.onCreateOption, onChange: this.onChange, options: this.getOptions(), onFocus: this.onFocus, onMenuOpen: this.onMenuOpen, onMenuClose: this.onMenuClose, placeholder: this.getPlaceholder(), styles: select_1.mergeStyles(selectStyles, {
                    control: function (base) { return (tslib_1.__assign(tslib_1.__assign({}, base), controlStyles)); },
                    menu: function (base) { return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, base), menuStyles), {
                        // Fixed positioned elements no longer inherit width from their parent, so we must explicitly set the
                        // menu width to the width of our container
                        width: _this.containerRef
                            ? _this.containerRef.getBoundingClientRect().width
                            : 'auto',
                    })); },
                    indicatorsContainer: function (base) { return (tslib_1.__assign(tslib_1.__assign({}, base), { paddingLeft: icon ? ICON_PADDING : 0, paddingRight: icon ? constants_1.gridSize() - BORDER_WIDTH : 0 })); },
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
        parseInputValue: function (time) { return parseTime_1.default(time); },
        selectProps: {},
        spacing: 'default',
        times: internal_1.defaultTimes,
        timeIsEditable: false,
        locale: 'en-US',
    };
    return TimePicker;
}(react_1.default.Component));
exports.TimePickerWithoutAnalytics = TimePicker;
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'timePicker',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onChange: analytics_next_1.createAndFireEvent('atlaskit')({
        action: 'selectedTime',
        actionSubject: 'timePicker',
        attributes: {
            componentName: 'timePicker',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(TimePicker));
//# sourceMappingURL=TimePicker.js.map