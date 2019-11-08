import { __assign, __extends } from "tslib";
import React from 'react';
import { DragDropContext, Droppable, } from 'react-beautiful-dnd';
import TableRow from './TableRow';
import withSortedPageRows from '../../hoc/withSortedPageRows';
// computes destination of ranking
// - if drag was cancelled returns undefined
// - if drag was finished, returns new position and after/before key
var computeRankDestination = function (result, pageRows) {
    var sourceIndex = result.source.index, destination = result.destination;
    if (destination) {
        var index = destination.index;
        var keyIndex = index < sourceIndex ? index - 1 : index;
        var afterKey = keyIndex !== -1 ? pageRows[keyIndex].key : undefined;
        var beforeIndex = keyIndex === -1 ? 0 : keyIndex + 1;
        var beforeKey = beforeIndex < pageRows.length ? pageRows[beforeIndex].key : undefined;
        return {
            index: index,
            afterKey: afterKey,
            beforeKey: beforeKey,
        };
    }
    return undefined;
};
var RankableBody = /** @class */ (function (_super) {
    __extends(RankableBody, _super);
    function RankableBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onBeforeDragStart = function (dragStart) {
            var key = dragStart.draggableId, index = dragStart.source.index;
            var rankStartProps = {
                index: index,
                key: key,
            };
            _this.props.onRankStart(rankStartProps);
        };
        _this.onDragEnd = function (result) {
            var _a = _this.props, pageRows = _a.pageRows, onRankEnd = _a.onRankEnd;
            var sourceKey = result.draggableId, sourceIndex = result.source.index;
            var destination = computeRankDestination(result, pageRows);
            var rankEndProps = {
                sourceIndex: sourceIndex,
                sourceKey: sourceKey,
                destination: destination,
            };
            onRankEnd(rankEndProps);
        };
        return _this;
    }
    RankableBody.prototype.render = function () {
        var _a = this.props, highlightedRowIndex = _a.highlightedRowIndex, pageRows = _a.pageRows, head = _a.head, isFixedSize = _a.isFixedSize, isRanking = _a.isRanking, isRankingDisabled = _a.isRankingDisabled;
        return (React.createElement(DragDropContext, { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
            React.createElement(Droppable, { droppableId: "dynamic-table-droppable", isDropDisabled: isRankingDisabled }, function (provided) { return (React.createElement("tbody", __assign({ ref: provided.innerRef }, provided.droppableProps),
                pageRows.map(function (row, rowIndex) { return (React.createElement(TableRow, { head: head, isRanking: isRanking, isFixedSize: isFixedSize, key: row.key, rowIndex: rowIndex, row: row, isRankingDisabled: isRankingDisabled, isHighlighted: highlightedRowIndex === rowIndex })); }),
                provided.placeholder)); })));
    };
    return RankableBody;
}(React.Component));
export { RankableBody };
export default withSortedPageRows(RankableBody);
//# sourceMappingURL=Body.js.map