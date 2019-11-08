import { ClientBasedAuth } from '@atlaskit/media-core';
import { MediaClient } from '@atlaskit/media-client';
export declare const userAuthProviderBaseURL = "https://dt-api.dev.atl-paas.net";
export declare const userAuthProvider: () => Promise<ClientBasedAuth>;
export declare const createUserMediaClient: () => MediaClient;
