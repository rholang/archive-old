"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var editor_common_1 = require("@atlaskit/editor-common");
var consts_1 = require("../../consts");
exports.renderExtension = function (content, layout, options) {
    return (React.createElement(editor_common_1.WidthConsumer, null, function (_a) {
        var width = _a.width;
        return (React.createElement("div", { ref: options && options.handleRef, className: consts_1.RendererCssClassName.EXTENSION + " " + (options &&
                options.shadowClassNames), style: {
                width: editor_common_1.calcBreakoutWidth(layout, width),
            }, "data-layout": layout },
            React.createElement("div", { className: consts_1.RendererCssClassName.EXTENSION_OVERFLOW_CONTAINER }, content)));
    }));
};
var Extension = function (_a) {
    var serializer = _a.serializer, extensionHandlers = _a.extensionHandlers, rendererContext = _a.rendererContext, extensionType = _a.extensionType, extensionKey = _a.extensionKey, text = _a.text, parameters = _a.parameters, _b = _a.layout, layout = _b === void 0 ? 'default' : _b, handleRef = _a.handleRef, shadowClassNames = _a.shadowClassNames;
    try {
        if (extensionHandlers && extensionHandlers[extensionType]) {
            var render = editor_common_1.getExtensionRenderer(extensionHandlers[extensionType]);
            var content = render({
                type: 'extension',
                extensionKey: extensionKey,
                extensionType: extensionType,
                parameters: parameters,
                content: text,
            }, rendererContext.adDoc);
            switch (true) {
                case content && React.isValidElement(content):
                    // Return the content directly if it's a valid JSX.Element
                    return exports.renderExtension(content, layout, {
                        handleRef: handleRef,
                        shadowClassNames: shadowClassNames,
                    });
                case !!content:
                    // We expect it to be Atlassian Document here
                    var nodes = Array.isArray(content) ? content : [content];
                    return __1.renderNodes(nodes, serializer, rendererContext.schema, 'div');
            }
        }
    }
    catch (e) {
        /** We don't want this error to block renderer */
        /** We keep rendering the default content */
    }
    // Always return default content if anything goes wrong
    return exports.renderExtension(text || 'extension', layout, {
        handleRef: handleRef,
        shadowClassNames: shadowClassNames,
    });
};
exports.default = editor_common_1.overflowShadow(Extension, {
    overflowSelector: "." + consts_1.RendererCssClassName.EXTENSION_OVERFLOW_CONTAINER,
});
//# sourceMappingURL=extension.js.map