import { __assign, __extends } from "tslib";
import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { CardWithDataRenderer } from '../CardWithData/loader';
import { CardWithURLRenderer } from '../CardWithUrl/loader';
import { isCardWithData } from '../../utils';
var PlainCard = /** @class */ (function (_super) {
    __extends(PlainCard, _super);
    function PlainCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlainCard.prototype.render = function () {
        return isCardWithData(this.props) ? (React.createElement(CardWithDataRenderer, __assign({}, this.props))) : (React.createElement(CardWithURLRenderer, __assign({}, this.props)));
    };
    return PlainCard;
}(React.PureComponent));
export var Card = withAnalyticsEvents()(PlainCard);
//# sourceMappingURL=index.js.map