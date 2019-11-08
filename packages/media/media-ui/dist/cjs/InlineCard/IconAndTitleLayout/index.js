"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var Icon_1 = require("../Icon");
var CHAR_LENGTH_BREAK_AT = 7;
var IconAndTitleLayout = /** @class */ (function (_super) {
    tslib_1.__extends(IconAndTitleLayout, _super);
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
                return React.createElement(Icon_1.Icon, { src: icon });
            }
            else {
                return React.createElement(styled_1.IconWrapper, null, icon);
            }
        }
        return null;
    };
    IconAndTitleLayout.prototype.render = function () {
        var _a = this.props, title = _a.title, titleColor = _a.titleColor;
        var head = title.slice(0, CHAR_LENGTH_BREAK_AT);
        var rest = title.slice(CHAR_LENGTH_BREAK_AT);
        return (React.createElement(React.Fragment, null,
            React.createElement(styled_1.IconTitleWrapper, { style: { color: titleColor } },
                React.createElement(styled_1.IconTitleHeadNoBreakWrapper, null,
                    this.renderIcon(),
                    head),
                rest)));
    };
    return IconAndTitleLayout;
}(React.Component));
exports.IconAndTitleLayout = IconAndTitleLayout;
//# sourceMappingURL=index.js.map