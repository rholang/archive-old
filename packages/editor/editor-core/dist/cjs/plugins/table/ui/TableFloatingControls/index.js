"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var CornerControls_1 = tslib_1.__importDefault(require("./CornerControls"));
var RowControls_1 = tslib_1.__importDefault(require("./RowControls"));
var NumberColumn_1 = tslib_1.__importDefault(require("./NumberColumn"));
var utils_1 = require("../../utils");
var commands_1 = require("../../commands");
var TableFloatingControls = /** @class */ (function (_super) {
    tslib_1.__extends(TableFloatingControls, _super);
    function TableFloatingControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectRow = function (row, expand) {
            var editorView = _this.props.editorView;
            var state = editorView.state, dispatch = editorView.dispatch;
            // fix for issue ED-4665
            if (editor_common_1.browser.ie_version === 11) {
                editorView.dom.blur();
            }
            commands_1.selectRow(row, expand)(state, dispatch);
        };
        _this.hoverRows = function (rows, danger) {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            commands_1.hoverRows(rows, danger)(state, dispatch);
        };
        return _this;
    }
    TableFloatingControls.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, tableRef = _a.tableRef, isInDanger = _a.isInDanger, isResizing = _a.isResizing, isHeaderRowEnabled = _a.isHeaderRowEnabled, isNumberColumnEnabled = _a.isNumberColumnEnabled, hoveredRows = _a.hoveredRows, selection = _a.selection, tableHeight = _a.tableHeight, tableActive = _a.tableActive, isHeaderColumnEnabled = _a.isHeaderColumnEnabled, ordering = _a.ordering;
        return (ordering !== nextProps.ordering ||
            tableRef !== nextProps.tableRef ||
            tableHeight !== nextProps.tableHeight ||
            tableActive !== nextProps.tableActive ||
            isInDanger !== nextProps.isInDanger ||
            isResizing !== nextProps.isResizing ||
            hoveredRows !== nextProps.hoveredRows ||
            isHeaderRowEnabled !== nextProps.isHeaderRowEnabled ||
            isHeaderColumnEnabled !== nextProps.isHeaderColumnEnabled ||
            isNumberColumnEnabled !== nextProps.isNumberColumnEnabled ||
            utils_1.isSelectionUpdated(selection, nextProps.selection));
    };
    TableFloatingControls.prototype.render = function () {
        var _a = this.props, editorView = _a.editorView, tableRef = _a.tableRef, isInDanger = _a.isInDanger, isResizing = _a.isResizing, isNumberColumnEnabled = _a.isNumberColumnEnabled, isHeaderRowEnabled = _a.isHeaderRowEnabled, isHeaderColumnEnabled = _a.isHeaderColumnEnabled, tableActive = _a.tableActive, hasHeaderRow = _a.hasHeaderRow, hoveredRows = _a.hoveredRows;
        if (!tableRef) {
            return null;
        }
        return (React.createElement("div", { onMouseDown: function (e) { return e.preventDefault(); } },
            isNumberColumnEnabled ? (React.createElement(NumberColumn_1.default, { editorView: editorView, hoverRows: this.hoverRows, tableRef: tableRef, tableActive: tableActive, hoveredRows: hoveredRows, hasHeaderRow: hasHeaderRow, isInDanger: isInDanger, isResizing: isResizing, selectRow: this.selectRow })) : null,
            React.createElement(CornerControls_1.default, { editorView: editorView, tableRef: tableRef, isInDanger: isInDanger, isResizing: isResizing, isHeaderRowEnabled: isHeaderRowEnabled, isHeaderColumnEnabled: isHeaderColumnEnabled, hoveredRows: hoveredRows }),
            React.createElement(RowControls_1.default, { editorView: editorView, tableRef: tableRef, hoverRows: this.hoverRows, hoveredRows: hoveredRows, isInDanger: isInDanger, isResizing: isResizing, selectRow: this.selectRow })));
    };
    return TableFloatingControls;
}(react_1.Component));
exports.default = TableFloatingControls;
//# sourceMappingURL=index.js.map