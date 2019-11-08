"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var element_1 = require("@atlaskit/status/element");
var theme_1 = require("@atlaskit/theme");
var plugin_1 = require("../plugin");
var nodeviews_1 = require("../../../nodeviews");
var InlineNodeWrapper_1 = tslib_1.__importStar(require("../../../ui/InlineNodeWrapper"));
var utils_1 = require("../../../utils");
var WithPluginState_1 = tslib_1.__importDefault(require("../../../ui/WithPluginState"));
exports.messages = react_intl_1.defineMessages({
    placeholder: {
        id: 'fabric.editor.statusPlaceholder',
        defaultMessage: 'Set a status',
        description: 'Placeholder description for an empty (new) status item in the editor',
    },
});
exports.StyledStatus = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  cursor: pointer;\n\n  display: inline-block;\n  opacity: ", ";\n\n  max-width: 100%;\n\n  /* Prevent responsive layouts increasing height of container. */\n  line-height: 0;\n\n  * ::selection {\n    background-color: transparent;\n  }\n\n  .ProseMirror-selectednode & {\n    position: relative;\n    &::before {\n      content: '';\n      border: 2px solid ", ";\n      background: transparent;\n      border-radius: ", "px;\n      box-sizing: border-box;\n      position: absolute;\n      /* Size selection larger (around) status node */\n      top: -1px;\n      left: -1px;\n      width: calc(100% + 2px);\n      height: calc(100% + 2px);\n      pointer-events: none;\n    }\n  }\n"], ["\n  cursor: pointer;\n\n  display: inline-block;\n  opacity: ", ";\n\n  max-width: 100%;\n\n  /* Prevent responsive layouts increasing height of container. */\n  line-height: 0;\n\n  * ::selection {\n    background-color: transparent;\n  }\n\n  .ProseMirror-selectednode & {\n    position: relative;\n    &::before {\n      content: '';\n      border: 2px solid ", ";\n      background: transparent;\n      border-radius: ", "px;\n      box-sizing: border-box;\n      position: absolute;\n      /* Size selection larger (around) status node */\n      top: -1px;\n      left: -1px;\n      width: calc(100% + 2px);\n      height: calc(100% + 2px);\n      pointer-events: none;\n    }\n  }\n"])), function (props) { return (props.placeholderStyle ? 0.5 : 1); }, theme_1.colors.B200, theme_1.borderRadius());
var StatusContainerView = /** @class */ (function (_super) {
    tslib_1.__extends(StatusContainerView, _super);
    function StatusContainerView(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            if (event.nativeEvent.stopImmediatePropagation) {
                event.nativeEvent.stopImmediatePropagation();
            }
            // handling of popup is done in plugin.apply on selection change.
        };
        return _this;
    }
    StatusContainerView.prototype.render = function () {
        var _this = this;
        var _a = this.props, eventDispatcher = _a.eventDispatcher, view = _a.view;
        return (React.createElement(WithPluginState_1.default, { plugins: {
                pluginState: plugin_1.pluginKey,
            }, editorView: view, eventDispatcher: eventDispatcher, render: function () {
                var _a = _this.props, text = _a.text, color = _a.color, localId = _a.localId, style = _a.style, formatMessage = _a.intl.formatMessage;
                var statusText = text ? text : formatMessage(exports.messages.placeholder);
                return (React.createElement(exports.StyledStatus, { placeholderStyle: !text },
                    React.createElement(element_1.Status, { text: statusText, color: color, localId: localId, style: style, onClick: _this.handleClick })));
            } }));
    };
    return StatusContainerView;
}(React.Component));
exports.IntlStatusContainerView = react_intl_1.injectIntl(StatusContainerView);
var StatusNodeView = /** @class */ (function (_super) {
    tslib_1.__extends(StatusNodeView, _super);
    function StatusNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusNodeView.prototype.createDomRef = function () {
        if (this.reactComponentProps.options &&
            this.reactComponentProps.options.useInlineWrapper) {
            return InlineNodeWrapper_1.createMobileInlineDomRef();
        }
        return _super.prototype.createDomRef.call(this);
    };
    StatusNodeView.prototype.setDomAttrs = function (node, element) {
        var _a = node.attrs, color = _a.color, localId = _a.localId, style = _a.style;
        element.dataset.color = color;
        element.dataset.localId = localId;
        element.dataset.style = style;
    };
    StatusNodeView.prototype.render = function (props) {
        var options = props.options;
        var _a = this.node.attrs, text = _a.text, color = _a.color, localId = _a.localId, style = _a.style;
        return (React.createElement(InlineNodeWrapper_1.default, { useInlineWrapper: options && options.useInlineWrapper },
            React.createElement(exports.IntlStatusContainerView, { view: this.view, text: text, color: color, style: style, localId: localId }),
            options && options.allowZeroWidthSpaceAfter && utils_1.ZeroWidthSpace));
    };
    return StatusNodeView;
}(nodeviews_1.ReactNodeView));
exports.StatusNodeView = StatusNodeView;
function statusNodeView(portalProviderAPI, options) {
    return function (node, view, getPos) {
        return new StatusNodeView(node, view, getPos, portalProviderAPI, {
            options: options,
        }).init();
    };
}
exports.default = statusNodeView;
var templateObject_1;
//# sourceMappingURL=status.js.map