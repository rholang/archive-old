"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var typestyle_1 = require("typestyle");
var analytics_1 = require("../analytics");
var ReactionStatus_1 = require("../types/ReactionStatus");
var i18n_1 = require("./i18n");
var Reaction_1 = require("./Reaction");
var ReactionPicker_1 = require("./ReactionPicker");
var reactionStyle = typestyle_1.style({
    display: 'inline-block',
    // top margin of 2px to allow spacing between rows when wrapped (paired with top margin in reactionsStyle)
    margin: '2px 4px 0 4px',
});
var reactionsStyle = typestyle_1.style({
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    alignItems: 'center',
    borderRadius: '15px',
    // To allow to row spacing of 2px on wrap, and 0px on first row
    marginTop: '-2px',
    $nest: { '& > :first-child': { marginLeft: 0 } },
});
var ReactionsWithoutAnalytics = /** @class */ (function (_super) {
    tslib_1.__extends(ReactionsWithoutAnalytics, _super);
    function ReactionsWithoutAnalytics(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidUpdate = function () {
            if (_this.props.status === ReactionStatus_1.ReactionStatus.ready && _this.renderTime) {
                analytics_1.createAndFireSafe(_this.props.createAnalyticsEvent, analytics_1.createReactionsRenderedEvent, _this.renderTime);
                _this.renderTime = undefined;
            }
        };
        _this.isDisabled = function () {
            return _this.props.status !== ReactionStatus_1.ReactionStatus.ready;
        };
        _this.getTooltip = function () {
            var _a = _this.props, status = _a.status, errorMessage = _a.errorMessage;
            switch (status) {
                case ReactionStatus_1.ReactionStatus.error:
                    return errorMessage ? (errorMessage) : (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.unexpectedError)));
                case ReactionStatus_1.ReactionStatus.loading:
                case ReactionStatus_1.ReactionStatus.notLoaded:
                    return React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.loadingReactions));
                default:
                    return undefined;
            }
        };
        _this.handleReactionMouseOver = function (reaction) {
            if (_this.props.onReactionHover) {
                _this.props.onReactionHover(reaction.emojiId);
            }
        };
        _this.handlePickerOpen = function () {
            _this.openTime = Date.now();
            analytics_1.createAndFireSafe(_this.props.createAnalyticsEvent, analytics_1.createPickerButtonClickedEvent, _this.props.reactions.length);
        };
        _this.handleOnCancel = function () {
            analytics_1.createAndFireSafe(_this.props.createAnalyticsEvent, analytics_1.createPickerCancelledEvent, _this.openTime);
            _this.openTime = undefined;
        };
        _this.handleOnMore = function () {
            analytics_1.createAndFireSafe(_this.props.createAnalyticsEvent, analytics_1.createPickerMoreClickedEvent, _this.openTime);
        };
        _this.handleOnSelection = function (emojiId, source) {
            analytics_1.createAndFireSafe(_this.props.createAnalyticsEvent, analytics_1.createReactionSelectionEvent, source, emojiId, _this.props.reactions.find(function (reaction) { return reaction.emojiId === emojiId; }), _this.openTime);
            _this.openTime = undefined;
            if (_this.props.onSelection) {
                _this.props.onSelection(emojiId);
            }
        };
        _this.renderReaction = function (reaction) { return (React.createElement(Reaction_1.Reaction, { key: reaction.emojiId, className: reactionStyle, reaction: reaction, emojiProvider: _this.props.emojiProvider, onClick: _this.props.onReactionClick, onMouseOver: _this.handleReactionMouseOver, flash: _this.props.flash[reaction.emojiId] })); };
        if (props.status !== ReactionStatus_1.ReactionStatus.ready) {
            _this.renderTime = Date.now();
        }
        return _this;
    }
    ReactionsWithoutAnalytics.prototype.componentDidMount = function () {
        if (this.props.status === ReactionStatus_1.ReactionStatus.notLoaded) {
            this.props.loadReaction();
        }
    };
    ReactionsWithoutAnalytics.prototype.renderPicker = function () {
        var _a = this.props, emojiProvider = _a.emojiProvider, boundariesElement = _a.boundariesElement, allowAllEmojis = _a.allowAllEmojis;
        return (React.createElement(tooltip_1.default, { content: this.getTooltip() },
            React.createElement(ReactionPicker_1.ReactionPicker, { className: reactionStyle, emojiProvider: emojiProvider, miniMode: true, boundariesElement: boundariesElement, allowAllEmojis: allowAllEmojis, disabled: this.isDisabled(), onSelection: this.handleOnSelection, onOpen: this.handlePickerOpen, onCancel: this.handleOnCancel, onMore: this.handleOnMore })));
    };
    ReactionsWithoutAnalytics.prototype.render = function () {
        return (React.createElement("div", { className: reactionsStyle },
            this.props.reactions.map(this.renderReaction),
            this.renderPicker()));
    };
    ReactionsWithoutAnalytics.defaultProps = {
        flash: {},
        reactions: [],
    };
    ReactionsWithoutAnalytics.displayName = 'Reactions';
    return ReactionsWithoutAnalytics;
}(React.PureComponent));
exports.Reactions = analytics_next_1.withAnalyticsEvents()(ReactionsWithoutAnalytics);
//# sourceMappingURL=Reactions.js.map