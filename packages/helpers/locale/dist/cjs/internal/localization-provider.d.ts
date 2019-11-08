import { DateParser } from './date-parser';
export declare type DateFormatter = (date: Date) => string;
export interface LocalizationProvider {
    getDaysShort: () => Array<string>;
    getMonthsLong: () => Array<string>;
    formatDate: DateFormatter;
    formatTime: DateFormatter;
    parseDate: DateParser;
}
export declare const createLocalizationProvider: (locale: string) => LocalizationProvider;
