"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var location_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/location"));
var recent_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/recent"));
var email_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/email"));
var office_building_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/office-building"));
var Card_1 = require("../styled/Card");
var icons = {
    location: location_1.default,
    time: recent_1.default,
    email: email_1.default,
    companyName: office_building_1.default,
};
var IconLabel = /** @class */ (function (_super) {
    tslib_1.__extends(IconLabel, _super);
    function IconLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconLabel.prototype.render = function () {
        if (!this.props.children) {
            return null;
        }
        // @ts-ignore
        var IconElement = this.props.icon && icons[this.props.icon];
        var displayIcon = IconElement ? (React.createElement(IconElement, { label: "icon " + this.props.icon, size: "small" })) : null;
        return (React.createElement(Card_1.DetailsLabel, null,
            React.createElement(Card_1.DetailsLabelIcon, null, displayIcon),
            React.createElement(Card_1.DetailsLabelText, null, this.props.children)));
    };
    IconLabel.defaultProps = {
        icon: '',
    };
    return IconLabel;
}(React.PureComponent));
exports.default = IconLabel;
//# sourceMappingURL=IconLabel.js.map