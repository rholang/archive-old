import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import InlineDialog from '@atlaskit/inline-dialog';
import FieldRange from '@atlaskit/field-range';
import { LineWidthPopupContainer } from './popupStyles';
export var THICKNESS_MIN = 4;
export var THICKNESS_MAX = 12;
var LineWidthPopup = /** @class */ (function (_super) {
    __extends(LineWidthPopup, _super);
    function LineWidthPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeSoon = function () {
            var onClose = _this.props.onClose;
            _this.closeSoonTimeout = window.setTimeout(onClose, 1500);
        };
        _this.cancelCloseSoon = function () {
            if (_this.closeSoonTimeout) {
                window.clearTimeout(_this.closeSoonTimeout);
                _this.closeSoonTimeout = undefined;
            }
        };
        _this.onSliderChange = function (value) {
            var onLineWidthClick = _this.props.onLineWidthClick;
            onLineWidthClick(value);
        };
        return _this;
    }
    LineWidthPopup.prototype.componentWillUnmount = function () {
        this.cancelCloseSoon();
    };
    LineWidthPopup.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, children = _a.children, lineWidth = _a.lineWidth, onClose = _a.onClose;
        var content = (React.createElement(LineWidthPopupContainer, { onMouseLeave: this.closeSoon, onMouseEnter: this.cancelCloseSoon },
            React.createElement(FieldRange, { value: lineWidth, step: 2, min: THICKNESS_MIN, max: THICKNESS_MAX, onChange: this.onSliderChange })));
        return (React.createElement(InlineDialog, { onContentBlur: onClose, isOpen: isOpen, placement: "top-start", content: content }, children));
    };
    return LineWidthPopup;
}(Component));
export { LineWidthPopup };
//# sourceMappingURL=lineWidthPopup.js.map