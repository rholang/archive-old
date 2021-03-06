import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { isRowSelected } from 'prosemirror-utils';
import { Selection } from 'prosemirror-state';
import { clearHoverSelection } from '../../../commands';
import { TableCssClassName as ClassName } from '../../../types';
var NumberColumn = /** @class */ (function (_super) {
    __extends(NumberColumn, _super);
    function NumberColumn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverRows = function (index) {
            return _this.props.tableActive ? _this.props.hoverRows([index]) : null;
        };
        _this.selectRow = function (index, event) {
            var _a = _this.props, tableActive = _a.tableActive, editorView = _a.editorView, selectRow = _a.selectRow;
            // If selection is outside the table then first reset the selection inside table
            if (!tableActive && event.target && event.target instanceof Node) {
                var _b = editorView.state, doc = _b.doc, selection = _b.selection, tr = _b.tr;
                var pos = editorView.posAtDOM(event.target, 1);
                var $pos = doc.resolve(pos);
                var newPos = selection.head > pos
                    ? // Selection is after table
                        // nodeSize - 3 will move the position inside last table cell
                        Selection.near(doc.resolve(pos + ($pos.parent.nodeSize - 3)), -1)
                    : // Selection is before table
                        Selection.near($pos);
                editorView.dispatch(tr.setSelection(newPos));
            }
            selectRow(index, event.shiftKey);
        };
        _this.clearHoverSelection = function () {
            var _a = _this.props, tableActive = _a.tableActive, editorView = _a.editorView;
            if (tableActive) {
                var state = editorView.state, dispatch = editorView.dispatch;
                clearHoverSelection()(state, dispatch);
            }
        };
        _this.getClassNames = function (index) {
            var _a = _this.props, hoveredRows = _a.hoveredRows, editorView = _a.editorView, isInDanger = _a.isInDanger, isResizing = _a.isResizing;
            var isActive = isRowSelected(index)(editorView.state.selection) ||
                ((hoveredRows || []).indexOf(index) !== -1 && !isResizing);
            return [
                ClassName.NUMBERED_COLUMN_BUTTON,
                isActive ? ClassName.HOVERED_CELL_ACTIVE : '',
                isActive && isInDanger ? ClassName.HOVERED_CELL_IN_DANGER : '',
            ].join(' ');
        };
        return _this;
    }
    NumberColumn.prototype.render = function () {
        var _this = this;
        var _a = this.props, tableRef = _a.tableRef, hasHeaderRow = _a.hasHeaderRow;
        var tbody = tableRef.querySelector('tbody');
        if (!tbody) {
            return null;
        }
        var rows = tbody.querySelectorAll('tr');
        return (React.createElement("div", { className: ClassName.NUMBERED_COLUMN }, Array.from(Array(rows.length).keys()).map(function (index) { return (React.createElement("div", { key: "wrapper-" + index, className: _this.getClassNames(index), "data-index": index, style: {
                height: rows[index].offsetHeight + 1,
            }, onClick: function (event) { return _this.selectRow(index, event); }, onMouseOver: function () { return _this.hoverRows(index); }, onMouseOut: _this.clearHoverSelection }, hasHeaderRow ? (index > 0 ? index : null) : index + 1)); })));
    };
    return NumberColumn;
}(Component));
export default NumberColumn;
//# sourceMappingURL=index.js.map