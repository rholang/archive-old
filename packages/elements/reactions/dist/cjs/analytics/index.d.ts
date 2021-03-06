import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { EventType } from '@atlaskit/analytics-gas-types';
import { ReactionSummary, ReactionSource } from '../types';
export declare type PreviousState = 'new' | 'existingNotReacted' | 'existingReacted';
export declare const createAndFireEventInElementsChannel: (payload: Record<string, any>) => (createAnalyticsEvent: CreateUIAnalyticsEvent) => import("@atlaskit/analytics-next").UIAnalyticsEvent;
export declare const createAndFireSafe: <U extends any[], T extends (...args: U) => Record<string, any>>(createAnalyticsEvent: void | CreateUIAnalyticsEvent, creator: T, ...args: U) => void;
export declare const createReactionsRenderedEvent: (startTime: number) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
export declare const createPickerButtonClickedEvent: (reactionEmojiCount: number) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
export declare const createPickerCancelledEvent: (startTime?: number | undefined) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
export declare const createPickerMoreClickedEvent: (startTime?: number | undefined) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
export declare const createReactionSelectionEvent: (source: ReactionSource, emojiId: string, reaction?: ReactionSummary | undefined, startTime?: number | undefined) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
export declare const createReactionHoveredEvent: (startTime?: number | undefined) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
export declare const createReactionClickedEvent: (added: boolean, emojiId: string) => {
    action: string;
    actionSubject: string;
    eventType: EventType;
    actionSubjectId: string | undefined;
    attributes: {
        packageName: any;
        packageVersion: any;
    };
};
