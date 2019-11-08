import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { FrontArea, MainArea, TOTAL_CIRCLE_SIZE, } from './lineWidthButtonStyles';
import { THICKNESS_MAX, THICKNESS_MIN } from '../popups/lineWidthPopup';
var LineWidthIcon = /** @class */ (function (_super) {
    __extends(LineWidthIcon, _super);
    function LineWidthIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCircleSize = function () {
            // Here we convert from input range (4-20) to circle size range (4-16)
            var lineWidth = _this.props.lineWidth;
            var localMin = 4;
            var localMax = 16;
            var localRange = localMax - localMin;
            var incomingRange = THICKNESS_MAX - THICKNESS_MIN;
            var circleSize = Math.floor((lineWidth - THICKNESS_MIN) * (localRange / incomingRange) + 4);
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
            padding: (TOTAL_CIRCLE_SIZE - innerCircleSize) / 2 + "px",
        };
        return (React.createElement(MainArea, { onClick: onClick, isActive: isActive, style: mainAreaStyle },
            React.createElement(FrontArea, { style: style, isActive: isActive })));
    };
    return LineWidthIcon;
}(Component));
export { LineWidthIcon };
//# sourceMappingURL=lineWidthIcon.js.map