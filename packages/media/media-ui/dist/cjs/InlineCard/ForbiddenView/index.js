"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var colors_1 = require("@atlaskit/theme/colors");
var lock_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/lock-filled"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Frame_1 = require("../Frame");
var IconAndTitleLayout_1 = require("../IconAndTitleLayout");
var Icon_1 = require("../Icon");
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var styled_1 = require("./styled");
var InlineCardForbiddenView = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCardForbiddenView, _super);
    function InlineCardForbiddenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            event.preventDefault();
            event.stopPropagation();
            onAuthorise();
        };
        return _this;
    }
    InlineCardForbiddenView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, isSelected = _a.isSelected, onAuthorise = _a.onAuthorise;
        return (React.createElement(Frame_1.Frame, { link: url, onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout_1.IconAndTitleLayout, { icon: React.createElement(Icon_1.AKIconWrapper, null,
                    React.createElement(lock_filled_1.default, { label: "error", size: "small", primaryColor: colors_1.B400 })), title: url, titleColor: colors_1.N500 }),
            !onAuthorise ? ('') : (React.createElement(React.Fragment, null,
                React.createElement(styled_1.ForbiddenWrapper, null, " - ",
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.invalid_permissions)), " "),
                React.createElement(button_1.default, { spacing: "none", appearance: "link", onClick: this.handleRetry },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.try_another_account)))))));
    };
    return InlineCardForbiddenView;
}(React.Component));
exports.InlineCardForbiddenView = InlineCardForbiddenView;
//# sourceMappingURL=index.js.map