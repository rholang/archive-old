"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var loader_1 = require("../CardWithData/loader");
var loader_2 = require("../CardWithUrl/loader");
var utils_1 = require("../../utils");
var PlainCard = /** @class */ (function (_super) {
    tslib_1.__extends(PlainCard, _super);
    function PlainCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlainCard.prototype.render = function () {
        return utils_1.isCardWithData(this.props) ? (React.createElement(loader_1.CardWithDataRenderer, tslib_1.__assign({}, this.props))) : (React.createElement(loader_2.CardWithURLRenderer, tslib_1.__assign({}, this.props)));
    };
    return PlainCard;
}(React.PureComponent));
exports.Card = analytics_next_1.withAnalyticsEvents()(PlainCard);
//# sourceMappingURL=index.js.map