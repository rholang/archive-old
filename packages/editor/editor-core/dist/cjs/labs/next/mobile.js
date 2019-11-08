"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var ContentStyles_1 = tslib_1.__importDefault(require("../../ui/ContentStyles"));
var max_content_size_1 = require("../../plugins/max-content-size");
var WithFlash_1 = tslib_1.__importDefault(require("../../ui/WithFlash"));
var Addon_1 = require("../../ui/Addon");
var Editor_1 = require("./Editor");
var ContentComponents_1 = require("./ContentComponents");
var MobileEditor = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  min-height: 30px;\n  width: 100%;\n  max-width: inherit;\n  box-sizing: border-box;\n  word-wrap: break-word;\n\n  div > .ProseMirror {\n    outline: none;\n    white-space: pre-wrap;\n    padding: 0;\n    margin: 0;\n  }\n"], ["\n  min-height: 30px;\n  width: 100%;\n  max-width: inherit;\n  box-sizing: border-box;\n  word-wrap: break-word;\n\n  div > .ProseMirror {\n    outline: none;\n    white-space: pre-wrap;\n    padding: 0;\n    margin: 0;\n  }\n"])));
MobileEditor.displayName = 'MobileEditor';
var ContentArea = styled_components_1.default(ContentStyles_1.default)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([""], [""])));
ContentArea.displayName = 'ContentArea';
var Mobile = /** @class */ (function (_super) {
    tslib_1.__extends(Mobile, _super);
    function Mobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderMobile = function (_a) {
            var maxContentSize = _a.maxContentSize;
            var maxHeight = _this.props.maxHeight;
            var maxContentSizeReached = maxContentSize && maxContentSize.maxContentSizeReached;
            return (React.createElement(Editor_1.EditorSharedConfigConsumer, null, function (config) { return (React.createElement(WithFlash_1.default, { animate: maxContentSizeReached },
                React.createElement(MobileEditor, { isMaxContentSizeReached: maxContentSizeReached, maxHeight: maxHeight },
                    React.createElement(Addon_1.ClickAreaMobile, { editorView: (config && config.editorView) || undefined },
                        React.createElement(ContentArea, null,
                            React.createElement(ContentComponents_1.ContentComponents, null),
                            React.createElement(Editor_1.EditorContent, null)))))); }));
        };
        return _this;
    }
    Mobile.prototype.render = function () {
        var _this = this;
        return (
        // TODO: fix this type
        React.createElement(Editor_1.Editor, tslib_1.__assign({}, this.props),
            React.createElement(Editor_1.EditorSharedConfigConsumer, null, function (config) { return (React.createElement(WithPluginState_1.default, { editorView: (config && config.editorView) || undefined, eventDispatcher: (config && config.eventDispatcher) || undefined, plugins: {
                    maxContentSize: max_content_size_1.pluginKey,
                }, render: _this.renderMobile })); })));
    };
    Mobile.displayName = 'MobileEditor';
    return Mobile;
}(React.Component));
exports.Mobile = Mobile;
var templateObject_1, templateObject_2;
//# sourceMappingURL=mobile.js.map