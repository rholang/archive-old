"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var TableRow_1 = tslib_1.__importDefault(require("./TableRow"));
var withSortedPageRows_1 = tslib_1.__importDefault(require("../../hoc/withSortedPageRows"));
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
    tslib_1.__extends(RankableBody, _super);
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
        return (react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
            react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "dynamic-table-droppable", isDropDisabled: isRankingDisabled }, function (provided) { return (react_1.default.createElement("tbody", tslib_1.__assign({ ref: provided.innerRef }, provided.droppableProps),
                pageRows.map(function (row, rowIndex) { return (react_1.default.createElement(TableRow_1.default, { head: head, isRanking: isRanking, isFixedSize: isFixedSize, key: row.key, rowIndex: rowIndex, row: row, isRankingDisabled: isRankingDisabled, isHighlighted: highlightedRowIndex === rowIndex })); }),
                provided.placeholder)); })));
    };
    return RankableBody;
}(react_1.default.Component));
exports.RankableBody = RankableBody;
exports.default = withSortedPageRows_1.default(RankableBody);
//# sourceMappingURL=Body.js.map