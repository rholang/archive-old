import { __read, __spread } from "tslib";
export var padArray = function (arr, size, value) {
    if (size === 0) {
        return arr;
    }
    var gap = new Array(size);
    gap.fill(value);
    return arr.length > 0 ? __spread(arr, gap) : gap;
};
//# sourceMappingURL=index.js.map