import { __extends } from "tslib";
import React from 'react';
import DynamicTableStateless from './Stateless';
import { reorderRows } from '../internal/helpers';
var DynamicTable = /** @class */ (function (_super) {
    __extends(DynamicTable, _super);
    function DynamicTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            page: _this.props.defaultPage,
            sortKey: _this.props.defaultSortKey,
            sortOrder: _this.props.defaultSortOrder,
            rows: _this.props.rows,
        };
        _this.onSetPage = function (page, analyticsEvent) {
            var onSetPage = _this.props.onSetPage;
            if (onSetPage) {
                onSetPage(page, analyticsEvent);
                _this.setState({ page: page });
            }
        };
        _this.onSort = function (_a, analyticsEvent) {
            var key = _a.key, item = _a.item, sortOrder = _a.sortOrder;
            var onSort = _this.props.onSort;
            if (onSort) {
                onSort({ key: key, item: item, sortOrder: sortOrder }, analyticsEvent);
                _this.setState({ sortKey: key, sortOrder: sortOrder, page: 1 });
            }
        };
        _this.onRankEndIfExists = function (params) {
            if (_this.props.onRankEnd) {
                _this.props.onRankEnd(params);
            }
        };
        _this.onRankEnd = function (params) {
            var destination = params.destination;
            var _a = _this.state, rows = _a.rows, page = _a.page;
            var rowsPerPage = _this.props.rowsPerPage;
            if (!destination || !rows) {
                _this.onRankEndIfExists(params);
                return;
            }
            var reordered = reorderRows(params, rows, page, rowsPerPage);
            _this.setState({
                rows: reordered,
            });
            _this.onRankEndIfExists(params);
        };
        return _this;
    }
    DynamicTable.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        this.setState({
            page: newProps.page,
            sortKey: newProps.defaultSortKey,
            sortOrder: newProps.defaultSortOrder,
            rows: newProps.rows,
        });
    };
    DynamicTable.prototype.render = function () {
        var _a = this.state, page = _a.page, sortKey = _a.sortKey, sortOrder = _a.sortOrder, rows = _a.rows;
        var _b = this.props, caption = _b.caption, emptyView = _b.emptyView, head = _b.head, highlightedRowIndex = _b.highlightedRowIndex, loadingSpinnerSize = _b.loadingSpinnerSize, isLoading = _b.isLoading, isFixedSize = _b.isFixedSize, isRankable = _b.isRankable, isRankingDisabled = _b.isRankingDisabled, rowsPerPage = _b.rowsPerPage, paginationi18n = _b.paginationi18n, onRankStart = _b.onRankStart, onPageRowsUpdate = _b.onPageRowsUpdate;
        return (React.createElement(DynamicTableStateless, { paginationi18n: paginationi18n, caption: caption, emptyView: emptyView, head: head, highlightedRowIndex: highlightedRowIndex, loadingSpinnerSize: loadingSpinnerSize, isLoading: isLoading, isFixedSize: isFixedSize, onSetPage: this.onSetPage, onSort: this.onSort, page: page, rows: rows, rowsPerPage: rowsPerPage, sortKey: sortKey, sortOrder: sortOrder, isRankable: isRankable, isRankingDisabled: isRankingDisabled, onRankEnd: this.onRankEnd, onRankStart: onRankStart, onPageRowsUpdate: onPageRowsUpdate }));
    };
    DynamicTable.defaultProps = {
        defaultPage: 1,
        isLoading: false,
        isFixedSize: false,
        isRankable: false,
        onSetPage: function () { },
        onSort: function () { },
        rowsPerPage: Infinity,
    };
    return DynamicTable;
}(React.Component));
export default DynamicTable;
//# sourceMappingURL=Stateful.js.map