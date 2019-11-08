import * as React from 'react';
import { MediaClientConfig } from '@atlaskit/media-core';
import { MediaClient } from '../client/media-client';
export interface WithMediaClientConfig {
    mediaClientConfig: MediaClientConfig;
}
export interface WithMediaClient {
    mediaClient: MediaClient;
}
export declare const getMediaClient: (mediaClientConfig: any) => MediaClient;
export declare type WithMediaClientConfigProps<P extends WithMediaClient> = Omit<P, 'mediaClient'> & WithMediaClientConfig;
export declare type WithMediaClientFunction = <P extends WithMediaClient>(Component: React.ComponentType<P>) => React.ComponentType<WithMediaClientConfigProps<P>>;
export declare const withMediaClient: WithMediaClientFunction;
