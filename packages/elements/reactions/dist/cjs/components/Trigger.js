"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var emoji_add_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji-add"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var typestyle_1 = require("typestyle");
var triggerStyle = typestyle_1.style({
    width: '32px',
    height: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '16px',
    $nest: {
        '&.miniMode': {
            width: '24px',
            height: '24px',
        },
    },
});
var Trigger = /** @class */ (function (_super) {
    tslib_1.__extends(Trigger, _super);
    function Trigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMouseDown = function () {
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        return _this;
    }
    Trigger.prototype.render = function () {
        var _a = this.props, miniMode = _a.miniMode, disabled = _a.disabled;
        var classNames = classnames_1.default(triggerStyle, { miniMode: miniMode });
        return (React.createElement(button_1.default, { className: classNames, appearance: "subtle", onClick: this.handleMouseDown, isDisabled: disabled, spacing: "none" },
            React.createElement(emoji_add_1.default, { size: "small", label: "Add reaction" })));
    };
    Trigger.defaultProps = {
        disabled: false,
    };
    return Trigger;
}(react_1.PureComponent));
exports.Trigger = Trigger;
//# sourceMappingURL=Trigger.js.map