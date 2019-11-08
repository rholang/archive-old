import * as React from 'react';
import { MediaPluginState } from '../../pm-plugins/main';
import { ClipboardConfig, BrowserConfig, DropzoneConfig } from '@atlaskit/media-picker';
import { MediaClientConfig } from '@atlaskit/media-core';
import PickerFacade from '../../picker-facade';
export interface ChildrenProps {
    config: ClipboardConfig | BrowserConfig | DropzoneConfig;
    mediaClientConfig: MediaClientConfig;
    pickerFacadeInstance: PickerFacade;
}
export declare type Props = {
    mediaState: MediaPluginState;
    analyticsName: string;
    children: (props: ChildrenProps) => React.ReactNode;
};
declare type State = {
    config?: ClipboardConfig | BrowserConfig | DropzoneConfig;
    mediaClientConfig?: MediaClientConfig;
    pickerFacadeInstance?: PickerFacade;
};
export default class PickerFacadeProvider extends React.Component<Props, State> {
    state: State;
    private handleMediaProvider;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): {} | null | undefined;
}
export {};
