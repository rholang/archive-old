"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var colors_1 = require("@atlaskit/theme/colors");
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Frame_1 = require("../Frame");
var IconAndTitleLayout_1 = require("../IconAndTitleLayout");
var Icon_1 = require("../Icon");
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var InlineCardErroredView = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCardErroredView, _super);
    function InlineCardErroredView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        return _this;
    }
    InlineCardErroredView.prototype.render = function () {
        var _a = this.props, url = _a.url, message = _a.message, onClick = _a.onClick, onRetry = _a.onRetry, isSelected = _a.isSelected;
        return (React.createElement(Frame_1.Frame, { link: url, onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout_1.IconAndTitleLayout, { icon: React.createElement(Icon_1.AKIconWrapper, null,
                    React.createElement(error_1.default, { label: "error", size: "small", primaryColor: colors_1.R300 })), title: url + ' - ' + message.trim(), titleColor: colors_1.R300 }),
            ' ',
            onRetry && (React.createElement(button_1.default, { spacing: "none", appearance: "link", onClick: this.handleRetry },
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.try_again))))));
    };
    return InlineCardErroredView;
}(React.Component));
exports.InlineCardErroredView = InlineCardErroredView;
//# sourceMappingURL=index.js.map