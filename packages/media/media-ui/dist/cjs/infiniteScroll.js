"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var InfiniteScroll = /** @class */ (function (_super) {
    tslib_1.__extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.scrollHeight = 0;
        _this.checkThreshold = function () {
            var div = _this.div.current;
            if (div === null) {
                return;
            }
            var threshold = _this.props.threshold || 0;
            var position = div.scrollTop + div.offsetHeight;
            var thresholdModifier = 0.1;
            var adjustedThreshold = Math.min(threshold, div.scrollHeight * thresholdModifier);
            var thresholdReached = position > _this.scrollHeight &&
                position > div.scrollHeight - adjustedThreshold;
            if (thresholdReached) {
                _this.scrollHeight = div.scrollHeight;
                if (_this.props.onThresholdReached) {
                    _this.props.onThresholdReached();
                }
            }
        };
        _this.checkThresholdDebounce = lodash_debounce_1.default(_this.checkThreshold, _this.props.delay, {
            leading: true,
            trailing: true,
        });
        _this.div = React.createRef();
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        this.checkThresholdDebounce();
    };
    InfiniteScroll.prototype.componentDidUpdate = function () {
        this.checkThresholdDebounce();
    };
    InfiniteScroll.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, children = _a.children;
        return (React.createElement("div", { ref: this.div, style: {
                width: width,
                height: height,
                overflowX: 'hidden',
                overflowY: 'auto',
                msOverflowStyle: 'scrollbar',
                display: 'inline-block',
            }, onScroll: this.checkThresholdDebounce }, children));
    };
    InfiniteScroll.defaultProps = {
        width: '100%',
        delay: 500,
        threshold: 100,
    };
    return InfiniteScroll;
}(react_1.Component));
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=infiniteScroll.js.map