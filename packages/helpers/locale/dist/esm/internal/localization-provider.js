import { normalizeLocale } from './common';
import { createDateParser } from './date-parser';
export var createLocalizationProvider = function (locale) {
    // Intl.DateFormat expects locales in the format of 'la-CO' however it is
    // common for locale to be provided in the format of 'la_CO', where 'la' is
    // language and 'CO' is country.
    var normalizedLocale = normalizeLocale(locale);
    var dayFormatter = Intl.DateTimeFormat(normalizedLocale, {
        weekday: 'short',
    });
    var monthFormatter = Intl.DateTimeFormat(normalizedLocale, {
        month: 'long',
    });
    var dateFormatter = Intl.DateTimeFormat(normalizedLocale);
    var timeFormatter = Intl.DateTimeFormat(normalizedLocale, {
        hour: 'numeric',
        minute: 'numeric',
    });
    var daysShort = [1, 2, 3, 4, 5, 6, 7].map(function (day) {
        // Some short days are longer than 3 characters but are unique if the first
        // three non-white characters are used.
        return dayFormatter
            // Date range chosen which has a Sun-Sat range so we can extract the names
            .format(new Date(2000, 9, day, 12))
            // \u200E matches on the Left-to-Right Mark character in IE/Edge
            .replace(/[\s\u200E]/g, '')
            .substring(0, 3);
    });
    var monthsLong = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (month) {
        // Date chosen for no real reason, the only important part is the month
        return monthFormatter.format(new Date(2000, month, 1));
    });
    var parseDate = createDateParser(normalizedLocale);
    return {
        getDaysShort: function () { return daysShort; },
        getMonthsLong: function () { return monthsLong; },
        formatDate: dateFormatter.format,
        formatTime: timeFormatter.format,
        parseDate: parseDate,
    };
};
//# sourceMappingURL=localization-provider.js.map