"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pad(num) {
    return num < 10 ? "0" + num : num;
}
function dateToString(date, options) {
    return date.year + "-" + pad(date.month + (options && options.fixMonth ? 1 : 0)) + "-" + pad(date.day);
}
exports.dateToString = dateToString;
//# sourceMappingURL=index.js.map