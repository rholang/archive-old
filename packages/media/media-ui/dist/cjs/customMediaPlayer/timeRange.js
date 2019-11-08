"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_1 = require("./styled");
var formatDuration_1 = require("../formatDuration");
var TimeRange = /** @class */ (function (_super) {
    tslib_1.__extends(TimeRange, _super);
    function TimeRange() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapperElementWidth = 0;
        _this.state = {
            isDragging: false,
            dragStartClientX: 0,
        };
        _this.setWrapperWidth = function () {
            if (!_this.wrapperElement) {
                return;
            }
            _this.wrapperElementWidth = _this.wrapperElement.getBoundingClientRect().width;
        };
        _this.onMouseMove = function (e) {
            var _a = _this.state, isDragging = _a.isDragging, dragStartClientX = _a.dragStartClientX;
            if (!isDragging) {
                return;
            }
            e.stopPropagation();
            var _b = _this.props, onChange = _b.onChange, duration = _b.duration, currentTime = _b.currentTime;
            var clientX = e.clientX;
            var absolutePosition = clientX - dragStartClientX;
            var isOutsideToRight = absolutePosition > _this.wrapperElementWidth;
            var isOutsideToLeft = absolutePosition < 0;
            // Next to conditions take care of situation where user moves mouse very quickly out to the side
            // left or right. It's very easy to leave thumb not at the end/beginning of a timeline.
            // This will guarantee that in this case thumb will move to appropriate extreme.
            if (isOutsideToRight) {
                absolutePosition = _this.wrapperElementWidth;
            }
            if (isOutsideToLeft) {
                absolutePosition = 0;
            }
            var newTimeWithBoundaries = (absolutePosition * duration) / _this.wrapperElementWidth;
            if (currentTime !== newTimeWithBoundaries) {
                // If value hasn't changed we don't want to call "change"
                onChange(newTimeWithBoundaries);
            }
        };
        _this.onMouseUp = function () {
            // As soon as user finished dragging, we should clean up events.
            document.removeEventListener('mouseup', _this.onMouseUp);
            document.removeEventListener('mousemove', _this.onMouseMove);
            _this.setState({
                isDragging: false,
            });
        };
        _this.onThumbMouseDown = function (e) {
            // We need to recalculate every time, because width can change (thanks, editor ;-)
            _this.setWrapperWidth();
            // We are implementing drag and drop here. There is no reason to start listening for mouseUp or move
            // before that. Also if we start listening for mouseup before that we could pick up someone else's event
            // For example editors resizing of a inline video player.
            document.addEventListener('mouseup', _this.onMouseUp);
            document.addEventListener('mousemove', _this.onMouseMove);
            var _a = _this.props, duration = _a.duration, onChange = _a.onChange;
            var event = e.nativeEvent;
            var x = event.offsetX;
            var currentTime = (x * duration) / _this.wrapperElementWidth;
            _this.setState({
                isDragging: true,
                dragStartClientX: event.clientX - x,
            });
            // As soon as user clicks timeline we want to move thumb over to that place.
            onChange(currentTime);
        };
        _this.saveWrapperElement = function (el) {
            if (el) {
                _this.wrapperElement = el;
                _this.setWrapperWidth();
            }
        };
        _this.saveThumbElement = function (el) {
            if (el) {
                _this.thumbElement = el;
            }
        };
        return _this;
    }
    TimeRange.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.setWrapperWidth);
    };
    TimeRange.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('resize', this.setWrapperWidth);
    };
    TimeRange.prototype.render = function () {
        var isDragging = this.state.isDragging;
        var _a = this.props, currentTime = _a.currentTime, duration = _a.duration, bufferedTime = _a.bufferedTime, disableThumbTooltip = _a.disableThumbTooltip, isAlwaysActive = _a.isAlwaysActive;
        var currentPosition = (currentTime * 100) / duration;
        var bufferedTimePercentage = (bufferedTime * 100) / duration;
        return (React.createElement(styled_1.TimeRangeWrapper, { showAsActive: isAlwaysActive, onMouseDown: this.onThumbMouseDown },
            React.createElement(styled_1.TimeLine, { innerRef: this.saveWrapperElement },
                React.createElement(styled_1.BufferedTime, { style: { width: bufferedTimePercentage + "%" } }),
                React.createElement(styled_1.CurrentTimeLine, { style: { width: currentPosition + "%" } },
                    React.createElement(styled_1.Thumb, { innerRef: this.saveThumbElement }, disableThumbTooltip ? null : (React.createElement(styled_1.CurrentTimeTooltip, { draggable: false, isDragging: isDragging, className: "current-time-tooltip" }, formatDuration_1.formatDuration(currentTime))))))));
    };
    TimeRange.defaultProps = {
        disableThumbTooltip: false,
        isAlwaysActive: false,
    };
    return TimeRange;
}(react_1.Component));
exports.TimeRange = TimeRange;
//# sourceMappingURL=timeRange.js.map