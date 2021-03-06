import { __assign, __extends } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { MentionStyle } from './styles';
import { NoAccessTooltip } from '../NoAccessTooltip';
import { isRestricted, MentionType } from '../../types';
import { fireAnalyticsMentionEvent } from '../../util/analytics';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { messages } from '../i18n';
export var ANALYTICS_HOVER_DELAY = 1000;
export var UNKNOWN_USER_ID = '_|unknown|_';
var MentionInternal = /** @class */ (function (_super) {
    __extends(MentionInternal, _super);
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
            }, ANALYTICS_HOVER_DELAY);
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
                return MentionType.SELF;
            }
            if (isRestricted(accessLevel)) {
                return MentionType.RESTRICTED;
            }
            return MentionType.DEFAULT;
        };
        return _this;
    }
    MentionInternal.prototype.componentWillUnmount = function () {
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
        }
    };
    MentionInternal.prototype.renderUnknownUserError = function (id) {
        return (React.createElement(FormattedMessage, __assign({}, messages.unknownUserError, { values: { userId: id.slice(-5) } }), function (message) { return "@" + message; }));
    };
    MentionInternal.prototype.render = function () {
        var _a = this, handleOnClick = _a.handleOnClick, handleOnMouseEnter = _a.handleOnMouseEnter, handleOnMouseLeave = _a.handleOnMouseLeave, props = _a.props;
        var text = props.text, id = props.id, accessLevel = props.accessLevel;
        var mentionType = this.getMentionType();
        var failedMention = text === "@" + UNKNOWN_USER_ID;
        var mentionComponent = (React.createElement(MentionStyle, { mentionType: mentionType, onClick: handleOnClick, onMouseEnter: handleOnMouseEnter, onMouseLeave: handleOnMouseLeave }, failedMention ? this.renderUnknownUserError(id) : text || '@...'));
        return (React.createElement("span", { "data-mention-id": id, "data-access-level": accessLevel, spellCheck: false }, mentionType === MentionType.RESTRICTED ? (React.createElement(NoAccessTooltip, { name: text }, mentionComponent)) : (mentionComponent)));
    };
    return MentionInternal;
}(React.PureComponent));
export { MentionInternal };
var MentionWithAnalytics = withAnalyticsEvents({
    onClick: function (createEvent, props) {
        var id = props.id, text = props.text, accessLevel = props.accessLevel;
        var event = fireAnalyticsMentionEvent(createEvent)('mention', 'selected', text, id, accessLevel);
        return event;
    },
    onHover: function (createEvent, props) {
        var id = props.id, text = props.text, accessLevel = props.accessLevel;
        var event = fireAnalyticsMentionEvent(createEvent)('mention', 'hovered', text, id, accessLevel);
        return event;
    },
})(MentionInternal);
var Mention = MentionWithAnalytics;
export default Mention;
//# sourceMappingURL=index.js.map