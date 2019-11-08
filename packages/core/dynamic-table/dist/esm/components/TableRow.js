import { __assign, __rest } from "tslib";
import React from 'react';
import { TableBodyRow } from '../styled/TableRow';
import { TableBodyCell } from '../styled/TableCell';
var Row = function (_a) {
    var row = _a.row, head = _a.head, isFixedSize = _a.isFixedSize, isHighlighted = _a.isHighlighted;
    var cells = row.cells, restRowProps = __rest(row, ["cells"]);
    return (React.createElement(TableBodyRow, __assign({}, restRowProps, { isHighlighted: isHighlighted }), cells.map(function (cell, cellIndex) {
        var content = cell.content, restCellProps = __rest(cell, ["content"]);
        var _a = (head || { cells: [] }).cells[cellIndex] || {}, shouldTruncate = _a.shouldTruncate, width = _a.width;
        return (React.createElement(TableBodyCell, __assign({}, restCellProps, { isFixedSize: isFixedSize, key: cellIndex, shouldTruncate: shouldTruncate, width: width }), content));
    })));
};
export default Row;
//# sourceMappingURL=TableRow.js.map