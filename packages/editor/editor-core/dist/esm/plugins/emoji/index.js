import { __assign } from "tslib";
import * as React from 'react';
import { Plugin, PluginKey } from 'prosemirror-state';
import { emoji } from '@atlaskit/adf-schema';
import { EmojiTypeAheadItem, SearchSort, } from '@atlaskit/emoji';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { inputRulePlugin as asciiInputRulePlugin } from './pm-plugins/ascii-input-rules';
import { addAnalytics, EVENT_TYPE, INPUT_METHOD, ACTION_SUBJECT, ACTION, ACTION_SUBJECT_ID, } from '../analytics';
import { IconEmoji } from '../quick-insert/assets';
import emojiNodeView from './nodeviews/emoji';
import { typeAheadPluginKey } from '../type-ahead';
import { analyticsService } from '../../analytics';
import { EmojiContextProvider } from './ui/EmojiContextProvider';
export var defaultListLimit = 50;
var isFullShortName = function (query) {
    return query &&
        query.length > 1 &&
        query.charAt(0) === ':' &&
        query.charAt(query.length - 1) === ':';
};
var emojiPlugin = function (options) { return ({
    name: 'emoji',
    nodes: function () {
        return [{ name: 'emoji', node: emoji }];
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
                    return asciiInputRulePlugin(schema, providerFactory);
                },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.emoji),
                    description: formatMessage(messages.emojiDescription),
                    priority: 500,
                    keyshortcut: ':',
                    icon: function () { return React.createElement(IconEmoji, { label: formatMessage(messages.emoji) }); },
                    action: function (insert, state) {
                        var mark = state.schema.mark('typeAheadQuery', {
                            trigger: ':',
                        });
                        var emojiText = state.schema.text(':', [mark]);
                        var tr = insert(emojiText);
                        return addAnalytics(state, tr, {
                            action: ACTION.INVOKED,
                            actionSubject: ACTION_SUBJECT.TYPEAHEAD,
                            actionSubjectId: ACTION_SUBJECT_ID.TYPEAHEAD_EMOJI,
                            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                            eventType: EVENT_TYPE.UI,
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
                    analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.open', {});
                }
                if (query.charAt(query.length - 1) === ' ') {
                    analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.space', {});
                }
                var pluginState = getEmojiPluginState(state);
                var emojis = !prevActive && queryChanged ? [] : pluginState.emojis || [];
                if (queryChanged && pluginState.emojiProvider) {
                    pluginState.emojiProvider.filter(query ? ":" + query : '', {
                        limit: defaultListLimit,
                        skinTone: pluginState.emojiProvider.getSelectedTone(),
                        sort: !query.length
                            ? SearchSort.UsageFrequency
                            : SearchSort.Default,
                    });
                }
                return emojis.map(function (emoji) { return ({
                    title: emoji.shortName || '',
                    key: emoji.id || emoji.shortName,
                    render: function (_a) {
                        var isSelected = _a.isSelected, onClick = _a.onClick, onHover = _a.onHover;
                        return (
                        // It's required to pass emojiProvider through the context for custom emojis to work
                        React.createElement(EmojiContextProvider, { emojiProvider: pluginState.emojiProvider },
                            React.createElement(EmojiTypeAheadItem, { emoji: emoji, selected: isSelected, onMouseMove: onHover, onSelection: onClick })));
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
                var emojiPluginState = emojiPluginKey.getState(state);
                var typeAheadPluginState = typeAheadPluginKey.getState(state);
                var pickerElapsedTime = typeAheadPluginState.queryStarted
                    ? Date.now() - typeAheadPluginState.queryStarted
                    : 0;
                if (emojiPluginState.emojiProvider &&
                    emojiPluginState.emojiProvider.recordSelection &&
                    item.emoji) {
                    emojiPluginState.emojiProvider.recordSelection(item.emoji);
                }
                analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.select', {
                    mode: mode,
                    duration: pickerElapsedTime,
                    emojiId: id,
                    type: type,
                    queryLength: (typeAheadPluginState.query || '').length,
                });
                return addAnalytics(state, insert(state.schema.nodes.emoji.createChecked({
                    shortName: shortName,
                    id: id,
                    text: text,
                })), {
                    action: ACTION.INSERTED,
                    actionSubject: ACTION_SUBJECT.DOCUMENT,
                    actionSubjectId: ACTION_SUBJECT_ID.EMOJI,
                    attributes: { inputMethod: INPUT_METHOD.TYPEAHEAD },
                    eventType: EVENT_TYPE.TRACK,
                });
            },
            dismiss: function () {
                analyticsService.trackEvent('atlassian.fabric.emoji.typeahead.close', {});
            },
        },
    },
}); };
export default emojiPlugin;
/**
 * Actions
 */
export var ACTIONS = {
    SET_PROVIDER: 'SET_PROVIDER',
    SET_RESULTS: 'SET_RESULTS',
};
export var setProvider = function (provider) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(emojiPluginKey, {
            action: ACTIONS.SET_PROVIDER,
            params: { provider: provider },
        }));
    }
    return true;
}; };
export var setResults = function (results) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(emojiPluginKey, {
            action: ACTIONS.SET_RESULTS,
            params: { results: results },
        }));
    }
    return true;
}; };
export var emojiPluginKey = new PluginKey('emojiPlugin');
export function getEmojiPluginState(state) {
    return (emojiPluginKey.getState(state) || {});
}
export function emojiPluginFactory(dispatch, providerFactory, portalProviderAPI, options) {
    var emojiProvider;
    var emojiProviderChangeHandler;
    return new Plugin({
        key: emojiPluginKey,
        state: {
            init: function () {
                return {};
            },
            apply: function (tr, pluginState) {
                var _a = tr.getMeta(emojiPluginKey) || {
                    action: null,
                    params: null,
                }, action = _a.action, params = _a.params;
                var newPluginState = pluginState;
                switch (action) {
                    case ACTIONS.SET_PROVIDER:
                        newPluginState = __assign(__assign({}, pluginState), { emojiProvider: params.provider });
                        dispatch(emojiPluginKey, newPluginState);
                        return newPluginState;
                    case ACTIONS.SET_RESULTS:
                        newPluginState = __assign(__assign({}, pluginState), { emojis: params.results.emojis });
                        dispatch(emojiPluginKey, newPluginState);
                        return newPluginState;
                }
                return newPluginState;
            },
        },
        props: {
            nodeViews: {
                emoji: emojiNodeView(portalProviderAPI, providerFactory, options),
            },
        },
        view: function (editorView) {
            var providerHandler = function (name, providerPromise) {
                switch (name) {
                    case 'emojiProvider':
                        if (!providerPromise) {
                            return setProvider(undefined)(editorView.state, editorView.dispatch);
                        }
                        providerPromise
                            .then(function (provider) {
                            if (emojiProvider && emojiProviderChangeHandler) {
                                emojiProvider.unsubscribe(emojiProviderChangeHandler);
                            }
                            emojiProvider = provider;
                            setProvider(provider)(editorView.state, editorView.dispatch);
                            emojiProviderChangeHandler = {
                                result: function (emojis) {
                                    // Emoji provider is synchronous and
                                    // we need to make it async here to make PM happy
                                    Promise.resolve().then(function () {
                                        setResults(emojis)(editorView.state, editorView.dispatch);
                                    });
                                },
                            };
                            provider.subscribe(emojiProviderChangeHandler);
                        })
                            .catch(function () {
                            return setProvider(undefined)(editorView.state, editorView.dispatch);
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
//# sourceMappingURL=index.js.map