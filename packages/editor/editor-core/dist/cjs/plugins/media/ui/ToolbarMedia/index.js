"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var attachment_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/attachment"));
var analytics_1 = require("../../../../analytics");
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../../ui/ToolbarButton"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../../../ui/WithPluginState"));
var onClickMediaButton = function (pluginState) {
    return analytics_1.withAnalytics('atlassian.editor.media.button', function () {
        pluginState.showMediaPicker();
        return true;
    });
};
var ToolbarMedia = function (_a) {
    var editorView = _a.editorView, eventDispatcher = _a.eventDispatcher, pluginKey = _a.pluginKey, isDisabled = _a.isDisabled, isReducedSpacing = _a.isReducedSpacing;
    return (React.createElement(WithPluginState_1.default, { editorView: editorView, eventDispatcher: eventDispatcher, plugins: {
            mediaPlugin: pluginKey,
        }, render: function (_a) {
            var mediaPlugin = _a.mediaPlugin;
            if (!mediaPlugin.allowsUploads) {
                return null;
            }
            return (React.createElement(ToolbarButton_1.default, { onClick: onClickMediaButton(mediaPlugin), disabled: isDisabled, title: "Files & images", spacing: isReducedSpacing ? 'none' : 'default', iconBefore: React.createElement(attachment_1.default, { label: "Files & images" }) }));
        } }));
};
exports.default = ToolbarMedia;
//# sourceMappingURL=index.js.map