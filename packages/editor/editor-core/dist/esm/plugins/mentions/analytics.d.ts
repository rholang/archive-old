import { EventType, GasPayload } from '@atlaskit/analytics-gas-types';
import { MentionDescription } from '@atlaskit/mention/resource';
import { SelectItemMode } from '../type-ahead/commands/select-item.js';
import { TeamInfoAttrAnalytics } from './index';
export declare const buildAnalyticsPayload: (actionSubject: string, action: string, eventType: EventType, sessionId: string, otherAttributes?: {}) => GasPayload;
export declare const buildTypeAheadCancelPayload: (duration: number, upKeyCount: number, downKeyCount: number, sessionId: string, query?: string | undefined) => GasPayload;
export declare const buildTypeAheadInsertedPayload: (duration: number, upKeyCount: number, downKeyCount: number, sessionId: string, insertType: SelectItemMode, mention: MentionDescription, mentionList?: MentionDescription[] | undefined, query?: string | undefined) => GasPayload;
export declare const buildTypeAheadRenderedPayload: (duration: number, userIds: string[] | null, query: string, teams: TeamInfoAttrAnalytics[] | null) => GasPayload;
