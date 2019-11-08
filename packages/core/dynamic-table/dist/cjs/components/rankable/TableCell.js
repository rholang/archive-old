"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TableCell_1 = require("../../styled/rankable/TableCell");
var withDimensions_1 = tslib_1.__importDefault(require("../../hoc/withDimensions"));
var helpers_1 = require("../../internal/helpers");
var RankableTableCell = /** @class */ (function (_super) {
    tslib_1.__extends(RankableTableCell, _super);
    function RankableTableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankableTableCell.prototype.render = function () {
        var _a = this.props, cell = _a.cell, head = _a.head, isFixedSize = _a.isFixedSize, isRanking = _a.isRanking, innerRef = _a.innerRef, refWidth = _a.refWidth;
        var content = cell.content, restCellProps = tslib_1.__rest(cell, ["content"]);
        var _b = head || {}, shouldTruncate = _b.shouldTruncate, width = _b.width;
        var inlineStyles = helpers_1.inlineStylesIfRanking(isRanking, refWidth);
        return (react_1.default.createElement(TableCell_1.RankableTableBodyCell, tslib_1.__assign({}, restCellProps, { isFixedSize: isFixedSize, shouldTruncate: shouldTruncate, width: width, isRanking: isRanking, style: inlineStyles, innerRef: innerRef, onKeyDown: function (e) { return e.stopPropagation(); } }), content));
    };
    return RankableTableCell;
}(react_1.default.Component));
exports.RankableTableCell = RankableTableCell;
exports.default = withDimensions_1.default(RankableTableCell);
//# sourceMappingURL=TableCell.js.map