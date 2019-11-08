import { Component, ReactNode } from 'react';
import { StatusType, SizeType } from '../types';
interface StatusProps {
    /** Used to override the default border color of the status indicator.
     Accepts any color argument that the border-color CSS property accepts. */
    borderColor?: string | (() => unknown);
    /** Content to use as a custom status indicator (usually not required if
     consuming Status separate to Avatar). */
    children?: ReactNode;
    /** Content to use as a custom status indicator (usually not required if
     consuming Status separate to Avatar). */
    status?: StatusType;
    /** Defines the size of the status. */
    size?: SizeType;
}
export default class Status extends Component<StatusProps> {
    render(): JSX.Element;
}
export {};
