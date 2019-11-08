import { Component, ReactNode } from 'react';
export declare const UNMOUNTED = "unmounted";
export declare const EXITED = "exited";
export declare const ENTERING = "entering";
export declare const ENTERED = "entered";
export declare const EXITING = "exiting";
export declare enum TransitionStatus {
    UNMOUNTED = "unmounted",
    EXITED = "exited",
    ENTERING = "entering",
    ENTERED = "entered",
    EXITING = "exiting"
}
export interface Props {
    isOpen: boolean;
    attachPanelTo: string;
    children?: ReactNode;
    skipAnimationOnMount?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    disableEnterAnimation?: boolean;
    disableExitAnimation?: boolean;
    onOpenAnimationFinished?: () => void;
    onCloseAnimationFinished?: () => void;
}
export interface State {
    entered: boolean;
    container?: Element | null;
}
export declare class RightSidePanel extends Component<Props, State> {
    attachPanelTo: string;
    state: {
        entered: boolean;
        container: undefined;
    };
    componentDidMount(): void;
    renderDrawer(Container: HTMLElement): ReactNode;
    render(): {} | null | undefined;
}
export default RightSidePanel;
