import React from 'react';
import { IconType, InlineDialogPlacement } from '../../types';
interface Props {
    /** The elements to be displayed by the inline dialog. */
    children: React.ReactNode;
    /** The placement to be passed to the inline dialog. Determines where around
     the text the dialog is displayed. */
    placement: InlineDialogPlacement;
    /** Text to display second. */
    secondaryText: React.ReactNode;
    /** Text to display first, bolded for emphasis. */
    title: React.ReactNode;
    /** Set the icon to be used before the title. Options are: connectivity,
     confirmation, info, warning, and error. */
    type: IconType;
    /**
     * A `testId` prop is provided for specified elements, which is a unique
     * string that appears as a data attribute `data-testid` in the rendered code,
     * serving as a hook for automated tests.
     As inline message is composed of different components, we passed down the testId to the sub component you want to test:
     - testId to identify the inline message component.
     - testId--inline-dialog to get the content of the actual component.
     - testId--button to click on the actual component.
     - testId--title to get the title of the actual component.
     - testId--text to get the text of the actual component.
      */
    testId?: string;
}
interface State {
    isOpen: boolean;
    isHovered: boolean;
}
export default class InlineMessage extends React.Component<Props, State> {
    static defaultProps: {
        children: null;
        placement: string;
        secondaryText: string;
        title: string;
        type: string;
    };
    state: {
        isOpen: boolean;
        isHovered: boolean;
    };
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    toggleDialog: () => void;
    render(): JSX.Element;
}
export {};
