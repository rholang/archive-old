import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { Wrapper, Header, Content, ContentWrapper } from './styles';
import { Overlay } from '../styles';
import ExtensionLozenge from '../Lozenge';
import { pluginKey as widthPluginKey, } from '../../../../width';
import { calcBreakoutWidth, overflowShadow, } from '@atlaskit/editor-common';
import WithPluginState from '../../../../../ui/WithPluginState';
var Extension = /** @class */ (function (_super) {
    __extends(Extension, _super);
    function Extension() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectExtension = function () {
            var _a = _this.props, onSelectExtension = _a.onSelectExtension, node = _a.node;
            onSelectExtension(node.type.name === 'bodiedExtension');
        };
        return _this;
    }
    Extension.prototype.render = function () {
        var _this = this;
        var _a = this.props, node = _a.node, handleContentDOMRef = _a.handleContentDOMRef, children = _a.children, view = _a.view, handleRef = _a.handleRef, shadowClassNames = _a.shadowClassNames;
        var hasBody = node.type.name === 'bodiedExtension';
        var hasChildren = !!children;
        return (React.createElement(WithPluginState, { editorView: view, plugins: {
                widthState: widthPluginKey,
            }, render: function (_a) {
                var _b = _a.widthState, widthState = _b === void 0 ? { width: 0 } : _b;
                return (React.createElement(Wrapper, { innerRef: handleRef, "data-layout": node.attrs.layout, className: "extension-container " + shadowClassNames + " " + (hasBody ? '' : 'with-overlay'), style: {
                        width: calcBreakoutWidth(node.attrs.layout, widthState.width),
                    } },
                    React.createElement("div", { className: "extension-overflow-wrapper " + (hasBody ? 'with-body' : '') },
                        React.createElement(Overlay, { className: "extension-overlay" }),
                        React.createElement(Header, { contentEditable: false, onClick: _this.onSelectExtension, className: hasChildren ? 'with-children' : '' },
                            React.createElement(ExtensionLozenge, { node: node }),
                            children),
                        hasBody && (React.createElement(ContentWrapper, null,
                            React.createElement(Content, { innerRef: handleContentDOMRef, className: "extension-content" }))))));
            } }));
    };
    return Extension;
}(Component));
export default overflowShadow(Extension, {
    overflowSelector: '.extension-overflow-wrapper',
});
//# sourceMappingURL=index.js.map