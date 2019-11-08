import React, { ComponentType, ReactNode, MouseEvent } from 'react';
import { Actions } from '../types';
export interface Props {
    /** Buttons to render in the footer */
    actions?: Actions;
    /** An optional node to be rendered beside the footer actions */
    actionsBeforeElement?: ReactNode;
    /** The elements rendered in the modal */
    children?: ReactNode;
    /** Where the dialog should appear, relative to the contents of the children. */
    dialogPlacement?: 'top left' | 'top center' | 'top right' | 'right top' | 'right middle' | 'right bottom' | 'bottom left' | 'bottom center' | 'bottom right' | 'left top' | 'left middle' | 'left bottom';
    /** The width of the dialog in pixels. Min 160 - Max 600 */
    dialogWidth: number;
    /** Optional element rendered below the body */
    footer?: ComponentType<any>;
    /** Optional element rendered above the body */
    header?: ComponentType<any>;
    /** Heading text rendered above the body */
    heading?: string;
    /** Path to the the your image */
    image?: string;
    /** Whether or not to display a pulse animation around the spotlighted element */
    pulse: boolean;
    /** The name of the SpotlightTarget */
    target?: string;
    /** The spotlight target node */
    targetNode?: HTMLElement;
    /** The background color of the element being highlighted */
    targetBgColor?: string;
    /** Function to fire when a user clicks on the cloned target */
    targetOnClick?: (eventData: {
        event: MouseEvent<HTMLElement>;
        target?: string;
    }) => void;
    /** The border-radius of the element being highlighted */
    targetRadius?: number;
    /** Alternative element to render than the wrapped target */
    targetReplacement?: ComponentType<any>;
}
declare class Spotlight extends React.Component<Props> {
    static defaultProps: {
        dialogWidth: number;
        pulse: boolean;
    };
    render(): JSX.Element;
}
export default Spotlight;
