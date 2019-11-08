"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Frame_1 = require("../Frame");
var lozenge_1 = tslib_1.__importDefault(require("@atlaskit/lozenge"));
var IconAndTitleLayout_1 = require("../IconAndTitleLayout");
var styled_1 = require("../IconAndTitleLayout/styled");
var InlineCardResolvedView = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCardResolvedView, _super);
    function InlineCardResolvedView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCardResolvedView.prototype.renderLozenge = function () {
        var lozenge = this.props.lozenge;
        if (!lozenge) {
            return null;
        }
        return (React.createElement(styled_1.LozengeWrapper, null,
            React.createElement(lozenge_1.default, { appearance: lozenge.appearance || 'default', isBold: lozenge.isBold }, lozenge.text)));
    };
    InlineCardResolvedView.prototype.render = function () {
        var _a = this.props, title = _a.title, isSelected = _a.isSelected, onClick = _a.onClick, icon = _a.icon, link = _a.link;
        return (React.createElement(Frame_1.Frame, { link: link, isSelected: isSelected, onClick: onClick },
            React.createElement(IconAndTitleLayout_1.IconAndTitleLayout, { icon: icon, title: title }),
            this.renderLozenge()));
    };
    return InlineCardResolvedView;
}(React.Component));
exports.InlineCardResolvedView = InlineCardResolvedView;
//# sourceMappingURL=index.js.map