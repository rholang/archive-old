"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_commands_1 = require("prosemirror-commands");
var prosemirror_history_1 = require("prosemirror-history");
var adf_schema_1 = require("@atlaskit/adf-schema");
var filter_steps_1 = tslib_1.__importDefault(require("./pm-plugins/filter-steps"));
var focus_handler_1 = tslib_1.__importDefault(require("./pm-plugins/focus-handler"));
var newline_preserve_marks_1 = tslib_1.__importDefault(require("./pm-plugins/newline-preserve-marks"));
var inline_cursor_target_1 = tslib_1.__importDefault(require("./pm-plugins/inline-cursor-target"));
var react_nodeview_1 = require("./pm-plugins/react-nodeview");
var decoration_1 = tslib_1.__importDefault(require("./pm-plugins/decoration"));
var scroll_gutter_1 = tslib_1.__importDefault(require("./pm-plugins/scroll-gutter"));
var keymap_1 = require("../../utils/keymap");
var frozen_editor_1 = tslib_1.__importDefault(require("./pm-plugins/frozen-editor"));
var basePlugin = function (options) { return ({
    name: 'base',
    pmPlugins: function () {
        var plugins = [
            {
                name: 'filterStepsPlugin',
                plugin: function () { return filter_steps_1.default(); },
            },
            {
                name: 'inlineCursorTargetPlugin',
                plugin: function () {
                    return options && options.allowInlineCursorTarget
                        ? inline_cursor_target_1.default()
                        : undefined;
                },
            },
            {
                name: 'focusHandlerPlugin',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return focus_handler_1.default(dispatch);
                },
            },
            {
                name: 'newlinePreserveMarksPlugin',
                plugin: newline_preserve_marks_1.default,
            },
            { name: 'reactNodeView', plugin: function () { return react_nodeview_1.plugin; } },
            {
                name: 'frozenEditor',
                plugin: function (_a) {
                    var dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
                    return options && options.addRunTimePerformanceCheck
                        ? frozen_editor_1.default(dispatchAnalyticsEvent)
                        : undefined;
                },
            },
            { name: 'decorationPlugin', plugin: function () { return decoration_1.default(); } },
            { name: 'history', plugin: function () { return prosemirror_history_1.history(); } },
            // should be last :(
            {
                name: 'codeBlockIndent',
                plugin: function () {
                    return keymap_1.keymap(tslib_1.__assign(tslib_1.__assign({}, prosemirror_commands_1.baseKeymap), { 'Mod-[': function () { return true; }, 'Mod-]': function () { return true; } }));
                },
            },
        ];
        if (options && options.allowScrollGutter) {
            plugins.push({
                name: 'scrollGutterPlugin',
                plugin: function () { return scroll_gutter_1.default(options.allowScrollGutter); },
            });
        }
        return plugins;
    },
    nodes: function () {
        return [
            { name: 'doc', node: adf_schema_1.doc },
            { name: 'paragraph', node: adf_schema_1.paragraph },
            { name: 'text', node: adf_schema_1.text },
        ];
    },
}); };
exports.default = basePlugin;
//# sourceMappingURL=index.js.map