"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
var editor_common_1 = require("@atlaskit/editor-common");
var types_1 = require("../../types");
var InsertButton_1 = tslib_1.__importDefault(require("./InsertButton"));
var utils_1 = require("../../../../utils");
var analytics_1 = require("../../../analytics");
var commands_with_analytics_1 = require("../../commands-with-analytics");
var getPopupOptions_1 = tslib_1.__importDefault(require("./getPopupOptions"));
var utils_2 = require("../../utils");
var FloatingInsertButton = /** @class */ (function (_super) {
    tslib_1.__extends(FloatingInsertButton, _super);
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
        if (tr.selection instanceof prosemirror_tables_1.CellSelection &&
            (tr.selection.isColSelection() ||
                tr.selection.isRowSelection())) {
            return null;
        }
        var cellPosition = this.getCellPosition(type);
        if (!cellPosition) {
            return null;
        }
        var tablePos = prosemirror_utils_1.findTable(editorView.state.selection);
        if (!tablePos) {
            return null;
        }
        var domAtPos = editorView.domAtPos.bind(editorView);
        var pos = cellPosition + tablePos.start + 1;
        var target = prosemirror_utils_1.findDomRefAtPos(pos, domAtPos);
        if (!target || !(target instanceof HTMLElement)) {
            return null;
        }
        var targetCellRef = type === 'row'
            ? utils_1.closestElement(target, 'tr')
            : utils_1.closestElement(target, 'td, th');
        if (!targetCellRef) {
            return null;
        }
        var tableContainerWrapper = utils_1.closestElement(targetCellRef, "." + types_1.TableCssClassName.TABLE_CONTAINER);
        var tableWrapper = utils_1.closestElement(targetCellRef, "." + types_1.TableCssClassName.TABLE_NODE_WRAPPER);
        var index = type === 'column' ? insertColumnButtonIndex : insertRowButtonIndex;
        var hasNumberedColumns = utils_2.checkIfNumberColumnEnabled(editorView.state);
        return (React.createElement(editor_common_1.Popup, tslib_1.__assign({ target: targetCellRef, mountTo: tableContainerWrapper || mountPoint, boundariesElement: tableContainerWrapper || boundariesElement, scrollableElement: tableWrapper, forcePlacement: true, allowOutOfBounds: true }, getPopupOptions_1.default(type, index, hasNumberedColumns, tableContainerWrapper)),
            React.createElement(InsertButton_1.default, { type: type, tableRef: tableRef, onMouseDown: type === 'column' ? this.insertColumn : this.insertRow })));
    };
    FloatingInsertButton.prototype.getCellPosition = function (type) {
        var _a = this.props, tableNode = _a.tableNode, insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex;
        var tableMap = prosemirror_tables_1.TableMap.get(tableNode);
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
            commands_with_analytics_1.insertRowWithAnalytics(analytics_1.INPUT_METHOD.BUTTON, insertRowButtonIndex)(state, dispatch);
        }
    };
    FloatingInsertButton.prototype.insertColumn = function (event) {
        var _a = this.props, editorView = _a.editorView, insertColumnButtonIndex = _a.insertColumnButtonIndex;
        if (typeof insertColumnButtonIndex !== 'undefined') {
            event.preventDefault();
            var state = editorView.state, dispatch = editorView.dispatch;
            commands_with_analytics_1.insertColumnWithAnalytics(analytics_1.INPUT_METHOD.BUTTON, insertColumnButtonIndex)(state, dispatch);
        }
    };
    return FloatingInsertButton;
}(React.Component));
exports.default = react_intl_1.injectIntl(FloatingInsertButton);
//# sourceMappingURL=index.js.map