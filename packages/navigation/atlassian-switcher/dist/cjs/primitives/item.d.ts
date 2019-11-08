import * as React from 'react';
import { WithAnalyticsEventsProps } from '../utils/analytics';
export interface SwitcherItemProps extends WithAnalyticsEventsProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    description?: React.ReactNode;
    onClick?: Function;
    href?: string;
    isDisabled?: boolean;
    onKeyDown?: any;
}
export default class SwitcherItem extends React.Component<SwitcherItemProps> {
    render(): JSX.Element;
}
