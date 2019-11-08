"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TableHead_1 = require("../styled/TableHead");
var helpers_1 = require("../internal/helpers");
var TableHeadCell_1 = tslib_1.__importDefault(require("./TableHeadCell"));
var TableHeadCell_2 = tslib_1.__importDefault(require("./rankable/TableHeadCell"));
var TableHead = /** @class */ (function (_super) {
    tslib_1.__extends(TableHead, _super);
    function TableHead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canSortOnEnterPressed = function (e, isSortable) {
            return isSortable && e.key === 'Enter';
        };
        return _this;
    }
    TableHead.prototype.UNSAFE_componentWillMount = function () {
        helpers_1.validateSortKey(this.props.sortKey, this.props.head);
    };
    TableHead.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.sortKey !== nextProps.sortKey ||
            this.props.head !== nextProps.head) {
            helpers_1.validateSortKey(nextProps.sortKey, nextProps.head);
        }
    };
    TableHead.prototype.render = function () {
        var _this = this;
        var _a = this.props, head = _a.head, sortKey = _a.sortKey, sortOrder = _a.sortOrder, isFixedSize = _a.isFixedSize, onSort = _a.onSort, isRanking = _a.isRanking, isRankable = _a.isRankable;
        if (!head) {
            return null;
        }
        var HeadCellComponent = isRankable ? TableHeadCell_2.default : TableHeadCell_1.default;
        var cells = head.cells, rest = tslib_1.__rest(head, ["cells"]);
        return (react_1.default.createElement(TableHead_1.Head, tslib_1.__assign({}, rest, { isRanking: isRanking }),
            react_1.default.createElement("tr", null, cells.map(function (cell, index) {
                var isSortable = cell.isSortable, key = cell.key, restCellProps = tslib_1.__rest(cell, ["isSortable", "key"]);
                return (react_1.default.createElement(HeadCellComponent, tslib_1.__assign({ isFixedSize: isFixedSize, isSortable: !!isSortable, isRanking: isRanking, key: key || index, onClick: isSortable ? onSort(cell) : undefined, onKeyDown: function (e) {
                        return _this.canSortOnEnterPressed(e, isSortable)
                            ? onSort(cell)()
                            : undefined;
                    }, sortOrder: key === sortKey ? sortOrder : undefined }, restCellProps)));
            }))));
    };
    return TableHead;
}(react_1.default.Component));
exports.default = TableHead;
//# sourceMappingURL=TableHead.js.map