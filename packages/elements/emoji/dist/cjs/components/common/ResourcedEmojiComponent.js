"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var constants_1 = require("../../util/constants");
var type_helpers_1 = require("../../util/type-helpers");
var CachingEmoji_1 = tslib_1.__importDefault(require("./CachingEmoji"));
var EmojiPlaceholder_1 = tslib_1.__importDefault(require("./EmojiPlaceholder"));
var ResourcedEmojiComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ResourcedEmojiComponent, _super);
    function ResourcedEmojiComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.ready = false;
        _this.state = {
            emoji: undefined,
            loaded: false,
        };
        return _this;
    }
    ResourcedEmojiComponent.prototype.getChildContext = function () {
        return {
            emoji: {
                emojiProvider: this.props.emojiProvider,
            },
        };
    };
    ResourcedEmojiComponent.prototype.refreshEmoji = function (emojiProvider, emojiId) {
        var _this = this;
        var foundEmoji = emojiProvider.findByEmojiId(emojiId);
        if (type_helpers_1.isPromise(foundEmoji)) {
            this.setState({
                loaded: false,
            });
            foundEmoji.then(function (emoji) {
                if (_this.ready) {
                    // don't update state if component was unmounted
                    _this.setState({
                        emoji: emoji,
                        loaded: true,
                    });
                }
            });
        }
        else {
            // loaded
            this.setState({
                emoji: foundEmoji,
                loaded: true,
            });
        }
    };
    ResourcedEmojiComponent.prototype.UNSAFE_componentWillMount = function () {
        this.ready = true;
        if (!this.state.emoji) {
            // using UNSAFE_componentWillMount instead of componentDidMount to avoid needless
            // rerendering.
            this.refreshEmoji(this.props.emojiProvider, this.props.emojiId);
        }
    };
    ResourcedEmojiComponent.prototype.componentWillUnmount = function () {
        this.ready = false;
    };
    ResourcedEmojiComponent.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.emojiProvider !== this.props.emojiProvider ||
            nextProps.emojiId !== this.props.emojiId) {
            this.refreshEmoji(nextProps.emojiProvider, nextProps.emojiId);
        }
    };
    ResourcedEmojiComponent.prototype.render = function () {
        var _a = this.props, emojiId = _a.emojiId, _b = _a.fitToHeight, fitToHeight = _b === void 0 ? constants_1.defaultEmojiHeight : _b, showTooltip = _a.showTooltip;
        var _c = this.state, emoji = _c.emoji, loaded = _c.loaded;
        var shortName = emojiId.shortName, fallback = emojiId.fallback;
        if (emoji) {
            return this.emojiWrapper(React.createElement(CachingEmoji_1.default, { emoji: emoji, showTooltip: showTooltip, fitToHeight: fitToHeight }));
        }
        else if (loaded) {
            // loaded but not found - render fallback
            return this.emojiWrapper(React.createElement("span", null, fallback || shortName));
        }
        return this.emojiWrapper(React.createElement(EmojiPlaceholder_1.default, { shortName: shortName, showTooltip: showTooltip, size: fitToHeight || constants_1.defaultEmojiHeight }));
    };
    ResourcedEmojiComponent.prototype.emojiWrapper = function (element) {
        var _a = this.props.emojiId, shortName = _a.shortName, id = _a.id, fallback = _a.fallback;
        return (React.createElement("span", { "data-emoji-id": id, "data-emoji-short-name": shortName, "data-emoji-text": fallback || shortName }, element));
    };
    ResourcedEmojiComponent.childContextTypes = {
        emoji: PropTypes.object,
    };
    return ResourcedEmojiComponent;
}(react_1.Component));
exports.default = ResourcedEmojiComponent;
//# sourceMappingURL=ResourcedEmojiComponent.js.map