import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { RankableTableBodyCell } from '../../styled/rankable/TableCell';
import withDimensions from '../../hoc/withDimensions';
import { inlineStylesIfRanking } from '../../internal/helpers';
var RankableTableCell = /** @class */ (function (_super) {
    __extends(RankableTableCell, _super);
    function RankableTableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankableTableCell.prototype.render = function () {
        var _a = this.props, cell = _a.cell, head = _a.head, isFixedSize = _a.isFixedSize, isRanking = _a.isRanking, innerRef = _a.innerRef, refWidth = _a.refWidth;
        var content = cell.content, restCellProps = __rest(cell, ["content"]);
        var _b = head || {}, shouldTruncate = _b.shouldTruncate, width = _b.width;
        var inlineStyles = inlineStylesIfRanking(isRanking, refWidth);
        return (React.createElement(RankableTableBodyCell, __assign({}, restCellProps, { isFixedSize: isFixedSize, shouldTruncate: shouldTruncate, width: width, isRanking: isRanking, style: inlineStyles, innerRef: innerRef, onKeyDown: function (e) { return e.stopPropagation(); } }), content));
    };
    return RankableTableCell;
}(React.Component));
export { RankableTableCell };
export default withDimensions(RankableTableCell);
//# sourceMappingURL=TableCell.js.map