import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import { isTableSelected, selectTable, findTable } from 'prosemirror-utils';
import { TableMap } from 'prosemirror-tables';
import { clearHoverSelection, hoverTable } from '../../../commands';
import { TableCssClassName as ClassName } from '../../../types';
var CornerControls = /** @class */ (function (_super) {
    __extends(CornerControls, _super);
    function CornerControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isActive = function () {
            var _a = _this.props, editorView = _a.editorView, hoveredRows = _a.hoveredRows, isResizing = _a.isResizing;
            var selection = editorView.state.selection;
            var table = findTable(selection);
            if (!table) {
                return false;
            }
            return (isTableSelected(selection) ||
                (hoveredRows &&
                    hoveredRows.length === TableMap.get(table.node).height &&
                    !isResizing));
        };
        _this.clearHoverSelection = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            clearHoverSelection()(state, dispatch);
        };
        _this.selectTable = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            dispatch(selectTable(state.tr).setMeta('addToHistory', false));
        };
        _this.hoverTable = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            hoverTable()(state, dispatch);
        };
        return _this;
    }
    CornerControls.prototype.render = function () {
        var _a = this.props, isInDanger = _a.isInDanger, tableRef = _a.tableRef, isHeaderColumnEnabled = _a.isHeaderColumnEnabled, isHeaderRowEnabled = _a.isHeaderRowEnabled;
        if (!tableRef) {
            return null;
        }
        var isActive = this.isActive();
        return (React.createElement("div", { className: classnames(ClassName.CORNER_CONTROLS, {
                active: isActive,
            }) },
            React.createElement("button", { type: "button", className: classnames(ClassName.CONTROLS_CORNER_BUTTON, {
                    danger: isActive && isInDanger,
                }), onClick: this.selectTable, onMouseOver: this.hoverTable, onMouseOut: this.clearHoverSelection }),
            !isHeaderRowEnabled && (React.createElement("div", { className: ClassName.CORNER_CONTROLS_INSERT_ROW_MARKER },
                React.createElement("div", { className: ClassName.CONTROLS_INSERT_MARKER }))),
            !isHeaderColumnEnabled && (React.createElement("div", { className: ClassName.CORNER_CONTROLS_INSERT_COLUMN_MARKER },
                React.createElement("div", { className: ClassName.CONTROLS_INSERT_MARKER })))));
    };
    return CornerControls;
}(Component));
export default CornerControls;
//# sourceMappingURL=index.js.map