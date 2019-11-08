"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var version_json_1 = require("../version.json");
var constants_1 = require("./constants");
var Presence_1 = tslib_1.__importDefault(require("./Presence"));
var AvatarImage_1 = tslib_1.__importDefault(require("./AvatarImage"));
var Status_1 = tslib_1.__importDefault(require("./Status"));
var Avatar_1 = tslib_1.__importStar(require("../styled/Avatar"));
var utils_1 = require("../utils");
var helpers_1 = require("../helpers");
var hoc_1 = require("../hoc");
var theme_1 = require("../theme");
var constants_2 = require("../styled/constants");
var validIconSizes = Object.keys(constants_2.ICON_SIZES);
var warn = function (message) {
    if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
        console.warn(message); // eslint-disable-line no-console
    }
};
var Avatar = /** @class */ (function (_super) {
    tslib_1.__extends(Avatar, _super);
    function Avatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
        _this.clickAnalyticsCaller = function () {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            return createAnalyticsEvent
                ? _this.createAndFireEventOnAtlaskit({
                    action: 'clicked',
                    actionSubject: 'avatar',
                    attributes: {
                        componentName: 'avatar',
                        packageName: version_json_1.name,
                        packageVersion: version_json_1.version,
                    },
                })(createAnalyticsEvent)
                : undefined;
        };
        // expose blur/focus to consumers via ref
        _this.blur = function () {
            if (_this.ref)
                _this.ref.blur();
        };
        _this.focus = function () {
            if (_this.ref)
                _this.ref.focus();
        };
        // disallow click on disabled avatars
        // only return avatar data properties
        _this.guardedClick = function (event) {
            var _a = _this.props, isDisabled = _a.isDisabled, onClick = _a.onClick;
            if (isDisabled || typeof onClick !== 'function')
                return;
            var item = utils_1.omit.apply(void 0, tslib_1.__spread([_this.props], constants_1.propsOmittedFromClickData));
            var analyticsEvent = _this.clickAnalyticsCaller();
            onClick({ item: item, event: event }, analyticsEvent);
        };
        // enforce status / presence rules
        /* eslint-disable no-console */
        _this.renderIcon = function () {
            var _a = _this.props, appearance = _a.appearance, borderColor = _a.borderColor, presence = _a.presence, status = _a.status;
            var showPresence = Boolean(presence);
            var showStatus = Boolean(status);
            // no icon needed
            if (!showStatus && !showPresence) {
                return null;
            }
            if (showStatus && showPresence) {
                warn('Avatar supports `presence` OR `status` properties, not both.');
                return null;
            }
            // only support particular sizes
            if (validIconSizes.indexOf(_this.props.size) === -1) {
                warn("Avatar size \"" + String(_this.props.size) + "\" does NOT support " + (showPresence ? 'presence' : 'status'));
                return null;
            }
            // we can cast here because we already know that it is a valid icon size
            var size = _this.props.size;
            var indicator = (function () {
                if (showPresence) {
                    var customPresenceNode = typeof presence === 'object' ? presence : null;
                    return (react_1.default.createElement(Avatar_1.PresenceWrapper, { appearance: appearance, size: size },
                        react_1.default.createElement(Presence_1.default, { borderColor: borderColor, presence: !customPresenceNode && presence, size: size }, customPresenceNode)));
                }
                // showStatus
                var customStatusNode = typeof status === 'object' ? status : null;
                return (react_1.default.createElement(Avatar_1.StatusWrapper, { appearance: appearance, size: size },
                    react_1.default.createElement(Status_1.default, { borderColor: borderColor, status: !customStatusNode && status, size: size }, customStatusNode)));
            })();
            return indicator;
        };
        _this.setRef = function (ref) {
            _this.ref = ref;
        };
        return _this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, enableTooltip = _a.enableTooltip, name = _a.name, size = _a.size, src = _a.src, stackIndex = _a.stackIndex, onClick = _a.onClick, theme = _a.theme, testId = _a.testId;
        // distill props from context, props, and state
        var enhancedProps = helpers_1.getProps(this);
        // provide element interface based on props
        var Inner = helpers_1.getStyledAvatar(this.props);
        Inner.displayName = 'Inner';
        var AvatarNode = (react_1.default.createElement(theme_1.Theme.Provider, { value: theme },
            react_1.default.createElement(Avatar_1.default, { size: size, stackIndex: stackIndex, testId: testId },
                react_1.default.createElement(Inner, tslib_1.__assign({ innerRef: this.setRef }, enhancedProps, { onClick: onClick != null ? this.guardedClick : undefined }),
                    react_1.default.createElement(AvatarImage_1.default, { alt: name, appearance: appearance, size: size, src: src })),
                this.renderIcon())));
        return enableTooltip && name ? (react_1.default.createElement(tooltip_1.default, { content: name }, AvatarNode)) : (AvatarNode);
    };
    Avatar.defaultProps = {
        appearance: 'circle',
        enableTooltip: true,
        size: 'medium',
    };
    return Avatar;
}(react_1.Component));
exports.AvatarWithoutAnalytics = hoc_1.mapProps({
    appearance: function (props) { return props.appearance || Avatar.defaultProps.appearance; },
    isInteractive: function (props) {
        return Boolean((typeof props.enableTooltip !== 'undefined'
            ? props.enableTooltip
            : Avatar.defaultProps.enableTooltip) && props.name);
    },
})(hoc_1.withPseudoState(Avatar));
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'avatar',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents()(exports.AvatarWithoutAnalytics));
//# sourceMappingURL=Avatar.js.map