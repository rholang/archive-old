"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var theme_1 = require("@atlaskit/theme");
var react_intl_1 = require("react-intl");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var collapse_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/collapse"));
var expand_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/expand"));
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../ui/ToolbarButton"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var get_breakout_mode_1 = require("../utils/get-breakout-mode");
var set_breakout_mode_1 = require("../commands/set-breakout-mode");
var remove_breakout_1 = require("../commands/remove-breakout");
var index_1 = require("../index");
var messages_1 = tslib_1.__importDefault(require("../../../messages"));
var constants_1 = require("../constants");
var is_breakout_mark_allowed_1 = require("../utils/is-breakout-mark-allowed");
var B300 = theme_1.colors.B300, N300 = theme_1.colors.N300, N20A = theme_1.colors.N20A;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  button {\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n      color: white !important;\n    }\n  }\n"], ["\n  button {\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n      color: white !important;\n    }\n  }\n"])), N20A, N300, B300);
var BREAKOUT_MODE = {
    FULL_WIDTH: 'full-width',
    CENTER: 'center',
    WIDE: 'wide',
};
var getNextBreakoutMode = function (currentMode) {
    if (currentMode === BREAKOUT_MODE.FULL_WIDTH) {
        return BREAKOUT_MODE.CENTER;
    }
    else if (currentMode === BREAKOUT_MODE.WIDE) {
        return BREAKOUT_MODE.FULL_WIDTH;
    }
    return BREAKOUT_MODE.WIDE;
};
var getTitle = function (layout) {
    switch (layout) {
        case BREAKOUT_MODE.FULL_WIDTH:
            return messages_1.default.layoutFixedWidth;
        case BREAKOUT_MODE.WIDE:
            return messages_1.default.layoutFullWidth;
        default:
            return messages_1.default.layoutWide;
    }
};
var LayoutButton = /** @class */ (function (_super) {
    tslib_1.__extends(LayoutButton, _super);
    function LayoutButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (breakoutMode) { return function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            if ([BREAKOUT_MODE.WIDE, BREAKOUT_MODE.FULL_WIDTH].indexOf(breakoutMode) !==
                -1) {
                set_breakout_mode_1.setBreakoutMode(breakoutMode)(state, dispatch);
            }
            else {
                remove_breakout_1.removeBreakout()(state, dispatch);
            }
        }; };
        return _this;
    }
    LayoutButton.prototype.render = function () {
        var _a = this.props, formatMessage = _a.intl.formatMessage, mountPoint = _a.mountPoint, boundariesElement = _a.boundariesElement, scrollableElement = _a.scrollableElement, editorView = _a.editorView, node = _a.node;
        var state = editorView.state;
        if (!node || !is_breakout_mark_allowed_1.isBreakoutMarkAllowed(state)) {
            return null;
        }
        var breakoutMode = get_breakout_mode_1.getBreakoutMode(editorView.state);
        var title = formatMessage(getTitle(breakoutMode));
        var nextBreakoutMode = getNextBreakoutMode(breakoutMode);
        var selection = state.selection;
        var pluginState = index_1.getPluginState(state);
        var element = prosemirror_utils_1.findParentDomRefOfType(pluginState.breakoutNode.type, editorView.domAtPos.bind(editorView))(selection);
        var closestEl = element.querySelector("." + constants_1.BreakoutCssClassName.BREAKOUT_MARK_DOM);
        if (closestEl && closestEl.firstChild) {
            element = closestEl.firstChild;
        }
        return (React.createElement(editor_common_1.Popup, { ariaLabel: title, target: element, offset: [5, 0], alignY: "start", alignX: "end", mountTo: mountPoint, boundariesElement: boundariesElement, scrollableElement: scrollableElement, stick: true, forcePlacement: true },
            React.createElement(Wrapper, null,
                React.createElement(ToolbarButton_1.default, { title: title, onClick: this.handleClick(nextBreakoutMode), iconBefore: breakoutMode === BREAKOUT_MODE.FULL_WIDTH ? (React.createElement(collapse_1.default, { label: title })) : (React.createElement(expand_1.default, { label: title })) }))));
    };
    return LayoutButton;
}(React.Component));
exports.default = react_intl_1.injectIntl(LayoutButton);
var templateObject_1;
//# sourceMappingURL=LayoutButton.js.map