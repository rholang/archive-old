import { __extends, __read, __spread } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import EmojiButton from './EmojiButton';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { createAndFireEventInElementsChannel, toneSelectedEvent, toneSelectorOpenedEvent, } from '../../util/analytics';
var extractAllTones = function (emoji) {
    if (emoji.skinVariations) {
        return __spread([emoji], emoji.skinVariations);
    }
    return [emoji];
};
var ToneSelectorInternal = /** @class */ (function (_super) {
    __extends(ToneSelectorInternal, _super);
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
            _this.fireEvent(toneSelectedEvent({
                skinToneModifier: toneList[skinTone],
            }));
        };
        return _this;
    }
    ToneSelectorInternal.prototype.fireEvent = function (event) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        if (createAnalyticsEvent) {
            createAndFireEventInElementsChannel(event)(createAnalyticsEvent);
        }
    };
    ToneSelectorInternal.prototype.UNSAFE_componentWillMount = function () {
        this.fireEvent(toneSelectorOpenedEvent({}));
    };
    ToneSelectorInternal.prototype.render = function () {
        var _this = this;
        var emoji = this.props.emoji;
        var toneEmojis = extractAllTones(emoji);
        return (React.createElement("div", null, toneEmojis.map(function (tone, i) { return (React.createElement(EmojiButton, { key: "" + tone.id, onSelected: function () { return _this.onToneSelectedHandler(i); }, emoji: tone, selectOnHover: true })); })));
    };
    return ToneSelectorInternal;
}(PureComponent));
export { ToneSelectorInternal };
var ToneSelector = withAnalyticsEvents()(ToneSelectorInternal);
export default ToneSelector;
//# sourceMappingURL=ToneSelector.js.map