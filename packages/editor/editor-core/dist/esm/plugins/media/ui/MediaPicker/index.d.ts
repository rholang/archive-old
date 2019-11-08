import React from 'react';
import { MediaPluginState } from '../../pm-plugins/main';
declare type Props = {
    mediaState: MediaPluginState;
};
declare type State = {
    isPopupOpened: boolean;
};
export declare class MediaPickerComponents extends React.Component<Props, State> {
    state: {
        isPopupOpened: boolean;
    };
    componentDidMount(): void;
    onBrowseFn: (nativeBrowseFn: () => void) => void;
    render(): JSX.Element;
}
export {};
