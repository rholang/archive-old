"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var lineWidthButtonStyles_1 = require("./lineWidthButtonStyles");
var lineWidthPopup_1 = require("../popups/lineWidthPopup");
var LineWidthIcon = /** @class */ (function (_super) {
    tslib_1.__extends(LineWidthIcon, _super);
    function LineWidthIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCircleSize = function () {
            // Here we convert from input range (4-20) to circle size range (4-16)
            var lineWidth = _this.props.lineWidth;
            var localMin = 4;
            var localMax = 16;
            var localRange = localMax - localMin;
            var incomingRange = lineWidthPopup_1.THICKNESS_MAX - lineWidthPopup_1.THICKNESS_MIN;
            var circleSize = Math.floor((lineWidth - lineWidthPopup_1.THICKNESS_MIN) * (localRange / incomingRange) + 4);
            // Circle size should be an even number. Odd size makes it moves off center.
            if (circleSize % 2 > 0) {
                circleSize -= 1;
            }
            return circleSize;
        };
        return _this;
    }
    LineWidthIcon.prototype.render = function () {
        var _a = this.props, lineWidth = _a.lineWidth, isActive = _a.isActive, onLineWidthClick = _a.onLineWidthClick;
        var onClick = function () { return onLineWidthClick(lineWidth); };
        var innerCircleSize = this.getCircleSize();
        var style = {
            width: innerCircleSize + "px",
            height: innerCircleSize + "px",
            borderRadius: innerCircleSize * 2 + "px",
        };
        var mainAreaStyle = {
            padding: (lineWidthButtonStyles_1.TOTAL_CIRCLE_SIZE - innerCircleSize) / 2 + "px",
        };
        return (React.createElement(lineWidthButtonStyles_1.MainArea, { onClick: onClick, isActive: isActive, style: mainAreaStyle },
            React.createElement(lineWidthButtonStyles_1.FrontArea, { style: style, isActive: isActive })));
    };
    return LineWidthIcon;
}(react_1.Component));
exports.LineWidthIcon = LineWidthIcon;
//# sourceMappingURL=lineWidthIcon.js.map