"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var EmojiButton_1 = tslib_1.__importDefault(require("./EmojiButton"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("../../util/analytics");
var extractAllTones = function (emoji) {
    if (emoji.skinVariations) {
        return tslib_1.__spread([emoji], emoji.skinVariations);
    }
    return [emoji];
};
var ToneSelectorInternal = /** @class */ (function (_super) {
    tslib_1.__extends(ToneSelectorInternal, _super);
    function ToneSelectorInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onToneSelectedHandler = function (skinTone) {
            var onToneSelected = _this.props.onToneSelected;
            onToneSelected(skinTone);
            var toneList = [
                'default',
                'light',
                'mediumLight',
                'medium',
                'mediumDark',
                'dark',
            ];
            _this.fireEvent(analytics_1.toneSelectedEvent({
                skinToneModifier: toneList[skinTone],
            }));
        };
        return _this;
    }
    ToneSelectorInternal.prototype.fireEvent = function (event) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        if (createAnalyticsEvent) {
            analytics_1.createAndFireEventInElementsChannel(event)(createAnalyticsEvent);
        }
    };
    ToneSelectorInternal.prototype.UNSAFE_componentWillMount = function () {
        this.fireEvent(analytics_1.toneSelectorOpenedEvent({}));
    };
    ToneSelectorInternal.prototype.render = function () {
        var _this = this;
        var emoji = this.props.emoji;
        var toneEmojis = extractAllTones(emoji);
        return (React.createElement("div", null, toneEmojis.map(function (tone, i) { return (React.createElement(EmojiButton_1.default, { key: "" + tone.id, onSelected: function () { return _this.onToneSelectedHandler(i); }, emoji: tone, selectOnHover: true })); })));
    };
    return ToneSelectorInternal;
}(react_1.PureComponent));
exports.ToneSelectorInternal = ToneSelectorInternal;
var ToneSelector = analytics_next_1.withAnalyticsEvents()(ToneSelectorInternal);
exports.default = ToneSelector;
//# sourceMappingURL=ToneSelector.js.map