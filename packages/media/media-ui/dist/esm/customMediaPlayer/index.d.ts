import * as React from 'react';
import { Component } from 'react';
import { SetVolumeFunction, NavigateFunction, VideoState, VideoActions } from 'react-video-renderer';
import { InjectedIntlProps } from 'react-intl';
import { WithShowControlMethodProp } from '../types';
export interface CustomMediaPlayerProps extends WithShowControlMethodProp {
    readonly type: 'audio' | 'video';
    readonly src: string;
    readonly isHDActive?: boolean;
    readonly onHDToggleClick?: () => void;
    readonly isHDAvailable?: boolean;
    readonly isAutoPlay: boolean;
    readonly isShortcutEnabled?: boolean;
    readonly onCanPlay?: () => void;
    readonly onError?: () => void;
    readonly onDownloadClick?: () => void;
    readonly onFirstPlay?: () => void;
}
export interface CustomMediaPlayerState {
    isFullScreenEnabled: boolean;
}
export declare type ToggleButtonAction = () => void;
export declare type CustomMediaPlayerActions = {
    play: () => void;
    pause: () => void;
};
export declare class CustomMediaPlayer extends Component<CustomMediaPlayerProps & InjectedIntlProps, CustomMediaPlayerState> {
    videoWrapperRef?: HTMLElement;
    private actions?;
    private wasPlayedOnce;
    state: CustomMediaPlayerState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onFullScreenChange: () => void;
    onTimeChange: (navigate: NavigateFunction) => (value: number) => void;
    onVolumeChange: (setVolume: SetVolumeFunction) => (value: number) => void;
    shortcutHandler: (toggleButtonAction: ToggleButtonAction) => () => void;
    renderHDButton: () => JSX.Element | undefined;
    renderVolume: ({ isMuted, volume }: VideoState, actions: VideoActions) => JSX.Element;
    onFullScreenClick: () => void;
    saveVideoWrapperRef: (el?: HTMLElement | undefined) => HTMLElement | undefined;
    renderFullScreenButton: () => JSX.Element | undefined;
    renderDownloadButton: () => JSX.Element | undefined;
    renderSpinner: () => JSX.Element;
    private setActions;
    pause: () => void;
    private play;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<CustomMediaPlayerProps, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<CustomMediaPlayerProps & InjectedIntlProps>;
};
export default _default;
