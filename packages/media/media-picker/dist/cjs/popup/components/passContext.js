"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var PassContext = /** @class */ (function (_super) {
    tslib_1.__extends(PassContext, _super);
    function PassContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createDefaultI18nProvider = function () {
            return new react_intl_1.IntlProvider({ locale: 'en' }).getChildContext().intl;
        };
        return _this;
    }
    PassContext.prototype.getChildContext = function () {
        var _a = this.props, store = _a.store, proxyReactContext = _a.proxyReactContext;
        var getAtlaskitAnalyticsEventHandlers = proxyReactContext && proxyReactContext.getAtlaskitAnalyticsEventHandlers
            ? proxyReactContext.getAtlaskitAnalyticsEventHandlers
            : function () { return []; };
        var intl = (proxyReactContext && proxyReactContext.intl) ||
            this.createDefaultI18nProvider();
        return {
            store: store,
            getAtlaskitAnalyticsEventHandlers: getAtlaskitAnalyticsEventHandlers,
            intl: intl,
        };
    };
    PassContext.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    // We need to manually specify all the child contexts
    PassContext.childContextTypes = {
        store: function () { },
        getAtlaskitAnalyticsEventHandlers: function () { },
        intl: react_intl_1.intlShape,
    };
    return PassContext;
}(react_1.Component));
exports.default = PassContext;
//# sourceMappingURL=passContext.js.map