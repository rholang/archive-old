"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("./version.json");
var RadioIcon_1 = tslib_1.__importDefault(require("./RadioIcon"));
var RadioInput_1 = require("./styled/RadioInput");
var Radio_1 = require("./styled/Radio");
var Radio = /** @class */ (function (_super) {
    tslib_1.__extends(Radio, _super);
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
        var _a = this.props, ariaLabel = _a.ariaLabel, isDisabled = _a.isDisabled, isRequired = _a.isRequired, isInvalid = _a.isInvalid, isChecked = _a.isChecked, label = _a.label, name = _a.name, onChange = _a.onChange, onInvalid = _a.onInvalid, value = _a.value, testId = _a.testId, rest = tslib_1.__rest(_a, ["ariaLabel", "isDisabled", "isRequired", "isInvalid", "isChecked", "label", "name", "onChange", "onInvalid", "value", "testId"]);
        var _b = this.state, isFocused = _b.isFocused, isHovered = _b.isHovered, isActive = _b.isActive;
        return (react_1.default.createElement(Radio_1.Label, { isDisabled: isDisabled, onMouseDown: this.onMouseDown, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onMouseUp: this.onMouseUp, "data-testid": testId && testId + "--radio-label" },
            react_1.default.createElement(RadioInput_1.RadioInputWrapper, null,
                react_1.default.createElement(RadioInput_1.HiddenInput, tslib_1.__assign({ "aria-label": ariaLabel, checked: isChecked, disabled: isDisabled, name: name, onChange: onChange, onBlur: this.onBlur, onInvalid: onInvalid, onFocus: this.onFocus, required: isRequired, type: "radio", value: value }, rest, { "data-testid": testId && testId + "--hidden-radio" })),
                react_1.default.createElement(RadioIcon_1.default, { isActive: isActive, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isHovered: isHovered, isInvalid: isInvalid })),
            label ? react_1.default.createElement(Radio_1.LabelText, null, label) : null));
    };
    Radio.defaultProps = {
        isDisabled: false,
        isInvalid: false,
        isChecked: false,
    };
    return Radio;
}(react_1.Component));
exports.RadioWithoutAnalytics = Radio;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'radio',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onChange: createAndFireEventOnAtlaskit({
        action: 'changed',
        actionSubject: 'radio',
        attributes: {
            componentName: 'radio',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Radio));
//# sourceMappingURL=Radio.js.map