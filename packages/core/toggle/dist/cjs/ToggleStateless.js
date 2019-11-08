"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_uid_1 = require("react-uid");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var check_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check"));
var version_json_1 = require("./version.json");
var styled_1 = require("./styled");
var ToggleStateless = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleStateless, _super);
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
        var Icon = isChecked ? check_1.default : cross_1.default;
        var id = react_uid_1.uid({ id: this.constructor.name });
        return (react_1.default.createElement(styled_1.Label, { htmlFor: id, "data-testid": testId },
            react_1.default.createElement(styled_1.Input, { checked: isChecked, disabled: isDisabled, id: id, name: name, onBlur: this.handleBlur, onChange: this.handleChange, onFocus: this.handleFocus, type: "checkbox", value: value, "data-testid": testId && testId + "--input" }),
            react_1.default.createElement(styled_1.Slide, tslib_1.__assign({}, styledProps),
                react_1.default.createElement(styled_1.Inner, tslib_1.__assign({}, styledProps),
                    react_1.default.createElement(styled_1.Handle, { isChecked: isChecked, isDisabled: isDisabled, size: size }),
                    react_1.default.createElement(styled_1.IconWrapper, { isChecked: isChecked, size: size },
                        react_1.default.createElement(Icon, { label: label || (isChecked ? 'Uncheck' : 'Check'), size: size === 'large' ? undefined : 'small', primaryColor: "inherit" }))))));
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
}(react_1.Component));
exports.ToggleStatelessWithoutAnalytics = ToggleStateless;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'toggle',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'toggle',
        attributes: {
            componentName: 'toggle',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onChange: createAndFireEventOnAtlaskit({
        action: 'changed',
        actionSubject: 'toggle',
        attributes: {
            componentName: 'toggle',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'toggle',
        attributes: {
            componentName: 'toggle',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(ToggleStateless));
//# sourceMappingURL=ToggleStateless.js.map