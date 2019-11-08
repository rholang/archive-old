"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Editor_1 = require("./Editor");
var PluginSlot_1 = tslib_1.__importDefault(require("../../ui/PluginSlot"));
function ContentComponents() {
    return (React.createElement(Editor_1.EditorSharedConfigConsumer, null, function (config) {
        return !config ? null : (React.createElement(PluginSlot_1.default, { editorView: config.editorView, eventDispatcher: config.eventDispatcher, providerFactory: config.providerFactory, items: config.contentComponents, popupsMountPoint: config.popupsMountPoint, popupsBoundariesElement: config.popupsBoundariesElement, popupsScrollableElement: config.popupsScrollableElement, disabled: config.disabled || false, containerElement: undefined }));
    }));
}
exports.ContentComponents = ContentComponents;
//# sourceMappingURL=ContentComponents.js.map