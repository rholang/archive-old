"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var queue = function (state, action) {
    return tslib_1.__assign(tslib_1.__assign({}, state), { requests: state.requests.concat(action.requests) });
};
var resolve = function (state, action) {
    var requests = state.requests.reduce(function (requests, request) {
        if (request.url !== action.url) {
            requests.push(request);
        }
        return requests;
    }, []);
    return tslib_1.__assign(tslib_1.__assign({}, state), { requests: requests });
};
var register = function (state, action) {
    return tslib_1.__assign(tslib_1.__assign({}, state), { cards: tslib_1.__spread(state.cards, [action.info]) });
};
var setProvider = function (state, action) {
    return tslib_1.__assign(tslib_1.__assign({}, state), { provider: action.provider });
};
var setLinkToolbar = function (state, action) {
    return tslib_1.__assign(tslib_1.__assign({}, state), { showLinkingToolbar: action.type === 'SHOW_LINK_TOOLBAR' });
};
exports.default = (function (state, action) {
    switch (action.type) {
        case 'QUEUE':
            return queue(state, action);
        case 'SET_PROVIDER':
            return setProvider(state, action);
        case 'RESOLVE':
            return resolve(state, action);
        case 'REGISTER':
            return register(state, action);
        case 'SHOW_LINK_TOOLBAR':
        case 'HIDE_LINK_TOOLBAR':
            return setLinkToolbar(state, action);
    }
});
//# sourceMappingURL=reducers.js.map