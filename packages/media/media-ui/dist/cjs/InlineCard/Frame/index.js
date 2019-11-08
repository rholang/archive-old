"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var Frame = /** @class */ (function (_super) {
    tslib_1.__extends(Frame, _super);
    function Frame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                event.stopPropagation();
                onClick(event);
            }
        };
        _this.handleKeyPress = function (event) {
            if (event.key !== ' ' && event.key !== 'Enter') {
                return;
            }
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                event.stopPropagation();
                onClick(event);
            }
        };
        return _this;
    }
    Frame.prototype.render = function () {
        var _a = this.props, isSelected = _a.isSelected, children = _a.children, onClick = _a.onClick, link = _a.link, withoutBackground = _a.withoutBackground;
        var isInteractive = Boolean(onClick);
        return (React.createElement(styled_1.Wrapper, { href: link, withoutBackground: withoutBackground, isSelected: isSelected, isInteractive: isInteractive, tabIndex: isInteractive ? 0 : undefined, role: isInteractive ? 'button' : undefined, onClick: this.handleClick, onKeyPress: this.handleKeyPress }, children));
    };
    return Frame;
}(React.Component));
exports.Frame = Frame;
//# sourceMappingURL=index.js.map