import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { Head } from '../styled/TableHead';
import { validateSortKey } from '../internal/helpers';
import HeadCell from './TableHeadCell';
import RankableHeadCell from './rankable/TableHeadCell';
var TableHead = /** @class */ (function (_super) {
    __extends(TableHead, _super);
    function TableHead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canSortOnEnterPressed = function (e, isSortable) {
            return isSortable && e.key === 'Enter';
        };
        return _this;
    }
    TableHead.prototype.UNSAFE_componentWillMount = function () {
        validateSortKey(this.props.sortKey, this.props.head);
    };
    TableHead.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.sortKey !== nextProps.sortKey ||
            this.props.head !== nextProps.head) {
            validateSortKey(nextProps.sortKey, nextProps.head);
        }
    };
    TableHead.prototype.render = function () {
        var _this = this;
        var _a = this.props, head = _a.head, sortKey = _a.sortKey, sortOrder = _a.sortOrder, isFixedSize = _a.isFixedSize, onSort = _a.onSort, isRanking = _a.isRanking, isRankable = _a.isRankable;
        if (!head) {
            return null;
        }
        var HeadCellComponent = isRankable ? RankableHeadCell : HeadCell;
        var cells = head.cells, rest = __rest(head, ["cells"]);
        return (React.createElement(Head, __assign({}, rest, { isRanking: isRanking }),
            React.createElement("tr", null, cells.map(function (cell, index) {
                var isSortable = cell.isSortable, key = cell.key, restCellProps = __rest(cell, ["isSortable", "key"]);
                return (React.createElement(HeadCellComponent, __assign({ isFixedSize: isFixedSize, isSortable: !!isSortable, isRanking: isRanking, key: key || index, onClick: isSortable ? onSort(cell) : undefined, onKeyDown: function (e) {
                        return _this.canSortOnEnterPressed(e, isSortable)
                            ? onSort(cell)()
                            : undefined;
                    }, sortOrder: key === sortKey ? sortOrder : undefined }, restCellProps)));
            }))));
    };
    return TableHead;
}(React.Component));
export default TableHead;
//# sourceMappingURL=TableHead.js.map