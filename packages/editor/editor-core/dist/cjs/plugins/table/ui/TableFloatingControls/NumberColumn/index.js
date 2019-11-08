"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_state_1 = require("prosemirror-state");
var commands_1 = require("../../../commands");
var types_1 = require("../../../types");
var NumberColumn = /** @class */ (function (_super) {
    tslib_1.__extends(NumberColumn, _super);
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
                        prosemirror_state_1.Selection.near(doc.resolve(pos + ($pos.parent.nodeSize - 3)), -1)
                    : // Selection is before table
                        prosemirror_state_1.Selection.near($pos);
                editorView.dispatch(tr.setSelection(newPos));
            }
            selectRow(index, event.shiftKey);
        };
        _this.clearHoverSelection = function () {
            var _a = _this.props, tableActive = _a.tableActive, editorView = _a.editorView;
            if (tableActive) {
                var state = editorView.state, dispatch = editorView.dispatch;
                commands_1.clearHoverSelection()(state, dispatch);
            }
        };
        _this.getClassNames = function (index) {
            var _a = _this.props, hoveredRows = _a.hoveredRows, editorView = _a.editorView, isInDanger = _a.isInDanger, isResizing = _a.isResizing;
            var isActive = prosemirror_utils_1.isRowSelected(index)(editorView.state.selection) ||
                ((hoveredRows || []).indexOf(index) !== -1 && !isResizing);
            return [
                types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON,
                isActive ? types_1.TableCssClassName.HOVERED_CELL_ACTIVE : '',
                isActive && isInDanger ? types_1.TableCssClassName.HOVERED_CELL_IN_DANGER : '',
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
        return (React.createElement("div", { className: types_1.TableCssClassName.NUMBERED_COLUMN }, Array.from(Array(rows.length).keys()).map(function (index) { return (React.createElement("div", { key: "wrapper-" + index, className: _this.getClassNames(index), "data-index": index, style: {
                height: rows[index].offsetHeight + 1,
            }, onClick: function (event) { return _this.selectRow(index, event); }, onMouseOver: function () { return _this.hoverRows(index); }, onMouseOut: _this.clearHoverSelection }, hasHeaderRow ? (index > 0 ? index : null) : index + 1)); })));
    };
    return NumberColumn;
}(react_1.Component));
exports.default = NumberColumn;
//# sourceMappingURL=index.js.map