import { CalendarClassType } from '@atlaskit/calendar';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { CSSObject } from '@emotion/styled';
import { LocalizationProvider } from '@atlaskit/locale';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import React from 'react';
import { SelectProps, Appearance, Spacing } from '../types.js';
export interface Props extends WithAnalyticsEventsProps {
    /** Defines the appearance which can be default or subtle - no borders, background or icon.
     * Appearance values will be ignored if styles are parsed via the selectProps.
     */
    appearance?: Appearance;
    /** Whether or not to auto-focus the field. */
    autoFocus: boolean;
    /** Default for `isOpen`. */
    defaultIsOpen: boolean;
    /** Default for `value`. */
    defaultValue: string;
    /** An array of ISO dates that should be disabled on the calendar. */
    disabled: string[];
    /** The icon to show in the field. */
    icon: React.ReactNode;
    /** The id of the field. Currently, react-select transforms this to have a "react-select-" prefix, and an "--input" suffix when applied to the input. For example, the id "my-input" would be transformed to "react-select-my-input--input". Keep this in mind when needing to refer to the ID. This will be fixed in an upcoming release. */
    id: string;
    /** Props to apply to the container. **/
    innerProps: React.AllHTMLAttributes<HTMLElement>;
    /** Whether or not the field is disabled. */
    isDisabled?: boolean;
    /** Whether or not the dropdown is open. */
    isOpen?: boolean;
    /** The name of the field. */
    name: string;
    /** Called when the field is blurred. */
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    /** Called when the value changes. The only argument is an ISO time or empty string. */
    onChange: (value: string) => void;
    /** Called when the field is focused. */
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    /** A function for parsing input characters and transforming them into a Date object. By default parses the date string based off the locale */
    parseInputValue?: (date: string, dateFormat: string) => Date;
    /** DEPRECATED - Use locale instead. A function for formatting the date displayed in the input. By default composes together [date-fn's parse method](https://date-fns.org/v1.29.0/docs/parse) and [date-fn's format method](https://date-fns.org/v1.29.0/docs/format) to return a correctly formatted date string*/
    formatDisplayLabel?: (value: string, dateFormat: string) => string;
    /** Props to apply to the select. This can be used to set options such as placeholder text.
     *  See [here](/packages/core/select) for documentation on select props. */
    selectProps: SelectProps;
    spacing?: Spacing;
    /** The ISO time that should be used as the input value. */
    value?: string;
    /** Indicates current value is invalid & changes border color */
    isInvalid?: boolean;
    /** Hides icon for dropdown indicator. */
    hideIcon?: boolean;
    /** DEPRECATED - Use locale instead. Format the date with a string that is accepted by [date-fns's format function](https://date-fns.org/v1.29.0/docs/format). */
    dateFormat?: string;
    /** Placeholder text displayed in input */
    placeholder?: string;
    /** Locale used to format the the date and calendar. See [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) */
    locale: string;
}
interface State {
    isOpen: boolean;
    value: string;
    /** Value to be shown in the calendar as selected.  */
    selectedValue: string;
    view: string;
    inputValue: string;
    l10n: LocalizationProvider;
}
declare function noop(): void;
declare class DatePicker extends React.Component<Props, State> {
    calendarRef: CalendarClassType | null;
    containerRef: HTMLElement | null;
    static defaultProps: {
        appearance: Appearance;
        autoFocus: boolean;
        defaultIsOpen: boolean;
        defaultValue: string;
        disabled: never[];
        hideIcon: boolean;
        icon: typeof CalendarIcon;
        id: string;
        innerProps: {};
        isDisabled: boolean;
        isInvalid: boolean;
        name: string;
        onBlur: typeof noop;
        onChange: typeof noop;
        onFocus: typeof noop;
        selectProps: {};
        spacing: Spacing;
        locale: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: Readonly<Props>): void;
    getSafeState: () => {
        inputValue: any;
        isOpen: boolean;
        value: string;
        selectedValue: string;
        view: string;
        l10n: LocalizationProvider;
    };
    isDateDisabled: (date: string) => boolean;
    onCalendarChange: ({ iso }: {
        iso: string;
    }) => void;
    onCalendarSelect: ({ iso }: {
        iso: string;
    }) => void;
    onInputClick: () => void;
    onSelectBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onSelectFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onSelectInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    refCalendar: (ref: import("@atlaskit/calendar/dist/cjs/components/Calendar").CalendarWithoutAnalytics | null) => void;
    handleInputChange: (inputValue: string, actionMeta: {}) => void;
    getContainerRef: (ref: HTMLElement | null) => void;
    getSubtleControlStyles: (isOpen: boolean) => CSSObject;
    /**
     * There are two props that can change how the date is parsed.
     * The priority of props used is:
     *   1. parseInputValue
     *   2. locale
     */
    parseDate: (date: string) => Date | null;
    /**
     * There are multiple props that can change how the date is formatted.
     * The priority of props used is:
     *   1. formatDisplayLabel
     *   2. dateFormat
     *   3. locale
     */
    formatDate: (value: string) => string;
    getPlaceholder: () => string;
    render(): JSX.Element;
}
export { DatePicker as DatePickerWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "appearance" | "icon" | "disabled" | "defaultValue" | "id" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "isOpen" | "name" | "parseInputValue" | "formatDisplayLabel" | "spacing" | "value" | "isInvalid" | "hideIcon" | "dateFormat" | "locale">, "placeholder" | "isOpen" | "parseInputValue" | "formatDisplayLabel" | "value" | "dateFormat"> & Partial<Pick<Pick<Props, "appearance" | "icon" | "disabled" | "defaultValue" | "id" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "isOpen" | "name" | "parseInputValue" | "formatDisplayLabel" | "spacing" | "value" | "isInvalid" | "hideIcon" | "dateFormat" | "locale">, "appearance" | "icon" | "disabled" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "name" | "spacing" | "isInvalid" | "hideIcon" | "locale">> & Partial<Pick<{
    appearance: Appearance;
    autoFocus: boolean;
    defaultIsOpen: boolean;
    defaultValue: string;
    disabled: never[];
    hideIcon: boolean;
    icon: typeof CalendarIcon;
    id: string;
    innerProps: {};
    isDisabled: boolean;
    isInvalid: boolean;
    name: string;
    onBlur: typeof noop;
    onChange: typeof noop;
    onFocus: typeof noop;
    selectProps: {};
    spacing: Spacing;
    locale: string;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "appearance" | "icon" | "disabled" | "key" | "defaultValue" | "id" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "isOpen" | "name" | "parseInputValue" | "formatDisplayLabel" | "spacing" | "value" | "isInvalid" | "hideIcon" | "dateFormat" | "locale" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
