import { TrackAEP } from './events';
import { ACTION_SUBJECT, ACTION, ACTION_SUBJECT_ID } from './enums';
declare type MediaLinkAEP<Action> = TrackAEP<Action, ACTION_SUBJECT.MEDIA_SINGLE, ACTION_SUBJECT_ID.MEDIA_LINK, undefined, undefined>;
export declare type MediaEventPayload = MediaLinkAEP<ACTION.CHANGED_URL> | MediaLinkAEP<ACTION.UNLINK> | MediaLinkAEP<ACTION.VISITED>;
export {};
