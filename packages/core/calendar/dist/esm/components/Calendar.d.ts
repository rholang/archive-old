import { LocalizationProvider } from '@atlaskit/locale';
import React, { Component } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { ChangeEvent, SelectEvent, DateObj, ArrowKeys } from '../types';
export interface CalendarProps extends WithAnalyticsEventsProps {
    /** The number of the day currently focused. Places border around the date. 0 highlights no date. */
    day?: number;
    /** Default for `day`. */
    defaultDay: number;
    /** Default for `disabled`. */
    defaultDisabled: Array<string>;
    /** Default for `month`. */
    defaultMonth?: number;
    /** Default for `previouslySelected`. */
    defaultPreviouslySelected: Array<string>;
    /** Default for `selected`. */
    defaultSelected: Array<string>;
    /** Default for `year`. */
    defaultYear?: number;
    /** Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates provided are greyed out.
     This does not prevent these dates being selected. */
    disabled?: Array<string>;
    /** Props to apply to the container. **/
    innerProps: Object;
    /** The number of the month (from 1 to 12) which the calendar should be on. */
    month?: number;
    /** Function which is called when the calendar is no longer focused. */
    onBlur: React.FocusEventHandler;
    /** Called when the calendar is navigated. This can be triggered by the keyboard, or by clicking the navigational buttons.
     The 'interface' property indicates the the direction the calendar was navigated whereas the 'iso' property is a string of the format YYYY-MM-DD. */
    onChange: (event: ChangeEvent) => void;
    /** Called when the calendar receives focus. This could be from a mouse event on the container by tabbing into it. */
    onFocus: React.FocusEventHandler;
    /** Function called when a day is clicked on. Calls with an object that has
    a day, month and week property as numbers, representing the date just clicked.
    It also has an 'iso' property, which is a string of the selected date in the
    format YYYY-MM-DD. */
    onSelect: (event: SelectEvent) => void;
    /** Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates
     provided are given a background color. */
    previouslySelected?: Array<string>;
    /** Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates
     provided are given a background color. */
    selected?: Array<string>;
    /** Value of current day, as a string in the format 'YYYY-MM-DD'. */
    today?: string;
    /** Year to display the calendar for. */
    year?: number;
    locale: string;
    /**
     * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
     *
     * testId--month - Container containing all available days for the month
     * testId--previous-month - Button to show next month
     * testId--next-month - Button to show previous month
     * testId--current-month-year - Text containing the current month and year
     * testId--selected-day - The currently selected day (may be missing if a date isn’t selected)
     * */
    testId?: string;
}
interface State {
    day: number;
    disabled: Array<string>;
    month: number;
    previouslySelected: Array<string>;
    selected: Array<string>;
    today: string;
    year: number;
    l10n: LocalizationProvider;
}
interface Week {
    key: string;
    components: React.ReactNode[];
}
declare class Calendar extends Component<CalendarProps, State> {
    calendar: any;
    container: HTMLElement | null;
    static defaultProps: {
        onBlur: () => void;
        onChange: () => void;
        onFocus: () => void;
        onSelect: () => void;
        innerProps: {};
        defaultDay: number;
        defaultDisabled: never[];
        defaultSelected: never[];
        defaultPreviouslySelected: never[];
        locale: string;
    };
    constructor(props: CalendarProps);
    componentWillReceiveProps(nextProps: CalendarProps): void;
    getState: () => State;
    getNextMonth(): {
        month: number;
        year: number;
    };
    getPrevMonth(): {
        month: number;
        year: number;
    };
    handleContainerKeyDown: (e: React.KeyboardEvent<Element>) => void;
    handleClickDay: ({ year, month, day }: DateObj) => void;
    handleClickNext: () => void;
    handleClickPrev: () => void;
    handleContainerBlur: (event: React.FocusEvent<Element>) => void;
    handleContainerFocus: (event: React.FocusEvent<Element>) => void;
    focus(): void;
    navigate(type: ArrowKeys): void;
    refContainer: (e: HTMLElement | null) => void;
    triggerOnChange: ({ year, month, day, type }: ChangeEvent) => void;
    triggerOnSelect: ({ year, month, day }: Pick<SelectEvent, "month" | "year" | "day">) => void;
    getCalendarWeeks: (mappedState: State) => Week[];
    render(): JSX.Element;
}
export { Calendar as CalendarWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<CalendarProps, "disabled" | "month" | "previouslySelected" | "selected" | "year" | "testId" | "onFocus" | "onBlur" | "onChange" | "onSelect" | "day" | "defaultDay" | "defaultDisabled" | "defaultMonth" | "defaultPreviouslySelected" | "defaultSelected" | "defaultYear" | "innerProps" | "today" | "locale">, "disabled" | "month" | "previouslySelected" | "selected" | "year" | "testId" | "day" | "defaultMonth" | "defaultYear" | "today"> & Partial<Pick<Pick<CalendarProps, "disabled" | "month" | "previouslySelected" | "selected" | "year" | "testId" | "onFocus" | "onBlur" | "onChange" | "onSelect" | "day" | "defaultDay" | "defaultDisabled" | "defaultMonth" | "defaultPreviouslySelected" | "defaultSelected" | "defaultYear" | "innerProps" | "today" | "locale">, "onFocus" | "onBlur" | "onChange" | "onSelect" | "defaultDay" | "defaultDisabled" | "defaultPreviouslySelected" | "defaultSelected" | "innerProps" | "locale">> & Partial<Pick<{
    onBlur: () => void;
    onChange: () => void;
    onFocus: () => void;
    onSelect: () => void;
    innerProps: {};
    defaultDay: number;
    defaultDisabled: never[];
    defaultSelected: never[];
    defaultPreviouslySelected: never[];
    locale: string;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "disabled" | "month" | "previouslySelected" | "selected" | "year" | "testId" | "key" | "onFocus" | "onBlur" | "onChange" | "onSelect" | "analyticsContext" | "day" | "defaultDay" | "defaultDisabled" | "defaultMonth" | "defaultPreviouslySelected" | "defaultSelected" | "defaultYear" | "innerProps" | "today" | "locale"> & React.RefAttributes<any>>;
export default _default;
