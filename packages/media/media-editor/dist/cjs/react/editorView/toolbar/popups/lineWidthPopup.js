"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var field_range_1 = tslib_1.__importDefault(require("@atlaskit/field-range"));
var popupStyles_1 = require("./popupStyles");
exports.THICKNESS_MIN = 4;
exports.THICKNESS_MAX = 12;
var LineWidthPopup = /** @class */ (function (_super) {
    tslib_1.__extends(LineWidthPopup, _super);
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
        var content = (React.createElement(popupStyles_1.LineWidthPopupContainer, { onMouseLeave: this.closeSoon, onMouseEnter: this.cancelCloseSoon },
            React.createElement(field_range_1.default, { value: lineWidth, step: 2, min: exports.THICKNESS_MIN, max: exports.THICKNESS_MAX, onChange: this.onSliderChange })));
        return (React.createElement(inline_dialog_1.default, { onContentBlur: onClose, isOpen: isOpen, placement: "top-start", content: content }, children));
    };
    return LineWidthPopup;
}(react_1.Component));
exports.LineWidthPopup = LineWidthPopup;
//# sourceMappingURL=lineWidthPopup.js.map