"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var prosemirror_tables_1 = require("prosemirror-tables");
var theme_1 = require("@atlaskit/theme");
var transforms_1 = require("../../transforms");
var main_1 = require("../../pm-plugins/main");
var commands_1 = require("../../commands");
var types_1 = require("../../types");
var styles_1 = require("../styles");
var styles_2 = require("../../../../ui/styles");
var DropdownMenu_1 = tslib_1.__importDefault(require("../../../../ui/DropdownMenu"));
var ColorPalette_1 = tslib_1.__importDefault(require("../../../../ui/ColorPalette"));
var messages_1 = tslib_1.__importDefault(require("../messages"));
var analytics_1 = require("../../../analytics");
var commands_with_analytics_1 = require("../../commands-with-analytics");
var utils_1 = require("../../../../utils");
var utils_2 = require("../../utils");
var keymaps_1 = require("../../../../keymaps");
var cellBackgroundColorPalette_1 = tslib_1.__importDefault(require("../../../../ui/ColorPalette/Palettes/cellBackgroundColorPalette"));
exports.messages = react_intl_1.defineMessages({
    cellBackground: {
        id: 'fabric.editor.cellBackground',
        defaultMessage: 'Cell background',
        description: 'Change the background color of a table cell.',
    },
    mergeCells: {
        id: 'fabric.editor.mergeCells',
        defaultMessage: 'Merge cells',
        description: 'Merge tables cells together.',
    },
    splitCell: {
        id: 'fabric.editor.splitCell',
        defaultMessage: 'Split cell',
        description: 'Split a merged table cell.',
    },
    clearCells: {
        id: 'fabric.editor.clearCells',
        defaultMessage: 'Clear {0, plural, one {cell} other {cells}}',
        description: 'Clears the contents of the selected cells (this does not delete the cells themselves).',
    },
    sortColumnASC: {
        id: 'fabric.editor.sortColumnASC',
        defaultMessage: 'Sort column A → Z',
        description: 'Sort column in ascending order',
    },
    sortColumnDESC: {
        id: 'fabric.editor.sortColumnDESC',
        defaultMessage: 'Sort column Z → A',
        description: 'Sort column in descending order',
    },
    canNotSortTable: {
        id: 'fabric.editor.canNotSortTable',
        defaultMessage: "\u26A0\uFE0F You can't sort a table with merged cells",
        description: "Split your cells to enable this feature",
    },
});
var ContextualMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenu, _super);
    function ContextualMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isSubmenuOpen: false,
        };
        _this.handleSubMenuRef = function (ref) {
            var parent = utils_1.closestElement(_this.props.editorView.dom, '.fabric-editor-popup-scroll-parent');
            if (!(parent && ref)) {
                return;
            }
            var boundariesRect = parent.getBoundingClientRect();
            var rect = ref.getBoundingClientRect();
            if (rect.left + rect.width > boundariesRect.width) {
                ref.style.left = "-" + rect.width + "px";
            }
        };
        _this.createItems = function () {
            var _a = _this.props, allowMergeCells = _a.allowMergeCells, allowColumnSorting = _a.allowColumnSorting, allowBackgroundColor = _a.allowBackgroundColor, state = _a.editorView.state, targetCellPosition = _a.targetCellPosition, isOpen = _a.isOpen, selectionRect = _a.selectionRect, formatMessage = _a.intl.formatMessage;
            var items = [];
            var isSubmenuOpen = _this.state.isSubmenuOpen;
            if (allowBackgroundColor) {
                var node = isOpen && targetCellPosition
                    ? state.doc.nodeAt(targetCellPosition)
                    : null;
                var background = node && node.attrs.background ? node.attrs.background : '#ffffff';
                items.push({
                    content: formatMessage(exports.messages.cellBackground),
                    value: { name: 'background' },
                    elemAfter: (React.createElement("div", null,
                        React.createElement("div", { className: types_1.TableCssClassName.CONTEXTUAL_MENU_ICON, style: { background: background } }),
                        isSubmenuOpen && (React.createElement("div", { className: types_1.TableCssClassName.CONTEXTUAL_SUBMENU, ref: _this.handleSubMenuRef },
                            React.createElement(ColorPalette_1.default, { cols: 7, palette: cellBackgroundColorPalette_1.default, onClick: _this.setColor, selectedColor: background, checkMarkColor: theme_1.colors.N500 }))))),
                });
            }
            items.push({
                content: formatMessage(messages_1.default.insertColumn),
                value: { name: 'insert_column' },
                elemAfter: React.createElement(styles_2.Shortcut, null, keymaps_1.tooltip(keymaps_1.addColumnAfter)),
            });
            items.push({
                content: formatMessage(messages_1.default.insertRow),
                value: { name: 'insert_row' },
                elemAfter: React.createElement(styles_2.Shortcut, null, keymaps_1.tooltip(keymaps_1.addRowAfter)),
            });
            var top = selectionRect.top, bottom = selectionRect.bottom, right = selectionRect.right, left = selectionRect.left;
            var noOfColumns = right - left;
            var noOfRows = bottom - top;
            items.push({
                content: formatMessage(messages_1.default.removeColumns, {
                    0: noOfColumns,
                }),
                value: { name: 'delete_column' },
            });
            items.push({
                content: formatMessage(messages_1.default.removeRows, {
                    0: noOfRows,
                }),
                value: { name: 'delete_row' },
            });
            if (allowMergeCells) {
                items.push({
                    content: formatMessage(exports.messages.mergeCells),
                    value: { name: 'merge' },
                    isDisabled: !transforms_1.canMergeCells(state.tr),
                });
                items.push({
                    content: formatMessage(exports.messages.splitCell),
                    value: { name: 'split' },
                    isDisabled: !prosemirror_tables_1.splitCell(state),
                });
            }
            if (allowColumnSorting) {
                var hasMergedCellsInTable = utils_2.getMergedCellsPositions(state.tr).length > 0;
                var warning = hasMergedCellsInTable
                    ? {
                        tooltipDescription: formatMessage(exports.messages.canNotSortTable),
                        isDisabled: true,
                    }
                    : {};
                items.push(tslib_1.__assign({ content: formatMessage(exports.messages.sortColumnASC), value: { name: 'sort_column_asc' } }, warning));
                items.push(tslib_1.__assign({ content: formatMessage(exports.messages.sortColumnDESC), value: { name: 'sort_column_desc' } }, warning));
            }
            items.push({
                content: formatMessage(exports.messages.clearCells, {
                    0: Math.max(noOfColumns, noOfRows),
                }),
                value: { name: 'clear' },
                elemAfter: React.createElement(styles_2.Shortcut, null, keymaps_1.tooltip(keymaps_1.backspace)),
            });
            return items.length ? [{ items: items }] : null;
        };
        _this.onMenuItemActivated = function (_a) {
            var item = _a.item;
            var _b = _this.props, editorView = _b.editorView, selectionRect = _b.selectionRect, targetCellPosition = _b.targetCellPosition;
            var state = editorView.state, dispatch = editorView.dispatch;
            switch (item.value.name) {
                case 'sort_column_desc':
                    commands_with_analytics_1.sortColumnWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, selectionRect.left, types_1.SortOrder.DESC)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'sort_column_asc':
                    commands_with_analytics_1.sortColumnWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, selectionRect.left, types_1.SortOrder.ASC)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'merge':
                    commands_with_analytics_1.mergeCellsWithAnalytics()(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'split':
                    commands_with_analytics_1.splitCellWithAnalytics()(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'clear':
                    commands_with_analytics_1.emptyMultipleCellsWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, targetCellPosition)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'insert_column':
                    commands_with_analytics_1.insertColumnWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, selectionRect.right)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'insert_row':
                    commands_with_analytics_1.insertRowWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, selectionRect.bottom)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'delete_column':
                    commands_with_analytics_1.deleteColumnsWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, selectionRect)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'delete_row':
                    var isHeaderRowRequired = main_1.getPluginState(state).pluginConfig.isHeaderRowRequired;
                    commands_with_analytics_1.deleteRowsWithAnalytics(analytics_1.INPUT_METHOD.CONTEXT_MENU, selectionRect, !!isHeaderRowRequired)(state, dispatch);
                    _this.toggleOpen();
                    break;
            }
        };
        _this.toggleOpen = function () {
            var _a = _this.props, isOpen = _a.isOpen, _b = _a.editorView, state = _b.state, dispatch = _b.dispatch;
            commands_1.toggleContextualMenu()(state, dispatch);
            if (!isOpen) {
                _this.setState({
                    isSubmenuOpen: false,
                });
            }
        };
        _this.handleOpenChange = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_1.toggleContextualMenu()(state, dispatch);
            _this.setState({ isSubmenuOpen: false });
        };
        _this.handleItemMouseEnter = function (_a) {
            var item = _a.item;
            var _b = _this.props, _c = _b.editorView, state = _c.state, dispatch = _c.dispatch, selectionRect = _b.selectionRect;
            if (item.value.name === 'background') {
                if (!_this.state.isSubmenuOpen) {
                    _this.setState({ isSubmenuOpen: true });
                }
            }
            if (item.value.name === 'delete_column') {
                commands_1.hoverColumns(utils_2.getSelectedColumnIndexes(selectionRect), true)(state, dispatch);
            }
            if (item.value.name === 'delete_row') {
                commands_1.hoverRows(utils_2.getSelectedRowIndexes(selectionRect), true)(state, dispatch);
            }
            if (['sort_column_asc', 'sort_column_desc'].indexOf(item.value.name) > -1 &&
                utils_2.getMergedCellsPositions(state.tr).length !== 0) {
                commands_1.hoverMergedCells()(state, dispatch);
            }
        };
        _this.handleItemMouseLeave = function (_a) {
            var item = _a.item;
            var _b = _this.props.editorView, state = _b.state, dispatch = _b.dispatch;
            if (item.value.name === 'background') {
                _this.closeSubmenu();
            }
            if ([
                'sort_column_asc',
                'sort_column_desc',
                'delete_column',
                'delete_row',
            ].indexOf(item.value.name) > -1) {
                commands_1.clearHoverSelection()(state, dispatch);
            }
        };
        _this.closeSubmenu = function () {
            if (_this.state.isSubmenuOpen) {
                _this.setState({ isSubmenuOpen: false });
            }
        };
        _this.setColor = function (color) {
            var _a = _this.props, targetCellPosition = _a.targetCellPosition, editorView = _a.editorView;
            var state = editorView.state, dispatch = editorView.dispatch;
            commands_with_analytics_1.setColorWithAnalytics(color, targetCellPosition)(state, dispatch);
            _this.toggleOpen();
        };
        return _this;
    }
    ContextualMenu.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, mountPoint = _a.mountPoint, offset = _a.offset, boundariesElement = _a.boundariesElement;
        var items = this.createItems();
        if (!items) {
            return null;
        }
        return (React.createElement("div", { onMouseLeave: this.closeSubmenu },
            React.createElement(DropdownMenu_1.default, { mountTo: mountPoint, items: items, isOpen: isOpen, onOpenChange: this.handleOpenChange, onItemActivated: this.onMenuItemActivated, onMouseEnter: this.handleItemMouseEnter, onMouseLeave: this.handleItemMouseLeave, fitHeight: 188, fitWidth: styles_1.contextualMenuDropdownWidth, boundariesElement: boundariesElement, offset: offset })));
    };
    ContextualMenu.defaultProps = {
        boundariesElement: document.body,
    };
    return ContextualMenu;
}(react_1.Component));
exports.default = react_intl_1.injectIntl(ContextualMenu);
//# sourceMappingURL=ContextualMenu.js.map