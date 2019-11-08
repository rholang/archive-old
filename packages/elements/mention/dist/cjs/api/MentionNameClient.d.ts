import { MentionNameDetails } from '../types';
export interface MentionNameClient {
    getLookupLimit(): number;
    lookupMentionNames(ids: string[]): Promise<MentionNameDetails[]>;
}
/**
 * Supports the Atlassian Profile retrieval service.
 *
 * Uses:
 *   https://statlas.prod.atl-paas.net/swagger-ui-2.2.6/index.html?url=https://profile-retrieval-service.prod.atl-paas.net:443/api/swagger.yaml#!/default/getUsersByIds
 */
