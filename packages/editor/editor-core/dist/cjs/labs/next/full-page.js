"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var Editor_1 = require("./Editor");
var editor_common_1 = require("@atlaskit/editor-common");
var ContentStyles_1 = tslib_1.__importDefault(require("../../ui/ContentStyles"));
var styles_1 = require("../../ui/styles");
var styles_2 = require("../../plugins/table/ui/styles");
var styles_3 = require("../../styles");
var Toolbar_1 = require("./Toolbar");
var ContentComponents_1 = require("./ContentComponents");
var Addon_1 = require("../../ui/Addon");
var avatars_1 = tslib_1.__importDefault(require("../../plugins/collab-edit/ui/avatars"));
var WidthEmitter_1 = tslib_1.__importDefault(require("../../ui/WidthEmitter"));
var FullPageEditorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  min-width: 340px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"], ["\n  min-width: 340px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"])));
FullPageEditorWrapper.displayName = 'FullPageEditorWrapper';
var ScrollContainer = styled_components_1.default(ContentStyles_1.default)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-grow: 1;\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  scroll-behavior: smooth;\n  ", ";\n"], ["\n  flex-grow: 1;\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  scroll-behavior: smooth;\n  ", ";\n"])), styles_1.scrollbarStyles);
ScrollContainer.displayName = 'ScrollContainer';
var GUTTER_PADDING = 32;
var ContentArea = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  line-height: 24px;\n  height: 100%;\n  width: 100%;\n  max-width: ", "px;\n  padding-top: 50px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-bottom: 55px;\n\n  & .ProseMirror {\n    flex-grow: 1;\n    box-sizing: border-box;\n  }\n\n  && .ProseMirror {\n    & > * {\n      clear: both;\n    }\n    > p,\n    > ul,\n    > ol,\n    > h1,\n    > h2,\n    > h3,\n    > h4,\n    > h5,\n    > h6 {\n      clear: none;\n    }\n  }\n  ", ";\n"], ["\n  line-height: 24px;\n  height: 100%;\n  width: 100%;\n  max-width: ", "px;\n  padding-top: 50px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-bottom: 55px;\n\n  & .ProseMirror {\n    flex-grow: 1;\n    box-sizing: border-box;\n  }\n\n  && .ProseMirror {\n    & > * {\n      clear: both;\n    }\n    > p,\n    > ul,\n    > ol,\n    > h1,\n    > h2,\n    > h3,\n    > h4,\n    > h5,\n    > h6 {\n      clear: none;\n    }\n  }\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.layoutMaxWidth + GUTTER_PADDING * 2;
}, styles_2.tableFullPageEditorStyles);
ContentArea.displayName = 'ContentArea';
var MainToolbar = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  box-shadow: ", ";\n  transition: box-shadow 200ms;\n  z-index: ", ";\n  display: flex;\n  height: 80px;\n  flex-shrink: 0;\n\n  & object {\n    height: 0 !important;\n  }\n"], ["\n  position: relative;\n  align-items: center;\n  box-shadow: ",
    ";\n  transition: box-shadow 200ms;\n  z-index: ", ";\n  display: flex;\n  height: 80px;\n  flex-shrink: 0;\n\n  & object {\n    height: 0 !important;\n  }\n"])), function (props) {
    return props.showKeyline
        ? "0 " + styles_3.akEditorToolbarKeylineHeight + "px 0 0 " + theme_1.colors.N30
        : 'none';
}, editor_common_1.akEditorMenuZIndex);
MainToolbar.displayName = 'MainToolbar';
var MainToolbarCustomComponentsSlot = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 1;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 1;\n"])));
MainToolbarCustomComponentsSlot.displayName = 'MainToolbar';
var SecondaryToolbar = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n  display: flex;\n  padding: 24px 0;\n"], ["\n  box-sizing: border-box;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n  display: flex;\n  padding: 24px 0;\n"])));
SecondaryToolbar.displayName = 'SecondaryToolbar';
var FullPage = /** @class */ (function (_super) {
    tslib_1.__extends(FullPage, _super);
    function FullPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { showKeyline: false };
        _this.scrollContainerRef = function (ref) {
            var previousScrollContainer = _this.scrollContainer;
            // remove existing handler
            if (previousScrollContainer) {
                previousScrollContainer.removeEventListener('scroll', _this.scheduleUpdateToolbarKeyline);
            }
            _this.scrollContainer = ref ? ref : undefined;
            if (_this.scrollContainer) {
                _this.scrollContainer.addEventListener('scroll', _this.scheduleUpdateToolbarKeyline, false);
                _this.updateToolbarKeyline();
            }
        };
        _this.updateToolbarKeyline = function () {
            if (!_this.scrollContainer) {
                return false;
            }
            var scrollTop = _this.scrollContainer.scrollTop;
            _this.setState({ showKeyline: scrollTop > styles_3.akEditorToolbarKeylineHeight });
            return false;
        };
        _this.scheduleUpdateToolbarKeyline = raf_schd_1.default(_this.updateToolbarKeyline);
        return _this;
    }
    FullPage.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.scheduleUpdateToolbarKeyline, false);
    };
    FullPage.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.scheduleUpdateToolbarKeyline);
        if (this.scheduledKeylineUpdate) {
            cancelAnimationFrame(this.scheduledKeylineUpdate);
        }
    };
    FullPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, primaryToolbarComponents = _a.primaryToolbarComponents, contentComponents = _a.contentComponents, allowDynamicTextSizing = _a.allowDynamicTextSizing, collabEdit = _a.collabEdit;
        return (
        // TODO: fix this type
        React.createElement(Editor_1.Editor, tslib_1.__assign({}, this.props),
            React.createElement(editor_common_1.BaseTheme, { dynamicTextSizing: allowDynamicTextSizing },
                React.createElement(FullPageEditorWrapper, { className: "akEditor" },
                    React.createElement(MainToolbar, { showKeyline: this.state.showKeyline },
                        React.createElement(Toolbar_1.Toolbar, null),
                        React.createElement(MainToolbarCustomComponentsSlot, null,
                            React.createElement(Editor_1.EditorSharedConfigConsumer, null, function (config) {
                                return !config ? null : (React.createElement(avatars_1.default, { editorView: config.editorView, eventDispatcher: config.eventDispatcher, inviteToEditHandler: collabEdit && collabEdit.inviteToEditHandler, isInviteToEditButtonSelected: collabEdit && collabEdit.isInviteToEditButtonSelected }));
                            }),
                            primaryToolbarComponents)),
                    React.createElement(ScrollContainer, { innerRef: this.scrollContainerRef, className: "fabric-editor-popup-scroll-parent" },
                        React.createElement(Editor_1.EditorSharedConfigConsumer, null, function (config) { return (React.createElement(Addon_1.ClickAreaBlock, { editorView: (config || {}).editorView },
                            React.createElement(ContentArea, null,
                                React.createElement("div", { style: { padding: "0 " + GUTTER_PADDING + "px" }, className: "ak-editor-content-area" },
                                    contentComponents,
                                    React.createElement(Editor_1.EditorContent, null),
                                    React.createElement(ContentComponents_1.ContentComponents, null))))); })),
                    React.createElement(Editor_1.EditorSharedConfigConsumer, null, function (config) { return (React.createElement(WidthEmitter_1.default, { editorView: (config || {}).editorView, contentArea: _this.scrollContainer })); })))));
    };
    FullPage.displayName = 'FullPageEditor';
    return FullPage;
}(React.Component));
exports.FullPage = FullPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=full-page.js.map