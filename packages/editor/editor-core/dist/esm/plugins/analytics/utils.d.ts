import { AnalyticsEventPayloadWithChannel } from './index';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { AnalyticsEventPayload } from './types';
import { EditorState, Transaction } from 'prosemirror-state';
import { Command } from '../../types';
import { InputRuleWithHandler } from '../../utils/input-rules';
export declare type DispatchAnalyticsEvent = (payload: AnalyticsEventPayload) => void;
export declare type HigherOrderCommand = (command: Command) => Command;
export declare function addAnalytics(state: EditorState, tr: Transaction, payload: AnalyticsEventPayload, channel?: string): Transaction;
export declare function withAnalytics(payload: AnalyticsEventPayload | ((state: EditorState) => AnalyticsEventPayload | undefined), channel?: string): HigherOrderCommand;
export declare function ruleWithAnalytics(getPayload: (state: EditorState, match: string[], start: number, end: number) => AnalyticsEventPayload): (rule: InputRuleWithHandler) => InputRuleWithHandler;
export declare const fireAnalyticsEvent: (createAnalyticsEvent?: CreateUIAnalyticsEvent | undefined) => ({ payload, channel, }: {
    payload: AnalyticsEventPayload;
    channel?: string | undefined;
}) => void | undefined;
export declare function getAnalyticsEventsFromTransaction(tr: Transaction): AnalyticsEventPayloadWithChannel[];
