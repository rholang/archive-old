import { __extends } from "tslib";
import * as React from 'react';
import { IconTitleWrapper, IconWrapper, IconTitleHeadNoBreakWrapper, } from './styled';
import { Icon } from '../Icon';
var CHAR_LENGTH_BREAK_AT = 7;
var IconAndTitleLayout = /** @class */ (function (_super) {
    __extends(IconAndTitleLayout, _super);
    function IconAndTitleLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconAndTitleLayout.prototype.renderIcon = function () {
        var icon = this.props.icon;
        // We render two kinds of icons here:
        // - Image: acquired from either DAC or Teamwork Platform Apps;
        // - Atlaskit Icon: an Atlaskit SVG;
        // Each of these are scaled down to 12x12.
        if (icon) {
            if (typeof icon === 'string') {
                return React.createElement(Icon, { src: icon });
            }
            else {
                return React.createElement(IconWrapper, null, icon);
            }
        }
        return null;
    };
    IconAndTitleLayout.prototype.render = function () {
        var _a = this.props, title = _a.title, titleColor = _a.titleColor;
        var head = title.slice(0, CHAR_LENGTH_BREAK_AT);
        var rest = title.slice(CHAR_LENGTH_BREAK_AT);
        return (React.createElement(React.Fragment, null,
            React.createElement(IconTitleWrapper, { style: { color: titleColor } },
                React.createElement(IconTitleHeadNoBreakWrapper, null,
                    this.renderIcon(),
                    head),
                rest)));
    };
    return IconAndTitleLayout;
}(React.Component));
export { IconAndTitleLayout };
//# sourceMappingURL=index.js.map