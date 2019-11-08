import { Component, ReactElement } from 'react';
export interface InactivityDetectorProps {
    children: (triggerActivityCallback: () => void) => ReactElement;
}
export interface InactivityDetectorState {
    controlsAreVisible: boolean;
}
/**
 * Hides all the child elements with `hideControlsClassName` classname when user is inactive,
 * which means he hasn't moved mouse over the component for `mouseMovementDelay` ms.
 * Exception is if user holding mouse over one of the hideable elements (those that have specified classname).
 *
 */
export declare class InactivityDetector extends Component<InactivityDetectorProps, InactivityDetectorState> {
    private checkActivityTimeout?;
    private readonly contentWrapperElement;
    state: InactivityDetectorState;
    private clearTimeout;
    private hideControls;
    private checkMouseMovement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
