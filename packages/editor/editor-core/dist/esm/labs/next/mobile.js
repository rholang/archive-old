import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import WithPluginState from '../../ui/WithPluginState';
import ContentStyles from '../../ui/ContentStyles';
import { pluginKey as maxContentSizePluginKey, } from '../../plugins/max-content-size';
import WithFlash from '../../ui/WithFlash';
import { ClickAreaMobile as ClickArea } from '../../ui/Addon';
import { EditorSharedConfigConsumer, Editor, EditorContent } from './Editor';
import { ContentComponents } from './ContentComponents';
var MobileEditor = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 30px;\n  width: 100%;\n  max-width: inherit;\n  box-sizing: border-box;\n  word-wrap: break-word;\n\n  div > .ProseMirror {\n    outline: none;\n    white-space: pre-wrap;\n    padding: 0;\n    margin: 0;\n  }\n"], ["\n  min-height: 30px;\n  width: 100%;\n  max-width: inherit;\n  box-sizing: border-box;\n  word-wrap: break-word;\n\n  div > .ProseMirror {\n    outline: none;\n    white-space: pre-wrap;\n    padding: 0;\n    margin: 0;\n  }\n"])));
MobileEditor.displayName = 'MobileEditor';
var ContentArea = styled(ContentStyles)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
ContentArea.displayName = 'ContentArea';
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderMobile = function (_a) {
            var maxContentSize = _a.maxContentSize;
            var maxHeight = _this.props.maxHeight;
            var maxContentSizeReached = maxContentSize && maxContentSize.maxContentSizeReached;
            return (React.createElement(EditorSharedConfigConsumer, null, function (config) { return (React.createElement(WithFlash, { animate: maxContentSizeReached },
                React.createElement(MobileEditor, { isMaxContentSizeReached: maxContentSizeReached, maxHeight: maxHeight },
                    React.createElement(ClickArea, { editorView: (config && config.editorView) || undefined },
                        React.createElement(ContentArea, null,
                            React.createElement(ContentComponents, null),
                            React.createElement(EditorContent, null)))))); }));
        };
        return _this;
    }
    Mobile.prototype.render = function () {
        var _this = this;
        return (
        // TODO: fix this type
        React.createElement(Editor, __assign({}, this.props),
            React.createElement(EditorSharedConfigConsumer, null, function (config) { return (React.createElement(WithPluginState, { editorView: (config && config.editorView) || undefined, eventDispatcher: (config && config.eventDispatcher) || undefined, plugins: {
                    maxContentSize: maxContentSizePluginKey,
                }, render: _this.renderMobile })); })));
    };
    Mobile.displayName = 'MobileEditor';
    return Mobile;
}(React.Component));
export { Mobile };
var templateObject_1, templateObject_2;
//# sourceMappingURL=mobile.js.map