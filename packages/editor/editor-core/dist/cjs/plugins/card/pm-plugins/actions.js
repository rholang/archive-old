"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
exports.cardAction = function (tr, action) {
    return tr.setMeta(main_1.pluginKey, action);
};
exports.resolveCard = function (url) { return function (tr) {
    return exports.cardAction(tr, {
        type: 'RESOLVE',
        url: url,
    });
}; };
exports.queueCards = function (requests) { return function (tr) {
    return exports.cardAction(tr, {
        type: 'QUEUE',
        requests: requests,
    });
}; };
exports.registerCard = function (info) { return function (tr) {
    return exports.cardAction(tr, {
        type: 'REGISTER',
        info: info,
    });
}; };
exports.setProvider = function (cardProvider) { return function (tr) {
    return exports.cardAction(tr, {
        type: 'SET_PROVIDER',
        provider: cardProvider,
    });
}; };
exports.showLinkToolbar = function (tr) {
    return exports.cardAction(tr, { type: 'SHOW_LINK_TOOLBAR' });
};
exports.hideLinkToolbar = function (tr) {
    return exports.cardAction(tr, { type: 'HIDE_LINK_TOOLBAR' });
};
//# sourceMappingURL=actions.js.map