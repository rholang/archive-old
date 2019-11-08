import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { RankableTableBodyRow } from '../../styled/rankable/TableRow';
import withDimensions from '../../hoc/withDimensions';
import TableCell from './TableCell';
import { inlineStylesIfRanking } from '../../internal/helpers';
var RankableTableRow = /** @class */ (function (_super) {
    __extends(RankableTableRow, _super);
    function RankableTableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.innerRef = function (innerRefFn) { return function (ref) {
            innerRefFn(ref);
            if (_this.props.innerRef) {
                _this.props.innerRef(ref);
            }
        }; };
        return _this;
    }
    RankableTableRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, row = _a.row, head = _a.head, isFixedSize = _a.isFixedSize, isRanking = _a.isRanking, refWidth = _a.refWidth, rowIndex = _a.rowIndex, isRankingDisabled = _a.isRankingDisabled, isHighlighted = _a.isHighlighted;
        var cells = row.cells, key = row.key, restRowProps = __rest(row, ["cells", "key"]);
        var inlineStyles = inlineStylesIfRanking(isRanking, refWidth);
        if (typeof key !== 'string' && !isRankingDisabled) {
            throw new Error('dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.');
        }
        return (React.createElement(Draggable, { draggableId: key || "" + rowIndex, index: rowIndex, isDragDisabled: isRankingDisabled }, function (provided, snapshot) { return (React.createElement(RankableTableBodyRow, __assign({}, restRowProps, provided.dragHandleProps, provided.draggableProps, { innerRef: _this.innerRef(provided.innerRef), style: __assign(__assign({}, provided.draggableProps.style), inlineStyles), isHighlighted: isHighlighted, isRanking: isRanking, isRankingItem: snapshot.isDragging }), cells.map(function (cell, cellIndex) {
            var headCell = (head || { cells: [] }).cells[cellIndex];
            return (React.createElement(TableCell, { head: headCell, cell: cell, isRanking: isRanking, key: cellIndex, isFixedSize: isFixedSize }));
        }))); }));
    };
    return RankableTableRow;
}(React.Component));
export { RankableTableRow };
export default withDimensions(RankableTableRow);
//# sourceMappingURL=TableRow.js.map