"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TableRow_1 = require("../styled/TableRow");
var TableCell_1 = require("../styled/TableCell");
var Row = function (_a) {
    var row = _a.row, head = _a.head, isFixedSize = _a.isFixedSize, isHighlighted = _a.isHighlighted;
    var cells = row.cells, restRowProps = tslib_1.__rest(row, ["cells"]);
    return (react_1.default.createElement(TableRow_1.TableBodyRow, tslib_1.__assign({}, restRowProps, { isHighlighted: isHighlighted }), cells.map(function (cell, cellIndex) {
        var content = cell.content, restCellProps = tslib_1.__rest(cell, ["content"]);
        var _a = (head || { cells: [] }).cells[cellIndex] || {}, shouldTruncate = _a.shouldTruncate, width = _a.width;
        return (react_1.default.createElement(TableCell_1.TableBodyCell, tslib_1.__assign({}, restCellProps, { isFixedSize: isFixedSize, key: cellIndex, shouldTruncate: shouldTruncate, width: width }), content));
    })));
};
exports.default = Row;
//# sourceMappingURL=TableRow.js.map