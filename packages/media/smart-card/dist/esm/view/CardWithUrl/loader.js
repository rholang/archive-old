import { __extends } from "tslib";
import * as React from 'react';
import { CardLinkView } from '@atlaskit/media-ui';
import { fireSmartLinkEvent } from '../../utils/analytics';
var CardWithURLRenderer = /** @class */ (function (_super) {
    __extends(CardWithURLRenderer, _super);
    function CardWithURLRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithURLRenderer.moduleImporter = function (target) {
        import(/* webpackChunkName:"@atlaskit-internal-smartcard-urlcardcontent" */ './component').then(function (module) {
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
            return fireSmartLinkEvent(evt, createAnalyticsEvent);
        };
        if (!url) {
            throw new Error('@atlaskit/smart-card: url property is missing.');
        }
        return CardWithURLRenderer.CardContent !== null ? (React.createElement(CardWithURLRenderer.CardContent, { url: url, appearance: appearance, onClick: onClick, isSelected: isSelected, dispatchAnalytics: dispatchAnalytics, container: container, onResolve: onResolve })) : (React.createElement(CardLinkView, { key: 'chunk-placeholder', link: url }));
    };
    CardWithURLRenderer.CardContent = null;
    return CardWithURLRenderer;
}(React.PureComponent));
export { CardWithURLRenderer };
//# sourceMappingURL=loader.js.map