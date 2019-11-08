import React from 'react';
import { AppearanceType } from '../types';
export interface HeaderProps {
    /** Appearance of the primary button. Also adds an icon to the heading, if provided. */
    appearance?: AppearanceType;
    /**
      Boolean OR Function indicating which element to focus when the component mounts
      TRUE will automatically find the first "tabbable" element within the modal
      Providing a function should return the element you want to focus
    */
    /** Component to render the header of the modal. */
    component?: React.ElementType;
    /** The modal heading */
    heading?: React.ReactNode;
    /** Function to close the dialog */
    onClose: Function;
    /** Whether or not to display a line under the header */
    showKeyline?: boolean;
    /**
     * Makes heading multiline.
     * If false and heading is longer than one line overflow will be not displayed.
     */
    isHeadingMultiline?: boolean;
}
export default class ModalHeader extends React.Component<HeaderProps, {}> {
    static defaultProps: {
        isHeadingMultiline: boolean;
    };
    render(): JSX.Element | null;
}
