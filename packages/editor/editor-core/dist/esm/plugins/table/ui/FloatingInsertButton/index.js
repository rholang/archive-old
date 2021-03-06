import { __assign, __extends } from "tslib";
import * as React from 'react';
import { injectIntl } from 'react-intl';
import { findDomRefAtPos, findTable } from 'prosemirror-utils';
import { TableMap, CellSelection } from 'prosemirror-tables';
import { Popup } from '@atlaskit/editor-common';
import { TableCssClassName as ClassName } from '../../types';
import InsertButton from './InsertButton';
import { closestElement } from '../../../../utils';
import { INPUT_METHOD } from '../../../analytics';
import { insertColumnWithAnalytics, insertRowWithAnalytics, } from '../../commands-with-analytics';
import getPopupOptions from './getPopupOptions';
import { checkIfNumberColumnEnabled } from '../../utils';
var FloatingInsertButton = /** @class */ (function (_super) {
    __extends(FloatingInsertButton, _super);
    function FloatingInsertButton(props) {
        var _this = _super.call(this, props) || this;
        _this.insertColumn = _this.insertColumn.bind(_this);
        _this.insertRow = _this.insertRow.bind(_this);
        return _this;
    }
    FloatingInsertButton.prototype.render = function () {
        var _a = this.props, tableNode = _a.tableNode, editorView = _a.editorView, insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex, tableRef = _a.tableRef, mountPoint = _a.mountPoint, boundariesElement = _a.boundariesElement, isHeaderColumnEnabled = _a.isHeaderColumnEnabled, isHeaderRowEnabled = _a.isHeaderRowEnabled;
        var type = typeof insertColumnButtonIndex !== 'undefined'
            ? 'column'
            : typeof insertRowButtonIndex !== 'undefined'
                ? 'row'
                : null;
        if (!tableNode || !tableRef || !type) {
            return null;
        }
        // We can’t display the insert button for row|colum index 0
        // when the header row|colum is enabled, this feature will be change on the future
        if ((type === 'column' &&
            isHeaderColumnEnabled &&
            insertColumnButtonIndex === 0) ||
            (type === 'row' && isHeaderRowEnabled && insertRowButtonIndex === 0)) {
            return null;
        }
        var tr = editorView.state.tr;
        if (tr.selection instanceof CellSelection &&
            (tr.selection.isColSelection() ||
                tr.selection.isRowSelection())) {
            return null;
        }
        var cellPosition = this.getCellPosition(type);
        if (!cellPosition) {
            return null;
        }
        var tablePos = findTable(editorView.state.selection);
        if (!tablePos) {
            return null;
        }
        var domAtPos = editorView.domAtPos.bind(editorView);
        var pos = cellPosition + tablePos.start + 1;
        var target = findDomRefAtPos(pos, domAtPos);
        if (!target || !(target instanceof HTMLElement)) {
            return null;
        }
        var targetCellRef = type === 'row'
            ? closestElement(target, 'tr')
            : closestElement(target, 'td, th');
        if (!targetCellRef) {
            return null;
        }
        var tableContainerWrapper = closestElement(targetCellRef, "." + ClassName.TABLE_CONTAINER);
        var tableWrapper = closestElement(targetCellRef, "." + ClassName.TABLE_NODE_WRAPPER);
        var index = type === 'column' ? insertColumnButtonIndex : insertRowButtonIndex;
        var hasNumberedColumns = checkIfNumberColumnEnabled(editorView.state);
        return (React.createElement(Popup, __assign({ target: targetCellRef, mountTo: tableContainerWrapper || mountPoint, boundariesElement: tableContainerWrapper || boundariesElement, scrollableElement: tableWrapper, forcePlacement: true, allowOutOfBounds: true }, getPopupOptions(type, index, hasNumberedColumns, tableContainerWrapper)),
            React.createElement(InsertButton, { type: type, tableRef: tableRef, onMouseDown: type === 'column' ? this.insertColumn : this.insertRow })));
    };
    FloatingInsertButton.prototype.getCellPosition = function (type) {
        var _a = this.props, tableNode = _a.tableNode, insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex;
        var tableMap = TableMap.get(tableNode);
        if (type === 'column') {
            var columnIndex = insertColumnButtonIndex === 0 ? 0 : insertColumnButtonIndex - 1;
            if (columnIndex > tableMap.width - 1) {
                return null;
            }
            return tableMap.positionAt(0, columnIndex, tableNode);
        }
        else {
            var rowIndex = insertRowButtonIndex === 0 ? 0 : insertRowButtonIndex - 1;
            if (rowIndex > tableMap.height - 1) {
                return null;
            }
            return tableMap.positionAt(rowIndex, 0, tableNode);
        }
    };
    FloatingInsertButton.prototype.insertRow = function (event) {
        var _a = this.props, editorView = _a.editorView, insertRowButtonIndex = _a.insertRowButtonIndex;
        if (typeof insertRowButtonIndex !== 'undefined') {
            event.preventDefault();
            var state = editorView.state, dispatch = editorView.dispatch;
            insertRowWithAnalytics(INPUT_METHOD.BUTTON, insertRowButtonIndex)(state, dispatch);
        }
    };
    FloatingInsertButton.prototype.insertColumn = function (event) {
        var _a = this.props, editorView = _a.editorView, insertColumnButtonIndex = _a.insertColumnButtonIndex;
        if (typeof insertColumnButtonIndex !== 'undefined') {
            event.preventDefault();
            var state = editorView.state, dispatch = editorView.dispatch;
            insertColumnWithAnalytics(INPUT_METHOD.BUTTON, insertColumnButtonIndex)(state, dispatch);
        }
    };
    return FloatingInsertButton;
}(React.Component));
export default injectIntl(FloatingInsertButton);
//# sourceMappingURL=index.js.map