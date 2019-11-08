"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var IconAndTitleLayout_1 = require("../IconAndTitleLayout");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Frame_1 = require("../Frame");
var colors_1 = require("@atlaskit/theme/colors");
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var lock_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/lock-filled"));
var Icon_1 = require("../Icon");
var styled_1 = require("../ForbiddenView/styled");
var FallbackUnauthorizedIcon = (React.createElement(Icon_1.AKIconWrapper, null,
    React.createElement(lock_filled_1.default, { label: "error", size: "small", primaryColor: colors_1.B400 })));
var InlineCardUnauthorizedView = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCardUnauthorizedView, _super);
    function InlineCardUnauthorizedView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleConnectAccount = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            event.preventDefault();
            event.stopPropagation();
            return onAuthorise();
        };
        return _this;
    }
    InlineCardUnauthorizedView.prototype.render = function () {
        var _a = this.props, url = _a.url, icon = _a.icon, onClick = _a.onClick, isSelected = _a.isSelected, onAuthorise = _a.onAuthorise;
        return (React.createElement(Frame_1.Frame, { link: url, onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout_1.IconAndTitleLayout, { icon: icon ? icon : FallbackUnauthorizedIcon, title: url, titleColor: colors_1.N500 }),
            !onAuthorise ? (React.createElement(styled_1.ForbiddenWrapper, null, " \u2011 ",
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.invalid_permissions)), " ")) : (React.createElement(React.Fragment, null, " \u2011 ",
                React.createElement(button_1.default, { spacing: "none", appearance: "link", onClick: this.handleConnectAccount },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.connect_link_account)))))));
    };
    return InlineCardUnauthorizedView;
}(React.Component));
exports.InlineCardUnauthorizedView = InlineCardUnauthorizedView;
//# sourceMappingURL=index.js.map