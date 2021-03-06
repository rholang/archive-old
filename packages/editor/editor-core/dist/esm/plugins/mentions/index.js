import { __assign } from "tslib";
import * as React from 'react';
import uuid from 'uuid';
import { Fragment } from 'prosemirror-model';
import { Plugin, PluginKey } from 'prosemirror-state';
import { isSpecialMention, isResolvingMentionProvider, ELEMENTS_CHANNEL, } from '@atlaskit/mention/resource';
import { TeamMentionHighlight, TeamMentionHighlightController, } from '@atlaskit/mention/spotlight';
import { MentionItem } from '@atlaskit/mention/item';
import { mention } from '@atlaskit/adf-schema';
import { analyticsService } from '../../analytics';
import WithPluginState from '../../ui/WithPluginState';
import { pluginKey as typeAheadPluginKey, createInitialPluginState, } from '../type-ahead/pm-plugins/main';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import ToolbarMention from './ui/ToolbarMention';
import mentionNodeView from './nodeviews/mention';
import { buildTypeAheadInsertedPayload, buildTypeAheadCancelPayload, buildTypeAheadRenderedPayload, } from './analytics';
import { addAnalytics, analyticsPluginKey, analyticsEventKey, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT_ID, } from '../analytics';
import { isTeamStats, isTeamType } from './utils';
import { IconMention } from '../quick-insert/assets';
var mentionsPlugin = function (options) {
    var sessionId = uuid();
    var fireEvent = function (payload) {
        if (options && options.createAnalyticsEvent) {
            if (payload.attributes && !payload.attributes.sessionId) {
                payload.attributes.sessionId = sessionId;
            }
            options.createAnalyticsEvent(payload).fire(ELEMENTS_CHANNEL);
        }
    };
    return {
        name: 'mention',
        nodes: function () {
            return [{ name: 'mention', node: mention }];
        },
        pmPlugins: function () {
            return [
                {
                    name: 'mention',
                    plugin: function (_a) {
                        var providerFactory = _a.providerFactory, dispatch = _a.dispatch, portalProviderAPI = _a.portalProviderAPI;
                        return mentionPluginFactory(dispatch, providerFactory, portalProviderAPI, fireEvent, options);
                    },
                },
            ];
        },
        secondaryToolbarComponent: function (_a) {
            var editorView = _a.editorView, disabled = _a.disabled;
            return (React.createElement(WithPluginState, { editorView: editorView, plugins: {
                    typeAheadState: typeAheadPluginKey,
                    mentionState: mentionPluginKey,
                }, render: function (_a) {
                    var _b = _a.typeAheadState, typeAheadState = _b === void 0 ? createInitialPluginState() : _b, _c = _a.mentionState, mentionState = _c === void 0 ? {} : _c;
                    return !mentionState.mentionProvider ? null : (React.createElement(ToolbarMention, { editorView: editorView, isDisabled: disabled || !typeAheadState.isAllowed }));
                } }));
        },
        pluginsOptions: {
            quickInsert: function (_a) {
                var formatMessage = _a.formatMessage;
                return [
                    {
                        title: formatMessage(messages.mention),
                        description: formatMessage(messages.mentionDescription),
                        priority: 400,
                        keyshortcut: '@',
                        icon: function () { return React.createElement(IconMention, { label: formatMessage(messages.mention) }); },
                        action: function (insert, state) {
                            var mark = state.schema.mark('typeAheadQuery', {
                                trigger: '@',
                            });
                            var mentionText = state.schema.text('@', [mark]);
                            var tr = insert(mentionText);
                            return addAnalytics(state, tr, {
                                action: ACTION.INVOKED,
                                actionSubject: ACTION_SUBJECT.TYPEAHEAD,
                                actionSubjectId: ACTION_SUBJECT_ID.TYPEAHEAD_MENTION,
                                attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                                eventType: EVENT_TYPE.UI,
                            });
                        },
                    },
                ];
            },
            typeAhead: {
                trigger: '@',
                // Custom regex must have a capture group around trigger
                // so it's possible to use it without needing to scan through all triggers again
                customRegex: '\\(?(@)',
                getHighlight: function (state) {
                    var pluginState = getMentionPluginState(state);
                    var provider = pluginState.mentionProvider;
                    if (provider) {
                        var teamMentionProvider = provider;
                        if (isTeamMentionProvider(teamMentionProvider) &&
                            teamMentionProvider.mentionTypeaheadHighlightEnabled()) {
                            return (React.createElement(TeamMentionHighlight, { createTeamLink: teamMentionProvider.mentionTypeaheadCreateTeamPath(), onClose: function () {
                                    return TeamMentionHighlightController.registerClosed();
                                } }));
                        }
                    }
                    return null;
                },
                getItems: function (query, state, _intl, _a, tr, dispatch) {
                    var prevActive = _a.prevActive, queryChanged = _a.queryChanged;
                    if (!prevActive && queryChanged) {
                        analyticsService.trackEvent('atlassian.fabric.mention.picker.trigger.shortcut');
                        if (!tr.getMeta(analyticsPluginKey)) {
                            dispatch(analyticsEventKey, {
                                payload: {
                                    action: ACTION.INVOKED,
                                    actionSubject: ACTION_SUBJECT.TYPEAHEAD,
                                    actionSubjectId: ACTION_SUBJECT_ID.TYPEAHEAD_MENTION,
                                    attributes: { inputMethod: INPUT_METHOD.KEYBOARD },
                                    eventType: EVENT_TYPE.UI,
                                },
                            });
                        }
                    }
                    var pluginState = getMentionPluginState(state);
                    var mentions = !prevActive && queryChanged ? [] : pluginState.mentions || [];
                    var mentionContext = __assign(__assign({}, pluginState.contextIdentifierProvider), { sessionId: sessionId });
                    if (queryChanged && pluginState.mentionProvider) {
                        pluginState.mentionProvider.filter(query || '', mentionContext);
                    }
                    return mentions.map(function (mention) { return ({
                        title: mention.id,
                        render: function (_a) {
                            var isSelected = _a.isSelected, onClick = _a.onClick, onHover = _a.onHover;
                            return (React.createElement(MentionItem, { mention: mention, selected: isSelected, onMouseEnter: onHover, onSelection: onClick }));
                        },
                        mention: mention,
                    }); });
                },
                selectItem: function (state, item, insert, _a) {
                    var mode = _a.mode;
                    var sanitizePrivateContent = options && options.sanitizePrivateContent;
                    var mentionInsertDisplayName = options && options.mentionInsertDisplayName;
                    var schema = state.schema;
                    var pluginState = getMentionPluginState(state);
                    var mentionProvider = pluginState.mentionProvider;
                    var _b = item.mention, id = _b.id, name = _b.name, nickname = _b.nickname, accessLevel = _b.accessLevel, userType = _b.userType;
                    var trimmedNickname = nickname && nickname.startsWith('@') ? nickname.slice(1) : nickname;
                    var renderName = mentionInsertDisplayName || !trimmedNickname
                        ? name
                        : trimmedNickname;
                    var typeAheadPluginState = typeAheadPluginKey.getState(state);
                    var mentionContext = __assign(__assign({}, pluginState.contextIdentifierProvider), { sessionId: sessionId });
                    if (mentionProvider) {
                        mentionProvider.recordMentionSelection(item.mention, mentionContext);
                    }
                    var pickerElapsedTime = typeAheadPluginState.queryStarted
                        ? Date.now() - typeAheadPluginState.queryStarted
                        : 0;
                    analyticsService.trackEvent('atlassian.fabric.mention.picker.insert', __assign({ mode: mode, isSpecial: isSpecialMention(item.mention) || false, accessLevel: accessLevel || '', mentionee: id, duration: pickerElapsedTime, queryLength: (typeAheadPluginState.query || '').length }, pluginState.contextIdentifierProvider));
                    fireEvent(buildTypeAheadInsertedPayload(pickerElapsedTime, typeAheadPluginState.upKeyCount, typeAheadPluginState.downKeyCount, sessionId, mode, item.mention, pluginState.mentions, typeAheadPluginState.query || ''));
                    sessionId = uuid();
                    if (mentionProvider && isTeamType(userType)) {
                        TeamMentionHighlightController.registerTeamMention();
                        return insert(buildNodesForTeamMention(schema, item.mention, mentionProvider, sanitizePrivateContent));
                    }
                    // Don't insert into document if document data is sanitized.
                    var text = sanitizePrivateContent ? '' : "@" + renderName;
                    if (sanitizePrivateContent &&
                        isResolvingMentionProvider(mentionProvider)) {
                        // Cache (locally) for later rendering
                        mentionProvider.cacheMentionName(id, renderName);
                    }
                    return insert(schema.nodes.mention.createChecked({
                        text: text,
                        id: id,
                        accessLevel: accessLevel,
                        userType: userType === 'DEFAULT' ? null : userType,
                    }));
                },
                dismiss: function (state) {
                    var typeAheadPluginState = typeAheadPluginKey.getState(state);
                    var pickerElapsedTime = typeAheadPluginState.queryStarted
                        ? Date.now() - typeAheadPluginState.queryStarted
                        : 0;
                    fireEvent(buildTypeAheadCancelPayload(pickerElapsedTime, typeAheadPluginState.upKeyCount, typeAheadPluginState.downKeyCount, sessionId, typeAheadPluginState.query || ''));
                    sessionId = uuid();
                },
            },
        },
    };
};
export default mentionsPlugin;
/**
 * Actions
 */
export var ACTIONS = {
    SET_PROVIDER: 'SET_PROVIDER',
    SET_RESULTS: 'SET_RESULTS',
    SET_CONTEXT: 'SET_CONTEXT',
};
export var setProvider = function (provider) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(mentionPluginKey, {
            action: ACTIONS.SET_PROVIDER,
            params: { provider: provider },
        }));
    }
    return true;
}; };
export var setResults = function (results) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(mentionPluginKey, {
            action: ACTIONS.SET_RESULTS,
            params: { results: results },
        }));
    }
    return true;
}; };
export var setContext = function (context) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(mentionPluginKey, {
            action: ACTIONS.SET_CONTEXT,
            params: { context: context },
        }));
    }
    return true;
}; };
/**
 *
 * ProseMirror Plugin
 *
 */
export var mentionPluginKey = new PluginKey('mentionPlugin');
export function getMentionPluginState(state) {
    return mentionPluginKey.getState(state);
}
function mentionPluginFactory(dispatch, providerFactory, portalProviderAPI, fireEvent, options) {
    var mentionProvider;
    return new Plugin({
        key: mentionPluginKey,
        state: {
            init: function () {
                return {};
            },
            apply: function (tr, pluginState) {
                var _a = tr.getMeta(mentionPluginKey) || {
                    action: null,
                    params: null,
                }, action = _a.action, params = _a.params;
                var newPluginState = pluginState;
                switch (action) {
                    case ACTIONS.SET_PROVIDER:
                        newPluginState = __assign(__assign({}, pluginState), { mentionProvider: params.provider });
                        dispatch(mentionPluginKey, newPluginState);
                        return newPluginState;
                    case ACTIONS.SET_RESULTS:
                        newPluginState = __assign(__assign({}, pluginState), { mentions: params.results });
                        dispatch(mentionPluginKey, newPluginState);
                        return newPluginState;
                    case ACTIONS.SET_CONTEXT:
                        newPluginState = __assign(__assign({}, pluginState), { contextIdentifierProvider: params.context });
                        dispatch(mentionPluginKey, newPluginState);
                        return newPluginState;
                }
                return newPluginState;
            },
        },
        props: {
            nodeViews: {
                mention: mentionNodeView(portalProviderAPI, providerFactory, options),
            },
        },
        view: function (editorView) {
            var providerHandler = function (name, providerPromise) {
                switch (name) {
                    case 'mentionProvider':
                        if (!providerPromise) {
                            return setProvider(undefined)(editorView.state, editorView.dispatch);
                        }
                        providerPromise
                            .then(function (provider) {
                            if (mentionProvider) {
                                mentionProvider.unsubscribe('mentionPlugin');
                            }
                            mentionProvider = provider;
                            setProvider(provider)(editorView.state, editorView.dispatch);
                            provider.subscribe('mentionPlugin', function (mentions, query, stats) {
                                setResults(mentions)(editorView.state, editorView.dispatch);
                                var duration = 0;
                                var userIds = null;
                                var teams = null;
                                if (!isTeamStats(stats)) {
                                    // is from user mention
                                    duration = stats && stats.duration;
                                    teams = null;
                                    userIds = mentions
                                        .map(function (mention) {
                                        return isTeamType(mention.userType) ? null : mention.id;
                                    })
                                        .filter(function (m) { return !!m; });
                                }
                                else {
                                    // is from team mention
                                    duration = stats && stats.teamMentionDuration;
                                    userIds = null;
                                    teams = mentions
                                        .map(function (mention) {
                                        return isTeamType(mention.userType)
                                            ? {
                                                teamId: mention.id,
                                                includesYou: mention.context.includesYou,
                                                memberCount: mention.context.memberCount,
                                            }
                                            : null;
                                    })
                                        .filter(function (m) { return !!m; });
                                }
                                var payload = buildTypeAheadRenderedPayload(duration, userIds, query || '', teams);
                                fireEvent(payload);
                            });
                        })
                            .catch(function () {
                            return setProvider(undefined)(editorView.state, editorView.dispatch);
                        });
                        break;
                    case 'contextIdentifierProvider':
                        if (!providerPromise) {
                            return setContext(undefined)(editorView.state, editorView.dispatch);
                        }
                        providerPromise.then(function (provider) {
                            setContext(provider)(editorView.state, editorView.dispatch);
                        });
                        break;
                }
                return;
            };
            providerFactory.subscribe('mentionProvider', providerHandler);
            providerFactory.subscribe('contextIdentifierProvider', providerHandler);
            return {
                destroy: function () {
                    if (providerFactory) {
                        providerFactory.unsubscribe('mentionProvider', providerHandler);
                        providerFactory.unsubscribe('contextIdentifierProvider', providerHandler);
                    }
                    if (mentionProvider) {
                        mentionProvider.unsubscribe('mentionPlugin');
                    }
                },
            };
        },
    });
}
/**
 * When a team mention is selected, we render a team link and list of member/user mentions
 * in editor content
 */
function buildNodesForTeamMention(schema, selectedMention, mentionProvider, sanitizePrivateContent) {
    var nodes = schema.nodes, marks = schema.marks;
    var name = selectedMention.name, teamId = selectedMention.id, accessLevel = selectedMention.accessLevel, context = selectedMention.context;
    // build team link
    var defaultTeamLink = window.location.origin + "/people/team/" + teamId;
    var teamLink = context && context.teamLink ? context.teamLink : defaultTeamLink;
    var teamLinkNode = schema.text(name, [
        marks.link.create({ href: teamLink }),
    ]);
    var openBracketText = schema.text('(');
    var closeBracketText = schema.text(')');
    var emptySpaceText = schema.text(' ');
    var inlineNodes = [teamLinkNode, emptySpaceText, openBracketText];
    var members = context && context.members ? context.members : [];
    members.forEach(function (member, index) {
        var name = member.name, id = member.id;
        var mentionName = "@" + name;
        var text = sanitizePrivateContent ? '' : mentionName;
        if (sanitizePrivateContent && isResolvingMentionProvider(mentionProvider)) {
            mentionProvider.cacheMentionName(id, name);
        }
        var userMentionNode = nodes.mention.createChecked({
            text: text,
            id: member.id,
            accessLevel: accessLevel,
            userType: 'DEFAULT',
        });
        inlineNodes.push(userMentionNode);
        // should not add empty space after the last user mention.
        if (index !== members.length - 1) {
            inlineNodes.push(emptySpaceText);
        }
    });
    inlineNodes.push(closeBracketText);
    return Fragment.fromArray(inlineNodes);
}
var isTeamMentionProvider = function (p) {
    return !!(p.mentionTypeaheadHighlightEnabled &&
        p.mentionTypeaheadCreateTeamPath);
};
//# sourceMappingURL=index.js.map