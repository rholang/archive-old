import * as React from 'react';
export interface InlineCardForbiddenViewProps {
    /** The url to display */
    url: string;
    /** The optional click handler */
    onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
    /** The optional handler for "Connect" button */
    onAuthorise?: () => void;
    /** A flag that determines whether the card is selected in edit mode. */
    isSelected?: boolean;
}
export declare class InlineCardForbiddenView extends React.Component<InlineCardForbiddenViewProps> {
    handleRetry: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    render(): JSX.Element;
}
