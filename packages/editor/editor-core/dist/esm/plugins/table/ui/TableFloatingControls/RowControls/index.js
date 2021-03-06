import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { clearHoverSelection } from '../../../commands';
import { TableCssClassName as ClassName } from '../../../types';
import { getRowHeights, getRowsParams, getRowClassNames, } from '../../../utils';
var RowControls = /** @class */ (function (_super) {
    __extends(RowControls, _super);
    function RowControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearHoverSelection = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            clearHoverSelection()(state, dispatch);
        };
        return _this;
    }
    RowControls.prototype.render = function () {
        var _this = this;
        var _a = this.props, editorView = _a.editorView, tableRef = _a.tableRef, hoveredRows = _a.hoveredRows, isInDanger = _a.isInDanger, isResizing = _a.isResizing;
        if (!tableRef) {
            return null;
        }
        var selection = editorView.state.selection;
        var rowHeights = getRowHeights(tableRef);
        var rowsParams = getRowsParams(rowHeights);
        return (React.createElement("div", { className: ClassName.ROW_CONTROLS },
            React.createElement("div", { className: ClassName.ROW_CONTROLS_INNER }, rowsParams.map(function (_a) {
                var startIndex = _a.startIndex, endIndex = _a.endIndex, height = _a.height;
                return (React.createElement("div", { className: ClassName.ROW_CONTROLS_BUTTON_WRAP + " " + getRowClassNames(startIndex, selection, hoveredRows, isInDanger, isResizing), key: startIndex, style: { height: height } },
                    React.createElement("button", { type: "button", className: ClassName.ROW_CONTROLS_BUTTON + "\n                  " + ClassName.CONTROLS_BUTTON + "\n                ", onClick: function (event) {
                            return _this.props.selectRow(startIndex, event.shiftKey);
                        }, onMouseOver: function () { return _this.props.hoverRows([startIndex]); }, onMouseOut: _this.clearHoverSelection, "data-start-index": startIndex, "data-end-index": endIndex }),
                    React.createElement("div", { className: ClassName.CONTROLS_INSERT_MARKER })));
            }))));
    };
    return RowControls;
}(Component));
export default RowControls;
//# sourceMappingURL=index.js.map