import {
  EventType,
  GasPayload,
  OPERATIONAL_EVENT_TYPE,
  UI_EVENT_TYPE,
} from '@atlaskit/analytics-gas-types';
import {
  isSpecialMention,
  MentionDescription,
} from '@atlaskit/mention/resource';
import {
  name as packageName,
  version as packageVersion,
} from '../../version.json';
import { SelectItemMode } from '../type-ahead/commands/select-item.js';
import { isTeamType } from './utils';
import { TeamInfoAttrAnalytics } from './index';

const componentName = 'mention';

export const buildAnalyticsPayload = (
  actionSubject: string,
  action: string,
  eventType: EventType,
  sessionId: string,
  otherAttributes = {},
): GasPayload => ({
  action,
  actionSubject,
  eventType,
  attributes: {
    packageName,
    packageVersion,
    componentName,
    sessionId,
    ...otherAttributes,
  },
});

type QueryAttributes = Partial<{
  queryLength: number;
  spaceInQuery: boolean;
}>;

const emptyQueryResponse: QueryAttributes = {
  queryLength: 0,
  spaceInQuery: false,
};

const extractAttributesFromQuery = (query?: string): QueryAttributes => {
  if (query) {
    return {
      queryLength: query.length,
      spaceInQuery: query.indexOf(' ') !== -1,
    };
  }
  return emptyQueryResponse;
};

export const buildTypeAheadCancelPayload = (
  duration: number,
  upKeyCount: number,
  downKeyCount: number,
  sessionId: string,
  query?: string,
): GasPayload => {
  const { queryLength, spaceInQuery } = extractAttributesFromQuery(query);
  return buildAnalyticsPayload(
    'mentionTypeahead',
    'cancelled',
    UI_EVENT_TYPE,
    sessionId,
    {
      duration,
      downKeyCount,
      upKeyCount,
      queryLength,
      spaceInQuery,
    },
  );
};

const getPosition = (
  mentionList: MentionDescription[] | undefined,
  selectedMention: MentionDescription,
): number | undefined => {
  if (mentionList) {
    const index = mentionList.findIndex(
      mention => mention.id === selectedMention.id,
    );
    return index === -1 ? undefined : index;
  }
  return;
};

const isClicked = (insertType: SelectItemMode) => insertType === 'selected';

export const buildTypeAheadInsertedPayload = (
  duration: number,
  upKeyCount: number,
  downKeyCount: number,
  sessionId: string,
  insertType: SelectItemMode,
  mention: MentionDescription,
  mentionList?: MentionDescription[],
  query?: string,
): GasPayload => {
  const { queryLength, spaceInQuery } = extractAttributesFromQuery(query);
  return buildAnalyticsPayload(
    'mentionTypeahead',
    isClicked(insertType) ? 'clicked' : 'pressed',
    UI_EVENT_TYPE,
    sessionId,
    {
      duration,
      position: getPosition(mentionList, mention),
      keyboardKey: isClicked(insertType) ? undefined : insertType,
      queryLength,
      spaceInQuery,
      isSpecial: isSpecialMention(mention),
      accessLevel: mention.accessLevel || '',
      userType: mention.userType,
      userId: mention.id,
      upKeyCount,
      downKeyCount,
      memberCount:
        isTeamType(mention.userType) && mention.context
          ? mention.context.memberCount
          : null,
      includesYou:
        isTeamType(mention.userType) && mention.context
          ? mention.context.includesYou
          : null,
    },
  );
};

export const buildTypeAheadRenderedPayload = (
  duration: number,
  userIds: Array<string> | null,
  query: string,
  teams: TeamInfoAttrAnalytics[] | null,
): GasPayload => {
  const { queryLength, spaceInQuery } = extractAttributesFromQuery(query);
  const actionSubject = userIds ? 'mentionTypeahead' : 'teamMentionTypeahead';

  return {
    action: 'rendered',
    actionSubject,
    eventType: OPERATIONAL_EVENT_TYPE,
    attributes: {
      packageName,
      packageVersion,
      componentName,
      duration,
      userIds,
      teams,
      queryLength,
      spaceInQuery,
    },
  };
};
