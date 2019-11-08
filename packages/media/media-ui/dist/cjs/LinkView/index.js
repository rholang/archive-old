"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Frame_1 = require("../InlineCard/Frame");
var CardLinkView = /** @class */ (function (_super) {
    tslib_1.__extends(CardLinkView, _super);
    function CardLinkView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLinkView.prototype.render = function () {
        return (React.createElement(Frame_1.Frame, tslib_1.__assign({ withoutBackground: true }, this.props), this.props.link));
    };
    return CardLinkView;
}(React.PureComponent));
exports.CardLinkView = CardLinkView;
//# sourceMappingURL=index.js.map