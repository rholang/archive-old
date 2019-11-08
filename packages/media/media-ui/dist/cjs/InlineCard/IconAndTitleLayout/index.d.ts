import * as React from 'react';
export interface IconAndTitleLayoutProps {
    icon?: string | React.ReactNode;
    title: string;
    right?: React.ReactNode;
    titleColor?: string;
}
export declare class IconAndTitleLayout extends React.Component<IconAndTitleLayoutProps> {
    renderIcon(): JSX.Element | null;
    render(): JSX.Element;
}
