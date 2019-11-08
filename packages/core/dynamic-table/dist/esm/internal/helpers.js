import { __read } from "tslib";
export var getPageRows = function (allRows, pageNumber, rowsPerPage) {
    if (!pageNumber || !rowsPerPage || !allRows.length) {
        return [];
    }
    return allRows.slice((pageNumber - 1) * rowsPerPage, pageNumber * rowsPerPage);
};
export var assertIsSortable = function (head) {
    if (!head || !head.cells) {
        return;
    }
    head.cells.forEach(function (cell) {
        if (cell.isSortable && !cell.key) {
            try {
                throw Error("isSortable can't be set to true, if the 'key' prop is missing.");
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        }
    });
};
export var validateSortKey = function (sortKey, head) {
    if (!sortKey) {
        return;
    }
    var headHasKey = head && head.cells.map(function (cell) { return cell.key; }).includes(sortKey);
    if (!headHasKey) {
        try {
            throw Error("Cell with " + sortKey + " key not found in head.");
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }
};
// creates inline styles if flag ranking is true
export var inlineStylesIfRanking = function (isRanking, width, height) {
    if (!isRanking) {
        return {};
    }
    if (height) {
        return { width: width, height: height };
    }
    return { width: width };
};
// computes index of dropped item after ranking
export var computeIndex = function (index, page, rowsPerPage) {
    var itemOnPreviousPages = rowsPerPage && isFinite(rowsPerPage) ? (page - 1) * rowsPerPage : 0;
    return index + itemOnPreviousPages;
};
// reorder rows in table after ranking
export var reorderRows = function (rankEnd, rows, page, rowsPerPage) {
    if (page === void 0) { page = 1; }
    var destination = rankEnd.destination, sourceIndex = rankEnd.sourceIndex;
    if (!destination) {
        return rows;
    }
    var fromIndex = computeIndex(sourceIndex, page, rowsPerPage);
    var toIndex = computeIndex(destination.index, page, rowsPerPage);
    var reordered = rows.slice();
    var _a = __read(reordered.splice(fromIndex, 1), 1), removed = _a[0];
    reordered.splice(toIndex, 0, removed);
    return reordered;
};
//# sourceMappingURL=helpers.js.map