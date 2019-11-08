import { MouseEvent } from 'react';
export interface CloneProps {
    /** Whether or not to display a pulse animation around the spotlighted element */
    pulse: boolean;
    style: Record<string, any>;
    /** The name of the SpotlightTarget */
    target?: string;
    /** The spotlight target node */
    targetNode: HTMLElement;
    /** The background color of the element being highlighted */
    targetBgColor?: string;
    /** Function to fire when a user clicks on the cloned target */
    targetOnClick?: (eventData: {
        event: MouseEvent<HTMLElement>;
        target?: string;
    }) => unknown;
    /** The border-radius of the element being highlighted */
    targetRadius?: number;
}
declare const Clone: (props: CloneProps) => JSX.Element;
export default Clone;
