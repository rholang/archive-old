import { __assign, __extends, __makeTemplateObject } from "tslib";
import rafSchedule from 'raf-schd';
import * as React from 'react';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { Editor, EditorContent, EditorSharedConfigConsumer, } from './Editor';
import { BaseTheme, akEditorMenuZIndex } from '@atlaskit/editor-common';
import ContentStyles from '../../ui/ContentStyles';
import { scrollbarStyles } from '../../ui/styles';
import { tableFullPageEditorStyles } from '../../plugins/table/ui/styles';
import { akEditorToolbarKeylineHeight } from '../../styles';
import { Toolbar } from './Toolbar';
import { ContentComponents } from './ContentComponents';
import { ClickAreaBlock } from '../../ui/Addon';
import Avatars from '../../plugins/collab-edit/ui/avatars';
import WidthEmitter from '../../ui/WidthEmitter';
var FullPageEditorWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 340px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"], ["\n  min-width: 340px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"])));
FullPageEditorWrapper.displayName = 'FullPageEditorWrapper';
var ScrollContainer = styled(ContentStyles)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  scroll-behavior: smooth;\n  ", ";\n"], ["\n  flex-grow: 1;\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  scroll-behavior: smooth;\n  ", ";\n"])), scrollbarStyles);
ScrollContainer.displayName = 'ScrollContainer';
var GUTTER_PADDING = 32;
var ContentArea = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  line-height: 24px;\n  height: 100%;\n  width: 100%;\n  max-width: ", "px;\n  padding-top: 50px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-bottom: 55px;\n\n  & .ProseMirror {\n    flex-grow: 1;\n    box-sizing: border-box;\n  }\n\n  && .ProseMirror {\n    & > * {\n      clear: both;\n    }\n    > p,\n    > ul,\n    > ol,\n    > h1,\n    > h2,\n    > h3,\n    > h4,\n    > h5,\n    > h6 {\n      clear: none;\n    }\n  }\n  ", ";\n"], ["\n  line-height: 24px;\n  height: 100%;\n  width: 100%;\n  max-width: ", "px;\n  padding-top: 50px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-bottom: 55px;\n\n  & .ProseMirror {\n    flex-grow: 1;\n    box-sizing: border-box;\n  }\n\n  && .ProseMirror {\n    & > * {\n      clear: both;\n    }\n    > p,\n    > ul,\n    > ol,\n    > h1,\n    > h2,\n    > h3,\n    > h4,\n    > h5,\n    > h6 {\n      clear: none;\n    }\n  }\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.layoutMaxWidth + GUTTER_PADDING * 2;
}, tableFullPageEditorStyles);
ContentArea.displayName = 'ContentArea';
var MainToolbar = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  box-shadow: ", ";\n  transition: box-shadow 200ms;\n  z-index: ", ";\n  display: flex;\n  height: 80px;\n  flex-shrink: 0;\n\n  & object {\n    height: 0 !important;\n  }\n"], ["\n  position: relative;\n  align-items: center;\n  box-shadow: ",
    ";\n  transition: box-shadow 200ms;\n  z-index: ", ";\n  display: flex;\n  height: 80px;\n  flex-shrink: 0;\n\n  & object {\n    height: 0 !important;\n  }\n"])), function (props) {
    return props.showKeyline
        ? "0 " + akEditorToolbarKeylineHeight + "px 0 0 " + colors.N30
        : 'none';
}, akEditorMenuZIndex);
MainToolbar.displayName = 'MainToolbar';
var MainToolbarCustomComponentsSlot = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 1;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 1;\n"])));
MainToolbarCustomComponentsSlot.displayName = 'MainToolbar';
var SecondaryToolbar = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n  display: flex;\n  padding: 24px 0;\n"], ["\n  box-sizing: border-box;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n  display: flex;\n  padding: 24px 0;\n"])));
SecondaryToolbar.displayName = 'SecondaryToolbar';
var FullPage = /** @class */ (function (_super) {
    __extends(FullPage, _super);
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
            _this.setState({ showKeyline: scrollTop > akEditorToolbarKeylineHeight });
            return false;
        };
        _this.scheduleUpdateToolbarKeyline = rafSchedule(_this.updateToolbarKeyline);
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
        React.createElement(Editor, __assign({}, this.props),
            React.createElement(BaseTheme, { dynamicTextSizing: allowDynamicTextSizing },
                React.createElement(FullPageEditorWrapper, { className: "akEditor" },
                    React.createElement(MainToolbar, { showKeyline: this.state.showKeyline },
                        React.createElement(Toolbar, null),
                        React.createElement(MainToolbarCustomComponentsSlot, null,
                            React.createElement(EditorSharedConfigConsumer, null, function (config) {
                                return !config ? null : (React.createElement(Avatars, { editorView: config.editorView, eventDispatcher: config.eventDispatcher, inviteToEditHandler: collabEdit && collabEdit.inviteToEditHandler, isInviteToEditButtonSelected: collabEdit && collabEdit.isInviteToEditButtonSelected }));
                            }),
                            primaryToolbarComponents)),
                    React.createElement(ScrollContainer, { innerRef: this.scrollContainerRef, className: "fabric-editor-popup-scroll-parent" },
                        React.createElement(EditorSharedConfigConsumer, null, function (config) { return (React.createElement(ClickAreaBlock, { editorView: (config || {}).editorView },
                            React.createElement(ContentArea, null,
                                React.createElement("div", { style: { padding: "0 " + GUTTER_PADDING + "px" }, className: "ak-editor-content-area" },
                                    contentComponents,
                                    React.createElement(EditorContent, null),
                                    React.createElement(ContentComponents, null))))); })),
                    React.createElement(EditorSharedConfigConsumer, null, function (config) { return (React.createElement(WidthEmitter, { editorView: (config || {}).editorView, contentArea: _this.scrollContainer })); })))));
    };
    FullPage.displayName = 'FullPageEditor';
    return FullPage;
}(React.Component));
export { FullPage };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=full-page.js.map