"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var prosemirror_state_1 = require("prosemirror-state");
var adf_schema_1 = require("@atlaskit/adf-schema");
var emoji_1 = require("@atlaskit/emoji");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var ascii_input_rules_1 = require("./pm-plugins/ascii-input-rules");
var analytics_1 = require("../analytics");
var assets_1 = require("../quick-insert/assets");
var emoji_2 = tslib_1.__importDefault(require("./nodeviews/emoji"));
var type_ahead_1 = require("../type-ahead");
var analytics_2 = require("../../analytics");
var EmojiContextProvider_1 = require("./ui/EmojiContextProvider");
exports.defaultListLimit = 50;
var isFullShortName = function (query) {
    return query &&
        query.length > 1 &&
        query.charAt(0) === ':' &&
        query.charAt(query.length - 1) === ':';
};
var emojiPlugin = function (options) { return ({
    name: 'emoji',
    nodes: function () {
        return [{ name: 'emoji', node: adf_schema_1.emoji }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'emoji',
                plugin: function (_a) {
                    var providerFactory = _a.providerFactory, dispatch = _a.dispatch, portalProviderAPI = _a.portalProviderAPI;
                    return emojiPluginFactory(dispatch, providerFactory, portalProviderAPI, options);
                },
            },
            {
                name: 'emojiAsciiInputRule',
                plugin: function (_a) {
                    var schema = _a.schema, providerFactory = _a.providerFactory;
                    return ascii_input_rules_1.inputRulePlugin(schema, providerFactory);
                },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.emoji),
                    description: formatMessage(ToolbarInsertBlock_1.messages.emojiDescription),
                    priority: 500,
                    keyshortcut: ':',
                    icon: function () { return React.createElement(assets_1.IconEmoji, { label: formatMessage(ToolbarInsertBlock_1.messages.emoji) }); },
                    action: function (insert, state) {
                        var mark = state.schema.mark('typeAheadQuery', {
                            trigger: ':',
                        });
                        var emojiText = state.schema.text(':', [mark]);
                        var tr = insert(emojiText);
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.INVOKED,
                            actionSubject: analytics_1.ACTION_SUBJECT.TYPEAHEAD,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.TYPEAHEAD_EMOJI,
                            attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                            eventType: analytics_1.EVENT_TYPE.UI,
                        });
                    },
                },
            ];
        },
        typeAhead: {
            trigger: ':',
            // Custom regex must have a capture group around trigger
            // so it's possible to use it without needing to scan through all triggers again
            customRegex: '\\(?(:)',
            getItems: function (query, state, _intl, _a) {
                var prevActive = _a.prevActive, queryChanged = _a.queryChanged;
                if (!prevActive && queryChanged) {
                    analytics_2.analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.open', {});
                }
                if (query.charAt(query.length - 1) === ' ') {
                    analytics_2.analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.space', {});
                }
                var pluginState = getEmojiPluginState(state);
                var emojis = !prevActive && queryChanged ? [] : pluginState.emojis || [];
                if (queryChanged && pluginState.emojiProvider) {
                    pluginState.emojiProvider.filter(query ? ":" + query : '', {
                        limit: exports.defaultListLimit,
                        skinTone: pluginState.emojiProvider.getSelectedTone(),
                        sort: !query.length
                            ? emoji_1.SearchSort.UsageFrequency
                            : emoji_1.SearchSort.Default,
                    });
                }
                return emojis.map(function (emoji) { return ({
                    title: emoji.shortName || '',
                    key: emoji.id || emoji.shortName,
                    render: function (_a) {
                        var isSelected = _a.isSelected, onClick = _a.onClick, onHover = _a.onHover;
                        return (
                        // It's required to pass emojiProvider through the context for custom emojis to work
                        React.createElement(EmojiContextProvider_1.EmojiContextProvider, { emojiProvider: pluginState.emojiProvider },
                            React.createElement(emoji_1.EmojiTypeAheadItem, { emoji: emoji, selected: isSelected, onMouseMove: onHover, onSelection: onClick })));
                    },
                    emoji: emoji,
                }); });
            },
            forceSelect: function (query, items) {
                var normalizedQuery = ':' + query;
                return (!!isFullShortName(normalizedQuery) &&
                    !!items.find(function (item) { return item.title.toLowerCase() === normalizedQuery; }));
            },
            selectItem: function (state, item, insert, _a) {
                var mode = _a.mode;
                var _b = item.emoji, _c = _b.id, id = _c === void 0 ? '' : _c, _d = _b.type, type = _d === void 0 ? '' : _d, fallback = _b.fallback, shortName = _b.shortName;
                var text = fallback || shortName;
                var emojiPluginState = exports.emojiPluginKey.getState(state);
                var typeAheadPluginState = type_ahead_1.typeAheadPluginKey.getState(state);
                var pickerElapsedTime = typeAheadPluginState.queryStarted
                    ? Date.now() - typeAheadPluginState.queryStarted
                    : 0;
                if (emojiPluginState.emojiProvider &&
                    emojiPluginState.emojiProvider.recordSelection &&
                    item.emoji) {
                    emojiPluginState.emojiProvider.recordSelection(item.emoji);
                }
                analytics_2.analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.select', {
                    mode: mode,
                    duration: pickerElapsedTime,
                    emojiId: id,
                    type: type,
                    queryLength: (typeAheadPluginState.query || '').length,
                });
                return analytics_1.addAnalytics(state, insert(state.schema.nodes.emoji.createChecked({
                    shortName: shortName,
                    id: id,
                    text: text,
                })), {
                    action: analytics_1.ACTION.INSERTED,
                    actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                    actionSubjectId: analytics_1.ACTION_SUBJECT_ID.EMOJI,
                    attributes: { inputMethod: analytics_1.INPUT_METHOD.TYPEAHEAD },
                    eventType: analytics_1.EVENT_TYPE.TRACK,
                });
            },
            dismiss: function () {
                analytics_2.analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.close', {});
            },
        },
    },
}); };
exports.default = emojiPlugin;
/**
 * Actions
 */
exports.ACTIONS = {
    SET_PROVIDER: 'SET_PROVIDER',
    SET_RESULTS: 'SET_RESULTS',
};
exports.setProvider = function (provider) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(exports.emojiPluginKey, {
            action: exports.ACTIONS.SET_PROVIDER,
            params: { provider: provider },
        }));
    }
    return true;
}; };
exports.setResults = function (results) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(exports.emojiPluginKey, {
            action: exports.ACTIONS.SET_RESULTS,
            params: { results: results },
        }));
    }
    return true;
}; };
exports.emojiPluginKey = new prosemirror_state_1.PluginKey('emojiPlugin');
function getEmojiPluginState(state) {
    return (exports.emojiPluginKey.getState(state) || {});
}
exports.getEmojiPluginState = getEmojiPluginState;
function emojiPluginFactory(dispatch, providerFactory, portalProviderAPI, options) {
    var emojiProvider;
    var emojiProviderChangeHandler;
    return new prosemirror_state_1.Plugin({
        key: exports.emojiPluginKey,
        state: {
            init: function () {
                return {};
            },
            apply: function (tr, pluginState) {
                var _a = tr.getMeta(exports.emojiPluginKey) || {
                    action: null,
                    params: null,
                }, action = _a.action, params = _a.params;
                var newPluginState = pluginState;
                switch (action) {
                    case exports.ACTIONS.SET_PROVIDER:
                        newPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { emojiProvider: params.provider });
                        dispatch(exports.emojiPluginKey, newPluginState);
                        return newPluginState;
                    case exports.ACTIONS.SET_RESULTS:
                        newPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { emojis: params.results.emojis });
                        dispatch(exports.emojiPluginKey, newPluginState);
                        return newPluginState;
                }
                return newPluginState;
            },
        },
        props: {
            nodeViews: {
                emoji: emoji_2.default(portalProviderAPI, providerFactory, options),
            },
        },
        view: function (editorView) {
            var providerHandler = function (name, providerPromise) {
                switch (name) {
                    case 'emojiProvider':
                        if (!providerPromise) {
                            return exports.setProvider(undefined)(editorView.state, editorView.dispatch);
                        }
                        providerPromise
                            .then(function (provider) {
                            if (emojiProvider && emojiProviderChangeHandler) {
                                emojiProvider.unsubscribe(emojiProviderChangeHandler);
                            }
                            emojiProvider = provider;
                            exports.setProvider(provider)(editorView.state, editorView.dispatch);
                            emojiProviderChangeHandler = {
                                result: function (emojis) {
                                    // Emoji provider is synchronous and
                                    // we need to make it async here to make PM happy
                                    Promise.resolve().then(function () {
                                        exports.setResults(emojis)(editorView.state, editorView.dispatch);
                                    });
                                },
                            };
                            provider.subscribe(emojiProviderChangeHandler);
                        })
                            .catch(function () {
                            return exports.setProvider(undefined)(editorView.state, editorView.dispatch);
                        });
                        break;
                }
                return;
            };
            providerFactory.subscribe('emojiProvider', providerHandler);
            return {
                destroy: function () {
                    if (providerFactory) {
                        providerFactory.unsubscribe('emojiProvider', providerHandler);
                    }
                    if (emojiProvider && emojiProviderChangeHandler) {
                        emojiProvider.unsubscribe(emojiProviderChangeHandler);
                    }
                },
            };
        },
    });
}
exports.emojiPluginFactory = emojiPluginFactory;
//# sourceMappingURL=index.js.map