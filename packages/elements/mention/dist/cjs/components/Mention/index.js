"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styles_1 = require("./styles");
var NoAccessTooltip_1 = require("../NoAccessTooltip");
var types_1 = require("../../types");
var analytics_1 = require("../../util/analytics");
var analytics_next_1 = require("@atlaskit/analytics-next");
var i18n_1 = require("../i18n");
exports.ANALYTICS_HOVER_DELAY = 1000;
exports.UNKNOWN_USER_ID = '_|unknown|_';
var MentionInternal = /** @class */ (function (_super) {
    tslib_1.__extends(MentionInternal, _super);
    function MentionInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (e) {
            var _a = _this.props, id = _a.id, text = _a.text, onClick = _a.onClick;
            if (onClick) {
                onClick(id, text, e);
            }
        };
        _this.handleOnMouseEnter = function (e) {
            var _a = _this.props, id = _a.id, text = _a.text, onMouseEnter = _a.onMouseEnter, onHover = _a.onHover;
            if (onMouseEnter) {
                onMouseEnter(id, text, e);
            }
            _this.hoverTimeout = window.setTimeout(function () {
                if (onHover) {
                    onHover();
                }
                _this.hoverTimeout = undefined;
            }, exports.ANALYTICS_HOVER_DELAY);
        };
        _this.handleOnMouseLeave = function (e) {
            var _a = _this.props, id = _a.id, text = _a.text, onMouseLeave = _a.onMouseLeave;
            if (onMouseLeave) {
                onMouseLeave(id, text, e);
            }
            if (_this.hoverTimeout) {
                clearTimeout(_this.hoverTimeout);
            }
        };
        _this.getMentionType = function () {
            var _a = _this.props, accessLevel = _a.accessLevel, isHighlighted = _a.isHighlighted;
            if (isHighlighted) {
                return types_1.MentionType.SELF;
            }
            if (types_1.isRestricted(accessLevel)) {
                return types_1.MentionType.RESTRICTED;
            }
            return types_1.MentionType.DEFAULT;
        };
        return _this;
    }
    MentionInternal.prototype.componentWillUnmount = function () {
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
        }
    };
    MentionInternal.prototype.renderUnknownUserError = function (id) {
        return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.unknownUserError, { values: { userId: id.slice(-5) } }), function (message) { return "@" + message; }));
    };
    MentionInternal.prototype.render = function () {
        var _a = this, handleOnClick = _a.handleOnClick, handleOnMouseEnter = _a.handleOnMouseEnter, handleOnMouseLeave = _a.handleOnMouseLeave, props = _a.props;
        var text = props.text, id = props.id, accessLevel = props.accessLevel;
        var mentionType = this.getMentionType();
        var failedMention = text === "@" + exports.UNKNOWN_USER_ID;
        var mentionComponent = (React.createElement(styles_1.MentionStyle, { mentionType: mentionType, onClick: handleOnClick, onMouseEnter: handleOnMouseEnter, onMouseLeave: handleOnMouseLeave }, failedMention ? this.renderUnknownUserError(id) : text || '@...'));
        return (React.createElement("span", { "data-mention-id": id, "data-access-level": accessLevel, spellCheck: false }, mentionType === types_1.MentionType.RESTRICTED ? (React.createElement(NoAccessTooltip_1.NoAccessTooltip, { name: text }, mentionComponent)) : (mentionComponent)));
    };
    return MentionInternal;
}(React.PureComponent));
exports.MentionInternal = MentionInternal;
var MentionWithAnalytics = analytics_next_1.withAnalyticsEvents({
    onClick: function (createEvent, props) {
        var id = props.id, text = props.text, accessLevel = props.accessLevel;
        var event = analytics_1.fireAnalyticsMentionEvent(createEvent)('mention', 'selected', text, id, accessLevel);
        return event;
    },
    onHover: function (createEvent, props) {
        var id = props.id, text = props.text, accessLevel = props.accessLevel;
        var event = analytics_1.fireAnalyticsMentionEvent(createEvent)('mention', 'hovered', text, id, accessLevel);
        return event;
    },
})(MentionInternal);
var Mention = MentionWithAnalytics;
exports.default = Mention;
//# sourceMappingURL=index.js.map