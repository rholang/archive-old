"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var redux_1 = require("redux");
var reducers_1 = require("../reducers");
var _1 = require(".");
var constants_1 = require("../actions/constants");
var client_1 = tslib_1.__importDefault(require("../../client"));
function SmartCardProvider(_a) {
    var _b = _a.client, client = _b === void 0 ? new client_1.default() : _b, _c = _a.cacheOptions, cacheOptions = _c === void 0 ? {
        maxAge: constants_1.MAX_RELOAD_DELAY,
        maxLoadingDelay: constants_1.MAX_LOADING_DELAY,
    } : _c, _d = _a.storeOptions, storeOptions = _d === void 0 ? { initialState: {} } : _d, _e = _a.authFlow, authFlow = _e === void 0 ? 'oauth2' : _e, children = _a.children;
    var context = react_1.useContext(_1.SmartCardContext);
    if (context) {
        return (React.createElement(_1.SmartCardContext.Provider, { value: context }, children));
    }
    else {
        var initialState = storeOptions.initialState;
        var store = redux_1.createStore(reducers_1.cardReducer, initialState);
        return (React.createElement(_1.SmartCardContext.Provider, { value: {
                store: store,
                connections: {
                    client: client,
                },
                config: tslib_1.__assign(tslib_1.__assign({}, cacheOptions), { authFlow: authFlow }),
            } }, children));
    }
}
exports.SmartCardProvider = SmartCardProvider;
exports.default = SmartCardProvider;
//# sourceMappingURL=provider.js.map