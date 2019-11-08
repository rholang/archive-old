import { UIAnalyticsEvent, WithAnalyticsEventsProps, CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare enum ComponentNames {
    TYPEAHEAD = "mentionTypeahead",
    MENTION = "mention",
    TEAM_MENTION_HIGHLIGHT = "teamMentionHighlight"
}
export declare enum Actions {
    VIEWED = "viewed",
    CLICKED = "clicked",
    CLOSED = "closed"
}
export declare const fireAnalyticsMentionTypeaheadEvent: (props: WithAnalyticsEventsProps) => (action: string, duration: number, userIds?: string[], query?: string | undefined) => void;
export declare const fireAnalyticsTeamMentionHighlightEvent: (createEvent: CreateUIAnalyticsEvent) => (actionSubject: string, action: string, source: string, actionSubjectId?: string | undefined, viewedCount?: number | undefined) => void;
export declare const fireAnalyticsMentionEvent: (createEvent: CreateUIAnalyticsEvent) => (actionSubject: string, action: string, text: string, id: string, accessLevel?: string | undefined) => UIAnalyticsEvent;
export declare const fireAnalyticsMentionHydrationEvent: (props: WithAnalyticsEventsProps) => (action: string, userId: string, fromCache: boolean, duration: number) => void;
export declare const fireAnalytics: (firePrivateAnalyticsEvent?: Function | undefined) => (eventName: string, text: string, accessLevel?: string | undefined) => void;
