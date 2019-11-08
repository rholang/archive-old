/**
 * A numerical representation of a date:
 *  - year: any positive integer
 *  - month: 1 - 12 (Jan - Dec)
 *  - day: 1 - [28, 29, 30, 31] (depending on month)
 */
export declare type DateObj = {
    year: number;
    month: number;
    day: number;
};
export declare const toDateObj: (date: Date) => DateObj;
export declare const toDate: (date: DateObj) => Date;
/**
 * Determines if the input year is a leap year
 * See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param year: integer
 * @returns boolean
 */
export declare const isLeapYear: (year: number) => boolean;
/**
 * Determines the number of days in specified month on the specified year
 *
 * @param year: number
 * @param month: number
 * @returns number
 */
export declare const getDaysInMonth: (year: number, month: number) => number;
/**
 * Determines whether or not the specified DateObj will create a valid and
 * logical Date.
 *
 * @param date: DateObj
 * @returns boolean
 */
export declare const isValid: (date: DateObj) => boolean;
/**
 * Normalizes the specified DateObj, replacing NaN year and zero/NaN month/day
 * with backup values. It also replaces 'short' years (0 - 99) with their 'full'
 * equivalent (2000 - 2099)
 *
 * @param date: DateObj
 * @returns DateObj
 */
export declare const normalizeDate: (date: DateObj) => DateObj;
