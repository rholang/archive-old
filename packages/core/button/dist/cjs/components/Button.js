"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = tslib_1.__importDefault(require("react"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var theme_1 = require("../theme");
var utils_1 = require("./utils");
var Content_1 = tslib_1.__importDefault(require("./Content"));
var InnerWrapper_1 = tslib_1.__importDefault(require("./InnerWrapper"));
var IconWrapper_1 = tslib_1.__importDefault(require("./IconWrapper"));
var LoadingSpinner_1 = tslib_1.__importDefault(require("./LoadingSpinner"));
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ref can be a range of things because we render button, a, span or other React components
        _this.button = react_1.default.createRef();
        // Makes sure we don't call ref every render.
        _this.getComposedRefs = memoize_one_1.default(utils_1.composeRefs);
        _this.state = {
            isActive: false,
            isFocus: false,
            isHover: false,
        };
        _this.isInteractive = function () { return !_this.props.isDisabled && !_this.props.isLoading; };
        _this.onMouseEnter = function (e) {
            _this.setState({ isHover: true });
            if (_this.props.onMouseEnter) {
                _this.props.onMouseEnter(e);
            }
        };
        _this.onMouseLeave = function (e) {
            _this.setState({ isHover: false, isActive: false });
            if (_this.props.onMouseLeave) {
                _this.props.onMouseLeave(e);
            }
        };
        _this.onMouseDown = function (e) {
            e.preventDefault();
            _this.setState({ isActive: true });
            if (_this.props.onMouseDown) {
                _this.props.onMouseDown(e);
            }
        };
        _this.onMouseUp = function (e) {
            _this.setState({ isActive: false });
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        };
        _this.onFocus = function (event) {
            _this.setState({ isFocus: true });
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };
        _this.onBlur = function (event) {
            _this.setState({ isFocus: false });
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };
        _this.getElement = function () {
            var _a = _this.props, href = _a.href, isDisabled = _a.isDisabled;
            if (href) {
                return isDisabled ? 'span' : 'a';
            }
            return 'button';
        };
        // Swallow click events when the button is disabled
        // to prevent inner child clicks bubbling up.
        _this.onInnerClick = function (e) {
            if (!_this.isInteractive()) {
                e.stopPropagation();
            }
            return true;
        };
        return _this;
    }
    Button.prototype.componentDidMount = function () {
        if (this.props.autoFocus && this.button instanceof HTMLButtonElement) {
            this.button.focus();
        }
    };
    Button.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, children = _a.children, className = _a.className, CustomComponent = _a.component, consumerRef = _a.consumerRef, iconAfter = _a.iconAfter, iconBefore = _a.iconBefore, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isLoading, isLoading = _d === void 0 ? false : _d, _e = _a.isSelected, isSelected = _e === void 0 ? false : _e, _f = _a.shouldFitContainer, shouldFitContainer = _f === void 0 ? false : _f, _g = _a.spacing, spacing = _g === void 0 ? 'default' : _g, _h = _a.theme, theme = _h === void 0 ? function (current, props) { return current(props); } : _h, testId = _a.testId, rest = tslib_1.__rest(_a, ["appearance", "children", "className", "component", "consumerRef", "iconAfter", "iconBefore", "isDisabled", "isLoading", "isSelected", "shouldFitContainer", "spacing", "theme", "testId"]);
        var attributes = tslib_1.__assign(tslib_1.__assign({}, this.state), { isSelected: isSelected, isDisabled: isDisabled });
        var StyledButton = CustomComponent || this.getElement();
        var iconIsOnlyChild = !!((iconBefore && !iconAfter && !children) ||
            (iconAfter && !iconBefore && !children));
        var specifiers = function (styles) {
            if (StyledButton === 'a') {
                return {
                    'a&': styles,
                };
            }
            else if (StyledButton === CustomComponent) {
                return {
                    '&, a&, &:hover, &:active, &:focus': styles,
                };
            }
            return styles;
        };
        return (core_1.jsx(theme_1.Theme.Provider, { value: theme },
            core_1.jsx(components_1.default.Consumer, null, function (_a) {
                var mode = _a.mode;
                return (core_1.jsx(theme_1.Theme.Consumer, tslib_1.__assign({ mode: mode, state: utils_1.mapAttributesToState(attributes), iconIsOnlyChild: iconIsOnlyChild }, _this.props), function (_a) {
                    var buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
                    return (core_1.jsx(StyledButton, tslib_1.__assign({}, utils_1.filterProps(rest, StyledButton), { "data-testid": testId, ref: _this.getComposedRefs(_this.button, consumerRef), onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, onMouseDown: _this.onMouseDown, onMouseUp: _this.onMouseUp, onFocus: _this.onFocus, onBlur: _this.onBlur, disabled: isDisabled, className: className, css: specifiers(buttonStyles) }),
                        core_1.jsx(InnerWrapper_1.default, { onClick: _this.onInnerClick, fit: !!shouldFitContainer },
                            isLoading && (core_1.jsx(LoadingSpinner_1.default, { spacing: spacing, appearance: appearance, isSelected: isSelected, isDisabled: isDisabled, styles: spinnerStyles })),
                            iconBefore && (core_1.jsx(IconWrapper_1.default, { isLoading: isLoading, spacing: spacing, isOnlyChild: iconIsOnlyChild, icon: iconBefore })),
                            children && (core_1.jsx(Content_1.default, { isLoading: isLoading, followsIcon: !!iconBefore, spacing: spacing }, children)),
                            iconAfter && (core_1.jsx(IconWrapper_1.default, { isLoading: isLoading, spacing: spacing, isOnlyChild: iconIsOnlyChild, icon: iconAfter })))));
                }));
            })));
    };
    Button.defaultProps = {
        appearance: 'default',
        autoFocus: false,
        isDisabled: false,
        isLoading: false,
        isSelected: false,
        shouldFitContainer: false,
        spacing: 'default',
        type: 'button',
    };
    return Button;
}(react_1.default.Component));
exports.Button = Button;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
var ButtonWithRef = react_1.default.forwardRef(function (props, ref) { return core_1.jsx(Button, tslib_1.__assign({}, props, { consumerRef: ref })); });
ButtonWithRef.displayName = 'Button';
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'button',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'button',
        attributes: {
            componentName: 'button',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(ButtonWithRef));
//# sourceMappingURL=Button.js.map