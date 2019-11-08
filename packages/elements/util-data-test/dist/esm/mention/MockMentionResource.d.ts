import { MentionDescription, AbstractMentionResource, MentionNameResolver, DefaultMentionNameResolver, ResolvingMentionProvider, MentionNameDetails, TeamMentionProvider } from '@atlaskit/mention/resource';
export interface MockMentionConfig {
    minWait?: number;
    maxWait?: number;
    mentionNameResolver?: MentionNameResolver;
    enableTeamMentionHighlight?: boolean;
}
export declare const createMockMentionNameResolver: () => DefaultMentionNameResolver;
export declare class MockMentionResource extends AbstractMentionResource implements ResolvingMentionProvider, TeamMentionProvider {
    private config;
    private lastReturnedSearch;
    constructor(config: MockMentionConfig);
    filter(query: string): void;
    recordMentionSelection(mention: MentionDescription): void;
    resolveMentionName(id: string): Promise<MentionNameDetails> | MentionNameDetails;
    cacheMentionName(id: string, name: string): void;
    supportsMentionNameResolving(): boolean;
    shouldHighlightMention(mention: MentionDescription): boolean;
    mentionTypeaheadHighlightEnabled: () => boolean;
    mentionTypeaheadCreateTeamPath: () => string;
}
