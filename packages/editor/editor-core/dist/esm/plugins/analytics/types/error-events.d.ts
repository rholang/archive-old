import { OperationalAEP, AnalyticsEventPayloadWithChannel } from './events';
import { ACTION, ACTION_SUBJECT } from './enums';
import { SimplifiedNode } from '../../../utils/document-logger';
declare type InvalidTransactionErrorAEP = OperationalAEP<ACTION.DISPATCHED_INVALID_TRANSACTION, ACTION_SUBJECT.EDITOR, undefined, {
    analyticsEventPayloads: AnalyticsEventPayloadWithChannel[];
    documents: {
        new: SimplifiedNode | string;
        prev: SimplifiedNode | string;
    };
}, undefined>;
export declare type ErrorEventPayload = InvalidTransactionErrorAEP;
export {};
