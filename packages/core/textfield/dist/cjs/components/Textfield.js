"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var Input_1 = tslib_1.__importDefault(require("./Input"));
var theme_1 = require("../theme");
var Textfield = /** @class */ (function (_super) {
    tslib_1.__extends(Textfield, _super);
    function Textfield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFocused: false,
            isHovered: false,
        };
        _this.input = null;
        _this.handleOnFocus = function (event) {
            _this.setState({ isFocused: true });
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };
        _this.handleOnBlur = function (event) {
            _this.setState({ isFocused: false });
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };
        _this.handleOnMouseDown = function (event) {
            /** Running e.preventDefault() on the INPUT prevents double click behaviour */
            // Sadly we needed this cast as the target type is being correctly set
            var target = event.target;
            if (target.tagName !== 'INPUT') {
                event.preventDefault();
            }
            if (_this.input &&
                !_this.props.isDisabled &&
                document.activeElement !== _this.input) {
                _this.input.focus();
            }
            if (_this.props.onMouseDown) {
                _this.props.onMouseDown(event);
            }
        };
        _this.onMouseEnter = function () {
            if (!_this.props.isDisabled) {
                _this.setState({ isHovered: true });
            }
        };
        _this.onMouseLeave = function () {
            if (!_this.props.isDisabled) {
                _this.setState({ isHovered: false });
            }
        };
        // we want to keep a copy of the ref as well as pass it along
        _this.setInputRef = function (input) {
            _this.input = input;
            var forwardedRef = _this.props.forwardedRef;
            if (!forwardedRef) {
                return;
            }
            if (typeof forwardedRef === 'object') {
                // This is a blunder on the part of @types/react
                // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065
                // .current should be assignable
                // @ts-ignore
                forwardedRef.current = input;
            }
            if (typeof forwardedRef === 'function') {
                forwardedRef(input);
            }
        };
        return _this;
    }
    Textfield.prototype.render = function () {
        var _this = this;
        var _a = this.state, isFocused = _a.isFocused, isHovered = _a.isHovered;
        var _b = this.props, 
        // Sadly need to pull these out.
        // It is injected by the HOC and we don't want to pass it onto the HTML input
        // @ts-ignore: not passed onto input
        createAnalyticsEvent = _b.createAnalyticsEvent, 
        // @ts-ignore: not passed onto input
        forwardedRef = _b.forwardedRef, appearance = _b.appearance, isCompact = _b.isCompact, isDisabled = _b.isDisabled, isInvalid = _b.isInvalid, isRequired = _b.isRequired, isReadOnly = _b.isReadOnly, isMonospaced = _b.isMonospaced, theme = _b.theme, width = _b.width, elemAfterInput = _b.elemAfterInput, elemBeforeInput = _b.elemBeforeInput, testId = _b.testId, otherProps = tslib_1.__rest(_b, ["createAnalyticsEvent", "forwardedRef", "appearance", "isCompact", "isDisabled", "isInvalid", "isRequired", "isReadOnly", "isMonospaced", "theme", "width", "elemAfterInput", "elemBeforeInput", "testId"]);
        return (react_1.default.createElement(theme_1.Theme.Provider, { value: theme },
            react_1.default.createElement(components_1.default.Consumer, null, function (_a) {
                var mode = _a.mode;
                return (react_1.default.createElement(theme_1.Theme.Consumer, { appearance: appearance, mode: mode, width: width, isDisabled: isDisabled, isCompact: isCompact, isMonospaced: isMonospaced, isFocused: isFocused, isHovered: isHovered, isInvalid: isInvalid }, function (tokens) { return (react_1.default.createElement(Input_1.default
                /* spreading before applying other props to prevent overwriting */
                , tslib_1.__assign({}, otherProps, { isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, theme: tokens, onBlur: _this.handleOnBlur, onFocus: _this.handleOnFocus, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, onMouseDown: _this.handleOnMouseDown, elemAfterInput: elemAfterInput, elemBeforeInput: elemBeforeInput, innerRef: _this.setInputRef, testId: testId }))); }));
            })));
    };
    Textfield.defaultProps = {
        appearance: 'standard',
        isCompact: false,
        isMonospaced: false,
        isInvalid: false,
        isRequired: false,
        isReadOnly: false,
        isDisabled: false,
    };
    return Textfield;
}(react_1.default.Component));
var ForwardRefTextfield = react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(Textfield, tslib_1.__assign({}, props, { forwardedRef: ref })); });
exports.TextFieldWithoutAnalytics = ForwardRefTextfield;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'textField',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'textField',
        attributes: {
            componentName: 'textField',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'textField',
        attributes: {
            componentName: 'textField',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(ForwardRefTextfield));
//# sourceMappingURL=Textfield.js.map