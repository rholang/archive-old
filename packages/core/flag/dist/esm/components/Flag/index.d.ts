import React, { Component, MouseEventHandler } from 'react';
import { FlagProps, AppearanceTypes } from '../../types';
export declare const DEFAULT_APPEARANCE: AppearanceTypes;
interface State {
    isExpanded: boolean;
}
declare class Flag extends Component<FlagProps, State> {
    static defaultProps: {
        actions: never[];
        appearance: AppearanceTypes;
        isDismissAllowed: boolean;
    };
    state: {
        isExpanded: boolean;
    };
    UNSAFE_componentWillReceiveProps(nextProps: FlagProps): void;
    dismissFlag: () => void;
    isBold: () => boolean;
    toggleExpand: () => void;
    renderToggleOrDismissButton: () => JSX.Element | null;
    renderBody: () => JSX.Element;
    handleMouseDown: MouseEventHandler<HTMLElement>;
    render(): JSX.Element;
}
export { Flag as FlagWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<FlagProps, "appearance" | "title" | "id" | "onFocus" | "onBlur" | "onMouseOut" | "onMouseOver" | "actions" | "linkComponent" | "testId" | "description" | "icon" | "isDismissAllowed" | "onDismissed">, "title" | "id" | "onFocus" | "onBlur" | "onMouseOut" | "onMouseOver" | "linkComponent" | "testId" | "description" | "icon" | "onDismissed"> & Partial<Pick<Pick<FlagProps, "appearance" | "title" | "id" | "onFocus" | "onBlur" | "onMouseOut" | "onMouseOver" | "actions" | "linkComponent" | "testId" | "description" | "icon" | "isDismissAllowed" | "onDismissed">, "appearance" | "actions" | "isDismissAllowed">> & Partial<Pick<{
    actions: never[];
    appearance: AppearanceTypes;
    isDismissAllowed: boolean;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "appearance" | "title" | "key" | "id" | "onFocus" | "onBlur" | "onMouseOut" | "onMouseOver" | "actions" | "linkComponent" | "testId" | "analyticsContext" | "description" | "icon" | "isDismissAllowed" | "onDismissed"> & React.RefAttributes<any>>;
export default _default;
