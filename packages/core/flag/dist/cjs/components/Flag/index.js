"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var chevron_up_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-up"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var version_json_1 = require("../../version.json");
var styledFlag_1 = tslib_1.__importStar(require("./styledFlag"));
var Expander_1 = tslib_1.__importDefault(require("../Expander"));
var FlagActions_1 = tslib_1.__importDefault(require("../FlagActions"));
var theme_1 = require("../../theme");
exports.DEFAULT_APPEARANCE = 'normal';
var Flag = /** @class */ (function (_super) {
    tslib_1.__extends(Flag, _super);
    function Flag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isExpanded: false };
        _this.dismissFlag = function () {
            if (_this.props.isDismissAllowed && _this.props.onDismissed) {
                _this.props.onDismissed(_this.props.id);
            }
        };
        _this.isBold = function () { return _this.props.appearance !== exports.DEFAULT_APPEARANCE; };
        _this.toggleExpand = function () {
            _this.setState({ isExpanded: !_this.state.isExpanded });
        };
        _this.renderToggleOrDismissButton = function () {
            var _a = _this.props, appearance = _a.appearance, description = _a.description, actions = _a.actions, isDismissAllowed = _a.isDismissAllowed, onDismissed = _a.onDismissed;
            var isBold = _this.isBold();
            if (!isDismissAllowed ||
                (!isBold && !onDismissed) ||
                (isBold && !description && (!actions || !actions.length))) {
                return null;
            }
            var ChevronIcon = _this.state.isExpanded ? chevron_up_1.default : chevron_down_1.default;
            var ButtonIcon = isBold ? ChevronIcon : cross_1.default;
            var buttonLabel = isBold ? 'Toggle flag body' : 'Dismiss flag';
            var buttonAction = isBold ? _this.toggleExpand : _this.dismissFlag;
            var size = ButtonIcon === ChevronIcon ? 'large' : 'small';
            return (react_1.default.createElement(styledFlag_1.DismissButton, { appearance: appearance, "aria-expanded": _this.state.isExpanded, focusRingColor: theme_1.flagFocusRingColor(_this.props), onClick: buttonAction, type: "button" },
                react_1.default.createElement(ButtonIcon, { label: buttonLabel, size: size })));
        };
        _this.renderBody = function () {
            var _a = _this.props, actions = _a.actions, appearance = _a.appearance, description = _a.description, linkComponent = _a.linkComponent, testId = _a.testId;
            var isExpanded = !_this.isBold() || _this.state.isExpanded;
            return (react_1.default.createElement(Expander_1.default, { isExpanded: isExpanded },
                description && (react_1.default.createElement(styledFlag_1.Description, { appearance: appearance }, description)),
                react_1.default.createElement(FlagActions_1.default, { actions: actions, appearance: appearance, linkComponent: linkComponent, "data-testid": testId })));
        };
        // We prevent default on mouse down to avoid focus ring when the flag is clicked,
        // while still allowing it to be focused with the keyboard.
        _this.handleMouseDown = function (e) {
            e.preventDefault();
        };
        return _this;
    }
    Flag.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var actions = nextProps.actions, description = nextProps.description;
        if (this.isBold() &&
            this.state.isExpanded &&
            !description &&
            (!actions || !actions.length)) {
            this.toggleExpand();
        }
    };
    Flag.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, icon = _a.icon, title = _a.title, onMouseOver = _a.onMouseOver, onFocus = _a.onFocus, onMouseOut = _a.onMouseOut, onBlur = _a.onBlur, testId = _a.testId;
        var autoDismissProps = { onMouseOver: onMouseOver, onFocus: onFocus, onMouseOut: onMouseOut, onBlur: onBlur };
        var OptionalDismissButton = this.renderToggleOrDismissButton;
        var Body = this.renderBody;
        return (react_1.default.createElement(styledFlag_1.default, tslib_1.__assign({ appearance: appearance, role: "alert", tabIndex: 0, onMouseDown: this.handleMouseDown, "data-testid": testId }, autoDismissProps),
            react_1.default.createElement(styledFlag_1.Header, null,
                react_1.default.createElement(styledFlag_1.Icon, null, icon),
                react_1.default.createElement(styledFlag_1.Title, { appearance: appearance }, title),
                react_1.default.createElement(OptionalDismissButton, null)),
            react_1.default.createElement(styledFlag_1.Content, null,
                react_1.default.createElement(Body, null))));
    };
    Flag.defaultProps = {
        actions: [],
        appearance: exports.DEFAULT_APPEARANCE,
        isDismissAllowed: false,
    };
    return Flag;
}(react_1.Component));
exports.FlagWithoutAnalytics = Flag;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'flag',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onDismissed: createAndFireEventOnAtlaskit({
        action: 'dismissed',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Flag));
//# sourceMappingURL=index.js.map