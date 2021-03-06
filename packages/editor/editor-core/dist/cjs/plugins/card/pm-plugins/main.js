"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var reducers_1 = tslib_1.__importDefault(require("./reducers"));
var actions_1 = require("./actions");
var doc_1 = require("./doc");
var inlineCard_1 = require("../nodeviews/inlineCard");
var blockCard_1 = require("../nodeviews/blockCard");
exports.pluginKey = new prosemirror_state_1.PluginKey('cardPlugin');
exports.getPluginState = function (editorState) {
    return exports.pluginKey.getState(editorState);
};
var handleResolved = function (view, request) { return function (resolvedCard) {
    doc_1.replaceQueuedUrlWithCard(request.url, resolvedCard)(view.state, view.dispatch);
    return resolvedCard;
}; };
var handleRejected = function (view, request) { return function () {
    view.dispatch(actions_1.resolveCard(request.url)(view.state.tr));
}; };
exports.resolveWithProvider = function (view, outstandingRequests, provider, request) {
    var $pos = view.state.doc.resolve(request.pos);
    var parent = $pos.parent;
    var isBlock = parent.type.name === 'paragraph' &&
        parent.childCount === 1 &&
        parent.firstChild.type.isText &&
        parent.firstChild.text === request.url &&
        $pos.node($pos.depth - 1).type.name === 'doc';
    outstandingRequests[request.url] = provider
        .resolve(request.url, isBlock ? 'block' : 'inline')
        .then(function (resolvedCard) {
        delete outstandingRequests[request.url];
        return resolvedCard;
    })
        .then(handleResolved(view, request), handleRejected(view, request));
};
exports.createPlugin = function (_a) {
    var portalProviderAPI = _a.portalProviderAPI, providerFactory = _a.providerFactory;
    return new prosemirror_state_1.Plugin({
        state: {
            init: function () {
                return {
                    requests: [],
                    provider: null,
                    cards: [],
                    showLinkingToolbar: false,
                };
            },
            apply: function (tr, pluginState) {
                // update all the positions
                var remappedState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { requests: pluginState.requests.map(function (request) { return (tslib_1.__assign(tslib_1.__assign({}, request), { pos: tr.mapping.map(request.pos) })); }), cards: pluginState.cards.map(function (card) { return (tslib_1.__assign(tslib_1.__assign({}, card), { pos: tr.mapping.map(card.pos) })); }) });
                // apply any actions
                var meta = tr.getMeta(exports.pluginKey);
                if (meta) {
                    var nextPluginState = reducers_1.default(remappedState, meta);
                    return nextPluginState;
                }
                return remappedState;
            },
        },
        view: function (view) {
            // listen for card provider changes
            var handleProvider = function (name, provider) {
                if (name !== 'cardProvider' || !provider) {
                    return;
                }
                provider.then(function (cardProvider) {
                    var state = view.state, dispatch = view.dispatch;
                    dispatch(actions_1.setProvider(cardProvider)(state.tr));
                });
            };
            providerFactory.subscribe('cardProvider', handleProvider);
            var outstandingRequests = {};
            return {
                update: function (view, prevState) {
                    var currentState = exports.getPluginState(view.state);
                    var oldState = exports.getPluginState(prevState);
                    if (currentState && currentState.provider) {
                        // find requests in this state that weren't in the old one
                        var newRequests = oldState
                            ? currentState.requests.filter(function (req) {
                                return !oldState.requests.find(function (oldReq) {
                                    return oldReq.url === req.url && oldReq.pos === req.pos;
                                });
                            })
                            : currentState.requests;
                        // ask the CardProvider to resolve all new requests
                        var provider_1 = currentState.provider;
                        newRequests.forEach(function (request) {
                            exports.resolveWithProvider(view, outstandingRequests, provider_1, request);
                        });
                    }
                },
                destroy: function () {
                    // cancel all outstanding requests
                    Object.keys(outstandingRequests).forEach(function (url) {
                        return Promise.reject(outstandingRequests[url]);
                    });
                    providerFactory.unsubscribe('cardProvider', handleProvider);
                },
            };
        },
        props: {
            nodeViews: {
                inlineCard: function (node, view, getPos) {
                    return new inlineCard_1.InlineCard(node, view, getPos, portalProviderAPI, {
                        providerFactory: providerFactory,
                    }, undefined, true).init();
                },
                blockCard: function (node, view, getPos) {
                    return new blockCard_1.BlockCard(node, view, getPos, portalProviderAPI, {
                        providerFactory: providerFactory,
                    }, undefined, true).init();
                },
            },
        },
        key: exports.pluginKey,
    });
};
//# sourceMappingURL=main.js.map