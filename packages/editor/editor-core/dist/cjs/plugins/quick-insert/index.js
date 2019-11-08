"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var analytics_1 = require("../../analytics");
var utils_1 = require("../../utils");
var search_1 = require("./search");
var analytics_2 = require("../analytics");
var quickInsertPlugin = function () { return ({
    name: 'quickInsert',
    pmPlugins: function (quickInsert) {
        return [
            {
                name: 'quickInsert',
                plugin: function (_a) {
                    var providerFactory = _a.providerFactory;
                    return quickInsertPluginFactory(quickInsert, providerFactory);
                },
            },
        ];
    },
    pluginsOptions: {
        typeAhead: {
            trigger: '/',
            getItems: function (query, state, intl, _a, _tr, dispatch) {
                var prevActive = _a.prevActive, queryChanged = _a.queryChanged;
                analytics_1.analyticsService.trackEvent('atlassian.editor.quickinsert.query');
                if (!prevActive && queryChanged) {
                    dispatch(analytics_2.analyticsEventKey, {
                        payload: {
                            action: analytics_2.ACTION.INVOKED,
                            actionSubject: analytics_2.ACTION_SUBJECT.TYPEAHEAD,
                            actionSubjectId: analytics_2.ACTION_SUBJECT_ID.TYPEAHEAD_QUICK_INSERT,
                            attributes: { inputMethod: analytics_2.INPUT_METHOD.KEYBOARD },
                            eventType: analytics_2.EVENT_TYPE.UI,
                        },
                    });
                }
                var quickInsertState = exports.pluginKey.getState(state);
                var defaultItems = processItems(quickInsertState.items, intl);
                var defaultSearch = function () { return search_1.find(query, defaultItems); };
                if (quickInsertState.provider) {
                    return quickInsertState.provider
                        .then(function (items) {
                        return search_1.find(query, utils_1.dedupe(tslib_1.__spread(defaultItems, items), function (item) { return item.title; }));
                    })
                        .catch(function (err) {
                        // eslint-disable-next-line no-console
                        console.error(err);
                        return defaultSearch();
                    });
                }
                return defaultSearch();
            },
            selectItem: function (state, item, insert) {
                analytics_1.analyticsService.trackEvent('atlassian.editor.quickinsert.select', {
                    item: item.title,
                });
                return item.action(insert, state);
            },
        },
    },
}); };
exports.default = quickInsertPlugin;
var itemsCache = {};
var processItems = function (items, intl) {
    if (!itemsCache[intl.locale]) {
        itemsCache[intl.locale] = items.reduce(function (acc, item) {
            if (typeof item === 'function') {
                return acc.concat(item(intl));
            }
            return acc.concat(item);
        }, []);
    }
    return itemsCache[intl.locale];
};
/**
 *
 * ProseMirror Plugin
 *
 */
exports.pluginKey = new prosemirror_state_1.PluginKey('quickInsertPluginKey');
exports.setProvider = function (provider) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(exports.pluginKey, provider));
    }
    return true;
}; };
function quickInsertPluginFactory(quickInsertItems, providerFactory) {
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
        state: {
            init: function () {
                return {
                    items: quickInsertItems || [],
                };
            },
            apply: function (tr, pluginState) {
                var provider = tr.getMeta(exports.pluginKey);
                if (provider) {
                    return tslib_1.__assign(tslib_1.__assign({}, pluginState), { provider: provider });
                }
                return pluginState;
            },
        },
        view: function (editorView) {
            var providerHandler = function (_name, providerPromise) {
                if (providerPromise) {
                    exports.setProvider(providerPromise.then(function (provider) {
                        return provider.getItems();
                    }))(editorView.state, editorView.dispatch);
                }
            };
            providerFactory.subscribe('quickInsertProvider', providerHandler);
            return {
                destroy: function () {
                    providerFactory.unsubscribe('quickInsertProvider', providerHandler);
                },
            };
        },
    });
}
//# sourceMappingURL=index.js.map