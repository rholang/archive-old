"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var theme_1 = tslib_1.__importStar(require("./theme"));
var utils_1 = require("./utils");
var CheckboxIcon_1 = tslib_1.__importDefault(require("./CheckboxIcon"));
var version_json_1 = require("./version.json");
var elements_1 = require("./elements");
var defaults = {
    Label: elements_1.LabelOverrides,
    LabelText: elements_1.LabelTextOverrides,
    HiddenCheckbox: {
        attributesFn: function () { return ({}); },
    },
};
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isActive: false,
            isFocused: false,
            isHovered: false,
            isMouseDown: false,
            isChecked: _this.props.isChecked !== undefined
                ? _this.props.isChecked
                : _this.props.defaultChecked,
        };
        _this.checkbox = undefined;
        _this.actionKeys = [' '];
        _this.onChange = function (event) {
            if (_this.props.isDisabled) {
                return null;
            }
            event.persist();
            if (event.target.checked !== undefined) {
                _this.setState({ isChecked: event.target.checked });
            }
            if (_this.props.onChange) {
                _this.props.onChange(event);
            }
            return true;
        };
        // expose blur/focus to consumers via ref
        _this.blur = function () {
            if (_this.checkbox && _this.checkbox.blur) {
                _this.checkbox.blur();
            }
        };
        _this.focus = function () {
            if (_this.checkbox && _this.checkbox.focus) {
                _this.checkbox.focus();
            }
        };
        _this.onBlur = function () {
            return _this.setState({
                // onBlur is called after onMouseDown if the checkbox was focused, however
                // in this case on blur is called immediately after, and we need to check
                // whether the mouse is down.
                isActive: _this.state.isMouseDown && _this.state.isActive,
                isFocused: false,
            });
        };
        _this.onFocus = function () { return _this.setState({ isFocused: true }); };
        _this.onMouseLeave = function () { return _this.setState({ isActive: false, isHovered: false }); };
        _this.onMouseEnter = function () { return _this.setState({ isHovered: true }); };
        _this.onMouseUp = function () { return _this.setState({ isActive: false, isMouseDown: false }); };
        _this.onMouseDown = function () { return _this.setState({ isActive: true, isMouseDown: true }); };
        _this.onKeyDown = function (event) {
            if (event.key in _this.actionKeys) {
                _this.setState({ isActive: true });
            }
        };
        _this.onKeyUp = function (event) {
            if (event.key in _this.actionKeys) {
                _this.setState({ isActive: false });
            }
        };
        _this.createExtender = memoize_one_1.default(utils_1.createExtender);
        return _this;
    }
    Checkbox.prototype.componentDidMount = function () {
        var isIndeterminate = this.props.isIndeterminate;
        // there is no HTML attribute for indeterminate, and thus no prop equivalent.
        // it must be set via the ref.
        if (this.checkbox) {
            this.checkbox.indeterminate = !!isIndeterminate;
            if (this.props.inputRef) {
                this.props.inputRef(this.checkbox);
            }
        }
    };
    Checkbox.prototype.componentDidUpdate = function (prevProps) {
        var isIndeterminate = this.props.isIndeterminate;
        if (prevProps.isIndeterminate !== isIndeterminate && this.checkbox) {
            this.checkbox.indeterminate = !!isIndeterminate;
        }
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isIndeterminate = _a.isIndeterminate, label = _a.label, name = _a.name, overrides = _a.overrides, value = _a.value, isRequired = _a.isRequired, 
        //props not passed into HiddenCheckbox
        propsIsChecked = _a.isChecked, theme = _a.theme, testId = _a.testId;
        var isChecked = this.props.isChecked === undefined
            ? this.state.isChecked
            : propsIsChecked;
        var _b = this.state, isFocused = _b.isFocused, isActive = _b.isActive, isHovered = _b.isHovered;
        var getOverrides = utils_1.createExtender(defaults, overrides);
        var _c = getOverrides('Label'), Label = _c.component, labelOverrides = tslib_1.__rest(_c, ["component"]);
        var _d = getOverrides('LabelText'), LabelText = _d.component, labelTextOverrides = tslib_1.__rest(_d, ["component"]);
        var hiddenCheckboxAttributesFn = getOverrides('HiddenCheckbox').attributesFn;
        return (react_1.default.createElement(theme_1.default.Provider, { value: theme },
            react_1.default.createElement(components_1.default.Consumer, null, function (_a) {
                var mode = _a.mode;
                return (react_1.default.createElement(theme_1.default.Consumer, { mode: mode, tokens: theme_1.componentTokens }, function (tokens) { return (react_1.default.createElement(Label, tslib_1.__assign({}, labelOverrides, { isDisabled: isDisabled, onMouseDown: _this.onMouseDown, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, onMouseUp: _this.onMouseUp, tokens: tokens, testId: testId && testId + "--checkbox-label" }),
                    react_1.default.createElement(elements_1.CheckboxWrapper, null,
                        react_1.default.createElement(elements_1.HiddenCheckbox, { disabled: isDisabled, checked: isChecked, onChange: _this.onChange, onBlur: _this.onBlur, onFocus: _this.onFocus, onKeyUp: _this.onKeyUp, onKeyDown: _this.onKeyDown, value: value, name: name, ref: function (r) { return (_this.checkbox = r); }, required: isRequired, attributesFn: hiddenCheckboxAttributesFn, testId: testId && testId + "--hidden-checkbox" }),
                        react_1.default.createElement(CheckboxIcon_1.default, { theme: theme, overrides: {
                                IconWrapper: overrides && overrides.IconWrapper,
                                Icon: overrides && overrides.Icon,
                                IconIndeterminate: overrides && overrides.IconIndeterminate,
                            }, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isActive: isActive, isHovered: isHovered, isInvalid: isInvalid, isIndeterminate: isIndeterminate, primaryColor: "inherit", secondaryColor: "inherit", label: "" })),
                    react_1.default.createElement(LabelText, tslib_1.__assign({}, labelTextOverrides, { tokens: tokens }),
                        label,
                        isRequired && (react_1.default.createElement(elements_1.RequiredIndicator, { tokens: tokens, "aria-hidden": "true" }, "*"))))); }));
            })));
    };
    Checkbox.defaultProps = {
        isDisabled: false,
        isInvalid: false,
        defaultChecked: false,
        isIndeterminate: false,
        theme: function (current, props) { return current(props); },
    };
    return Checkbox;
}(react_1.Component));
exports.CheckboxWithoutAnalytics = Checkbox;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'checkbox',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onChange: createAndFireEventOnAtlaskit({
        action: 'changed',
        actionSubject: 'checkbox',
        attributes: {
            componentName: 'checkbox',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Checkbox));
//# sourceMappingURL=Checkbox.js.map