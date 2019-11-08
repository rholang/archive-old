"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var editor_common_1 = require("@atlaskit/editor-common");
var prosemirror_utils_1 = require("prosemirror-utils");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var react_intl_1 = require("react-intl");
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var styles_1 = require("../styles");
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../../ui/ToolbarButton"));
var types_1 = require("../../types");
var messages_1 = tslib_1.__importDefault(require("../../ui/messages"));
var commands_1 = require("../../commands");
var utils_1 = require("../../../../utils");
var ButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styles_1.tableFloatingCellButtonStyles);
var FloatingContextualButton = /** @class */ (function (_super) {
    tslib_1.__extends(FloatingContextualButton, _super);
    function FloatingContextualButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_1.toggleContextualMenu()(state, dispatch);
        };
        return _this;
    }
    FloatingContextualButton.prototype.render = function () {
        var _a = this.props, mountPoint = _a.mountPoint, scrollableElement = _a.scrollableElement, editorView = _a.editorView, targetCellPosition = _a.targetCellPosition, isContextualMenuOpen = _a.isContextualMenuOpen, formatMessage = _a.intl.formatMessage; //  : Props & InjectedIntlProps
        var domAtPos = editorView.domAtPos.bind(editorView);
        var targetCellRef = prosemirror_utils_1.findDomRefAtPos(targetCellPosition, domAtPos);
        if (!targetCellRef || !(targetCellRef instanceof HTMLElement)) {
            return null;
        }
        var tableWrapper = utils_1.closestElement(targetCellRef, "." + types_1.TableCssClassName.TABLE_NODE_WRAPPER);
        var labelCellOptions = formatMessage(messages_1.default.cellOptions);
        return (React.createElement(editor_common_1.Popup, { alignX: "right", alignY: "start", target: targetCellRef, mountTo: tableWrapper || mountPoint, boundariesElement: targetCellRef, scrollableElement: scrollableElement, offset: [3, -3], forcePlacement: true, allowOutOfBounds: true },
            React.createElement(ButtonWrapper, null,
                React.createElement(ToolbarButton_1.default, { className: types_1.TableCssClassName.CONTEXTUAL_MENU_BUTTON, selected: isContextualMenuOpen, title: labelCellOptions, onClick: this.handleClick, iconBefore: React.createElement(chevron_down_1.default, { label: labelCellOptions }) }))));
    };
    FloatingContextualButton.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.targetCellPosition !== nextProps.targetCellPosition ||
            this.props.layout !== nextProps.layout ||
            this.props.isContextualMenuOpen !== nextProps.isContextualMenuOpen);
    };
    return FloatingContextualButton;
}(React.Component));
exports.default = react_intl_1.injectIntl(FloatingContextualButton);
var templateObject_1;
//# sourceMappingURL=index.js.map