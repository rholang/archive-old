"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var managedPagination_1 = tslib_1.__importDefault(require("./managedPagination"));
var version_json_1 = require("../version.json");
var constants_1 = require("../internal/constants");
var helpers_1 = require("../internal/helpers");
var TableHead_1 = tslib_1.__importDefault(require("./TableHead"));
var Body_1 = tslib_1.__importDefault(require("./Body"));
var Body_2 = tslib_1.__importDefault(require("./rankable/Body"));
var LoadingContainer_1 = tslib_1.__importDefault(require("./LoadingContainer"));
var LoadingContainerAdvanced_1 = tslib_1.__importDefault(require("./LoadingContainerAdvanced"));
var EmptyBody_1 = require("../styled/EmptyBody");
var DynamicTable_1 = require("../styled/DynamicTable");
function toggleSortOrder(currentSortOrder) {
    switch (currentSortOrder) {
        case constants_1.DESC:
            return constants_1.ASC;
        case constants_1.ASC:
            return constants_1.DESC;
        default:
            return currentSortOrder;
    }
}
var DynamicTable = /** @class */ (function (_super) {
    tslib_1.__extends(DynamicTable, _super);
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
            if (onSort && isRankable && key === sortKey && sortOrder === constants_1.DESC) {
                onSort({ key: null, sortOrder: null, item: item });
                return;
            }
            var sortOrderFormatted = key !== sortKey ? constants_1.ASC : toggleSortOrder(sortOrder);
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
            return helpers_1.getPageRows(rows || [], page, rowsPerPage).length > 2
                ? constants_1.LARGE
                : constants_1.SMALL;
        };
        _this.renderEmptyBody = function () {
            var _a = _this.props, emptyView = _a.emptyView, isLoading = _a.isLoading;
            if (isLoading) {
                return react_1.default.createElement(EmptyBody_1.EmptyViewWithFixedHeight, null);
            }
            return emptyView && react_1.default.createElement(EmptyBody_1.EmptyViewContainer, null, emptyView);
        };
        return _this;
    }
    DynamicTable.prototype.UNSAFE_componentWillMount = function () {
        helpers_1.validateSortKey(this.props.sortKey, this.props.head);
        helpers_1.assertIsSortable(this.props.head);
    };
    DynamicTable.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.sortKey !== nextProps.sortKey ||
            this.props.head !== nextProps.head) {
            helpers_1.validateSortKey(nextProps.sortKey, nextProps.head);
        }
        if (this.props.head !== nextProps.head) {
            helpers_1.assertIsSortable(nextProps.head);
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
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(LoadingContainerAdvanced_1.default, { isLoading: isLoading && rowsExist, spinnerSize: spinnerSize, targetRef: function () { return _this.tableBody; } },
                react_1.default.createElement(DynamicTable_1.Table, { isFixedSize: isFixedSize },
                    !!caption && react_1.default.createElement(DynamicTable_1.Caption, null, caption),
                    head && (react_1.default.createElement(TableHead_1.default, { head: head, onSort: this.onSort, sortKey: sortKey, sortOrder: sortOrder, isRanking: this.state.isRanking, isRankable: canRank })),
                    rowsExist &&
                        (canRank ? (react_1.default.createElement(Body_2.default, tslib_1.__assign({}, bodyProps, { isRanking: this.state.isRanking, onRankStart: this.onRankStart, onRankEnd: this.onRankEnd, isRankingDisabled: isRankingDisabled || isLoading || false }))) : (react_1.default.createElement(Body_1.default, tslib_1.__assign({}, bodyProps)))))),
            !totalPages ? null : (react_1.default.createElement(DynamicTable_1.PaginationWrapper, null,
                react_1.default.createElement(managedPagination_1.default, { value: page, onChange: this.onSetPage, total: totalPages, i18n: paginationi18n }))),
            !rowsExist && emptyBody && (react_1.default.createElement(LoadingContainer_1.default, { isLoading: isLoading, spinnerSize: constants_1.LARGE }, emptyBody))));
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
}(react_1.default.Component));
exports.DynamicTableWithoutAnalytics = DynamicTable;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'dynamicTable',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onSort: createAndFireEventOnAtlaskit({
        action: 'sorted',
        actionSubject: 'dynamicTable',
        attributes: {
            componentName: 'dynamicTable',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onRankEnd: createAndFireEventOnAtlaskit({
        action: 'ranked',
        actionSubject: 'dynamicTable',
        attributes: {
            componentName: 'dynamicTable',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(DynamicTable));
//# sourceMappingURL=Stateless.js.map