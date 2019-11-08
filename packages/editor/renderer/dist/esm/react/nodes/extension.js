import * as React from 'react';
import { renderNodes } from '../..';
import { calcBreakoutWidth, getExtensionRenderer, overflowShadow, WidthConsumer, } from '@atlaskit/editor-common';
import { RendererCssClassName } from '../../consts';
export var renderExtension = function (content, layout, options) {
    return (React.createElement(WidthConsumer, null, function (_a) {
        var width = _a.width;
        return (React.createElement("div", { ref: options && options.handleRef, className: RendererCssClassName.EXTENSION + " " + (options &&
                options.shadowClassNames), style: {
                width: calcBreakoutWidth(layout, width),
            }, "data-layout": layout },
            React.createElement("div", { className: RendererCssClassName.EXTENSION_OVERFLOW_CONTAINER }, content)));
    }));
};
var Extension = function (_a) {
    var serializer = _a.serializer, extensionHandlers = _a.extensionHandlers, rendererContext = _a.rendererContext, extensionType = _a.extensionType, extensionKey = _a.extensionKey, text = _a.text, parameters = _a.parameters, _b = _a.layout, layout = _b === void 0 ? 'default' : _b, handleRef = _a.handleRef, shadowClassNames = _a.shadowClassNames;
    try {
        if (extensionHandlers && extensionHandlers[extensionType]) {
            var render = getExtensionRenderer(extensionHandlers[extensionType]);
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
                    return renderExtension(content, layout, {
                        handleRef: handleRef,
                        shadowClassNames: shadowClassNames,
                    });
                case !!content:
                    // We expect it to be Atlassian Document here
                    var nodes = Array.isArray(content) ? content : [content];
                    return renderNodes(nodes, serializer, rendererContext.schema, 'div');
            }
        }
    }
    catch (e) {
        /** We don't want this error to block renderer */
        /** We keep rendering the default content */
    }
    // Always return default content if anything goes wrong
    return renderExtension(text || 'extension', layout, {
        handleRef: handleRef,
        shadowClassNames: shadowClassNames,
    });
};
export default overflowShadow(Extension, {
    overflowSelector: "." + RendererCssClassName.EXTENSION_OVERFLOW_CONTAINER,
});
//# sourceMappingURL=extension.js.map