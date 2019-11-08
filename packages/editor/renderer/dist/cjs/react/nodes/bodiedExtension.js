"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var editor_common_1 = require("@atlaskit/editor-common");
var extension_1 = require("./extension");
var BodiedExtension = function (_a) {
    var serializer = _a.serializer, extensionHandlers = _a.extensionHandlers, rendererContext = _a.rendererContext, extensionType = _a.extensionType, extensionKey = _a.extensionKey, content = _a.content, parameters = _a.parameters, children = _a.children, _b = _a.layout, layout = _b === void 0 ? 'default' : _b;
    try {
        if (extensionHandlers && extensionHandlers[extensionType]) {
            var render = editor_common_1.getExtensionRenderer(extensionHandlers[extensionType]);
            var extensionContent = render({
                type: 'bodiedExtension',
                extensionKey: extensionKey,
                extensionType: extensionType,
                parameters: parameters,
                content: content,
            }, rendererContext.adDoc);
            switch (true) {
                case extensionContent && React.isValidElement(extensionContent):
                    // Return the extensionContent directly if it's a valid JSX.Element
                    return extension_1.renderExtension(extensionContent, layout);
                case !!extensionContent:
                    // We expect it to be Atlassian Document here
                    var nodes = Array.isArray(extensionContent)
                        ? extensionContent
                        : [extensionContent];
                    return __1.renderNodes(nodes, serializer, rendererContext.schema, 'div');
            }
        }
    }
    catch (e) {
        /** We don't want this error to block renderer */
        /** We keep rendering the default content */
    }
    // Always return default content if anything goes wrong
    return extension_1.renderExtension(children, layout);
};
exports.default = BodiedExtension;
//# sourceMappingURL=bodiedExtension.js.map