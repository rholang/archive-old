import { ProfileClientOptions, ProfileClientConfig, ApiClientResponse, ProfileCardClientData } from '../types';
/**
 * Transform response from GraphQL
 * - Prefix `timestring` with `remoteWeekdayString` depending on `remoteWeekdayIndex`
 * - Remove properties which will be not used later
 * @ignore
 * @param  {object} response
 * @return {object}
 */
export declare const modifyResponse: (response: ApiClientResponse) => ProfileCardClientData;
declare class ProfileCardClient {
    config: ProfileClientConfig;
    cache: any;
    constructor(config: ProfileClientOptions);
    makeRequest(cloudId: string, userId: string): Promise<any>;
    setCachedProfile(cloudId: string, userId: string, cacheItem: any): void;
    getCachedProfile(cloudId: string, userId: string): any;
    flushCache(): void;
    getProfile(cloudId: string, userId: string): Promise<any>;
}
export default ProfileCardClient;
