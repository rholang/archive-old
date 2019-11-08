"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var AnalyticsReactContext_1 = require("./AnalyticsReactContext");
var ContextTypes = {
    getAtlaskitAnalyticsEventHandlers: prop_types_1.default.func,
};
var AnalyticsListener = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsListener, _super);
    function AnalyticsListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getChildContext = function () { return ({
            getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers,
        }); };
        _this.getAnalyticsEventHandlers = function () {
            var _a = _this.props, channel = _a.channel, onEvent = _a.onEvent;
            var getAtlaskitAnalyticsEventHandlers = _this.context.getAtlaskitAnalyticsEventHandlers;
            var parentEventHandlers = (typeof getAtlaskitAnalyticsEventHandlers === 'function' &&
                getAtlaskitAnalyticsEventHandlers()) ||
                [];
            var handler = function (event, eventChannel) {
                if (channel === '*' || channel === eventChannel) {
                    onEvent(event, eventChannel);
                }
            };
            return tslib_1.__spread([handler], parentEventHandlers);
        };
        return _this;
    }
    AnalyticsListener.prototype.render = function () {
        var _a = this.context.getAtlaskitAnalyticsContext, getAtlaskitAnalyticsContext = _a === void 0 ? function () { return []; } : _a;
        var children = this.props.children;
        return (react_1.default.createElement(AnalyticsReactContext_1.AnalyticsReactContext.Provider, { value: {
                getAtlaskitAnalyticsEventHandlers: this.getAnalyticsEventHandlers,
                getAtlaskitAnalyticsContext: getAtlaskitAnalyticsContext,
            } }, children));
    };
    AnalyticsListener.contextTypes = ContextTypes;
    AnalyticsListener.childContextTypes = ContextTypes;
    return AnalyticsListener;
}(react_1.Component));
exports.default = AnalyticsListener;
//# sourceMappingURL=AnalyticsListener.js.map