import { __assign } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import reducer from './reducers';
import { setProvider, resolveCard } from './actions';
import { replaceQueuedUrlWithCard } from './doc';
import { InlineCard } from '../nodeviews/inlineCard';
import { BlockCard } from '../nodeviews/blockCard';
export var pluginKey = new PluginKey('cardPlugin');
export var getPluginState = function (editorState) {
    return pluginKey.getState(editorState);
};
var handleResolved = function (view, request) { return function (resolvedCard) {
    replaceQueuedUrlWithCard(request.url, resolvedCard)(view.state, view.dispatch);
    return resolvedCard;
}; };
var handleRejected = function (view, request) { return function () {
    view.dispatch(resolveCard(request.url)(view.state.tr));
}; };
export var resolveWithProvider = function (view, outstandingRequests, provider, request) {
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
export var createPlugin = function (_a) {
    var portalProviderAPI = _a.portalProviderAPI, providerFactory = _a.providerFactory;
    return new Plugin({
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
                var remappedState = __assign(__assign({}, pluginState), { requests: pluginState.requests.map(function (request) { return (__assign(__assign({}, request), { pos: tr.mapping.map(request.pos) })); }), cards: pluginState.cards.map(function (card) { return (__assign(__assign({}, card), { pos: tr.mapping.map(card.pos) })); }) });
                // apply any actions
                var meta = tr.getMeta(pluginKey);
                if (meta) {
                    var nextPluginState = reducer(remappedState, meta);
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
                    dispatch(setProvider(cardProvider)(state.tr));
                });
            };
            providerFactory.subscribe('cardProvider', handleProvider);
            var outstandingRequests = {};
            return {
                update: function (view, prevState) {
                    var currentState = getPluginState(view.state);
                    var oldState = getPluginState(prevState);
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
                            resolveWithProvider(view, outstandingRequests, provider_1, request);
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
                    return new InlineCard(node, view, getPos, portalProviderAPI, {
                        providerFactory: providerFactory,
                    }, undefined, true).init();
                },
                blockCard: function (node, view, getPos) {
                    return new BlockCard(node, view, getPos, portalProviderAPI, {
                        providerFactory: providerFactory,
                    }, undefined, true).init();
                },
            },
        },
        key: pluginKey,
    });
};
//# sourceMappingURL=main.js.map