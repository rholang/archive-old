import React from 'react';
import { SelectProps } from '../types';
export declare const ClearIndicator: null;
export declare const placeholderDatetime: Date;
export declare const defaultTimes: string[];
export declare const defaultTimeFormat = "h:mma";
export declare const defaultDateFormat = "YYYY/MM/DD";
export declare function padToTwo(number: number): string;
declare type Props = {
    selectProps: SelectProps;
};
export declare const DropdownIndicator: (props: Props) => React.ReactNode;
export declare function formatDateTimeZoneIntoIso(date: string, time: string, zone: string): string;
export {};
