import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { splitCell } from 'prosemirror-tables';
import { colors } from '@atlaskit/theme';
import { canMergeCells } from '../../transforms';
import { getPluginState } from '../../pm-plugins/main';
import { hoverMergedCells, hoverColumns, hoverRows, clearHoverSelection, toggleContextualMenu, } from '../../commands';
import { TableCssClassName as ClassName, SortOrder } from '../../types';
import { contextualMenuDropdownWidth } from '../styles';
import { Shortcut } from '../../../../ui/styles';
import DropdownMenu from '../../../../ui/DropdownMenu';
import ColorPalette from '../../../../ui/ColorPalette';
import tableMessages from '../messages';
import { INPUT_METHOD } from '../../../analytics';
import { setColorWithAnalytics, deleteRowsWithAnalytics, deleteColumnsWithAnalytics, insertRowWithAnalytics, mergeCellsWithAnalytics, splitCellWithAnalytics, emptyMultipleCellsWithAnalytics, insertColumnWithAnalytics, sortColumnWithAnalytics, } from '../../commands-with-analytics';
import { closestElement } from '../../../../utils';
import { getMergedCellsPositions, getSelectedColumnIndexes, getSelectedRowIndexes, } from '../../utils';
import { tooltip, addColumnAfter, addRowAfter, backspace, } from '../../../../keymaps';
import cellBackgroundColorPalette from '../../../../ui/ColorPalette/Palettes/cellBackgroundColorPalette';
export var messages = defineMessages({
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
    __extends(ContextualMenu, _super);
    function ContextualMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isSubmenuOpen: false,
        };
        _this.handleSubMenuRef = function (ref) {
            var parent = closestElement(_this.props.editorView.dom, '.fabric-editor-popup-scroll-parent');
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
                    content: formatMessage(messages.cellBackground),
                    value: { name: 'background' },
                    elemAfter: (React.createElement("div", null,
                        React.createElement("div", { className: ClassName.CONTEXTUAL_MENU_ICON, style: { background: background } }),
                        isSubmenuOpen && (React.createElement("div", { className: ClassName.CONTEXTUAL_SUBMENU, ref: _this.handleSubMenuRef },
                            React.createElement(ColorPalette, { cols: 7, palette: cellBackgroundColorPalette, onClick: _this.setColor, selectedColor: background, checkMarkColor: colors.N500 }))))),
                });
            }
            items.push({
                content: formatMessage(tableMessages.insertColumn),
                value: { name: 'insert_column' },
                elemAfter: React.createElement(Shortcut, null, tooltip(addColumnAfter)),
            });
            items.push({
                content: formatMessage(tableMessages.insertRow),
                value: { name: 'insert_row' },
                elemAfter: React.createElement(Shortcut, null, tooltip(addRowAfter)),
            });
            var top = selectionRect.top, bottom = selectionRect.bottom, right = selectionRect.right, left = selectionRect.left;
            var noOfColumns = right - left;
            var noOfRows = bottom - top;
            items.push({
                content: formatMessage(tableMessages.removeColumns, {
                    0: noOfColumns,
                }),
                value: { name: 'delete_column' },
            });
            items.push({
                content: formatMessage(tableMessages.removeRows, {
                    0: noOfRows,
                }),
                value: { name: 'delete_row' },
            });
            if (allowMergeCells) {
                items.push({
                    content: formatMessage(messages.mergeCells),
                    value: { name: 'merge' },
                    isDisabled: !canMergeCells(state.tr),
                });
                items.push({
                    content: formatMessage(messages.splitCell),
                    value: { name: 'split' },
                    isDisabled: !splitCell(state),
                });
            }
            if (allowColumnSorting) {
                var hasMergedCellsInTable = getMergedCellsPositions(state.tr).length > 0;
                var warning = hasMergedCellsInTable
                    ? {
                        tooltipDescription: formatMessage(messages.canNotSortTable),
                        isDisabled: true,
                    }
                    : {};
                items.push(__assign({ content: formatMessage(messages.sortColumnASC), value: { name: 'sort_column_asc' } }, warning));
                items.push(__assign({ content: formatMessage(messages.sortColumnDESC), value: { name: 'sort_column_desc' } }, warning));
            }
            items.push({
                content: formatMessage(messages.clearCells, {
                    0: Math.max(noOfColumns, noOfRows),
                }),
                value: { name: 'clear' },
                elemAfter: React.createElement(Shortcut, null, tooltip(backspace)),
            });
            return items.length ? [{ items: items }] : null;
        };
        _this.onMenuItemActivated = function (_a) {
            var item = _a.item;
            var _b = _this.props, editorView = _b.editorView, selectionRect = _b.selectionRect, targetCellPosition = _b.targetCellPosition;
            var state = editorView.state, dispatch = editorView.dispatch;
            switch (item.value.name) {
                case 'sort_column_desc':
                    sortColumnWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect.left, SortOrder.DESC)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'sort_column_asc':
                    sortColumnWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect.left, SortOrder.ASC)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'merge':
                    mergeCellsWithAnalytics()(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'split':
                    splitCellWithAnalytics()(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'clear':
                    emptyMultipleCellsWithAnalytics(INPUT_METHOD.CONTEXT_MENU, targetCellPosition)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'insert_column':
                    insertColumnWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect.right)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'insert_row':
                    insertRowWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect.bottom)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'delete_column':
                    deleteColumnsWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect)(state, dispatch);
                    _this.toggleOpen();
                    break;
                case 'delete_row':
                    var isHeaderRowRequired = getPluginState(state).pluginConfig.isHeaderRowRequired;
                    deleteRowsWithAnalytics(INPUT_METHOD.CONTEXT_MENU, selectionRect, !!isHeaderRowRequired)(state, dispatch);
                    _this.toggleOpen();
                    break;
            }
        };
        _this.toggleOpen = function () {
            var _a = _this.props, isOpen = _a.isOpen, _b = _a.editorView, state = _b.state, dispatch = _b.dispatch;
            toggleContextualMenu()(state, dispatch);
            if (!isOpen) {
                _this.setState({
                    isSubmenuOpen: false,
                });
            }
        };
        _this.handleOpenChange = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            toggleContextualMenu()(state, dispatch);
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
                hoverColumns(getSelectedColumnIndexes(selectionRect), true)(state, dispatch);
            }
            if (item.value.name === 'delete_row') {
                hoverRows(getSelectedRowIndexes(selectionRect), true)(state, dispatch);
            }
            if (['sort_column_asc', 'sort_column_desc'].indexOf(item.value.name) > -1 &&
                getMergedCellsPositions(state.tr).length !== 0) {
                hoverMergedCells()(state, dispatch);
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
                clearHoverSelection()(state, dispatch);
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
            setColorWithAnalytics(color, targetCellPosition)(state, dispatch);
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
            React.createElement(DropdownMenu, { mountTo: mountPoint, items: items, isOpen: isOpen, onOpenChange: this.handleOpenChange, onItemActivated: this.onMenuItemActivated, onMouseEnter: this.handleItemMouseEnter, onMouseLeave: this.handleItemMouseLeave, fitHeight: 188, fitWidth: contextualMenuDropdownWidth, boundariesElement: boundariesElement, offset: offset })));
    };
    ContextualMenu.defaultProps = {
        boundariesElement: document.body,
    };
    return ContextualMenu;
}(Component));
export default injectIntl(ContextualMenu);
//# sourceMappingURL=ContextualMenu.js.map