interface TeamMentionState {
    seenCount: number;
    dontShow: boolean;
}
export declare const mentionHighlightLocalStorageKey = "atlassian.people.context.team.mention.highlight";
export default class TeamMentionHighlightController {
    private static readFromLocalStorage;
    private static saveToLocalStorage;
    private static markAsDone;
    static isHighlightEnabled: () => boolean;
    static registerRender: () => TeamMentionState;
    static getSeenCount: () => number;
    static registerCreateLinkClick: () => void;
    static registerTeamMention: () => void;
    static registerClosed: () => void;
}
export {};
