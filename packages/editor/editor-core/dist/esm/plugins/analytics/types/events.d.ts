import { Dispatch } from '../../../event-dispatcher';
import { EVENT_TYPE, ACTION_SUBJECT } from './enums';
import { GeneralEventPayload } from './general-events';
import { FormatEventPayload } from './format-events';
import { SubstituteEventPayload } from './substitute-events';
import { InsertEventPayload } from './insert-events';
import { NodeEventPayload } from './node-events';
import { MediaEventPayload } from './media-events';
import { TableEventPayload } from './table-events';
import { PasteEventPayload } from './paste-events';
import { ErrorEventPayload } from './error-events';
import { HistoryEventPayload } from './history-events';
declare type AEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes, EventType> = {
    action: Action;
    actionSubject: ActionSubject;
    actionSubjectId?: ActionSubjectID;
    attributes?: Attributes;
    eventType: EventType;
    nonPrivacySafeAttributes?: NonPrivacySafeAttributes;
};
export declare type UIAEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes> = AEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes, EVENT_TYPE.UI>;
export declare type TrackAEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes> = AEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes, EVENT_TYPE.TRACK>;
export declare type OperationalAEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes> = AEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes, EVENT_TYPE.OPERATIONAL>;
export declare type ScreenAEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes> = AEP<Action, ActionSubject, ActionSubjectID, Attributes, NonPrivacySafeAttributes, EVENT_TYPE.SCREEN>;
export declare type TableAEP<Action, Attributes, NonPrivacySafeAttributes> = TrackAEP<Action, ACTION_SUBJECT.TABLE, null, Attributes, NonPrivacySafeAttributes>;
export declare type AnalyticsEventPayload = GeneralEventPayload | FormatEventPayload | SubstituteEventPayload | InsertEventPayload | NodeEventPayload | MediaEventPayload | TableEventPayload | PasteEventPayload | ErrorEventPayload | HistoryEventPayload;
export declare type AnalyticsEventPayloadWithChannel = {
    channel: string;
    payload: AnalyticsEventPayload;
};
export declare type AnalyticsDispatch = Dispatch<{
    payload: AnalyticsEventPayload;
    channel?: string;
}>;
export {};
