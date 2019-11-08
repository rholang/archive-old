import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import PluginSlot from '../PluginSlot';
import WithPluginState from '../WithPluginState';
import ContentStyles from '../ContentStyles';
import { pluginKey as maxContentSizePluginKey, } from '../../plugins/max-content-size';
import { mentionPluginKey } from '../../plugins/mentions';
import WithFlash from '../WithFlash';
import { ClickAreaMobile as ClickArea } from '../Addon';
var MobileEditor = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 30px;\n  width: 100%;\n  max-width: inherit;\n  box-sizing: border-box;\n  word-wrap: break-word;\n\n  div > .ProseMirror {\n    outline: none;\n    white-space: pre-wrap;\n    padding: 0;\n    margin: 0;\n  }\n"], ["\n  min-height: 30px;\n  width: 100%;\n  max-width: inherit;\n  box-sizing: border-box;\n  word-wrap: break-word;\n\n  div > .ProseMirror {\n    outline: none;\n    white-space: pre-wrap;\n    padding: 0;\n    margin: 0;\n  }\n"])));
MobileEditor.displayName = 'MobileEditor';
var ContentArea = styled(ContentStyles)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
ContentArea.displayName = 'ContentArea';
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appearance = 'mobile';
        _this.handleRef = function (ref) {
            _this.containerElement = ref;
            if (_this.props.onUiReady) {
                _this.props.onUiReady(ref);
            }
        };
        _this.renderMobile = function (_a) {
            var maxContentSize = _a.maxContentSize;
            var _b = _this.props, editorView = _b.editorView, eventDispatcher = _b.eventDispatcher, providerFactory = _b.providerFactory, customContentComponents = _b.customContentComponents, maxHeight = _b.maxHeight, disabled = _b.disabled, editorDOMElement = _b.editorDOMElement, dispatchAnalyticsEvent = _b.dispatchAnalyticsEvent;
            var maxContentSizeReached = maxContentSize && maxContentSize.maxContentSizeReached;
            return (React.createElement(WithFlash, { animate: maxContentSizeReached },
                React.createElement(MobileEditor, { isMaxContentSizeReached: maxContentSizeReached, maxHeight: maxHeight },
                    React.createElement(ClickArea, { editorView: editorView },
                        React.createElement(ContentArea, { innerRef: _this.handleRef },
                            customContentComponents,
                            React.createElement(PluginSlot, { editorView: editorView, eventDispatcher: eventDispatcher, providerFactory: providerFactory, appearance: _this.appearance, containerElement: _this.containerElement, disabled: !!disabled, dispatchAnalyticsEvent: dispatchAnalyticsEvent }),
                            editorDOMElement)))));
        };
        return _this;
    }
    Editor.prototype.render = function () {
        var _a = this.props, eventDispatcher = _a.eventDispatcher, editorView = _a.editorView;
        return (React.createElement(WithPluginState, { editorView: editorView, eventDispatcher: eventDispatcher, plugins: {
                maxContentSize: maxContentSizePluginKey,
                mentions: mentionPluginKey,
            }, render: this.renderMobile }));
    };
    Editor.displayName = 'MobileEditor';
    return Editor;
}(React.Component));
export default Editor;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Mobile.js.map