"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var version_json_1 = require("../version.json");
var theme_1 = require("../theme");
var styled_1 = require("../styled");
var TextAreaElement_1 = tslib_1.__importDefault(require("./TextAreaElement"));
var TextAreaWithoutForwardRef = /** @class */ (function (_super) {
    tslib_1.__extends(TextAreaWithoutForwardRef, _super);
    function TextAreaWithoutForwardRef() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFocused: false,
        };
        _this.handleOnBlur = function (event) {
            var onBlur = _this.props.onBlur;
            _this.setState({ isFocused: false });
            if (onBlur) {
                onBlur(event);
            }
        };
        _this.handleOnFocus = function (event) {
            var onFocus = _this.props.onFocus;
            _this.setState({ isFocused: true });
            if (onFocus) {
                onFocus(event);
            }
        };
        return _this;
    }
    TextAreaWithoutForwardRef.prototype.render = function () {
        var _this = this;
        var _a = this.props, createAnalyticsEvent = _a.createAnalyticsEvent, appearance = _a.appearance, resize = _a.resize, isCompact = _a.isCompact, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isReadOnly = _a.isReadOnly, isMonospaced = _a.isMonospaced, isRequired = _a.isRequired, minimumRows = _a.minimumRows, maxHeight = _a.maxHeight, theme = _a.theme, forwardedRef = _a.forwardedRef, testId = _a.testId, rest = tslib_1.__rest(_a, ["createAnalyticsEvent", "appearance", "resize", "isCompact", "isDisabled", "isInvalid", "isReadOnly", "isMonospaced", "isRequired", "minimumRows", "maxHeight", "theme", "forwardedRef", "testId"]);
        var isFocused = this.state.isFocused;
        return (react_1.default.createElement(components_1.default.Consumer, null, function (_a) {
            var mode = _a.mode;
            return (react_1.default.createElement(theme_1.Theme.Provider, { value: theme },
                react_1.default.createElement(theme_1.Theme.Consumer, { appearance: appearance, mode: mode }, function (tokens) { return (react_1.default.createElement(styled_1.TextAreaWrapper, tslib_1.__assign({ resize: resize, maxHeight: maxHeight, appearance: appearance, isCompact: isCompact, isDisabled: isDisabled, isReadOnly: isReadOnly, isMonospaced: isMonospaced, isFocused: isFocused, isInvalid: isInvalid, minimumRows: minimumRows }, tokens),
                    react_1.default.createElement(TextAreaElement_1.default, tslib_1.__assign({ forwardedRef: forwardedRef, resize: resize, disabled: isDisabled, readOnly: isReadOnly, required: isRequired }, rest, { onFocus: _this.handleOnFocus, onBlur: _this.handleOnBlur, "data-testid": testId })))); })));
        }));
    };
    TextAreaWithoutForwardRef.defaultProps = {
        resize: 'smart',
        appearance: 'standard',
        isCompact: false,
        isRequired: false,
        isReadOnly: false,
        isDisabled: false,
        isInvalid: false,
        isMonospaced: false,
        minimumRows: 1,
        maxHeight: '50vh',
        forwardedRef: function () { },
    };
    return TextAreaWithoutForwardRef;
}(react_1.default.Component));
var TextArea = react_1.default.forwardRef(function (props, ref) { return (
// Once Extract React Types is fixed to read from default exports we can
// move textareaRef instantiation to after the spread.
// as of now we do this to reduce the chance of users being misled into a breaking configuration
// by our documentation.
react_1.default.createElement(TextAreaWithoutForwardRef, tslib_1.__assign({ forwardedRef: ref }, props))); });
exports.TextAreaWithoutAnalytics = TextArea;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'textArea',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'textArea',
        attributes: {
            componentName: 'textArea',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'textArea',
        attributes: {
            componentName: 'textArea',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(TextArea));
//# sourceMappingURL=TextArea.js.map