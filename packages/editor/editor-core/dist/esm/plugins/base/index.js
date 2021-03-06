import { __assign } from "tslib";
import { baseKeymap } from 'prosemirror-commands';
import { history } from 'prosemirror-history';
import { doc, paragraph, text } from '@atlaskit/adf-schema';
import filterStepsPlugin from './pm-plugins/filter-steps';
import focusHandlerPlugin from './pm-plugins/focus-handler';
import newlinePreserveMarksPlugin from './pm-plugins/newline-preserve-marks';
import inlineCursorTargetPlugin from './pm-plugins/inline-cursor-target';
import { plugin as reactNodeView } from './pm-plugins/react-nodeview';
import decorationPlugin from './pm-plugins/decoration';
import scrollGutter from './pm-plugins/scroll-gutter';
import { keymap } from '../../utils/keymap';
import frozenEditor from './pm-plugins/frozen-editor';
var basePlugin = function (options) { return ({
    name: 'base',
    pmPlugins: function () {
        var plugins = [
            {
                name: 'filterStepsPlugin',
                plugin: function () { return filterStepsPlugin(); },
            },
            {
                name: 'inlineCursorTargetPlugin',
                plugin: function () {
                    return options && options.allowInlineCursorTarget
                        ? inlineCursorTargetPlugin()
                        : undefined;
                },
            },
            {
                name: 'focusHandlerPlugin',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return focusHandlerPlugin(dispatch);
                },
            },
            {
                name: 'newlinePreserveMarksPlugin',
                plugin: newlinePreserveMarksPlugin,
            },
            { name: 'reactNodeView', plugin: function () { return reactNodeView; } },
            {
                name: 'frozenEditor',
                plugin: function (_a) {
                    var dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
                    return options && options.addRunTimePerformanceCheck
                        ? frozenEditor(dispatchAnalyticsEvent)
                        : undefined;
                },
            },
            { name: 'decorationPlugin', plugin: function () { return decorationPlugin(); } },
            { name: 'history', plugin: function () { return history(); } },
            // should be last :(
            {
                name: 'codeBlockIndent',
                plugin: function () {
                    return keymap(__assign(__assign({}, baseKeymap), { 'Mod-[': function () { return true; }, 'Mod-]': function () { return true; } }));
                },
            },
        ];
        if (options && options.allowScrollGutter) {
            plugins.push({
                name: 'scrollGutterPlugin',
                plugin: function () { return scrollGutter(options.allowScrollGutter); },
            });
        }
        return plugins;
    },
    nodes: function () {
        return [
            { name: 'doc', node: doc },
            { name: 'paragraph', node: paragraph },
            { name: 'text', node: text },
        ];
    },
}); };
export default basePlugin;
//# sourceMappingURL=index.js.map