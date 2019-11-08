import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import React from 'react';
import { Appearance, Spacing, SelectProps } from '../types';
import { Props as DatePickerProps } from './DatePicker';
import { Props as TimePickerProps } from './TimePicker';
export interface Props extends WithAnalyticsEventsProps {
    /** Defines the appearance which can be default or subtle - no borders, background or icon. */
    appearance?: Appearance;
    /** Whether or not to auto-focus the field. */
    autoFocus: boolean;
    /** Default for `value`. */
    defaultValue: string;
    /** The id of the field. Currently, react-select transforms this to have a "react-select-" prefix, and an "--input" suffix when applied to the input. For example, the id "my-input" would be transformed to "react-select-my-input--input". Keep this in mind when needing to refer to the ID. This will be fixed in an upcoming release. */
    id: string;
    /** Props to apply to the container. **/
    innerProps: React.AllHTMLAttributes<HTMLElement>;
    /** Whether or not the field is disabled. */
    isDisabled: boolean;
    /** The name of the field. */
    name: string;
    /** Called when the field is blurred. */
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    /** Called when the value changes and the date / time is a complete value, or empty. The only value is an ISO string or empty string. */
    onChange: (value: string) => void;
    /** Called when the field is focused. */
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    /** The ISO time that should be used as the input value. */
    value?: string;
    /** Allow users to edit the input and add a time. */
    timeIsEditable?: boolean;
    /** Indicates current value is invalid & changes border color. */
    isInvalid?: boolean;
    /** Hides icon for dropdown indicator. */
    hideIcon?: boolean;
    /** DEPRECATED - Use locale instead. Format the date with a string that is accepted by [date-fns's format function](https://date-fns.org/v1.29.0/docs/format). */
    dateFormat?: string;
    datePickerProps: DatePickerProps;
    timePickerProps: TimePickerProps;
    /** Function to parse passed in dateTimePicker value into the requisite sub values date, time and zone. **/
    parseValue?: (dateTimeValue: string, date: string, time: string, timezone: string) => {
        dateValue: string;
        timeValue: string;
        zoneValue: string;
    };
    /** [Select props](/packages/core/select) to pass onto the DatePicker component. This can be used to set options such as placeholder text. */
    datePickerSelectProps: SelectProps;
    /** [Select props](/packages/core/select) to pass onto the TimePicker component. This can be used to set options such as placeholder text. */
    timePickerSelectProps: SelectProps;
    /** The times to show in the times dropdown. */
    times?: Array<string>;
    /** DEPRECATED - Use locale instead. Time format that is accepted by [date-fns's format function](https://date-fns.org/v1.29.0/docs/format)*/
    timeFormat?: string;
    spacing?: Spacing;
    locale: string;
}
interface State {
    active: 0 | 1 | 2;
    dateValue: string;
    isFocused: boolean;
    timeValue: string;
    value: string;
    zoneValue: string;
}
declare function noop(): void;
declare class DateTimePicker extends React.Component<Props, State> {
    static defaultProps: {
        appearance: string;
        autoFocus: boolean;
        isDisabled: boolean;
        name: string;
        onBlur: typeof noop;
        onChange: typeof noop;
        onFocus: typeof noop;
        innerProps: {};
        id: string;
        defaultValue: string;
        timeIsEditable: boolean;
        isInvalid: boolean;
        hideIcon: boolean;
        datePickerProps: {};
        timePickerProps: {};
        datePickerSelectProps: {};
        timePickerSelectProps: {};
        times: string[];
        spacing: string;
        locale: string;
    };
    state: State;
    getSafeState: () => {
        dateValue: string;
        timeValue: string;
        zoneValue: string;
        value: string;
        active: 0 | 1 | 2;
        isFocused: boolean;
    };
    parseValue(value: string, dateValue: string, timeValue: string, zoneValue: string): {
        dateValue: string;
        timeValue: string;
        zoneValue: string;
    };
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onDateChange: (dateValue: string) => void;
    onTimeChange: (timeValue: string) => void;
    onValueChange({ dateValue, timeValue, zoneValue, }: {
        dateValue: string;
        timeValue: string;
        zoneValue: string;
    }): void;
    render(): JSX.Element;
}
export { DateTimePicker as DateTimePickerWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "appearance" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "innerProps" | "autoFocus" | "isDisabled" | "name" | "spacing" | "value" | "isInvalid" | "hideIcon" | "dateFormat" | "locale" | "times" | "timeIsEditable" | "timeFormat" | "datePickerProps" | "timePickerProps" | "parseValue" | "datePickerSelectProps" | "timePickerSelectProps">, "value" | "dateFormat" | "timeFormat" | "parseValue"> & Partial<Pick<Pick<Props, "appearance" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "innerProps" | "autoFocus" | "isDisabled" | "name" | "spacing" | "value" | "isInvalid" | "hideIcon" | "dateFormat" | "locale" | "times" | "timeIsEditable" | "timeFormat" | "datePickerProps" | "timePickerProps" | "parseValue" | "datePickerSelectProps" | "timePickerSelectProps">, "appearance" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "innerProps" | "autoFocus" | "isDisabled" | "name" | "spacing" | "isInvalid" | "hideIcon" | "locale" | "times" | "timeIsEditable" | "datePickerProps" | "timePickerProps" | "datePickerSelectProps" | "timePickerSelectProps">> & Partial<Pick<{
    appearance: string;
    autoFocus: boolean;
    isDisabled: boolean;
    name: string;
    onBlur: typeof noop;
    onChange: typeof noop;
    onFocus: typeof noop;
    innerProps: {};
    id: string;
    defaultValue: string;
    timeIsEditable: boolean;
    isInvalid: boolean;
    hideIcon: boolean;
    datePickerProps: {};
    timePickerProps: {};
    datePickerSelectProps: {};
    timePickerSelectProps: {};
    times: string[];
    spacing: string;
    locale: string;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "appearance" | "key" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "innerProps" | "autoFocus" | "isDisabled" | "name" | "spacing" | "value" | "isInvalid" | "hideIcon" | "dateFormat" | "locale" | "analyticsContext" | "times" | "timeIsEditable" | "timeFormat" | "datePickerProps" | "timePickerProps" | "parseValue" | "datePickerSelectProps" | "timePickerSelectProps"> & React.RefAttributes<any>>;
export default _default;
