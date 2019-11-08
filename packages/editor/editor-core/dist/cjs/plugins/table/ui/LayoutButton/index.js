"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var editor_common_1 = require("@atlaskit/editor-common");
var expand_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/expand"));
var collapse_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/collapse"));
var messages_1 = tslib_1.__importDefault(require("../../../../messages"));
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../../ui/ToolbarButton"));
var types_1 = require("../../types");
var commands_with_analytics_1 = require("../../commands-with-analytics");
var POPUP_OFFSET = [
    0,
    // -22 pixels to align y position with
    // the columns controls
    -22,
];
var getTitle = function (layout) {
    switch (layout) {
        case 'default':
            return messages_1.default.layoutWide;
        case 'wide':
            return messages_1.default.layoutFullWidth;
        default:
            return messages_1.default.layoutFixedWidth;
    }
};
var LayoutButton = /** @class */ (function (_super) {
    tslib_1.__extends(LayoutButton, _super);
    function LayoutButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_with_analytics_1.toggleTableLayoutWithAnalytics()(state, dispatch);
        };
        return _this;
    }
    LayoutButton.prototype.render = function () {
        var _a;
        var _b = this.props, formatMessage = _b.intl.formatMessage, mountPoint = _b.mountPoint, boundariesElement = _b.boundariesElement, scrollableElement = _b.scrollableElement, targetRef = _b.targetRef, isResizing = _b.isResizing, _c = _b.layout, layout = _c === void 0 ? 'default' : _c;
        if (!targetRef) {
            return null;
        }
        var title = formatMessage(getTitle(layout));
        return (React.createElement(editor_common_1.Popup, { ariaLabel: title, offset: POPUP_OFFSET, target: targetRef, alignY: "start", alignX: "end", stick: true, mountTo: mountPoint, boundariesElement: boundariesElement, scrollableElement: scrollableElement, forcePlacement: true },
            React.createElement("div", { className: classnames_1.default(types_1.TableCssClassName.LAYOUT_BUTTON, (_a = {},
                    _a[types_1.TableCssClassName.IS_RESIZING] = isResizing,
                    _a)) },
                React.createElement(ToolbarButton_1.default, { title: title, onClick: this.handleClick, iconBefore: layout === 'full-width' ? (React.createElement(collapse_1.default, { label: title })) : (React.createElement(expand_1.default, { label: title })) }))));
    };
    LayoutButton.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.targetRef !== nextProps.targetRef ||
            this.props.layout !== nextProps.layout ||
            this.props.isResizing !== nextProps.isResizing);
    };
    return LayoutButton;
}(React.Component));
exports.default = react_intl_1.injectIntl(LayoutButton);
//# sourceMappingURL=index.js.map