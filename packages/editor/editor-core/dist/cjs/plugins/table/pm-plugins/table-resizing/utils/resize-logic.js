"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var column_state_1 = require("./column-state");
var resize_state_1 = require("./resize-state");
exports.growColumn = function (state, colIndex, amount, selectedColumns) {
    // can't grow the last column
    if (!state.cols[colIndex + 1]) {
        return state;
    }
    var res = moveSpaceFrom(state, colIndex + 1, colIndex, amount);
    var remaining = amount - res.amount;
    var newState = res.state;
    if (remaining > 0) {
        newState = stackSpace(newState, colIndex, remaining).state;
    }
    if (selectedColumns) {
        return resize_state_1.bulkColumnsResize(newState, selectedColumns, colIndex);
    }
    return newState;
};
exports.shrinkColumn = function (state, colIndex, amount, selectedColumns) {
    // try to shrink dragging column by giving from the column to the right first
    var res = moveSpaceFrom(state, colIndex, colIndex + 1, -amount);
    var newState = res.state;
    var isOverflownTable = resize_state_1.getTotalWidth(newState) > newState.maxSize;
    var isLastColumn = !newState.cols[colIndex + 1];
    // stop resizing the last column once table is not overflown
    if (isLastColumn && !isOverflownTable) {
        return newState;
    }
    var remaining = amount + res.amount;
    if (remaining < 0) {
        newState = stackSpace(newState, colIndex + 1, remaining).state;
    }
    if (selectedColumns) {
        return resize_state_1.bulkColumnsResize(newState, selectedColumns, colIndex);
    }
    return newState;
};
function reduceSpace(state, amount, ignoreCols) {
    if (ignoreCols === void 0) { ignoreCols = []; }
    var remaining = amount;
    var _loop_1 = function () {
        // filter candidates only with free space
        var candidates = state.cols.filter(function (column) {
            return column_state_1.getFreeSpace(column) && ignoreCols.indexOf(column.index) === -1;
        });
        if (candidates.length === 0) {
            return "break";
        }
        var requestedResize = Math.floor(remaining / candidates.length);
        if (requestedResize === 0) {
            return "break";
        }
        candidates.forEach(function (candidate) {
            var newWidth = candidate.width - requestedResize;
            if (newWidth < candidate.minWidth) {
                // If the new requested width is less than our min
                // Calc what width we didn't use, we'll try extract that
                // from other cols.
                var remainder = candidate.minWidth - newWidth;
                newWidth = candidate.minWidth;
                remaining = remaining - requestedResize + remainder;
            }
            else {
                remaining -= requestedResize;
            }
            state = tslib_1.__assign(tslib_1.__assign({}, state), { cols: tslib_1.__spread(state.cols.slice(0, candidate.index), [
                    tslib_1.__assign(tslib_1.__assign({}, candidate), { width: newWidth })
                ], state.cols.slice(candidate.index + 1)) });
        });
    };
    // keep trying to resolve resize request until we run out of free space,
    // or nothing to resize
    while (remaining > 0) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return state;
}
exports.reduceSpace = reduceSpace;
var ColType;
(function (ColType) {
    ColType["SOURCE"] = "src";
    ColType["DEST"] = "dest";
})(ColType || (ColType = {}));
// TODO: should handle when destIdx:
// - is beyond the range, and then not give it back
function moveSpaceFrom(state, srcIdx, destIdx, amount, useFreeSpace) {
    if (useFreeSpace === void 0) { useFreeSpace = true; }
    var srcCol = state.cols[srcIdx];
    var destCol = state.cols[destIdx];
    if (useFreeSpace) {
        var freeSpace = column_state_1.getFreeSpace(srcCol);
        // if taking more than source column's free space, only take that much
        if (amountFor(ColType.DEST)(amount) > freeSpace) {
            amount = amount > 0 ? freeSpace : -freeSpace;
        }
    }
    // if the source column shrinks past its min size, don't give the space away
    if (amountFor(ColType.SOURCE)(amount) < 0 &&
        widthFor(ColType.SOURCE)(amount, srcCol, destCol) < srcCol.minWidth) {
        amount = srcCol.width - srcCol.minWidth;
    }
    var newDest = destCol
        ? tslib_1.__assign(tslib_1.__assign({}, destCol), { width: widthFor(ColType.DEST)(amount, srcCol, destCol) }) : undefined;
    if (!newDest && amountFor(ColType.SOURCE)(amount) < 0) {
        // non-zero-sum game, ensure that we're not removing more than the total table width either
        var totalWidth = resize_state_1.getTotalWidth(state);
        if (totalWidth -
            srcCol.width +
            widthFor(ColType.SOURCE)(amount, srcCol, destCol) <
            state.maxSize) {
            // would shrink table below max width, stop it
            amount = state.maxSize - (totalWidth - srcCol.width) - srcCol.width - 1;
        }
    }
    var newSrc = tslib_1.__assign(tslib_1.__assign({}, srcCol), { width: widthFor(ColType.SOURCE)(amount, srcCol, destCol) });
    var newCols = state.cols
        .map(function (existingCol, idx) {
        return idx === srcIdx ? newSrc : idx === destIdx ? newDest : existingCol;
    })
        .filter(Boolean);
    return { state: tslib_1.__assign(tslib_1.__assign({}, state), { cols: newCols }), amount: amount };
}
function stackSpace(state, destIdx, amount) {
    var candidates = getCandidates(state, destIdx, amount);
    var _loop_2 = function () {
        // search for most (or least) free space in candidates
        var candidateIdx = findNextFreeColumn(candidates, amount);
        if (candidateIdx === -1) {
            // stack to the right -> growing the dragging column and go overflow
            if (amount > 0) {
                return { value: {
                        state: tslib_1.__assign(tslib_1.__assign({}, state), { cols: tslib_1.__spread(state.cols.slice(0, destIdx), [
                                tslib_1.__assign(tslib_1.__assign({}, state.cols[destIdx]), { width: state.cols[destIdx].width + amount })
                            ], state.cols.slice(destIdx + 1)) }),
                        remaining: amount,
                    } };
            }
            return "break";
        }
        var column = candidates.find(function (col) { return col.index === candidateIdx; });
        if (!column || column_state_1.getFreeSpace(column) <= 0) {
            return "break";
        }
        var res = moveSpaceFrom(state, column.index, destIdx, amount);
        state = res.state;
        amount -= res.amount;
        candidates = candidates.filter(function (col) { return col.index !== candidateIdx; });
    };
    while (candidates.length && amount) {
        var state_2 = _loop_2();
        if (typeof state_2 === "object")
            return state_2.value;
        if (state_2 === "break")
            break;
    }
    return {
        state: state,
        remaining: amount,
    };
}
function findNextFreeColumn(columns, amount) {
    if (columns.length === 0) {
        return -1;
    }
    var direction = amount < 0 ? 'left' : 'right';
    if (direction === 'left') {
        columns = columns.slice().reverse();
    }
    var freeIndex = -1;
    columns.forEach(function (column) {
        if (column_state_1.getFreeSpace(column) && freeIndex === -1) {
            freeIndex = column.index;
        }
    });
    if (freeIndex === -1) {
        return -1;
    }
    return freeIndex;
}
function amountFor(colType) {
    return function (amount) {
        return colType === ColType.SOURCE
            ? amount > 0
                ? -amount
                : amount
            : amount < 0
                ? -amount
                : amount;
    };
}
function widthFor(colType) {
    return function (amount, srcCol, destCol) {
        return (colType === ColType.SOURCE ? srcCol : destCol).width +
            amountFor(colType)(amount);
    };
}
function getCandidates(state, destIdx, amount) {
    var candidates = state.cols;
    // only consider rows after the selected column in the direction of resize
    return amount < 0
        ? candidates.slice(0, destIdx)
        : candidates.slice(destIdx + 1);
}
//# sourceMappingURL=resize-logic.js.map