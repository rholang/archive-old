/// <reference types="react-redux" />
import { Component } from 'react';
export interface SidebarStateProps {
    readonly selected: string;
}
export declare type SidebarProps = SidebarStateProps;
export declare class StatelessSidebar extends Component<SidebarProps> {
    render(): JSX.Element;
    private getCloudPickingSidebarItems;
}
declare const _default;
export default _default;
