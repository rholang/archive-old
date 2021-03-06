import { __extends } from "tslib";
import * as React from 'react';
import IconLocation from '@atlaskit/icon/glyph/location';
import IconRecent from '@atlaskit/icon/glyph/recent';
import IconEmail from '@atlaskit/icon/glyph/email';
import OfficeBuildingIcon from '@atlaskit/icon/glyph/office-building';
import { DetailsLabel, DetailsLabelIcon, DetailsLabelText, } from '../styled/Card';
var icons = {
    location: IconLocation,
    time: IconRecent,
    email: IconEmail,
    companyName: OfficeBuildingIcon,
};
var IconLabel = /** @class */ (function (_super) {
    __extends(IconLabel, _super);
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
        return (React.createElement(DetailsLabel, null,
            React.createElement(DetailsLabelIcon, null, displayIcon),
            React.createElement(DetailsLabelText, null, this.props.children)));
    };
    IconLabel.defaultProps = {
        icon: '',
    };
    return IconLabel;
}(React.PureComponent));
export default IconLabel;
//# sourceMappingURL=IconLabel.js.map