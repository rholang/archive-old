import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Status } from '@atlaskit/status/element';
import { borderRadius, colors } from '@atlaskit/theme';
import { pluginKey } from '../plugin';
import { ReactNodeView } from '../../../nodeviews';
import InlineNodeWrapper, { createMobileInlineDomRef, } from '../../../ui/InlineNodeWrapper';
import { ZeroWidthSpace } from '../../../utils';
import WithPluginState from '../../../ui/WithPluginState';
export var messages = defineMessages({
    placeholder: {
        id: 'fabric.editor.statusPlaceholder',
        defaultMessage: 'Set a status',
        description: 'Placeholder description for an empty (new) status item in the editor',
    },
});
export var StyledStatus = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n\n  display: inline-block;\n  opacity: ", ";\n\n  max-width: 100%;\n\n  /* Prevent responsive layouts increasing height of container. */\n  line-height: 0;\n\n  * ::selection {\n    background-color: transparent;\n  }\n\n  .ProseMirror-selectednode & {\n    position: relative;\n    &::before {\n      content: '';\n      border: 2px solid ", ";\n      background: transparent;\n      border-radius: ", "px;\n      box-sizing: border-box;\n      position: absolute;\n      /* Size selection larger (around) status node */\n      top: -1px;\n      left: -1px;\n      width: calc(100% + 2px);\n      height: calc(100% + 2px);\n      pointer-events: none;\n    }\n  }\n"], ["\n  cursor: pointer;\n\n  display: inline-block;\n  opacity: ", ";\n\n  max-width: 100%;\n\n  /* Prevent responsive layouts increasing height of container. */\n  line-height: 0;\n\n  * ::selection {\n    background-color: transparent;\n  }\n\n  .ProseMirror-selectednode & {\n    position: relative;\n    &::before {\n      content: '';\n      border: 2px solid ", ";\n      background: transparent;\n      border-radius: ", "px;\n      box-sizing: border-box;\n      position: absolute;\n      /* Size selection larger (around) status node */\n      top: -1px;\n      left: -1px;\n      width: calc(100% + 2px);\n      height: calc(100% + 2px);\n      pointer-events: none;\n    }\n  }\n"])), function (props) { return (props.placeholderStyle ? 0.5 : 1); }, colors.B200, borderRadius());
var StatusContainerView = /** @class */ (function (_super) {
    __extends(StatusContainerView, _super);
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
        return (React.createElement(WithPluginState, { plugins: {
                pluginState: pluginKey,
            }, editorView: view, eventDispatcher: eventDispatcher, render: function () {
                var _a = _this.props, text = _a.text, color = _a.color, localId = _a.localId, style = _a.style, formatMessage = _a.intl.formatMessage;
                var statusText = text ? text : formatMessage(messages.placeholder);
                return (React.createElement(StyledStatus, { placeholderStyle: !text },
                    React.createElement(Status, { text: statusText, color: color, localId: localId, style: style, onClick: _this.handleClick })));
            } }));
    };
    return StatusContainerView;
}(React.Component));
export var IntlStatusContainerView = injectIntl(StatusContainerView);
var StatusNodeView = /** @class */ (function (_super) {
    __extends(StatusNodeView, _super);
    function StatusNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusNodeView.prototype.createDomRef = function () {
        if (this.reactComponentProps.options &&
            this.reactComponentProps.options.useInlineWrapper) {
            return createMobileInlineDomRef();
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
        return (React.createElement(InlineNodeWrapper, { useInlineWrapper: options && options.useInlineWrapper },
            React.createElement(IntlStatusContainerView, { view: this.view, text: text, color: color, style: style, localId: localId }),
            options && options.allowZeroWidthSpaceAfter && ZeroWidthSpace));
    };
    return StatusNodeView;
}(ReactNodeView));
export { StatusNodeView };
export default function statusNodeView(portalProviderAPI, options) {
    return function (node, view, getPos) {
        return new StatusNodeView(node, view, getPos, portalProviderAPI, {
            options: options,
        }).init();
    };
}
var templateObject_1;
//# sourceMappingURL=status.js.map