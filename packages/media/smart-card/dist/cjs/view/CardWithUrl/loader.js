"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var analytics_1 = require("../../utils/analytics");
var CardWithURLRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(CardWithURLRenderer, _super);
    function CardWithURLRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithURLRenderer.moduleImporter = function (target) {
        Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-smartcard-urlcardcontent" */ './component')); }).then(function (module) {
            CardWithURLRenderer.CardContent = module.LazyCardWithUrlContent;
            target.forceUpdate();
        });
    };
    CardWithURLRenderer.prototype.componentDidMount = function () {
        if (CardWithURLRenderer.CardContent === null) {
            (this.props.importer || CardWithURLRenderer.moduleImporter)(this);
        }
    };
    CardWithURLRenderer.prototype.render = function () {
        var _a = this.props, url = _a.url, appearance = _a.appearance, isSelected = _a.isSelected, onClick = _a.onClick, createAnalyticsEvent = _a.createAnalyticsEvent, container = _a.container, onResolve = _a.onResolve;
        // Wrapper around analytics.
        var dispatchAnalytics = function (evt) {
            return analytics_1.fireSmartLinkEvent(evt, createAnalyticsEvent);
        };
        if (!url) {
            throw new Error('@atlaskit/smart-card: url property is missing.');
        }
        return CardWithURLRenderer.CardContent !== null ? (React.createElement(CardWithURLRenderer.CardContent, { url: url, appearance: appearance, onClick: onClick, isSelected: isSelected, dispatchAnalytics: dispatchAnalytics, container: container, onResolve: onResolve })) : (React.createElement(media_ui_1.CardLinkView, { key: 'chunk-placeholder', link: url }));
    };
    CardWithURLRenderer.CardContent = null;
    return CardWithURLRenderer;
}(React.PureComponent));
exports.CardWithURLRenderer = CardWithURLRenderer;
//# sourceMappingURL=loader.js.map