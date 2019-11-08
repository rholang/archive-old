import { isValid, normalizeDate, toDate } from './utils';
import { normalizeLocale } from '../common';
var INVALID_DATE = new Date(NaN);
var INVARIANT = { year: 1993, month: 2, day: 18 };
var INVARIANT_DATE = toDate(INVARIANT);
var FORMAT_EXTRACTOR_REGEX = /(\d+)[^\d]+(\d+)[^\d]+(\d+)\.?/;
var DATE_PARSER_REGEX = /(\d+)[^\d]*(\d+)?[^\d]*(\d+)?\.?/;
// Internet Explorer returns non-printing characters when formatting a date
var stripExtras = function (str) { return str.replace(/\u200E/g, ''); };
var extractDateParts = function (matchResult) {
    return (matchResult
        // Get the 3 capture groups
        .splice(1, 4)
        // Convert them to numbers
        .map(function (datePart) { return parseInt(datePart, 10); }));
};
/**
 * Creates a date parser function for a specific locale. The function will
 * either return a valid Date from the input or an Invalid Date object if the
 * input is invalid.
 *
 * @param locale - A BCP 47 language tag
 * @returns DateParser
 */
export var createDateParser = function (locale) {
    // Intl.DateFormat expects locales in the format of 'la-CO' however it is
    // common for locale to be provided in the format of 'la_CO', where 'la' is
    // language and 'CO' is country.
    var normalizedLocale = normalizeLocale(locale);
    var dateFormatter = Intl.DateTimeFormat(normalizedLocale);
    // Generate a date string from a hard coded date, this allows us to determine
    // the year/month/day position for the provided locale.
    var rawDateString = dateFormatter.format(INVARIANT_DATE);
    var shortDate = stripExtras(rawDateString);
    // Extract the date pieces from the locale formatted date string
    var formatMatch = shortDate.match(FORMAT_EXTRACTOR_REGEX);
    if (!formatMatch) {
        throw new Error('Unable to create DateParser');
    }
    var formatParts = extractDateParts(formatMatch);
    // Find the year/month/day positions of the locale formatted invariant date
    var yearPosition = formatParts.indexOf(INVARIANT.year);
    var monthPosition = formatParts.indexOf(INVARIANT.month);
    var dayPosition = formatParts.indexOf(INVARIANT.day);
    return function (date) {
        var dateMatch = stripExtras(date).match(DATE_PARSER_REGEX);
        if (!dateMatch) {
            return INVALID_DATE;
        }
        var dateParts = extractDateParts(dateMatch);
        // Use the previously extracted year/month/day positions to extract each
        // date piece.
        var extractedDate = {
            year: dateParts[yearPosition],
            month: dateParts[monthPosition],
            day: dateParts[dayPosition],
        };
        var normalizedDate = normalizeDate(extractedDate);
        if (!isValid(normalizedDate)) {
            return INVALID_DATE;
        }
        return toDate(normalizedDate);
    };
};
//# sourceMappingURL=index.js.map