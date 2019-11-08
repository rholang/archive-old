import * as React from 'react';
import { WithMediaClientConfigProps } from '@atlaskit/media-client';
import { DropzoneProps } from './dropzone';
import { MediaPickerAnalyticsErrorBoundaryProps } from '../media-picker-analytics-error-boundary';
export declare type DropzoneWithMediaClientConfigProps = WithMediaClientConfigProps<DropzoneProps>;
declare type DropzoneWithMediaClientConfigComponent = React.ComponentType<DropzoneWithMediaClientConfigProps>;
declare type MediaPickerErrorBoundaryComponent = React.ComponentType<MediaPickerAnalyticsErrorBoundaryProps>;
export declare type State = {
    Dropzone?: DropzoneWithMediaClientConfigComponent;
    MediaPickerErrorBoundary?: MediaPickerErrorBoundaryComponent;
};
export declare class DropzoneLoader extends React.PureComponent<DropzoneWithMediaClientConfigProps, State> {
    static displayName: string;
    static Dropzone?: DropzoneWithMediaClientConfigComponent;
    static MediaPickerErrorBoundary?: MediaPickerErrorBoundaryComponent;
    state: {
        Dropzone: React.ComponentClass<WithMediaClientConfigProps<DropzoneProps>, any> | React.FunctionComponent<WithMediaClientConfigProps<DropzoneProps>> | undefined;
        MediaPickerErrorBoundary: React.ComponentClass<MediaPickerAnalyticsErrorBoundaryProps, any> | React.FunctionComponent<MediaPickerAnalyticsErrorBoundaryProps> | undefined;
    };
    UNSAFE_componentWillMount(): Promise<void>;
    render(): JSX.Element | null;
}
export {};
