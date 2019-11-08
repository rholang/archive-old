import { MediaClient } from '@atlaskit/media-client';
import { MediaClientConfig } from '@atlaskit/media-core';
export declare const defaultBaseUrl = "https://dt-api.dev.atl-paas.net";
export declare const defaultParams: {
    clientId: string;
    asapIssuer: string;
    baseUrl: string;
};
interface AuthParameter {
    authType: 'client' | 'asap';
}
/**
 * Creates and returns `MediaClient` (from `media-client`) based on the data provided in parameter object.
 *
 * @param {AuthParameter} authParameter specifies serviceName and whatever auth should be done with clientId or asapIssuer
 * @returns {Context}
 */
export declare const createStorybookMediaClient: (authParameter?: AuthParameter) => MediaClient;
export declare const createStorybookMediaClientConfig: (authParameter?: AuthParameter) => MediaClientConfig;
export declare const createUploadMediaClient: () => MediaClient;
export declare const createUploadMediaClientConfig: () => MediaClientConfig;
export {};
