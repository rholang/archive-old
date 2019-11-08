"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var main_1 = require("./pm-plugins/main");
var commands_1 = require("./commands");
var ToolbarAlignment_1 = tslib_1.__importDefault(require("./ui/ToolbarAlignment"));
exports.defaultConfig = {
    align: 'start',
};
var alignmentPlugin = function () { return ({
    name: 'alignment',
    marks: function () {
        return [{ name: 'alignment', mark: adf_schema_1.alignment }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'alignmentPlugin',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return main_1.createPlugin(dispatch, exports.defaultConfig);
                },
            },
        ];
    },
    primaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, disabled = _a.disabled, isToolbarReducedSpacing = _a.isToolbarReducedSpacing;
        return (React.createElement(WithPluginState_1.default, { plugins: {
                align: main_1.pluginKey,
            }, render: function (_a) {
                var align = _a.align;
                return (React.createElement(ToolbarAlignment_1.default, { pluginState: align, isReducedSpacing: isToolbarReducedSpacing, changeAlignment: function (align) {
                        return commands_1.changeAlignment(align)(editorView.state, editorView.dispatch);
                    }, disabled: disabled || !align.isEnabled, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement }));
            } }));
    },
}); };
exports.default = alignmentPlugin;
//# sourceMappingURL=index.js.map