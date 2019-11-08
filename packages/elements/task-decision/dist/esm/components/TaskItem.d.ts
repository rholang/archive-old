import * as React from 'react';
import { PureComponent } from 'react';
import { Appearance, ContentRef } from '../types';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export interface Props {
    taskId: string;
    isDone?: boolean;
    onChange?: (taskId: string, isChecked: boolean) => void;
    contentRef?: ContentRef;
    children?: any;
    placeholder?: string;
    showPlaceholder?: boolean;
    appearance?: Appearance;
    disabled?: boolean;
}
export declare class TaskItem extends PureComponent<Props & WithAnalyticsEventsProps, {}> {
    static defaultProps: Partial<Props>;
    private checkBoxId;
    constructor(props: Props & WithAnalyticsEventsProps);
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    handleOnChange: (_evt: React.SyntheticEvent<HTMLInputElement, Event>) => void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props & WithAnalyticsEventsProps, "placeholder" | "children" | "onChange" | "showPlaceholder" | "appearance" | "contentRef" | "taskId" | "isDone" | "disabled">, never> & Partial<Pick<Pick<Props & WithAnalyticsEventsProps, "placeholder" | "children" | "onChange" | "showPlaceholder" | "appearance" | "contentRef" | "taskId" | "isDone" | "disabled">, "placeholder" | "children" | "onChange" | "showPlaceholder" | "appearance" | "contentRef" | "taskId" | "isDone" | "disabled">> & Partial<Pick<Partial<Props>, never>> & React.RefAttributes<any>>;
export default _default;
