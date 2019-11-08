import * as React from 'react';
export interface InlineCardErroredViewProps {
    /** The url to display */
    url: string;
    /** The error message to display */
    message: string;
    /** The optional click handler */
    onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
    /** What to do when a user clicks "Try again" button */
    onRetry?: () => void;
    /** A flag that determines whether the card is selected in edit mode. */
    isSelected?: boolean;
}
export declare class InlineCardErroredView extends React.Component<InlineCardErroredViewProps> {
    handleRetry: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    render(): JSX.Element;
}
