import React, { Component, ReactNode, ComponentType } from 'react';
import { TagColor } from '../types';
export interface Props {
    children: ReactNode;
    href?: string;
    isFocused?: boolean;
    isRemovable?: boolean;
    markedForRemoval?: boolean;
    color: TagColor;
    linkComponent?: ComponentType<any>;
}
export declare type StyledProps = Partial<Props>;
export default class Content extends Component<Props> {
    getLinkComponent: () => import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & Partial<Props>, any, React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & Partial<Props>> | import("styled-components").StyledComponentClass<any, any, Pick<any, string | number> & {
        theme?: any;
    }> | null;
    render(): JSX.Element;
}
