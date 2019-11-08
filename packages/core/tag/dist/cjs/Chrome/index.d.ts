import React, { PureComponent, ReactNode, FocusEvent, KeyboardEvent } from 'react';
import { TagColor } from '../types';
interface Props {
    children: ReactNode;
    isLink: boolean;
    isRemovable: boolean;
    isRemoved?: boolean;
    isRemoving?: boolean;
    isRounded?: boolean;
    markedForRemoval: boolean;
    onFocusChange: (focused: boolean) => void;
    color: TagColor;
}
export interface SpanProps extends Props {
    innerRef: (r: HTMLElement) => void;
    onBlur: () => void;
    onFocus: (e: FocusEvent<HTMLElement>) => void;
    onKeyPress: (e: KeyboardEvent<HTMLSpanElement>) => void;
    role: string;
    tabIndex: number;
}
export default class Chrome extends PureComponent<Props> {
    chromeRef?: HTMLElement;
    handleKeyPress: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
    handleBlur: () => void;
    handleFocus: (e: React.FocusEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
export {};
