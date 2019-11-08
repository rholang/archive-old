import { MentionsResult } from '../types';
import MentionResource, { MentionContextIdentifier, MentionResourceConfig, TeamMentionResourceConfig, TeamMentionProvider } from './MentionResource';
/**
 * Provides a Javascript API to fetch users and teams
 * In future we will have a new endpoint to return both users and teams, we can
 * remove this class at this point
 */
export default class TeamMentionResource extends MentionResource implements TeamMentionProvider {
    private readonly teamMentionConfig;
    private lastSearchQuery?;
    private lastReturnedSearchTeam;
    constructor(userMentionConfig: MentionResourceConfig, teamMentionConfig: TeamMentionResourceConfig);
    filter(query?: string, contextIdentifier?: MentionContextIdentifier): void;
    mentionTypeaheadHighlightEnabled: () => boolean;
    mentionTypeaheadCreateTeamPath: () => string | undefined;
    /**
     * Returns the initial mention display list before a search is performed for the specified
     * container.
     */
    private remoteInitialStateTeamAndUsers;
    /**
     * Both user and team requests are not blocked together
     * If users request arrives first, show users. Show teams when team request arrives.
     * If team request arrives first, block waiting for user request, then show both
     * If one errors, show the non-erroring one
     * If both error, show error
     */
    private handleBothRequests;
    notify(searchTime: number, mentionResult: MentionsResult, query?: string): void;
    private getQueryParamsOfTeamMentionConfig;
    private remoteUserSearch;
    private remoteTeamSearch;
    private convertTeamResultToMentionResult;
    private trimTeamARI;
}
