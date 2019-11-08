export var toDateObj = function (date) { return ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
}); };
export var toDate = function (date) {
    // The 'proper' month is stored in a DateObj but Date expects month index
    return new Date(date.year, date.month - 1, date.day);
};
/**
 * Determines if the input year is a leap year
 * See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param year: integer
 * @returns boolean
 */
export var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
/**
 * Determines the number of days in specified month on the specified year
 *
 * @param year: number
 * @param month: number
 * @returns number
 */
export var getDaysInMonth = function (year, month) {
    // February depends on leap year
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
};
/**
 * Determines whether or not the specified DateObj will create a valid and
 * logical Date.
 *
 * @param date: DateObj
 * @returns boolean
 */
export var isValid = function (date) {
    var year = date.year, month = date.month, day = date.day;
    var daysInMonth = getDaysInMonth(year, month);
    return 1 <= month && month <= 12 && 1 <= day && day <= daysInMonth;
};
/**
 * Normalizes the specified DateObj, replacing NaN year and zero/NaN month/day
 * with backup values. It also replaces 'short' years (0 - 99) with their 'full'
 * equivalent (2000 - 2099)
 *
 * @param date: DateObj
 * @returns DateObj
 */
export var normalizeDate = function (date) {
    var now = toDateObj(new Date());
    var year = date.year, month = date.month, day = date.day;
    // 19 should evaluate to 2019
    var fullYear = year < 100 ? 2000 + year : year;
    // Missing date pieces are filled in with their current date values
    var normalizedYear = !isNaN(fullYear) ? fullYear : now.year;
    var normalizedMonth = !isNaN(month) && month !== 0 ? month : now.month;
    var normalizedDay = !isNaN(day) && day !== 0 ? day : now.day;
    return {
        year: normalizedYear,
        month: normalizedMonth,
        day: normalizedDay,
    };
};
//# sourceMappingURL=utils.js.map