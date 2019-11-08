export declare type DateParser = (date: string) => Date;
/**
 * Creates a date parser function for a specific locale. The function will
 * either return a valid Date from the input or an Invalid Date object if the
 * input is invalid.
 *
 * @param locale - A BCP 47 language tag
 * @returns DateParser
 */
export declare const createDateParser: (locale: string) => DateParser;
