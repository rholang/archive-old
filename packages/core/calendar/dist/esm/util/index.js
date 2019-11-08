function pad(num) {
    return num < 10 ? "0" + num : num;
}
export function dateToString(date, options) {
    return date.year + "-" + pad(date.month + (options && options.fixMonth ? 1 : 0)) + "-" + pad(date.day);
}
//# sourceMappingURL=index.js.map