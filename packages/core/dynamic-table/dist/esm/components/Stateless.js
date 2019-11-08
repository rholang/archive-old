import { __assign, __extends } from "tslib";
import React from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import ManagedPagination from './managedPagination';
import { name as packageName, version as packageVersion, } from '../version.json';
import { ASC, DESC, SMALL, LARGE } from '../internal/constants';
import { getPageRows, validateSortKey, assertIsSortable, } from '../internal/helpers';
import TableHead from './TableHead';
import Body from './Body';
import RankableTableBody from './rankable/Body';
import LoadingContainer from './LoadingContainer';
import LoadingContainerAdvanced from './LoadingContainerAdvanced';
import { EmptyViewContainer, EmptyViewWithFixedHeight, } from '../styled/EmptyBody';
import { Table, Caption, PaginationWrapper } from '../styled/DynamicTable';
function toggleSortOrder(currentSortOrder) {
    switch (currentSortOrder) {
        case DESC:
            return ASC;
        case ASC:
            return DESC;
        default:
            return currentSortOrder;
    }
}
var DynamicTable = /** @class */ (function (_super) {
    __extends(DynamicTable, _super);
    function DynamicTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isRanking: false,
        };
        _this.onSort = function (item) { return function () {
            var _a = _this.props, sortKey = _a.sortKey, sortOrder = _a.sortOrder, onSort = _a.onSort, isRankable = _a.isRankable;
            var key = item.key;
            if (!key) {
                return;
            }
            _this.onSetPage(1, undefined);
            if (onSort && isRankable && key === sortKey && sortOrder === DESC) {
                onSort({ key: null, sortOrder: null, item: item });
                return;
            }
            var sortOrderFormatted = key !== sortKey ? ASC : toggleSortOrder(sortOrder);
            if (onSort) {
                onSort({ key: key, item: item, sortOrder: sortOrderFormatted });
            }
        }; };
        _this.onSetPage = function (page, event) {
            var onSetPage = _this.props.onSetPage;
            if (onSetPage) {
                onSetPage(page, event);
            }
        };
        _this.onRankStart = function (params) {
            _this.setState({
                isRanking: true,
            });
            if (_this.props.onRankStart) {
                _this.props.onRankStart(params);
            }
        };
        _this.onRankEnd = function (params) {
            _this.setState({
                isRanking: false,
            });
            if (_this.props.onRankEnd) {
                _this.props.onRankEnd(params);
            }
        };
        _this.getSpinnerSize = function () {
            var _a = _this.props, page = _a.page, rows = _a.rows, rowsPerPage = _a.rowsPerPage, loadingSpinnerSize = _a.loadingSpinnerSize;
            if (loadingSpinnerSize) {
                return loadingSpinnerSize;
            }
            return getPageRows(rows || [], page, rowsPerPage).length > 2
                ? LARGE
                : SMALL;
        };
        _this.renderEmptyBody = function () {
            var _a = _this.props, emptyView = _a.emptyView, isLoading = _a.isLoading;
            if (isLoading) {
                return React.createElement(EmptyViewWithFixedHeight, null);
            }
            return emptyView && React.createElement(EmptyViewContainer, null, emptyView);
        };
        return _this;
    }
    DynamicTable.prototype.UNSAFE_componentWillMount = function () {
        validateSortKey(this.props.sortKey, this.props.head);
        assertIsSortable(this.props.head);
    };
    DynamicTable.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.sortKey !== nextProps.sortKey ||
            this.props.head !== nextProps.head) {
            validateSortKey(nextProps.sortKey, nextProps.head);
        }
        if (this.props.head !== nextProps.head) {
            assertIsSortable(nextProps.head);
        }
    };
    DynamicTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, caption = _a.caption, head = _a.head, highlightedRowIndex = _a.highlightedRowIndex, isFixedSize = _a.isFixedSize, page = _a.page, rows = _a.rows, rowsPerPage = _a.rowsPerPage, sortKey = _a.sortKey, sortOrder = _a.sortOrder, isLoading = _a.isLoading, isRankable = _a.isRankable, isRankingDisabled = _a.isRankingDisabled, paginationi18n = _a.paginationi18n, onPageRowsUpdate = _a.onPageRowsUpdate;
        var rowsLength = rows && rows.length;
        var bodyProps = {
            highlightedRowIndex: highlightedRowIndex,
            rows: rows,
            head: head,
            sortKey: sortKey,
            sortOrder: sortOrder,
            rowsPerPage: rowsPerPage,
            page: page,
            isFixedSize: isFixedSize || false,
            onPageRowsUpdate: onPageRowsUpdate,
            ref: function (el) {
                _this.tableBody = el;
            },
        };
        var totalPages = rowsLength && rowsPerPage ? Math.ceil(rowsLength / rowsPerPage) : 0;
        var rowsExist = !!rowsLength;
        var spinnerSize = this.getSpinnerSize();
        var emptyBody = this.renderEmptyBody();
        var canRank = isRankable && !sortKey;
        return (React.createElement(React.Fragment, null,
            React.createElement(LoadingContainerAdvanced, { isLoading: isLoading && rowsExist, spinnerSize: spinnerSize, targetRef: function () { return _this.tableBody; } },
                React.createElement(Table, { isFixedSize: isFixedSize },
                    !!caption && React.createElement(Caption, null, caption),
                    head && (React.createElement(TableHead, { head: head, onSort: this.onSort, sortKey: sortKey, sortOrder: sortOrder, isRanking: this.state.isRanking, isRankable: canRank })),
                    rowsExist &&
                        (canRank ? (React.createElement(RankableTableBody, __assign({}, bodyProps, { isRanking: this.state.isRanking, onRankStart: this.onRankStart, onRankEnd: this.onRankEnd, isRankingDisabled: isRankingDisabled || isLoading || false }))) : (React.createElement(Body, __assign({}, bodyProps)))))),
            !totalPages ? null : (React.createElement(PaginationWrapper, null,
                React.createElement(ManagedPagination, { value: page, onChange: this.onSetPage, total: totalPages, i18n: paginationi18n }))),
            !rowsExist && emptyBody && (React.createElement(LoadingContainer, { isLoading: isLoading, spinnerSize: LARGE }, emptyBody))));
    };
    DynamicTable.defaultProps = {
        isLoading: false,
        isFixedSize: false,
        rowsPerPage: Infinity,
        onSetPage: function () { },
        onSort: function () { },
        page: 1,
        isRankable: false,
        isRankingDisabled: false,
        onRankStart: function () { },
        onRankEnd: function () { },
        paginationi18n: {
            prev: 'Prev',
            next: 'Next',
        },
    };
    return DynamicTable;
}(React.Component));
export { DynamicTable as DynamicTableWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'dynamicTable',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onSort: createAndFireEventOnAtlaskit({
        action: 'sorted',
        actionSubject: 'dynamicTable',
        attributes: {
            componentName: 'dynamicTable',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
    onRankEnd: createAndFireEventOnAtlaskit({
        action: 'ranked',
        actionSubject: 'dynamicTable',
        attributes: {
            componentName: 'dynamicTable',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(DynamicTable));
//# sourceMappingURL=Stateless.js.map