"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var typestyle_1 = require("typestyle");
var EmojiButton_1 = require("./EmojiButton");
var ShowMore_1 = require("./ShowMore");
var utils_1 = require("./utils");
var selectorStyle = typestyle_1.style({
    boxSizing: 'border-box',
    display: 'flex',
    padding: 0,
});
var emojiStyle = typestyle_1.style({
    display: 'inline-block',
    opacity: 0,
    $nest: {
        '&.selected': {
            transition: 'transform 200ms ease-in-out  ',
            transform: 'translateY(-48px) scale(2.667)',
        },
    },
});
var revealAnimation = typestyle_1.keyframes({
    '0%': {
        opacity: 1,
        transform: 'scale(0.5)',
    },
    '75%': {
        transform: 'scale(1.25)',
    },
    '100%': {
        opacity: 1,
        transform: 'scale(1)',
    },
});
exports.revealStyle = typestyle_1.style({
    animation: revealAnimation + " 150ms ease-in-out forwards",
});
var revealDelay = function (index) { return ({ animationDelay: index * 50 + "ms" }); };
exports.defaultReactions = [
    { id: '1f44d', shortName: ':thumbsup:' },
    { id: '1f44e', shortName: ':thumbsdown:' },
    { id: '1f525', shortName: ':fire:' },
    { id: '1f60d', shortName: ':heart_eyes:' },
    { id: '1f602', shortName: ':joy:' },
    { id: '1f622', shortName: ':cry:' },
];
exports.defaultReactionsByShortName = new Map(exports.defaultReactions.map(function (reaction) { return [
    reaction.shortName,
    reaction,
]; }));
exports.isDefaultReaction = function (emojiId) {
    return exports.defaultReactions.filter(function (otherEmojiId) { return utils_1.equalEmojiId(otherEmojiId, emojiId); })
        .length > 0;
};
var Selector = /** @class */ (function (_super) {
    tslib_1.__extends(Selector, _super);
    function Selector(props) {
        var _this = _super.call(this, props) || this;
        _this.onEmojiSelected = function (emojiId, emoji, event) {
            _this.timeouts.push(window.setTimeout(function () { return _this.props.onSelection(emojiId, emoji, event); }, 250));
            _this.setState({
                selection: emojiId,
            });
        };
        _this.renderEmoji = function (emojiId, index) {
            var emojiProvider = _this.props.emojiProvider;
            var key = emojiId.id || emojiId.shortName;
            var classNames = classnames_1.default(emojiStyle, exports.revealStyle, {
                selected: emojiId === _this.state.selection,
            });
            var style = revealDelay(index);
            return (React.createElement("div", { key: key, className: classNames, style: style },
                React.createElement(tooltip_1.default, { content: emojiId.shortName },
                    React.createElement(EmojiButton_1.EmojiButton, { emojiId: emojiId, emojiProvider: emojiProvider, onClick: _this.onEmojiSelected }))));
        };
        _this.renderShowMore = function () { return (React.createElement(ShowMore_1.ShowMore, { key: "more", className: { button: exports.revealStyle }, style: { button: revealDelay(exports.defaultReactions.length) }, onClick: _this.props.onMoreClick })); };
        _this.timeouts = [];
        _this.state = {
            selection: undefined,
        };
        return _this;
    }
    Selector.prototype.componentWillUnmount = function () {
        this.timeouts.forEach(clearTimeout);
    };
    Selector.prototype.render = function () {
        var showMore = this.props.showMore;
        return (React.createElement("div", { className: selectorStyle },
            exports.defaultReactions.map(this.renderEmoji),
            showMore ? this.renderShowMore() : null));
    };
    return Selector;
}(react_1.PureComponent));
exports.Selector = Selector;
//# sourceMappingURL=Selector.js.map