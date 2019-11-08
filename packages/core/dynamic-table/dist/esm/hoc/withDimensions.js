import { __assign, __extends } from "tslib";
import React from 'react';
// Compute height and width of wrapped component before ranking
export default function withDimensions(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(WithDimensions, _super);
        function WithDimensions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                refWidth: 0,
                refHeight: 0,
            };
            _this.innerRef = function (ref) {
                if (ref && !_this.props.isRanking) {
                    _this.ref = ref;
                }
            };
            _this.updateDimensions = function () {
                if (!_this.ref) {
                    return;
                }
                var clientRect = _this.ref.getBoundingClientRect();
                var width = clientRect.width;
                var height = clientRect.height;
                if (width !== _this.state.refWidth || height !== _this.state.refHeight) {
                    _this.setState({ refWidth: width, refHeight: height });
                }
            };
            return _this;
        }
        WithDimensions.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
            var wasRanking = this.props.isRanking;
            var willRanking = nextProps.isRanking;
            if (willRanking && !wasRanking) {
                this.updateDimensions();
            }
        };
        WithDimensions.prototype.render = function () {
            var _a = this.state, refWidth = _a.refWidth, refHeight = _a.refHeight;
            return (React.createElement(WrappedComponent, __assign({ refWidth: refWidth, refHeight: refHeight, innerRef: this.innerRef }, this.props)));
        };
        return WithDimensions;
    }(React.Component));
}
//# sourceMappingURL=withDimensions.js.map