import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { akEditorMenuZIndex, akEditorFullWidthLayoutWidth, akEditorGutterPadding, } from '@atlaskit/editor-common';
import { taskListSelector, decisionListSelector } from '@atlaskit/adf-schema';
import Avatars from '../../plugins/collab-edit/ui/avatars';
import PluginSlot from '../PluginSlot';
import Toolbar from '../Toolbar';
import ContentStyles from '../ContentStyles';
import { ClickAreaBlock } from '../Addon';
import { tableFullPageEditorStyles, tableMarginFullWidthMode, } from '../../plugins/table/ui/styles';
import { akEditorToolbarKeylineHeight } from '../../styles';
import rafSchedule from 'raf-schd';
import { scrollbarStyles } from '../styles';
import WidthEmitter from '../WidthEmitter';
import { LAYOUT_OFFSET } from '../../plugins/layout/styles';
var SWOOP_ANIMATION = '0.5s cubic-bezier(.15,1,.3,1)';
var TOTAL_PADDING = akEditorGutterPadding * 2;
var FullPageEditorWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 340px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"], ["\n  min-width: 340px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n"])));
FullPageEditorWrapper.displayName = 'FullPageEditorWrapper';
var ScrollContainer = styled(ContentStyles)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  scroll-behavior: smooth;\n  ", ";\n"], ["\n  flex-grow: 1;\n  overflow-y: scroll;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  scroll-behavior: smooth;\n  ", ";\n"])), scrollbarStyles);
ScrollContainer.displayName = 'ScrollContainer';
var ContentArea = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  line-height: 24px;\n  padding-top: 50px;\n  padding-bottom: 55px;\n  height: calc(\n    100% - 105px\n  ); /* fill the viewport: 100% - (padding top & bottom) */\n  width: 100%;\n  flex-direction: column;\n  flex-grow: 1;\n\n  max-width: ", "px;\n  transition: margin-left ", ", max-width ", ";\n  margin-left: ", ";\n\n  ", "\n\n  ", "\n\n  & .ProseMirror {\n    flex-grow: 1;\n    box-sizing: border-box;\n  }\n\n  & .ProseMirror {\n    & > * {\n      /* pre-emptively clear all direct descendant content, just in case any are adjacent floated content */\n      clear: both;\n    }\n    > p,\n    > ul,\n    > ol:not(", "):not(", "),\n    > h1,\n    > h2,\n    > h3,\n    > h4,\n    > h5,\n    > h6 {\n      /* deliberately allow wrapping of text based nodes, just in case any are adjacent floated content */\n      clear: none;\n    }\n\n    > p:last-child {\n      margin-bottom: 24px;\n    }\n  }\n\n  ", ";\n\n  .fabric-editor--full-width-mode {\n    /* Full Width Mode styles for ignoring breakout sizes */\n    .fabric-editor-breakout-mark,\n    .extension-container,\n    .pm-table-container {\n      width: 100% !important;\n    }\n\n    /* Prevent horizontal scroll on page in full width mode */\n    ", "\n  }\n"], ["\n  line-height: 24px;\n  padding-top: 50px;\n  padding-bottom: 55px;\n  height: calc(\n    100% - 105px\n  ); /* fill the viewport: 100% - (padding top & bottom) */\n  width: 100%;\n  flex-direction: column;\n  flex-grow: 1;\n\n  max-width: ",
    "px;\n  transition: margin-left ", ", max-width ", ";\n  margin-left: ",
    ";\n\n  ",
    "\n\n  ",
    "\n\n  & .ProseMirror {\n    flex-grow: 1;\n    box-sizing: border-box;\n  }\n\n  & .ProseMirror {\n    & > * {\n      /* pre-emptively clear all direct descendant content, just in case any are adjacent floated content */\n      clear: both;\n    }\n    > p,\n    > ul,\n    > ol:not(", "):not(", "),\n    > h1,\n    > h2,\n    > h3,\n    > h4,\n    > h5,\n    > h6 {\n      /* deliberately allow wrapping of text based nodes, just in case any are adjacent floated content */\n      clear: none;\n    }\n\n    > p:last-child {\n      margin-bottom: 24px;\n    }\n  }\n\n  ", ";\n\n  .fabric-editor--full-width-mode {\n    /* Full Width Mode styles for ignoring breakout sizes */\n    .fabric-editor-breakout-mark,\n    .extension-container,\n    .pm-table-container {\n      width: 100% !important;\n    }\n\n    /* Prevent horizontal scroll on page in full width mode */\n    ",
    "\n  }\n"])), function (_a) {
    var theme = _a.theme, fullWidthMode = _a.fullWidthMode;
    return (fullWidthMode ? akEditorFullWidthLayoutWidth : theme.layoutMaxWidth) +
        TOTAL_PADDING;
}, SWOOP_ANIMATION, SWOOP_ANIMATION, function (_a) {
    var theme = _a.theme, fullWidthMode = _a.fullWidthMode;
    return !fullWidthMode &&
        "calc(50% - " + (theme.layoutMaxWidth + TOTAL_PADDING) / 2 + "px)";
}, function (_a) {
    var fullWidthMode = _a.fullWidthMode;
    return fullWidthMode &&
        "\n    @media (min-width: " + (akEditorFullWidthLayoutWidth + TOTAL_PADDING) + "px) {\n      margin-left: " + ("calc(50% - " + (akEditorFullWidthLayoutWidth +
            TOTAL_PADDING) /
            2 + "px)") + ";\n  }";
}, function (_a) {
    var theme = _a.theme;
    return "\n    @media (max-width: " + (theme.layoutMaxWidth + TOTAL_PADDING) + "px) {\n      margin-left: auto;\n    }\n  ";
}, taskListSelector, decisionListSelector, tableFullPageEditorStyles, function (_a) {
    var containerWidth = _a.containerWidth;
    if (!containerWidth) {
        // initially hide until we have a containerWidth and can properly size them,
        // otherwise they can cause the editor width to extend which is non-recoverable
        return "\n          .pm-table-container,\n          .code-block,\n          .extension-container {\n            display: none;\n          }\n        ";
    }
    return "\n        .pm-table-container,\n        .code-block,\n        .extension-container {\n          max-width: " + (containerWidth -
        TOTAL_PADDING -
        tableMarginFullWidthMode * 2) + "px;\n        }\n\n        [data-layout-section] {\n          max-width: " + (containerWidth - TOTAL_PADDING + LAYOUT_OFFSET * 2) + "px;\n        }\n      ";
});
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
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { showKeyline: false };
        _this.appearance = 'full-page';
        _this.stopPropagation = function (event) {
            return event.stopPropagation();
        };
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
                _this.updateContainerWidth();
            }
        };
        _this.updateToolbarKeyline = function () {
            if (!_this.scrollContainer) {
                return false;
            }
            var scrollTop = _this.scrollContainer.scrollTop;
            var showKeyline = scrollTop > akEditorToolbarKeylineHeight;
            if (showKeyline !== _this.state.showKeyline) {
                _this.setState({ showKeyline: showKeyline });
            }
            return false;
        };
        _this.scheduleUpdateToolbarKeyline = rafSchedule(_this.updateToolbarKeyline);
        _this.updateContainerWidth = function () {
            _this.setState({
                containerWidth: _this.scrollContainer.clientWidth,
            });
        };
        _this.scheduleUpdateContainerWidth = rafSchedule(_this.updateContainerWidth);
        _this.handleResize = function () {
            _this.scheduledKeylineUpdate = _this.scheduleUpdateToolbarKeyline();
            _this.scheduledWidthUpdate = _this.scheduleUpdateContainerWidth();
        };
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.handleResize, false);
    };
    Editor.prototype.componentDidUpdate = function () {
        if (this.scrollContainer &&
            this.scrollContainer.clientWidth !== this.state.containerWidth) {
            this.updateContainerWidth();
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleResize);
        if (this.scheduledKeylineUpdate) {
            cancelAnimationFrame(this.scheduledKeylineUpdate);
        }
        if (this.scheduledWidthUpdate) {
            cancelAnimationFrame(this.scheduledWidthUpdate);
        }
    };
    Editor.prototype.render = function () {
        var _this = this;
        var _a = this.props, appearance = _a.appearance, editorDOMElement = _a.editorDOMElement, editorView = _a.editorView, editorActions = _a.editorActions, eventDispatcher = _a.eventDispatcher, providerFactory = _a.providerFactory, primaryToolbarComponents = _a.primaryToolbarComponents, contentComponents = _a.contentComponents, customPrimaryToolbarComponents = _a.customPrimaryToolbarComponents, customContentComponents = _a.customContentComponents, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, disabled = _a.disabled, collabEdit = _a.collabEdit, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent, allowAnnotation = _a.allowAnnotation;
        var _b = this.state, showKeyline = _b.showKeyline, containerWidth = _b.containerWidth;
        return (React.createElement(FullPageEditorWrapper, { className: "akEditor" },
            React.createElement(MainToolbar, { showKeyline: showKeyline },
                React.createElement(Toolbar, { editorView: editorView, editorActions: editorActions, eventDispatcher: eventDispatcher, providerFactory: providerFactory, appearance: this.appearance, items: primaryToolbarComponents, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement, disabled: !!disabled, dispatchAnalyticsEvent: dispatchAnalyticsEvent }),
                React.createElement(MainToolbarCustomComponentsSlot, null,
                    React.createElement(Avatars, { editorView: editorView, eventDispatcher: eventDispatcher, inviteToEditComponent: collabEdit && collabEdit.inviteToEditComponent, inviteToEditHandler: collabEdit && collabEdit.inviteToEditHandler, isInviteToEditButtonSelected: collabEdit && collabEdit.isInviteToEditButtonSelected }),
                    customPrimaryToolbarComponents)),
            React.createElement(ScrollContainer, { innerRef: this.scrollContainerRef, allowAnnotation: allowAnnotation, className: "fabric-editor-popup-scroll-parent" },
                React.createElement(ClickAreaBlock, { editorView: editorView },
                    React.createElement(ContentArea, { fullWidthMode: appearance === 'full-width', innerRef: function (contentArea) {
                            _this.contentArea = contentArea;
                        }, containerWidth: containerWidth },
                        React.createElement("div", { style: { padding: "0 " + akEditorGutterPadding + "px" }, className: [
                                'ak-editor-content-area',
                                this.props.appearance === 'full-width'
                                    ? 'fabric-editor--full-width-mode'
                                    : '',
                            ].join(' ') },
                            customContentComponents,
                            React.createElement(PluginSlot, { editorView: editorView, editorActions: editorActions, eventDispatcher: eventDispatcher, providerFactory: providerFactory, appearance: this.props.appearance || this.appearance, items: contentComponents, contentArea: this.contentArea, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement, disabled: !!disabled, containerElement: this.scrollContainer, dispatchAnalyticsEvent: dispatchAnalyticsEvent }),
                            editorDOMElement)))),
            React.createElement(WidthEmitter, { editorView: editorView, contentArea: this.scrollContainer })));
    };
    Editor.displayName = 'FullPageEditor';
    return Editor;
}(React.Component));
export default Editor;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=FullPage.js.map