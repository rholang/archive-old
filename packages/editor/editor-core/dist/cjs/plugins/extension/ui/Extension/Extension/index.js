"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("./styles");
var styles_2 = require("../styles");
var Lozenge_1 = tslib_1.__importDefault(require("../Lozenge"));
var width_1 = require("../../../../width");
var editor_common_1 = require("@atlaskit/editor-common");
var WithPluginState_1 = tslib_1.__importDefault(require("../../../../../ui/WithPluginState"));
var Extension = /** @class */ (function (_super) {
    tslib_1.__extends(Extension, _super);
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
        return (React.createElement(WithPluginState_1.default, { editorView: view, plugins: {
                widthState: width_1.pluginKey,
            }, render: function (_a) {
                var _b = _a.widthState, widthState = _b === void 0 ? { width: 0 } : _b;
                return (React.createElement(styles_1.Wrapper, { innerRef: handleRef, "data-layout": node.attrs.layout, className: "extension-container " + shadowClassNames + " " + (hasBody ? '' : 'with-overlay'), style: {
                        width: editor_common_1.calcBreakoutWidth(node.attrs.layout, widthState.width),
                    } },
                    React.createElement("div", { className: "extension-overflow-wrapper " + (hasBody ? 'with-body' : '') },
                        React.createElement(styles_2.Overlay, { className: "extension-overlay" }),
                        React.createElement(styles_1.Header, { contentEditable: false, onClick: _this.onSelectExtension, className: hasChildren ? 'with-children' : '' },
                            React.createElement(Lozenge_1.default, { node: node }),
                            children),
                        hasBody && (React.createElement(styles_1.ContentWrapper, null,
                            React.createElement(styles_1.Content, { innerRef: handleContentDOMRef, className: "extension-content" }))))));
            } }));
    };
    return Extension;
}(react_1.Component));
exports.default = editor_common_1.overflowShadow(Extension, {
    overflowSelector: '.extension-overflow-wrapper',
});
//# sourceMappingURL=index.js.map