import * as React from 'react';
import { ClipboardProps } from './clipboard';
import { ClipboardConfig } from '../types';
import { WithMediaClientConfigProps } from '@atlaskit/media-client';
declare type ClipboardWithMediaClientConfigProps = WithMediaClientConfigProps<Omit<ClipboardProps, 'config'> & {
    config?: ClipboardConfig;
}>;
declare type ClipboardWithMediaClientConfigComponent = React.ComponentType<ClipboardWithMediaClientConfigProps>;
declare type State = {
    Clipboard?: ClipboardWithMediaClientConfigComponent;
};
export declare class ClipboardLoader extends React.PureComponent<ClipboardWithMediaClientConfigProps, State> {
    static displayName: string;
    static Clipboard?: ClipboardWithMediaClientConfigComponent;
    state: {
        Clipboard: React.ComponentClass<WithMediaClientConfigProps<Pick<ClipboardProps, "ref" | "onError" | "createAnalyticsEvent" | "mediaClient" | "onUploadsStart" | "onPreviewUpdate" | "onStatusUpdate" | "onProcessing" | "onEnd"> & {
            config?: ClipboardConfig | undefined;
        }>, any> | React.FunctionComponent<WithMediaClientConfigProps<Pick<ClipboardProps, "ref" | "onError" | "createAnalyticsEvent" | "mediaClient" | "onUploadsStart" | "onPreviewUpdate" | "onStatusUpdate" | "onProcessing" | "onEnd"> & {
            config?: ClipboardConfig | undefined;
        }>> | undefined;
    };
    UNSAFE_componentWillMount(): Promise<void>;
    render(): JSX.Element | null;
}
export {};
