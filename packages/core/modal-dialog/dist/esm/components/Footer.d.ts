import React from 'react';
import { AppearanceType, ButtonOnClick } from '../types';
export interface FooterProps {
    /** Buttons to render in the footer */
    actions?: Array<{
        onClick?: ButtonOnClick;
        text?: string;
        /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
        testId?: string;
    }>;
    /** Appearance of the primary button. Also adds an icon to the heading, if provided. */
    appearance?: AppearanceType;
    /** Component to render the footer of the modal */
    component?: React.ElementType;
    /** Function to close the dialog */
    onClose: Function;
    /** Whether or not to display a line above the footer */
    showKeyline?: boolean;
}
export default class ModalFooter extends React.Component<FooterProps, {}> {
    render(): JSX.Element | null;
}
