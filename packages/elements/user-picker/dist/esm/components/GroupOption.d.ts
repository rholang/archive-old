import * as React from 'react';
import { Group } from '../types';
export declare const GroupOptionIconWrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare type GroupOptionProps = {
    group: Group;
    isSelected: boolean;
};
export declare class GroupOption extends React.PureComponent<GroupOptionProps> {
    private getPrimaryText;
    private renderAvatar;
    private renderByline;
    render(): JSX.Element;
}
