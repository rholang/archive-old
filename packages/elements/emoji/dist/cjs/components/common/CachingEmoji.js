"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var EmojiUtils_1 = require("../../api/EmojiUtils");
var type_helpers_1 = require("../../util/type-helpers");
var logger_1 = tslib_1.__importDefault(require("../../util/logger"));
var Emoji_1 = tslib_1.__importDefault(require("./Emoji"));
var EmojiPlaceholder_1 = tslib_1.__importDefault(require("./EmojiPlaceholder"));
/**
 * Renders an emoji from a cached image, if required.
 */
exports.CachingEmoji = function (props) {
    // Optimisation to only render the class based CachingMediaEmoji if necessary
    // slight performance hit, which accumulates for a large number of emoji.
    var placeholderSize = props.placeholderSize, emojiProps = tslib_1.__rest(props, ["placeholderSize"]);
    if (type_helpers_1.isMediaEmoji(props.emoji)) {
        return React.createElement(CachingMediaEmoji, tslib_1.__assign({}, props));
    }
    return React.createElement(Emoji_1.default, tslib_1.__assign({}, emojiProps));
};
/**
 * Rendering a media emoji image from a cache for media emoji, with different
 * rendering paths depending on caching strategy.
 */
var CachingMediaEmoji = /** @class */ (function (_super) {
    tslib_1.__extends(CachingMediaEmoji, _super);
    function CachingMediaEmoji(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.mounted = false;
        _this.handleLoadError = function (_emojiId, emoji) {
            var invalidImage = _this.state.invalidImage;
            if (invalidImage || !emoji) {
                // do nothing, bad image
                return;
            }
            _this.setState({
                cachedEmoji: _this.loadEmoji(emoji, _this.context, true),
            });
        };
        _this.state = {
            cachedEmoji: _this.loadEmoji(props.emoji, context, false),
        };
        return _this;
    }
    CachingMediaEmoji.prototype.componentDidMount = function () {
        this.mounted = true;
    };
    CachingMediaEmoji.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    CachingMediaEmoji.prototype.UNSAFE_componentWillReceiveProps = function (nextProps, nextContext) {
        if (nextProps.emoji !== this.props.emoji) {
            if (this.mounted) {
                this.setState({
                    cachedEmoji: this.loadEmoji(nextProps.emoji, nextContext, false),
                });
            }
        }
    };
    CachingMediaEmoji.prototype.loadEmoji = function (emoji, context, forceLoad) {
        var _this = this;
        if (!context.emoji) {
            return undefined;
        }
        var emojiProvider = context.emoji.emojiProvider;
        if (!emojiProvider) {
            return undefined;
        }
        var fitToHeight = this.props.fitToHeight;
        var useAlt = EmojiUtils_1.shouldUseAltRepresentation(emoji, fitToHeight);
        var optimisticRendering = emojiProvider.optimisticMediaRendering(emoji, useAlt);
        if (optimisticRendering && !forceLoad) {
            logger_1.default('Optimistic rendering', emoji.shortName);
            return emoji;
        }
        logger_1.default('Loading image via media cache', emoji.shortName);
        var loadedEmoji = emojiProvider.loadMediaEmoji(emoji, useAlt);
        if (type_helpers_1.isPromise(loadedEmoji)) {
            loadedEmoji
                .then(function (cachedEmoji) {
                if (_this.mounted) {
                    _this.setState({
                        cachedEmoji: cachedEmoji,
                        invalidImage: !cachedEmoji,
                    });
                }
            })
                .catch(function () {
                if (_this.mounted) {
                    _this.setState({
                        cachedEmoji: undefined,
                        invalidImage: true,
                    });
                }
            });
            return undefined;
        }
        if (type_helpers_1.isEmojiDescription(loadedEmoji)) {
            return loadedEmoji;
        }
        return undefined;
    };
    CachingMediaEmoji.prototype.render = function () {
        var cachedEmoji = this.state.cachedEmoji;
        var _a = this.props, children = _a.children, placeholderSize = _a.placeholderSize, otherProps = tslib_1.__rest(_a, ["children", "placeholderSize"]);
        var emojiComponent;
        if (cachedEmoji) {
            emojiComponent = (React.createElement(Emoji_1.default, tslib_1.__assign({}, otherProps, { emoji: cachedEmoji, onLoadError: this.handleLoadError })));
        }
        else {
            var _b = this.props, emoji = _b.emoji, placeholderSize_1 = _b.placeholderSize, showTooltip = _b.showTooltip, fitToHeight = _b.fitToHeight;
            var shortName = emoji.shortName, representation = emoji.representation;
            emojiComponent = (React.createElement(EmojiPlaceholder_1.default, { size: fitToHeight || placeholderSize_1, shortName: shortName, showTooltip: showTooltip, representation: representation }));
        }
        return emojiComponent;
    };
    CachingMediaEmoji.contextTypes = {
        emoji: PropTypes.object,
    };
    return CachingMediaEmoji;
}(react_1.PureComponent));
exports.CachingMediaEmoji = CachingMediaEmoji;
exports.default = exports.CachingEmoji;
//# sourceMappingURL=CachingEmoji.js.map