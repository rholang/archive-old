import React from 'react';
import { PopperChildrenProps, PopperProps } from 'react-popper';
import { Placement } from './types';
export { Manager, Reference } from 'react-popper';
interface State {
}
export interface Props {
    /** Returns the element to be positioned */
    children: (childrenProps: PopperChildrenProps) => React.ReactNode;
    /** Formatted like "0, 8px" — how far to offset the Popper from the Reference. Changes automatically based on the placement */
    offset: number | string;
    /** Which side of the Reference to show on. */
    placement: Placement;
    /** Replacement reference element to position popper relative to */
    referenceElement?: HTMLElement;
    /** Additional modifiers and modifier overwrites */
    modifiers?: PopperProps['modifiers'];
}
export declare class Popper extends React.Component<Props, State> {
    static defaultProps: Props;
    getModifiers: (placement: Placement) => import("popper.js").default.Modifiers | undefined;
    render(): JSX.Element;
}
