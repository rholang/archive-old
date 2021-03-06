import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Frame } from '../InlineCard/Frame';
var CardLinkView = /** @class */ (function (_super) {
    __extends(CardLinkView, _super);
    function CardLinkView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLinkView.prototype.render = function () {
        return (React.createElement(Frame, __assign({ withoutBackground: true }, this.props), this.props.link));
    };
    return CardLinkView;
}(React.PureComponent));
export { CardLinkView };
//# sourceMappingURL=index.js.map