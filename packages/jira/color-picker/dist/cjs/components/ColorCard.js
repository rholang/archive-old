"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var done_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/done"));
var theme_1 = require("@atlaskit/theme");
var ColorCard_1 = require("../styled/ColorCard");
var ColorCard = /** @class */ (function (_super) {
    tslib_1.__extends(ColorCard, _super);
    function ColorCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (event) {
            event.preventDefault();
        };
        _this.onClick = function (event) {
            var _a = _this.props, onClick = _a.onClick, value = _a.value;
            if (onClick) {
                event.preventDefault();
                onClick(value);
            }
        };
        _this.ref = React.createRef();
        return _this;
    }
    ColorCard.prototype.render = function () {
        var _a = this.props, value = _a.value, label = _a.label, selected = _a.selected, focused = _a.focused, _b = _a.checkMarkColor, checkMarkColor = _b === void 0 ? theme_1.colors.N0 : _b;
        return (React.createElement(ColorCard_1.ColorCardOption, { onClick: this.onClick, onMouseDown: this.onMouseDown, focused: focused, "aria-label": "" + label + (selected ? ' selected' : '') },
            React.createElement(ColorCard_1.ColorCardContent, { color: value || 'transparent' }, selected && (React.createElement(done_1.default, { primaryColor: checkMarkColor, label: "" })))));
    };
    return ColorCard;
}(react_1.PureComponent));
exports.default = ColorCard;
//# sourceMappingURL=ColorCard.js.map