import { LocalizationProvider } from '@atlaskit/locale';
import React from 'react';
import { CSSObject } from '@emotion/core';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { Appearance, Spacing, SelectProps } from '../types';
interface Option {
    label: string;
    value: string;
}
export interface Props extends WithAnalyticsEventsProps {
    /** Defines the appearance which can be default or subtle - no borders, background or icon.
     *  Appearance values will be ignored if styles are parsed via the selectProps.
     */
    appearance?: Appearance;
    /** Whether or not to auto-focus the field. */
    autoFocus: boolean;
    /** Default for `isOpen`. */
    defaultIsOpen: boolean;
    /** Default for `value`. */
    defaultValue: string;
    /** DEPRECATED - Use locale instead. Function for formatting the displayed time value in the input. By default parses with an internal time parser, and formats using the [date-fns format function]((https://date-fns.org/v1.29.0/docs/format)) */
    formatDisplayLabel?: (time: string, timeFormat: string) => string;
    /** The icon to show in the field. */
    icon?: React.ReactNode;
    /** The id of the field. Currently, react-select transforms this to have a "react-select-" prefix, and an "--input" suffix when applied to the input. For example, the id "my-input" would be transformed to "react-select-my-input--input". Keep this in mind when needing to refer to the ID. This will be fixed in an upcoming release. */
    id: string;
    /** Props to apply to the container. **/
    innerProps: React.AllHTMLAttributes<HTMLElement>;
    /** Whether or not the field is disabled. */
    isDisabled: boolean;
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
    parseInputValue: (time: string, timeFormat: string) => string | Date;
    /** Props to apply to the select. */
    selectProps: SelectProps;
    spacing: Spacing;
    /** The times to show in the dropdown. */
    times: string[];
    /** Allow users to edit the input and add a time */
    timeIsEditable?: boolean;
    /** The ISO time that should be used as the input value. */
    value?: string;
    /** Indicates current value is invalid & changes border color. */
    isInvalid?: boolean;
    /** Hides icon for dropdown indicator. */
    hideIcon?: boolean;
    /** DEPRECATED - Use locale instead. Time format that is accepted by [date-fns's format function](https://date-fns.org/v1.29.0/docs/format)*/
    timeFormat?: string;
    /** Placeholder text displayed in input */
    placeholder?: string;
    locale: string;
}
interface State {
    isOpen: boolean;
    value: string;
    isFocused: boolean;
    l10n: LocalizationProvider;
}
declare function noop(): void;
declare class TimePicker extends React.Component<Props, State> {
    containerRef: HTMLElement | null;
    static defaultProps: {
        appearance: Appearance;
        autoFocus: boolean;
        defaultIsOpen: boolean;
        defaultValue: string;
        hideIcon: boolean;
        id: string;
        innerProps: {};
        isDisabled: boolean;
        isInvalid: boolean;
        name: string;
        onBlur: typeof noop;
        onChange: typeof noop;
        onFocus: typeof noop;
        parseInputValue: (time: string) => string | Date;
        selectProps: {};
        spacing: Spacing;
        times: string[];
        timeIsEditable: boolean;
        locale: string;
    };
    state: {
        isOpen: boolean;
        value: string;
        isFocused: boolean;
        l10n: LocalizationProvider;
    };
    componentWillReceiveProps(nextProps: Props): void;
    getSafeState: () => State;
    getOptions(): Array<Option>;
    onChange: (v: {
        value: string;
    } | null) => void;
    /** Only allow custom times if timeIsEditable prop is true  */
    onCreateOption: (inputValue: any) => void;
    onMenuOpen: () => void;
    onMenuClose: () => void;
    setContainerRef: (ref: HTMLElement | null) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    getSubtleControlStyles: (selectStyles: any) => CSSObject;
    /**
     * There are multiple props that can change how the time is formatted.
     * The priority of props used is:
     *   1. formatDisplayLabel
     *   2. timeFormat
     *   3. locale
     */
    formatTime: (time: string) => string;
    getPlaceholder: () => string;
    render(): JSX.Element;
}
export { TimePicker as TimePickerWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "appearance" | "icon" | "defaultValue" | "id" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "isOpen" | "name" | "parseInputValue" | "formatDisplayLabel" | "spacing" | "value" | "isInvalid" | "hideIcon" | "locale" | "times" | "timeIsEditable" | "timeFormat">, "icon" | "placeholder" | "isOpen" | "formatDisplayLabel" | "value" | "timeFormat"> & Partial<Pick<Pick<Props, "appearance" | "icon" | "defaultValue" | "id" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "isOpen" | "name" | "parseInputValue" | "formatDisplayLabel" | "spacing" | "value" | "isInvalid" | "hideIcon" | "locale" | "times" | "timeIsEditable" | "timeFormat">, "appearance" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "name" | "parseInputValue" | "spacing" | "isInvalid" | "hideIcon" | "locale" | "times" | "timeIsEditable">> & Partial<Pick<{
    appearance: Appearance;
    autoFocus: boolean;
    defaultIsOpen: boolean;
    defaultValue: string;
    hideIcon: boolean;
    id: string;
    innerProps: {};
    isDisabled: boolean;
    isInvalid: boolean;
    name: string;
    onBlur: typeof noop;
    onChange: typeof noop;
    onFocus: typeof noop;
    parseInputValue: (time: string) => string | Date;
    selectProps: {};
    spacing: Spacing;
    times: string[];
    timeIsEditable: boolean;
    locale: string;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "appearance" | "icon" | "key" | "defaultValue" | "id" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "selectProps" | "innerProps" | "autoFocus" | "defaultIsOpen" | "isDisabled" | "isOpen" | "name" | "parseInputValue" | "formatDisplayLabel" | "spacing" | "value" | "isInvalid" | "hideIcon" | "locale" | "analyticsContext" | "times" | "timeIsEditable" | "timeFormat"> & React.RefAttributes<any>>;
export default _default;
