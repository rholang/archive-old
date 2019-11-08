import React, { Component } from 'react';
import { TabData, TabsProps, TabsState } from '../types';
declare class Tabs extends Component<TabsProps, TabsState> {
    static defaultProps: {
        components: {};
    };
    constructor(props: TabsProps);
    UNSAFE_componentWillReceiveProps(newProps: TabsProps): void;
    resolveSelected: (selected: any, newProps?: TabsProps | undefined) => TabData;
    onSelect: (newselected: TabData, newSelectedIndex: number) => void;
    render(): JSX.Element;
}
export { Tabs as TabsWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<TabsProps, "onSelect" | "selected" | "tabs" | "components" | "defaultSelected" | "isSelectedTest" | "testId">, "onSelect" | "selected" | "tabs" | "defaultSelected" | "isSelectedTest" | "testId"> & Partial<Pick<Pick<TabsProps, "onSelect" | "selected" | "tabs" | "components" | "defaultSelected" | "isSelectedTest" | "testId">, "components">> & Partial<Pick<{
    components: {};
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "onSelect" | "selected" | "tabs" | "key" | "components" | "defaultSelected" | "isSelectedTest" | "testId" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
