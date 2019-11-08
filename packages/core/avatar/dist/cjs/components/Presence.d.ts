import { Component, ReactNode } from 'react';
import { PresenceType, SizeType } from '../types';
interface Props {
    /** Used to override the default border color of the presence indicator.
     Accepts any color argument that the border-color CSS property accepts. */
    borderColor?: string | (() => unknown);
    /** Content to use as a custom presence indicator (usually not required if
     consuming Presence separate to Avatar). */
    children?: ReactNode;
    /** Content to use as a custom presence indicator (usually not required if
     consuming Presence separate to Avatar). */
    presence?: PresenceType;
    /** Defines the size of the presence. */
    size?: SizeType;
}
export default class Presence extends Component<Props> {
    render(): JSX.Element;
}
export {};
