"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_commands_1 = require("prosemirror-commands");
var prosemirror_state_1 = require("prosemirror-state");
var utils_1 = require("../../../utils");
var utils_2 = require("../utils");
var text_formatting_1 = require("../commands/text-formatting");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var commands = tslib_1.__importStar(require("../commands/text-formatting"));
exports.pluginKey = new prosemirror_state_1.PluginKey('textFormatting');
var getTextFormattingState = function (editorState) {
    var _a = editorState.schema.marks, em = _a.em, code = _a.code, strike = _a.strike, strong = _a.strong, subsup = _a.subsup, underline = _a.underline;
    var state = {};
    if (code) {
        state.codeActive = utils_2.anyMarkActive(editorState, code.create());
        state.codeDisabled = !prosemirror_commands_1.toggleMark(code)(editorState);
    }
    if (em) {
        state.emActive = utils_2.anyMarkActive(editorState, em);
        state.emDisabled = state.codeActive ? true : !prosemirror_commands_1.toggleMark(em)(editorState);
    }
    if (strike) {
        state.strikeActive = utils_2.anyMarkActive(editorState, strike);
        state.strikeDisabled = state.codeActive
            ? true
            : !prosemirror_commands_1.toggleMark(strike)(editorState);
    }
    if (strong) {
        state.strongActive = utils_2.anyMarkActive(editorState, strong);
        state.strongDisabled = state.codeActive
            ? true
            : !prosemirror_commands_1.toggleMark(strong)(editorState);
    }
    if (subsup) {
        var subMark = subsup.create({ type: 'sub' });
        var supMark = subsup.create({ type: 'sup' });
        state.subscriptActive = utils_2.anyMarkActive(editorState, subMark);
        state.subscriptDisabled = state.codeActive
            ? true
            : !prosemirror_commands_1.toggleMark(subsup, { type: 'sub' })(editorState);
        state.superscriptActive = utils_2.anyMarkActive(editorState, supMark);
        state.superscriptDisabled = state.codeActive
            ? true
            : !prosemirror_commands_1.toggleMark(subsup, { type: 'sup' })(editorState);
    }
    if (underline) {
        state.underlineActive = utils_2.anyMarkActive(editorState, underline);
        state.underlineDisabled = state.codeActive
            ? true
            : !prosemirror_commands_1.toggleMark(underline)(editorState);
    }
    return state;
};
exports.plugin = function (dispatch) {
    return new prosemirror_state_1.Plugin({
        state: {
            init: function (_config, state) {
                return getTextFormattingState(state);
            },
            apply: function (_tr, pluginState, _oldState, newState) {
                var state = getTextFormattingState(newState);
                if (!utils_1.shallowEqual(pluginState, state)) {
                    dispatch(exports.pluginKey, state);
                    return state;
                }
                return pluginState;
            },
        },
        key: exports.pluginKey,
        props: {
            handleKeyDown: function (view, event) {
                var state = view.state, dispatch = view.dispatch;
                if (event.key === keymaps.moveRight.common) {
                    return commands.moveRight()(state, dispatch);
                }
                else if (event.key === keymaps.moveLeft.common) {
                    return commands.moveLeft()(state, dispatch);
                }
                return false;
            },
            handleTextInput: function (view, from, to, text) {
                var state = view.state, dispatch = view.dispatch;
                return text_formatting_1.createInlineCodeFromTextInputWithAnalytics(from, to, text)(state, dispatch);
            },
        },
    });
};
//# sourceMappingURL=main.js.map