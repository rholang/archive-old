"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var ExpandedFrame = /** @class */ (function (_super) {
    tslib_1.__extends(ExpandedFrame, _super);
    function ExpandedFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                event.stopPropagation();
                onClick(event);
            }
        };
        return _this;
    }
    Object.defineProperty(ExpandedFrame.prototype, "isInteractive", {
        get: function () {
            var _a = this.props, isPlaceholder = _a.isPlaceholder, href = _a.href, onClick = _a.onClick;
            return !isPlaceholder && (Boolean(href) || Boolean(onClick));
        },
        enumerable: true,
        configurable: true
    });
    ExpandedFrame.prototype.renderHeader = function () {
        var _a = this.props, _b = _a.isPlaceholder, isPlaceholder = _b === void 0 ? false : _b, icon = _a.icon, text = _a.text;
        return (React.createElement(styled_1.Header, null,
            React.createElement(styled_1.IconWrapper, { isPlaceholder: isPlaceholder }, !isPlaceholder && icon),
            React.createElement(styled_1.TextWrapper, { isPlaceholder: isPlaceholder }, !isPlaceholder && text)));
    };
    ExpandedFrame.prototype.renderContent = function () {
        var isInteractive = this.isInteractive;
        var children = this.props.children;
        return React.createElement(styled_1.Content, { isInteractive: isInteractive }, children);
    };
    ExpandedFrame.prototype.render = function () {
        var isInteractive = this.isInteractive;
        var _a = this.props, isPlaceholder = _a.isPlaceholder, isSelected = _a.isSelected, href = _a.href, minWidth = _a.minWidth, maxWidth = _a.maxWidth;
        if (!isPlaceholder && href) {
            return (React.createElement(styled_1.LinkWrapper, { target: "_blank", rel: "noopener", className: styled_1.className, isInteractive: isInteractive, isSelected: isSelected, href: href, minWidth: minWidth, maxWidth: maxWidth, onClick: this.handleClick },
                this.renderHeader(),
                this.renderContent()));
        }
        else {
            return (React.createElement(styled_1.Wrapper, { className: styled_1.className, isInteractive: isInteractive, isSelected: isSelected, minWidth: minWidth, maxWidth: maxWidth, onClick: this.handleClick },
                this.renderHeader(),
                this.renderContent()));
        }
    };
    return ExpandedFrame;
}(React.Component));
exports.ExpandedFrame = ExpandedFrame;
//# sourceMappingURL=index.js.map