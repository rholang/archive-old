"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var TagCrossIcon_1 = tslib_1.__importDefault(require("./TagCrossIcon"));
var styled_1 = require("./styled");
var RemoveButton = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveButton, _super);
    function RemoveButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onKeyPress = function (e) {
            var spacebarOrEnter = e.key === ' ' || e.key === 'Enter';
            if (spacebarOrEnter) {
                e.stopPropagation();
                if (_this.props.onRemoveAction) {
                    _this.props.onRemoveAction();
                }
            }
        };
        _this.onMouseOver = function () {
            if (_this.props.onHoverChange)
                _this.props.onHoverChange(true);
        };
        _this.onMouseOut = function () {
            if (_this.props.onHoverChange)
                _this.props.onHoverChange(false);
        };
        _this.onBlur = function () { };
        _this.onFocus = function () { };
        return _this;
    }
    RemoveButton.prototype.render = function () {
        var _a = this.props, isRounded = _a.isRounded, onRemoveAction = _a.onRemoveAction, removeText = _a.removeText;
        return (react_1.default.createElement(styled_1.Button, { "aria-label": removeText, isRounded: isRounded, onClick: onRemoveAction, onKeyPress: this.onKeyPress, onMouseOut: this.onMouseOut, onMouseOver: this.onMouseOver, onBlur: this.onBlur, onFocus: this.onFocus, type: "button" },
            react_1.default.createElement(TagCrossIcon_1.default, null)));
    };
    return RemoveButton;
}(react_1.PureComponent));
exports.default = RemoveButton;
//# sourceMappingURL=index.js.map