"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var TableRow_1 = require("../../styled/rankable/TableRow");
var withDimensions_1 = tslib_1.__importDefault(require("../../hoc/withDimensions"));
var TableCell_1 = tslib_1.__importDefault(require("./TableCell"));
var helpers_1 = require("../../internal/helpers");
var RankableTableRow = /** @class */ (function (_super) {
    tslib_1.__extends(RankableTableRow, _super);
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
        var cells = row.cells, key = row.key, restRowProps = tslib_1.__rest(row, ["cells", "key"]);
        var inlineStyles = helpers_1.inlineStylesIfRanking(isRanking, refWidth);
        if (typeof key !== 'string' && !isRankingDisabled) {
            throw new Error('dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.');
        }
        return (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { draggableId: key || "" + rowIndex, index: rowIndex, isDragDisabled: isRankingDisabled }, function (provided, snapshot) { return (react_1.default.createElement(TableRow_1.RankableTableBodyRow, tslib_1.__assign({}, restRowProps, provided.dragHandleProps, provided.draggableProps, { innerRef: _this.innerRef(provided.innerRef), style: tslib_1.__assign(tslib_1.__assign({}, provided.draggableProps.style), inlineStyles), isHighlighted: isHighlighted, isRanking: isRanking, isRankingItem: snapshot.isDragging }), cells.map(function (cell, cellIndex) {
            var headCell = (head || { cells: [] }).cells[cellIndex];
            return (react_1.default.createElement(TableCell_1.default, { head: headCell, cell: cell, isRanking: isRanking, key: cellIndex, isFixedSize: isFixedSize }));
        }))); }));
    };
    return RankableTableRow;
}(react_1.default.Component));
exports.RankableTableRow = RankableTableRow;
exports.default = withDimensions_1.default(RankableTableRow);
//# sourceMappingURL=TableRow.js.map