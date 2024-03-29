import { __assign, __extends } from "tslib";
import * as React from 'react';
import rafSchedule from 'raf-schd';
import { browser } from '../../utils';
export var shadowClassNames = {
    RIGHT_SHADOW: 'right-shadow',
    LEFT_SHADOW: 'left-shadow',
};
var isIE11 = browser.ie_version === 11;
export default function overflowShadow(Component, options) {
    return /** @class */ (function (_super) {
        __extends(OverflowShadow, _super);
        function OverflowShadow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                showLeftShadow: false,
                showRightShadow: false,
            };
            _this.handleScroll = function (event) {
                if (!_this.overflowContainer || event.target !== _this.overflowContainer) {
                    return;
                }
                _this.setState(function () { return ({
                    showLeftShadow: !!_this.overflowContainer && _this.overflowContainer.scrollLeft > 0,
                }); });
            };
            _this.updateRightShadow = function () {
                if (_this.overflowContainer) {
                    var diff = _this.calcOverflowDiff();
                    var showRightShadow_1 = diff > 0 && diff > _this.overflowContainer.scrollLeft;
                    if (showRightShadow_1 !== _this.state.showRightShadow) {
                        _this.setState(function () { return ({
                            showRightShadow: showRightShadow_1,
                        }); });
                    }
                }
            };
            _this.handleUpdateRightShadow = rafSchedule(_this.updateRightShadow);
            _this.handleScrollDebounced = rafSchedule(_this.handleScroll);
            _this.calcOverflowDiff = function () {
                if (!_this.overflowContainer) {
                    return 0;
                }
                _this.diff = _this.calcScrollableWidth();
                return _this.diff - _this.overflowContainer.offsetWidth;
            };
            _this.calcScrollableWidth = function () {
                if (!_this.scrollable && _this.overflowContainer) {
                    return _this.overflowContainer.scrollWidth;
                }
                if (!_this.scrollable) {
                    return 0;
                }
                var width = 0;
                for (var i = 0; i < _this.scrollable.length; i++) {
                    var scrollableElement = _this.scrollable[i];
                    width += scrollableElement.scrollWidth;
                }
                return width;
            };
            _this.handleContainer = function (container) {
                if (!container || _this.container) {
                    return;
                }
                _this.container = container;
                _this.overflowContainer = container.querySelector(options.overflowSelector);
                if (!_this.overflowContainer) {
                    _this.overflowContainer = container;
                }
                if (options.scrollableSelector) {
                    _this.scrollable = container.querySelectorAll(options.scrollableSelector);
                }
                _this.handleUpdateRightShadow();
                if (!isIE11) {
                    _this.overflowContainer.addEventListener('scroll', _this.handleScrollDebounced);
                }
            };
            return _this;
        }
        OverflowShadow.prototype.componentWillUnmount = function () {
            if (this.overflowContainer && !isIE11) {
                this.overflowContainer.removeEventListener('scroll', this.handleScrollDebounced);
            }
            this.handleUpdateRightShadow.cancel();
            this.handleScrollDebounced.cancel();
        };
        OverflowShadow.prototype.componentDidUpdate = function () {
            this.handleUpdateRightShadow();
        };
        OverflowShadow.prototype.render = function () {
            var _a = this.state, showLeftShadow = _a.showLeftShadow, showRightShadow = _a.showRightShadow;
            var classNames = [
                showRightShadow && shadowClassNames.RIGHT_SHADOW,
                showLeftShadow && shadowClassNames.LEFT_SHADOW,
            ]
                .filter(Boolean)
                .join(' ');
            return (React.createElement(Component, __assign({ handleRef: this.handleContainer, shadowClassNames: classNames }, this.props)));
        };
        return OverflowShadow;
    }(React.Component));
}
//# sourceMappingURL=index.js.map