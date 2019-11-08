import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { ASC } from '../internal/constants';
import { getPageRows, validateSortKey } from '../internal/helpers';
// sort all rows based on sort key and order
var getSortedRows = function (head, rows, sortKey, sortOrder) {
    if (!sortKey || !head) {
        return rows;
    }
    if (!rows) {
        return [];
    }
    // return value which will be used for sorting
    var getSortingCellValue = function (cells) {
        for (var i = 0; i < cells.length; i++) {
            if (head.cells[i] && head.cells[i].key === sortKey) {
                return cells[i].key;
            }
        }
        return undefined;
    };
    // Get copy of rows to avoid sorting prop in place
    var sortableRows = Array.from(rows);
    // Reorder rows in table based on sorting cell value
    // Algorithm will sort numerics or strings, but not both
    return sortableRows.sort(function (a, b) {
        var valA = getSortingCellValue(a.cells);
        var valB = getSortingCellValue(b.cells);
        // modifier used for sorting type (ascending or descending)
        var modifier = sortOrder === ASC ? 1 : -1;
        if (valA === undefined || valB === undefined) {
            return modifier;
        }
        if (typeof valA !== typeof valB) {
            // numbers are always grouped higher in the sort
            if (typeof valA === 'number') {
                return -1;
            }
            if (typeof valB === 'number') {
                return 1;
            }
            // strings are grouped next
            if (typeof valA === 'string') {
                return -1;
            }
            if (typeof valB === 'string') {
                return 1;
            }
        }
        // Sort strings using localeCompare
        if (typeof valA === 'string' && typeof valB === 'string') {
            return (modifier *
                valA.localeCompare(valB, undefined, {
                    sensitivity: 'accent',
                    numeric: true,
                }));
        }
        if ((!valA && valA !== 0) || valA < valB) {
            return -modifier;
        }
        if ((!valB && valB !== 0) || valA > valB) {
            return modifier;
        }
        if (valA === valB) {
            return 0;
        }
        return 1;
    });
};
// get one page of data in table, sorting all rows previously
export default function withSortedPageRows(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(WithSortedPageRows, _super);
        function WithSortedPageRows() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { pageRows: [] };
            return _this;
        }
        WithSortedPageRows.getDerivedStateFromProps = function (props, state) {
            var rows = props.rows, head = props.head, sortKey = props.sortKey, sortOrder = props.sortOrder, page = props.page, rowsPerPage = props.rowsPerPage;
            validateSortKey(sortKey, head);
            var sortedRows = getSortedRows(head, rows, sortKey, sortOrder) || [];
            var pageRows = getPageRows(sortedRows, page, rowsPerPage);
            return __assign(__assign({}, state), { pageRows: pageRows });
        };
        WithSortedPageRows.prototype.componentDidMount = function () {
            this.props.onPageRowsUpdate &&
                this.props.onPageRowsUpdate(this.state.pageRows);
        };
        WithSortedPageRows.prototype.componentDidUpdate = function (_prevProps, prevState) {
            if (this.props.onPageRowsUpdate &&
                this.state.pageRows !== prevState.pageRows) {
                this.props.onPageRowsUpdate(this.state.pageRows);
            }
        };
        WithSortedPageRows.prototype.render = function () {
            var _a = this.props, rows = _a.rows, head = _a.head, sortKey = _a.sortKey, sortOrder = _a.sortOrder, rowsPerPage = _a.rowsPerPage, page = _a.page, 
            // @ts-ignore - Rest types may only be created from object types
            restProps = __rest(_a, ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page"]);
            return (React.createElement(WrappedComponent, __assign({ pageRows: this.state.pageRows, head: head }, restProps)));
        };
        return WithSortedPageRows;
    }(React.Component));
}
//# sourceMappingURL=withSortedPageRows.js.map