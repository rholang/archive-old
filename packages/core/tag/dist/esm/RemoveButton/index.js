import { __extends } from "tslib";
import React, { PureComponent } from 'react';
import TagCrossIcon from './TagCrossIcon';
import { Button } from './styled';
var RemoveButton = /** @class */ (function (_super) {
    __extends(RemoveButton, _super);
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
        return (React.createElement(Button, { "aria-label": removeText, isRounded: isRounded, onClick: onRemoveAction, onKeyPress: this.onKeyPress, onMouseOut: this.onMouseOut, onMouseOver: this.onMouseOver, onBlur: this.onBlur, onFocus: this.onFocus, type: "button" },
            React.createElement(TagCrossIcon, null)));
    };
    return RemoveButton;
}(PureComponent));
export default RemoveButton;
//# sourceMappingURL=index.js.map