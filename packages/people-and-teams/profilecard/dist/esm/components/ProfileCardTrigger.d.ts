import * as React from 'react';
import { ProfileCardTriggerProps, ProfileCardTriggerState, ProfileCardAction, ProfileCardClientData } from '../types';
export declare const DELAY_MS_SHOW = 800;
export declare const DELAY_MS_HIDE = 200;
declare class ProfilecardTrigger extends React.PureComponent<ProfileCardTriggerProps, ProfileCardTriggerState> {
    static defaultProps: Partial<ProfileCardTriggerProps>;
    targetRef?: HTMLElement;
    _isMounted: boolean;
    showDelay: number;
    hideDelay: number;
    showTimer: number;
    hideTimer: number;
    hideProfilecard: () => void;
    showProfilecard: () => void;
    containerListeners: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onClick?: undefined;
    } | {
        onClick: () => void;
        onMouseEnter?: undefined;
        onMouseLeave?: undefined;
    };
    layerListeners: {
        handleClickOutside: () => void;
        handleEscapeKeydown: () => void;
    };
    state: ProfileCardTriggerState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ProfileCardTriggerProps): void;
    componentWillUnmount(): void;
    clientFetchProfile: () => void;
    handleClientSuccess(res: ProfileCardClientData): void;
    handleClientError(err: any): void;
    filterActions(): ProfileCardAction[];
    renderProfileCard(): JSX.Element;
    renderWithPopper(element: React.ReactNode): JSX.Element;
    renderLoading(): JSX.Element | null;
    renderProfileCardLoaded(): JSX.Element | null;
    setRef: (targetRef: HTMLElement) => void;
    renderWithTrigger(): JSX.Element;
    render(): JSX.Element;
}
export default ProfilecardTrigger;
