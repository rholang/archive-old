"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var AnalyticsReactContext_1 = require("./AnalyticsReactContext");
var ContextTypes = {
    getAtlaskitAnalyticsContext: prop_types_1.default.func,
    getAtlaskitAnalyticsEventHandlers: prop_types_1.default.func,
};
var AnalyticsContext = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsContext, _super);
    function AnalyticsContext(props) {
        var _this = _super.call(this, props) || this;
        _this.getChildContext = function () { return ({
            getAtlaskitAnalyticsContext: _this.getAnalyticsContext,
        }); };
        _this.getAnalyticsContext = function () {
            var data = _this.props.data;
            var getAtlaskitAnalyticsContext = _this.context.getAtlaskitAnalyticsContext;
            var ancestorData = (typeof getAtlaskitAnalyticsContext === 'function' &&
                getAtlaskitAnalyticsContext()) ||
                [];
            return tslib_1.__spread(ancestorData, [data]);
        };
        _this.getAnalyticsEventHandlers = function () {
            var getAtlaskitAnalyticsEventHandlers = _this.context.getAtlaskitAnalyticsEventHandlers;
            var ancestorHandlers = (typeof getAtlaskitAnalyticsEventHandlers === 'function' &&
                getAtlaskitAnalyticsEventHandlers()) ||
                [];
            return ancestorHandlers;
        };
        _this.state = {
            getAtlaskitAnalyticsContext: _this.getAnalyticsContext,
            getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers,
        };
        return _this;
    }
    AnalyticsContext.prototype.render = function () {
        var children = this.props.children;
        return (react_1.default.createElement(AnalyticsReactContext_1.AnalyticsReactContext.Provider, { value: this.state }, react_1.Children.only(children)));
    };
    AnalyticsContext.contextTypes = ContextTypes;
    AnalyticsContext.childContextTypes = ContextTypes;
    return AnalyticsContext;
}(react_1.Component));
exports.default = AnalyticsContext;
//# sourceMappingURL=AnalyticsContext.js.map