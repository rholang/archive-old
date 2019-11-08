"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var reducers_1 = tslib_1.__importDefault(require("./reducers"));
var input_rules_1 = require("./input-rules");
var doc_1 = require("./doc");
var utils_1 = require("./utils");
exports.createPMPlugin = function (_a) {
    var providerFactory = _a.providerFactory;
    var rules = [];
    return new prosemirror_state_1.Plugin({
        state: {
            init: function () {
                return {
                    resolving: [],
                    matches: [],
                };
            },
            apply: function (tr, prevPluginState) {
                if (!prevPluginState) {
                    return prevPluginState;
                }
                // remap positions
                var remappedPluginState = tslib_1.__assign(tslib_1.__assign({}, prevPluginState), { resolving: prevPluginState.resolving.map(function (candidate) { return (tslib_1.__assign(tslib_1.__assign({}, candidate), { start: tr.mapping.map(candidate.start), end: tr.mapping.map(candidate.end, -1) })); }) });
                var meta = tr.getMeta(utils_1.pluginKey);
                if (!meta) {
                    return remappedPluginState;
                }
                return reducers_1.default(remappedPluginState, meta);
            },
        },
        props: {
            handleTextInput: function (view, from, to, text) {
                input_rules_1.triggerInputRule(view, rules, from, to, text);
                return false;
            },
            handleKeyDown: prosemirror_keymap_1.keydownHandler({
                Enter: function (_state, _dispatch, view) {
                    input_rules_1.triggerInputRule(view, rules, view.state.selection.from, view.state.selection.to, '');
                    return false;
                },
            }),
        },
        view: function () {
            var _this = this;
            var handleProvider = function (name, provider) {
                if (name !== 'autoformattingProvider' || !provider) {
                    return;
                }
                provider.then(function (autoformattingProvider) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var ruleset;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, autoformattingProvider.getRules()];
                            case 1:
                                ruleset = _a.sent();
                                Object.keys(ruleset).forEach(function (rule) {
                                    var inputRule = {
                                        matchTyping: new RegExp('(\\s+|^)' + rule + '(\\s)$'),
                                        matchEnter: new RegExp('(\\s+|^)' + rule + '()$'),
                                        handler: doc_1.buildHandler(rule, ruleset[rule]),
                                    };
                                    rules.push(inputRule);
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            };
            providerFactory.subscribe('autoformattingProvider', handleProvider);
            return {
                update: function (view) {
                    var currentState = utils_1.getPluginState(view.state);
                    if (!currentState) {
                        return;
                    }
                    // make replacements in document for finished autoformats
                    if (currentState.matches) {
                        doc_1.completeReplacements(view, currentState);
                    }
                },
                destroy: function () {
                    providerFactory.unsubscribe('autoformattingProvider', handleProvider);
                },
            };
        },
        key: utils_1.pluginKey,
    });
};
var customAutoformatPlugin = function () { return ({
    name: 'customAutoformat',
    pmPlugins: function () {
        return [{ name: 'customAutoformat', plugin: exports.createPMPlugin }];
    },
}); };
exports.default = customAutoformatPlugin;
//# sourceMappingURL=index.js.map