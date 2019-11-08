import { MentionNameClient, MentionNameDetails } from '@atlaskit/mention/resource';
export declare class MockMentionNameClient implements MentionNameClient {
    constructor();
    getLookupLimit(): number;
    lookupMentionNames(ids: string[]): Promise<MentionNameDetails[]>;
}
