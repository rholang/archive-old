"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var commands_1 = require("../../../commands");
/**
 * Fills the visible viewport height so that it can filter
 * clicks/taps within or below the content (e.g. if the content
 * doesn't exceed the viewport, or whether it overflows it).
 */
var ClickWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  /*\n    100vh exceeds the visible viewport because it doesn't account\n    for contextually available browser chrome (address bar, footer).\n    80vh was chosen as a compromise, as it fills the majority of the\n    visible viewport, without causing overflow (which would negatively\n    impact various calculations).\n  */\n  height: 100%;\n  min-height: 80vh;\n"], ["\n  /*\n    100vh exceeds the visible viewport because it doesn't account\n    for contextually available browser chrome (address bar, footer).\n    80vh was chosen as a compromise, as it fills the majority of the\n    visible viewport, without causing overflow (which would negatively\n    impact various calculations).\n  */\n  height: 100%;\n  min-height: 80vh;\n"])));
ClickWrapper.displayName = 'ClickWrapper';
/**
 * Click Area is responsible for improving UX by ensuring the user
 * can always tap beneath the content area, to insert more content.
 *
 * This is achieved by inserting a new empty paragraph at the end of
 * the document (if one doesn't already exist).
 *
 * This is particularly important when the content exceeds the visible
 * viewport height, and if the last content node captures text selection
 * e.g. table, layouts, codeblock, etc.
 *
 * This relies on the Scroll Gutter plugin which inserts addtional
 * whitespace at the end of the document when it overflows the viewport.
 */
var ClickAreaMobile = /** @class */ (function (_super) {
    tslib_1.__extends(ClickAreaMobile, _super);
    function ClickAreaMobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickElementRef = React.createRef();
        _this.handleClick = function (event) {
            var view = _this.props.editorView;
            if (!view)
                return;
            // The scroll gutter plugin's element sits beneath the editor so any clicks lower
            // than the bottom of the editor can be considered suitable for inserttion and refocusing.
            var scrollGutterClicked = event.clientY > view.dom.getBoundingClientRect().bottom;
            if (scrollGutterClicked) {
                event.preventDefault();
                event.stopPropagation();
                // Refocus the editor. We know it's lost focus because the click was beneath it.
                view.focus();
                // Insert an empty paragraph at the end of the document (if one doesn't already exist).
                // This allows the user to tap beneath the previously last content node.
                // It's useful if the last node captures text selection (e.g. table, layout, codeblock).
                commands_1.createParagraphAtEnd()(view.state, view.dispatch);
                // Reset the default prosemirror scrollIntoView logic by
                // clamping the scroll position to the bottom of the viewport.
                if (_this.clickElementRef.current)
                    _this.clickElementRef.current.scrollIntoView(false);
            }
        };
        return _this;
    }
    ClickAreaMobile.prototype.render = function () {
        return (React.createElement(ClickWrapper, { className: "editor-click-wrapper", onClick: this.handleClick, innerRef: this.clickElementRef }, this.props.children));
    };
    return ClickAreaMobile;
}(React.Component));
exports.default = ClickAreaMobile;
var templateObject_1;
//# sourceMappingURL=index.js.map