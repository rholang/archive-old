import { AnalyticsEventPayload } from '@atlaskit/analytics-next';
import {
  isEmail,
  isTeam,
  isUser,
  OptionData,
  Team,
} from '@atlaskit/user-picker';
import {
  ConfigResponse,
  DialogContentState,
  OriginTracing,
} from '../types/index.js';
import {
  name as packageName,
  version as packageVersion,
} from '../version.json';

const buildAttributes = (attributes = {}) => ({
  packageName,
  packageVersion,
  ...attributes,
});

const createEvent = (
  eventType: 'ui' | 'operational',
  action: string,
  actionSubject: string,
  actionSubjectId?: string,
  attributes = {},
): AnalyticsEventPayload => ({
  eventType,
  action,
  actionSubject,
  actionSubjectId,
  attributes: buildAttributes(attributes),
});

const createScreenEvent = (
  name: string,
  attributes = {},
): AnalyticsEventPayload => ({
  eventType: 'screen',
  name,
  attributes: buildAttributes(attributes),
});

export const CHANNEL_ID = 'fabric-elements';
export const ANALYTICS_SOURCE = 'shareModal';

export const screenEvent = () => createScreenEvent(ANALYTICS_SOURCE);

export const errorEncountered = (
  actionSubjectId: string | undefined,
  attributes: any = {},
) =>
  createEvent('operational', 'encountered', 'error', actionSubjectId, {
    ...attributes,
    source: ANALYTICS_SOURCE,
  });

// = share dialog invoked. Not to be confused with "share submitted"
export const shareTriggerButtonClicked = () =>
  createEvent('ui', 'clicked', 'button', 'share');

export const cancelShare = (start: number) =>
  createEvent('ui', 'pressed', 'keyboardShortcut', 'cancelShare', {
    source: ANALYTICS_SOURCE,
    duration: duration(start),
  });

export const shortUrlRequested = () =>
  createEvent('operational', 'requested', 'shortUrl', undefined, {
    source: ANALYTICS_SOURCE,
  });

export const shortUrlGenerated = (start: number, tooSlow: boolean) =>
  createEvent('operational', 'generated', 'shortUrl', undefined, {
    source: ANALYTICS_SOURCE,
    duration: duration(start),
    tooSlow,
  });

export const copyLinkButtonClicked = (
  start: number,
  shareContentType?: string,
  shareOrigin?: OriginTracing,
) =>
  createEvent('ui', 'clicked', 'button', 'copyShareLink', {
    source: ANALYTICS_SOURCE,
    duration: duration(start),
    shortUrl: undefined, // unknown at creation, will be filled later
    contentType: shareContentType,
    ...getOriginTracingAttributes(shareOrigin),
  });

export const formShareSubmitted = (
  start: number,
  data: DialogContentState,
  shareContentType?: string,
  shareOrigin?: OriginTracing,
  config?: ConfigResponse,
) => {
  const users = extractIdsByType(data, isUser);
  const teams = extractIdsByType(data, isTeam);
  const teamUserCounts = extractMemberCountsFromTeams(data, isTeam);
  const emails = extractIdsByType(data, isEmail);
  return createEvent('ui', 'clicked', 'button', 'submitShare', {
    ...getOriginTracingAttributes(shareOrigin),
    contentType: shareContentType,
    duration: duration(start),
    emailCount: emails.length,
    teamCount: teams.length,
    userCount: users.length,
    users,
    teams,
    teamUserCounts,
    messageLength:
      config &&
      config.allowComment &&
      data.comment &&
      data.comment.format === 'plain_text'
        ? data.comment.value.length
        : 0,
    isMessageEnabled: config ? config.allowComment : false,
  });
};

const duration = (start: number) => Date.now() - start;

const getOriginTracingAttributes = (origin?: OriginTracing) =>
  origin ? origin.toAnalyticsAttributes({ hasGeneratedId: true }) : {};

const extractIdsByType = <T extends OptionData>(
  data: DialogContentState,
  checker: (option: OptionData) => option is T,
): string[] => data.users.filter(checker).map(option => option.id);

const extractMemberCountsFromTeams = (
  data: DialogContentState,
  checker: (option: OptionData) => option is Team,
): number[] =>
  // teams with zero memberships cannot exist in share, so we use that
  // as the default value for undefined team member counts
  data.users.filter(checker).map(option => option.memberCount || 0);
