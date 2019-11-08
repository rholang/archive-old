"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_this_week_1 = tslib_1.__importDefault(require("date-fns/is_this_week"));
var is_this_month_1 = tslib_1.__importDefault(require("date-fns/is_this_month"));
var difference_in_months_1 = tslib_1.__importDefault(require("date-fns/difference_in_months"));
var is_valid_1 = tslib_1.__importDefault(require("date-fns/is_valid"));
function isValidDate(date, today) {
    if (today === void 0) { today = new Date(); }
    return !!date.getTime && is_valid_1.default(date) && date.getTime() <= today.getTime();
}
exports.isValidDate = isValidDate;
function getRelativeDateKey(date, today) {
    if (today === void 0) { today = new Date(); }
    if (!date || !isValidDate(date, today)) {
        return null;
    }
    if (is_this_week_1.default(date)) {
        return 'ThisWeek';
    }
    if (is_this_month_1.default(date)) {
        return 'ThisMonth';
    }
    if (date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() - 1) {
        return 'LastMonth';
    }
    var diffInMonths = difference_in_months_1.default(today, date);
    if (diffInMonths < 6) {
        return 'AFewMonths';
    }
    if (diffInMonths <= 12) {
        return 'SeveralMonths';
    }
    return 'MoreThanAYear';
}
exports.default = getRelativeDateKey;
//# sourceMappingURL=relative-date.js.map