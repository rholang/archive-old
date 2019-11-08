import * as React from 'react';
import { SwitcherChildItem } from '../types';
import { WithAnalyticsEventsProps } from '../utils/analytics';
interface Props extends WithAnalyticsEventsProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    tooltipContent: React.ReactNode;
    description?: React.ReactNode;
    onChildItemClick?: Function;
    onExpandClick?: Function;
    onItemClick?: Function;
    href?: string;
    isDisabled?: boolean;
    childIcon?: React.ReactNode;
    childItems?: SwitcherChildItem[];
}
declare const SwitcherItemWithDropDownWithEvents: React.ForwardRefExoticComponent<Pick<Props, "children" | "description" | "href" | "isDisabled" | "icon" | "tooltipContent" | "onChildItemClick" | "onExpandClick" | "onItemClick" | "childIcon" | "childItems"> & React.RefAttributes<any>>;
export default SwitcherItemWithDropDownWithEvents;
