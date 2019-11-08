"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ColorCard_1 = require("../styled/ColorCard");
var ColorCard = /** @class */ (function (_super) {
    tslib_1.__extends(ColorCard, _super);
    function ColorCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (event) {
            event.preventDefault();
        };
        _this.onClick = function (event) {
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                onClick();
            }
        };
        return _this;
    }
    ColorCard.prototype.render = function () {
        var _a = this.props, value = _a.value, label = _a.label, expanded = _a.expanded;
        return (React.createElement(ColorCard_1.ColorCardButton, { title: label, onClick: this.onClick, onMouseDown: this.onMouseDown, focused: expanded, "aria-label": label, "aria-expanded": expanded, "aria-haspopup": true },
            React.createElement(ColorCard_1.ColorCardContent, { color: value || 'transparent' })));
    };
    return ColorCard;
}(React.PureComponent));
exports.default = ColorCard;
//# sourceMappingURL=Trigger.js.map