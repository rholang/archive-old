"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var width_detector_1 = tslib_1.__importDefault(require("@atlaskit/width-detector"));
exports.Breakpoints = {
    S: 'S',
    M: 'M',
    L: 'L',
};
var MAX_S = 1266;
var MAX_M = 2146;
var SCROLLBAR_WIDTH = 30;
function getBreakpoint(width) {
    if (width === void 0) { width = 0; }
    if (width >= MAX_S && width < MAX_M) {
        return exports.Breakpoints.M;
    }
    else if (width >= MAX_M) {
        return exports.Breakpoints.L;
    }
    return exports.Breakpoints.S;
}
exports.getBreakpoint = getBreakpoint;
function createWidthContext(width) {
    if (width === void 0) { width = 0; }
    return { width: width, breakpoint: getBreakpoint(width) };
}
exports.createWidthContext = createWidthContext;
var _a = React.createContext(createWidthContext()), Provider = _a.Provider, Consumer = _a.Consumer;
exports.WidthConsumer = Consumer;
var WidthProvider = /** @class */ (function (_super) {
    tslib_1.__extends(WidthProvider, _super);
    function WidthProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { width: 0 };
        _this.setWidth = raf_schd_1.default(function (width) {
            // Ignore changes that are less than SCROLLBAR_WIDTH, otherwise it can cause infinite re-scaling
            if (Math.abs(_this.state.width - width) < SCROLLBAR_WIDTH) {
                return;
            }
            _this.setState({ width: width });
        });
        _this.state.width = document.body.offsetWidth;
        return _this;
    }
    WidthProvider.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(width_detector_1.default, { containerStyle: {
                    height: '0',
                    borderStyle: 'none',
                } }, function (width) {
                if (width) {
                    _this.setWidth(width);
                }
                return null;
            }),
            React.createElement(Provider, { value: createWidthContext(this.state.width) }, this.props.children)));
    };
    return WidthProvider;
}(React.Component));
exports.WidthProvider = WidthProvider;
//# sourceMappingURL=index.js.map