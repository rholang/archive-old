"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var element_1 = require("@atlaskit/emoji/element");
var theme_1 = require("@atlaskit/theme");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var typestyle_1 = require("typestyle");
var analytics_1 = require("../analytics");
var Counter_1 = require("./Counter");
var FlashAnimation_1 = require("./FlashAnimation");
var ReactionTooltip_1 = require("./ReactionTooltip");
var utils_1 = require("./utils");
var akBorderRadius = theme_1.borderRadius() + "px";
var akColorN30A = theme_1.colors.N30A;
var akColorN400 = theme_1.colors.N400;
var emojiStyle = typestyle_1.style({
    transformOrigin: 'center center 0',
    margin: '0 4px',
});
var reactionStyle = typestyle_1.style({
    outline: 'none',
    display: 'flex',
    flexDirection: 'row',
    minWidth: '36px',
    height: '24px',
    lineHeight: '24px',
    background: 'transparent',
    border: '0',
    borderRadius: akBorderRadius,
    color: akColorN400,
    cursor: 'pointer',
    padding: 0,
    margin: 0,
    transition: '200ms ease-in-out',
    $nest: { '&:hover': { background: akColorN30A } },
});
var flashStyle = typestyle_1.style({
    display: 'flex',
    flexDirection: 'row',
    borderRadius: akBorderRadius,
});
var counterStyle = typestyle_1.style({
    padding: '0 4px 0 0',
});
var ReactionWithoutAnalytics = /** @class */ (function (_super) {
    tslib_1.__extends(ReactionWithoutAnalytics, _super);
    function ReactionWithoutAnalytics(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = false;
        _this.handleMouseDown = function (event) {
            event.preventDefault();
            if (_this.props.onClick && utils_1.isLeftClick(event)) {
                var _a = _this.props, reaction = _a.reaction, createAnalyticsEvent = _a.createAnalyticsEvent;
                var reacted = reaction.reacted, emojiId = reaction.emojiId;
                analytics_1.createAndFireSafe(createAnalyticsEvent, analytics_1.createReactionClickedEvent, !reacted, emojiId);
                _this.props.onClick(_this.props.reaction.emojiId, event);
            }
        };
        _this.handleMouseOver = function (event) {
            event.preventDefault();
            var _a = _this.props, onMouseOver = _a.onMouseOver, reaction = _a.reaction;
            if (!reaction.users || !reaction.users.length) {
                _this.hoverStart = Date.now();
            }
            if (onMouseOver) {
                onMouseOver(_this.props.reaction, event);
            }
        };
        _this.state = {};
        return _this;
    }
    ReactionWithoutAnalytics.prototype.componentDidUpdate = function (_a) {
        var prevReaction = _a.reaction;
        if (!prevReaction.users && this.props.reaction.users) {
            analytics_1.createAndFireSafe(this.props.createAnalyticsEvent, analytics_1.createReactionHoveredEvent, this.hoverStart);
        }
    };
    ReactionWithoutAnalytics.prototype.componentDidMount = function () {
        var _this = this;
        this.mounted = true;
        this.props.emojiProvider
            .then(function (emojiResource) {
            return emojiResource.findByEmojiId({
                shortName: '',
                id: _this.props.reaction.emojiId,
            });
        })
            .then(function (foundEmoji) {
            if (foundEmoji && _this.mounted) {
                _this.setState({
                    emojiName: foundEmoji.name,
                });
            }
        });
    };
    ReactionWithoutAnalytics.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    ReactionWithoutAnalytics.prototype.render = function () {
        var _a = this.props, emojiProvider = _a.emojiProvider, reaction = _a.reaction, classNameProp = _a.className, flash = _a.flash;
        var emojiName = this.state.emojiName;
        var classNames = classnames_1.default(reactionStyle, classNameProp);
        var emojiId = { id: reaction.emojiId, shortName: '' };
        return (React.createElement(ReactionTooltip_1.ReactionTooltip, { emojiName: emojiName, reaction: reaction },
            React.createElement("button", { className: classNames, onMouseUp: this.handleMouseDown, onMouseOver: this.handleMouseOver },
                React.createElement(FlashAnimation_1.FlashAnimation, { flash: flash, className: flashStyle },
                    React.createElement("div", { className: emojiStyle },
                        React.createElement(element_1.ResourcedEmoji, { emojiProvider: emojiProvider, emojiId: emojiId, fitToHeight: 16 })),
                    React.createElement(Counter_1.Counter, { className: counterStyle, value: reaction.count, highlight: reaction.reacted })))));
    };
    ReactionWithoutAnalytics.defaultProps = {
        flash: false,
        className: undefined,
        onMouseOver: undefined,
        flashOnMount: false,
    };
    ReactionWithoutAnalytics.displayName = 'Reaction';
    return ReactionWithoutAnalytics;
}(react_1.PureComponent));
exports.Reaction = analytics_next_1.withAnalyticsEvents()(ReactionWithoutAnalytics);
//# sourceMappingURL=Reaction.js.map