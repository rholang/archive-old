import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import withDimensions from '../../hoc/withDimensions';
import HeadCell from '../TableHeadCell';
import { inlineStylesIfRanking } from '../../internal/helpers';
var RankableTableHeadCell = /** @class */ (function (_super) {
    __extends(RankableTableHeadCell, _super);
    function RankableTableHeadCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankableTableHeadCell.prototype.render = function () {
        var _a = this.props, isRanking = _a.isRanking, refHeight = _a.refHeight, refWidth = _a.refWidth, innerRef = _a.innerRef, restProps = __rest(_a, ["isRanking", "refHeight", "refWidth", "innerRef"]);
        var inlineStyles = inlineStylesIfRanking(isRanking, refWidth);
        return (React.createElement(HeadCell, __assign({ inlineStyles: inlineStyles, innerRef: innerRef }, restProps)));
    };
    return RankableTableHeadCell;
}(React.Component));
export default withDimensions(RankableTableHeadCell);
//# sourceMappingURL=TableHeadCell.js.map