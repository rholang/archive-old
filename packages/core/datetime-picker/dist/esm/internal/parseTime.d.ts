export declare function isValid(timeString: string): boolean;
export declare function removeSpacer(time: string): string;
export declare function formatSemi24(time: string): string;
export declare function checkHour(hour: string, meridiem: string): string | null;
export declare function checkMinute(minute: string): string | null;
export declare function convertTo24hrTime(time: string): {
    hour: number;
    minute: number;
} | null;
export declare function assignToDate(time: {
    hour: number;
    minute: number;
}): Date;
export default function (time: string): string | Date;
