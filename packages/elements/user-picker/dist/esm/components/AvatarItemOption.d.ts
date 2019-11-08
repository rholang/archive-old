import React, { ReactNode } from 'react';
export declare const TextWrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare type AvatarItemOptionProps = {
    avatar: ReactNode;
    primaryText?: ReactNode;
    secondaryText?: ReactNode;
};
export declare const AvatarItemOption: (props: AvatarItemOptionProps) => JSX.Element;
