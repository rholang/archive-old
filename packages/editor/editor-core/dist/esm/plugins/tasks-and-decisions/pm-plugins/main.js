import { __assign, __rest } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import { uuid } from '@atlaskit/adf-schema';
import { decisionItemNodeView } from '../nodeviews/decisionItem';
import { taskItemNodeViewFactory } from '../nodeviews/taskItem';
import { nodesBetweenChanged } from '../../../utils';
export var stateKey = new PluginKey('tasksAndDecisionsPlugin');
var ACTIONS;
(function (ACTIONS) {
    ACTIONS[ACTIONS["SET_CONTEXT_PROVIDER"] = 0] = "SET_CONTEXT_PROVIDER";
})(ACTIONS || (ACTIONS = {}));
var setContextIdentifierProvider = function (provider) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(stateKey, {
            action: ACTIONS.SET_CONTEXT_PROVIDER,
            data: provider,
        }));
    }
    return true;
}; };
export function createPlugin(portalProviderAPI, providerFactory, dispatch) {
    return new Plugin({
        props: {
            nodeViews: {
                taskItem: taskItemNodeViewFactory(portalProviderAPI, providerFactory),
                decisionItem: decisionItemNodeView(portalProviderAPI),
            },
        },
        state: {
            init: function () {
                return { insideTaskDecisionItem: false };
            },
            apply: function (tr, pluginState) {
                var _a = tr.getMeta(stateKey) || {
                    action: null,
                    data: null,
                }, action = _a.action, data = _a.data;
                var newPluginState = pluginState;
                switch (action) {
                    case ACTIONS.SET_CONTEXT_PROVIDER:
                        newPluginState = __assign(__assign({}, pluginState), { contextIdentifierProvider: data });
                        break;
                }
                dispatch(stateKey, newPluginState);
                return newPluginState;
            },
        },
        view: function (editorView) {
            var providerHandler = function (name, providerPromise) {
                if (name === 'contextIdentifierProvider') {
                    if (!providerPromise) {
                        setContextIdentifierProvider(undefined)(editorView.state, editorView.dispatch);
                    }
                    else {
                        providerPromise.then(function (provider) {
                            setContextIdentifierProvider(provider)(editorView.state, editorView.dispatch);
                        });
                    }
                }
            };
            providerFactory.subscribe('contextIdentifierProvider', providerHandler);
            return {};
        },
        key: stateKey,
        /*
         * After each transaction, we search through the document for any decisionList/Item & taskList/Item nodes
         * that do not have the localId attribute set and generate a random UUID to use. This is to replace a previous
         * Prosemirror capabibility where node attributes could be generated dynamically.
         * See https://discuss.prosemirror.net/t/release-0-23-0-possibly-to-be-1-0-0/959/17 for a discussion of this approach.
         *
         * Note: we currently do not handle the edge case where two nodes may have the same localId
         */
        appendTransaction: function (transactions, _oldState, newState) {
            var tr = newState.tr;
            var modified = false;
            transactions.forEach(function (transaction) {
                if (!transaction.docChanged) {
                    return;
                }
                // Adds a unique id to a node
                nodesBetweenChanged(transaction, function (node, pos) {
                    var _a = newState.schema.nodes, decisionList = _a.decisionList, decisionItem = _a.decisionItem, taskList = _a.taskList, taskItem = _a.taskItem;
                    if (!!node.type &&
                        (node.type === decisionList ||
                            node.type === decisionItem ||
                            node.type === taskList ||
                            node.type === taskItem)) {
                        var _b = node.attrs, localId = _b.localId, rest = __rest(_b, ["localId"]);
                        if (localId === undefined || localId === null || localId === '') {
                            tr.setNodeMarkup(pos, undefined, __assign({ localId: uuid.generate() }, rest));
                            modified = true;
                        }
                    }
                });
            });
            if (modified) {
                return tr;
            }
            return;
        },
    });
}
//# sourceMappingURL=main.js.map