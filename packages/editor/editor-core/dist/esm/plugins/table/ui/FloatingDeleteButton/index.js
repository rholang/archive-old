import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { Popup } from '@atlaskit/editor-common';
import { CellSelection } from 'prosemirror-tables';
import { getSelectionRect, isTableSelected } from 'prosemirror-utils';
import { closestElement } from '../../../../utils';
import { INPUT_METHOD } from '../../../analytics';
import { clearHoverSelection, hoverColumns, hoverRows } from '../../commands';
import { deleteColumnsWithAnalytics, deleteRowsWithAnalytics, } from '../../commands-with-analytics';
import { getPluginState as getTablePluginState } from '../../pm-plugins/main';
import { TableCssClassName as ClassName } from '../../types';
import { getColumnDeleteButtonParams, getColumnsWidths, getRowDeleteButtonParams, getRowHeights, } from '../../utils';
import tableMessages from '../messages';
import DeleteButton from './DeleteButton';
import getPopupOptions from './getPopUpOptions';
export function getSelectionType(selection) {
    if (!isTableSelected(selection) && selection instanceof CellSelection) {
        if (selection.isRowSelection()) {
            return 'row';
        }
        if (selection.isColSelection()) {
            return 'column';
        }
    }
    return;
}
var FloatingDeleteButton = /** @class */ (function (_super) {
    __extends(FloatingDeleteButton, _super);
    function FloatingDeleteButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseEnter = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            switch (_this.state.selectionType) {
                case 'row': {
                    return hoverRows(_this.state.indexes, true)(state, dispatch, _this.props.editorView);
                }
                case 'column': {
                    return hoverColumns(_this.state.indexes, true)(state, dispatch, _this.props.editorView);
                }
            }
            return false;
        };
        _this.handleMouseLeave = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            return clearHoverSelection()(state, dispatch);
        };
        /**
         *
         *
         * @private
         * @memberof FloatingDeleteButton
         */
        _this.handleClick = function () {
            var _a;
            var _b = _this.props.editorView, state = _b.state, dispatch = _b.dispatch;
            var isHeaderRowRequired = getTablePluginState(state).pluginConfig.isHeaderRowRequired;
            var rect = getSelectionRect(state.selection);
            if (rect) {
                switch (_this.state.selectionType) {
                    case 'column': {
                        deleteColumnsWithAnalytics(INPUT_METHOD.BUTTON, rect)(state, dispatch);
                        return;
                    }
                    case 'row': {
                        deleteRowsWithAnalytics(INPUT_METHOD.BUTTON, rect, !!isHeaderRowRequired)(state, dispatch);
                        return;
                    }
                }
            }
            (_a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch);
            clearHoverSelection()(state, dispatch);
        };
        _this.state = {
            selectionType: undefined,
            top: 0,
            left: 0,
            indexes: [],
        };
        return _this;
    }
    FloatingDeleteButton.prototype.shouldComponentUpdate = function (_, nextState) {
        return (this.state.selectionType !== nextState.selectionType ||
            this.state.left !== nextState.left ||
            this.state.top !== nextState.top);
    };
    /**
     * We derivate the button state from the properties passed.
     * We do this in here because we need this information in different places
     * and this prevent to do multiple width calculations in the same component.
     */
    FloatingDeleteButton.getDerivedStateFromProps = function (nextProps, prevState) {
        var selectionType = getSelectionType(nextProps.selection);
        if (selectionType) {
            switch (selectionType) {
                case 'column': {
                    // Calculate the button position and indexes for columns
                    var columnsWidths = getColumnsWidths(nextProps.editorView);
                    var deleteBtnParams = getColumnDeleteButtonParams(columnsWidths, nextProps.editorView.state.selection);
                    if (deleteBtnParams) {
                        return __assign(__assign({}, deleteBtnParams), { top: 0, selectionType: selectionType });
                    }
                    return null;
                }
                case 'row': {
                    // Calculate the button position and indexes for rows
                    if (nextProps.tableRef) {
                        var rowHeights = getRowHeights(nextProps.tableRef);
                        var deleteBtnParams = getRowDeleteButtonParams(rowHeights, nextProps.editorView.state.selection);
                        if (deleteBtnParams) {
                            return __assign(__assign({}, deleteBtnParams), { left: 0, selectionType: selectionType });
                        }
                    }
                    return null;
                }
            }
        }
        // Clean state if no type
        if (prevState.selectionType !== selectionType) {
            return {
                selectionType: undefined,
                top: 0,
                left: 0,
                indexes: [],
            };
        }
        // Do nothing if doesn't change anything
        return null;
    };
    FloatingDeleteButton.prototype.render = function () {
        var _a = this.props, mountPoint = _a.mountPoint, boundariesElement = _a.boundariesElement, tableRef = _a.tableRef;
        var selectionType = this.state.selectionType;
        if (!selectionType || !tableRef) {
            return null;
        }
        var tableContainerWrapper = closestElement(tableRef, "." + ClassName.TABLE_CONTAINER);
        var tableWrapper = closestElement(tableRef, "." + ClassName.TABLE_NODE_WRAPPER);
        return (React.createElement(Popup, __assign({ target: tableRef, mountTo: tableContainerWrapper || mountPoint, boundariesElement: tableContainerWrapper || boundariesElement, scrollableElement: tableWrapper, forcePlacement: true, allowOutOfBounds: true }, getPopupOptions({
            left: this.state.left,
            top: this.state.top,
            selectionType: this.state.selectionType,
            tableWrapper: tableWrapper,
        })),
            React.createElement(DeleteButton, { removeLabel: selectionType === 'column'
                    ? tableMessages.removeColumns
                    : tableMessages.removeRows, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave })));
    };
    return FloatingDeleteButton;
}(Component));
export default FloatingDeleteButton;
//# sourceMappingURL=index.js.map