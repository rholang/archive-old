"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var uuid_1 = tslib_1.__importDefault(require("uuid"));
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var resource_1 = require("@atlaskit/mention/resource");
var spotlight_1 = require("@atlaskit/mention/spotlight");
var item_1 = require("@atlaskit/mention/item");
var adf_schema_1 = require("@atlaskit/adf-schema");
var analytics_1 = require("../../analytics");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var main_1 = require("../type-ahead/pm-plugins/main");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var ToolbarMention_1 = tslib_1.__importDefault(require("./ui/ToolbarMention"));
var mention_1 = tslib_1.__importDefault(require("./nodeviews/mention"));
var analytics_2 = require("./analytics");
var analytics_3 = require("../analytics");
var utils_1 = require("./utils");
var assets_1 = require("../quick-insert/assets");
var mentionsPlugin = function (options) {
    var sessionId = uuid_1.default();
    var fireEvent = function (payload) {
        if (options && options.createAnalyticsEvent) {
            if (payload.attributes && !payload.attributes.sessionId) {
                payload.attributes.sessionId = sessionId;
            }
            options.createAnalyticsEvent(payload).fire(resource_1.ELEMENTS_CHANNEL);
        }
    };
    return {
        name: 'mention',
        nodes: function () {
            return [{ name: 'mention', node: adf_schema_1.mention }];
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
            return (React.createElement(WithPluginState_1.default, { editorView: editorView, plugins: {
                    typeAheadState: main_1.pluginKey,
                    mentionState: exports.mentionPluginKey,
                }, render: function (_a) {
                    var _b = _a.typeAheadState, typeAheadState = _b === void 0 ? main_1.createInitialPluginState() : _b, _c = _a.mentionState, mentionState = _c === void 0 ? {} : _c;
                    return !mentionState.mentionProvider ? null : (React.createElement(ToolbarMention_1.default, { editorView: editorView, isDisabled: disabled || !typeAheadState.isAllowed }));
                } }));
        },
        pluginsOptions: {
            quickInsert: function (_a) {
                var formatMessage = _a.formatMessage;
                return [
                    {
                        title: formatMessage(ToolbarInsertBlock_1.messages.mention),
                        description: formatMessage(ToolbarInsertBlock_1.messages.mentionDescription),
                        priority: 400,
                        keyshortcut: '@',
                        icon: function () { return React.createElement(assets_1.IconMention, { label: formatMessage(ToolbarInsertBlock_1.messages.mention) }); },
                        action: function (insert, state) {
                            var mark = state.schema.mark('typeAheadQuery', {
                                trigger: '@',
                            });
                            var mentionText = state.schema.text('@', [mark]);
                            var tr = insert(mentionText);
                            return analytics_3.addAnalytics(state, tr, {
                                action: analytics_3.ACTION.INVOKED,
                                actionSubject: analytics_3.ACTION_SUBJECT.TYPEAHEAD,
                                actionSubjectId: analytics_3.ACTION_SUBJECT_ID.TYPEAHEAD_MENTION,
                                attributes: { inputMethod: analytics_3.INPUT_METHOD.QUICK_INSERT },
                                eventType: analytics_3.EVENT_TYPE.UI,
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
                            return (React.createElement(spotlight_1.TeamMentionHighlight, { createTeamLink: teamMentionProvider.mentionTypeaheadCreateTeamPath(), onClose: function () {
                                    return spotlight_1.TeamMentionHighlightController.registerClosed();
                                } }));
                        }
                    }
                    return null;
                },
                getItems: function (query, state, _intl, _a, tr, dispatch) {
                    var prevActive = _a.prevActive, queryChanged = _a.queryChanged;
                    if (!prevActive && queryChanged) {
                        analytics_1.analyticsService.trackEvent('atlassian.fabric.mention.picker.trigger.shortcut');
                        if (!tr.getMeta(analytics_3.analyticsPluginKey)) {
                            dispatch(analytics_3.analyticsEventKey, {
                                payload: {
                                    action: analytics_3.ACTION.INVOKED,
                                    actionSubject: analytics_3.ACTION_SUBJECT.TYPEAHEAD,
                                    actionSubjectId: analytics_3.ACTION_SUBJECT_ID.TYPEAHEAD_MENTION,
                                    attributes: { inputMethod: analytics_3.INPUT_METHOD.KEYBOARD },
                                    eventType: analytics_3.EVENT_TYPE.UI,
                                },
                            });
                        }
                    }
                    var pluginState = getMentionPluginState(state);
                    var mentions = !prevActive && queryChanged ? [] : pluginState.mentions || [];
                    var mentionContext = tslib_1.__assign(tslib_1.__assign({}, pluginState.contextIdentifierProvider), { sessionId: sessionId });
                    if (queryChanged && pluginState.mentionProvider) {
                        pluginState.mentionProvider.filter(query || '', mentionContext);
                    }
                    return mentions.map(function (mention) { return ({
                        title: mention.id,
                        render: function (_a) {
                            var isSelected = _a.isSelected, onClick = _a.onClick, onHover = _a.onHover;
                            return (React.createElement(item_1.MentionItem, { mention: mention, selected: isSelected, onMouseEnter: onHover, onSelection: onClick }));
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
                    var typeAheadPluginState = main_1.pluginKey.getState(state);
                    var mentionContext = tslib_1.__assign(tslib_1.__assign({}, pluginState.contextIdentifierProvider), { sessionId: sessionId });
                    if (mentionProvider) {
                        mentionProvider.recordMentionSelection(item.mention, mentionContext);
                    }
                    var pickerElapsedTime = typeAheadPluginState.queryStarted
                        ? Date.now() - typeAheadPluginState.queryStarted
                        : 0;
                    analytics_1.analyticsService.trackEvent('atlassian.fabric.mention.picker.insert', tslib_1.__assign({ mode: mode, isSpecial: resource_1.isSpecialMention(item.mention) || false, accessLevel: accessLevel || '', mentionee: id, duration: pickerElapsedTime, queryLength: (typeAheadPluginState.query || '').length }, pluginState.contextIdentifierProvider));
                    fireEvent(analytics_2.buildTypeAheadInsertedPayload(pickerElapsedTime, typeAheadPluginState.upKeyCount, typeAheadPluginState.downKeyCount, sessionId, mode, item.mention, pluginState.mentions, typeAheadPluginState.query || ''));
                    sessionId = uuid_1.default();
                    if (mentionProvider && utils_1.isTeamType(userType)) {
                        spotlight_1.TeamMentionHighlightController.registerTeamMention();
                        return insert(buildNodesForTeamMention(schema, item.mention, mentionProvider, sanitizePrivateContent));
                    }
                    // Don't insert into document if document data is sanitized.
                    var text = sanitizePrivateContent ? '' : "@" + renderName;
                    if (sanitizePrivateContent &&
                        resource_1.isResolvingMentionProvider(mentionProvider)) {
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
                    var typeAheadPluginState = main_1.pluginKey.getState(state);
                    var pickerElapsedTime = typeAheadPluginState.queryStarted
                        ? Date.now() - typeAheadPluginState.queryStarted
                        : 0;
                    fireEvent(analytics_2.buildTypeAheadCancelPayload(pickerElapsedTime, typeAheadPluginState.upKeyCount, typeAheadPluginState.downKeyCount, sessionId, typeAheadPluginState.query || ''));
                    sessionId = uuid_1.default();
                },
            },
        },
    };
};
exports.default = mentionsPlugin;
/**
 * Actions
 */
exports.ACTIONS = {
    SET_PROVIDER: 'SET_PROVIDER',
    SET_RESULTS: 'SET_RESULTS',
    SET_CONTEXT: 'SET_CONTEXT',
};
exports.setProvider = function (provider) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(exports.mentionPluginKey, {
            action: exports.ACTIONS.SET_PROVIDER,
            params: { provider: provider },
        }));
    }
    return true;
}; };
exports.setResults = function (results) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(exports.mentionPluginKey, {
            action: exports.ACTIONS.SET_RESULTS,
            params: { results: results },
        }));
    }
    return true;
}; };
exports.setContext = function (context) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.setMeta(exports.mentionPluginKey, {
            action: exports.ACTIONS.SET_CONTEXT,
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
exports.mentionPluginKey = new prosemirror_state_1.PluginKey('mentionPlugin');
function getMentionPluginState(state) {
    return exports.mentionPluginKey.getState(state);
}
exports.getMentionPluginState = getMentionPluginState;
function mentionPluginFactory(dispatch, providerFactory, portalProviderAPI, fireEvent, options) {
    var mentionProvider;
    return new prosemirror_state_1.Plugin({
        key: exports.mentionPluginKey,
        state: {
            init: function () {
                return {};
            },
            apply: function (tr, pluginState) {
                var _a = tr.getMeta(exports.mentionPluginKey) || {
                    action: null,
                    params: null,
                }, action = _a.action, params = _a.params;
                var newPluginState = pluginState;
                switch (action) {
                    case exports.ACTIONS.SET_PROVIDER:
                        newPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { mentionProvider: params.provider });
                        dispatch(exports.mentionPluginKey, newPluginState);
                        return newPluginState;
                    case exports.ACTIONS.SET_RESULTS:
                        newPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { mentions: params.results });
                        dispatch(exports.mentionPluginKey, newPluginState);
                        return newPluginState;
                    case exports.ACTIONS.SET_CONTEXT:
                        newPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { contextIdentifierProvider: params.context });
                        dispatch(exports.mentionPluginKey, newPluginState);
                        return newPluginState;
                }
                return newPluginState;
            },
        },
        props: {
            nodeViews: {
                mention: mention_1.default(portalProviderAPI, providerFactory, options),
            },
        },
        view: function (editorView) {
            var providerHandler = function (name, providerPromise) {
                switch (name) {
                    case 'mentionProvider':
                        if (!providerPromise) {
                            return exports.setProvider(undefined)(editorView.state, editorView.dispatch);
                        }
                        providerPromise
                            .then(function (provider) {
                            if (mentionProvider) {
                                mentionProvider.unsubscribe('mentionPlugin');
                            }
                            mentionProvider = provider;
                            exports.setProvider(provider)(editorView.state, editorView.dispatch);
                            provider.subscribe('mentionPlugin', function (mentions, query, stats) {
                                exports.setResults(mentions)(editorView.state, editorView.dispatch);
                                var duration = 0;
                                var userIds = null;
                                var teams = null;
                                if (!utils_1.isTeamStats(stats)) {
                                    // is from user mention
                                    duration = stats && stats.duration;
                                    teams = null;
                                    userIds = mentions
                                        .map(function (mention) {
                                        return utils_1.isTeamType(mention.userType) ? null : mention.id;
                                    })
                                        .filter(function (m) { return !!m; });
                                }
                                else {
                                    // is from team mention
                                    duration = stats && stats.teamMentionDuration;
                                    userIds = null;
                                    teams = mentions
                                        .map(function (mention) {
                                        return utils_1.isTeamType(mention.userType)
                                            ? {
                                                teamId: mention.id,
                                                includesYou: mention.context.includesYou,
                                                memberCount: mention.context.memberCount,
                                            }
                                            : null;
                                    })
                                        .filter(function (m) { return !!m; });
                                }
                                var payload = analytics_2.buildTypeAheadRenderedPayload(duration, userIds, query || '', teams);
                                fireEvent(payload);
                            });
                        })
                            .catch(function () {
                            return exports.setProvider(undefined)(editorView.state, editorView.dispatch);
                        });
                        break;
                    case 'contextIdentifierProvider':
                        if (!providerPromise) {
                            return exports.setContext(undefined)(editorView.state, editorView.dispatch);
                        }
                        providerPromise.then(function (provider) {
                            exports.setContext(provider)(editorView.state, editorView.dispatch);
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
        if (sanitizePrivateContent && resource_1.isResolvingMentionProvider(mentionProvider)) {
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
    return prosemirror_model_1.Fragment.fromArray(inlineNodes);
}
var isTeamMentionProvider = function (p) {
    return !!(p.mentionTypeaheadHighlightEnabled &&
        p.mentionTypeaheadCreateTeamPath);
};
//# sourceMappingURL=index.js.map