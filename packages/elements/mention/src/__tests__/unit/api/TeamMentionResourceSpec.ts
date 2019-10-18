import { SecurityOptions } from '@atlaskit/util-service-support';
import 'es6-promise/auto'; // 'whatwg-fetch' needs a Promise polyfill
import fetchMock from 'fetch-mock/src/client';
import * as queryString from 'query-string';
import TeamMentionResource from '../../../api/TeamMentionResource';
import { resultCr, resultCraig, teamResults } from '../_mention-search-results';
import {
  MentionResourceConfig,
  TeamMentionResourceConfig,
} from '../../../api/MentionResource';

const baseUserUrl = 'https://bogus/users/mentions';
const baseTeamUrl = 'https://bogus/teams/mentions';
const testMentionDesc = {
  id: 'abcd-abcd-abcd',
};

const defaultSecurityHeader = 'X-Bogus';

const options = (
  code: string | number,
  omitCredentials: boolean,
): SecurityOptions => ({
  headers: {
    [defaultSecurityHeader]: code,
  },
  omitCredentials,
});

const defaultSecurityCode = '10804';

const apiUserMentionConfig: MentionResourceConfig = {
  url: baseUserUrl,
  securityProvider() {
    return options(defaultSecurityCode, false);
  },
};

const apiTeamMentionConfig: TeamMentionResourceConfig = {
  ...apiUserMentionConfig,
  url: baseTeamUrl,
  teamLinkResolver: (teamId: string) => `/wiki/team/${teamId}`,
};

const FULL_CONTEXT = {
  containerId: 'someContainerId',
  objectId: 'someObjectId',
  childObjectId: 'someChildObjectId',
  sessionId: 'someSessionId',
};
const REQUEST_DELAY = 100;

describe('TeamMentionResourceSpec', () => {
  let resource: TeamMentionResource;
  let currentCount = 0;
  const doneWhen = (done: () => void, maxCount: number) => {
    if (currentCount === maxCount) {
      done();
    }
    ++currentCount;
  };

  beforeEach(() => {
    jest.useFakeTimers();

    currentCount = 1;

    resource = new TeamMentionResource(
      apiUserMentionConfig,
      apiTeamMentionConfig,
    );

    fetchMock
      .mock(/\/users\/mentions\/search\?.*query=craig(&|$)/, {
        body: {
          mentions: resultCraig,
        },
      })
      .mock(
        /\/teams\/mentions\/search\?.*query=craig(&|$)/,
        // assume team request is slow
        new Promise(resolve => {
          setTimeout(() => {
            resolve({ body: teamResults });
          }, REQUEST_DELAY);
        }),
      )
      .mock(/\/users\/mentions\/search\?.*query=esoares(&|$)/, {
        body: {
          mentions: [],
        },
      })
      .mock(/\/teams\/mentions\/search\?.*query=esoares(&|$)/, {
        body: [],
      })
      .mock(
        /\/users\/mentions\/search\?.*query=cr(&|$)/,
        new Promise(resolve => {
          setTimeout(() => {
            resolve({
              // delayed results
              body: {
                mentions: resultCr,
              },
            });
          }, REQUEST_DELAY);
        }),
      )
      .mock(/\/teams\/mentions\/search\?.*query=cr(&|$)/, {
        body: [],
      })
      .mock(/\/users\/mentions\/search\?.*query=query-only-teams-fail(&|$)/, {
        body: {
          mentions: resultCr,
        },
      })
      .mock(
        /\/teams\/mentions\/search\?.*query=query-only-teams-fail(&|$)/,
        500,
      )
      .mock(
        /\/users\/mentions\/search\?.*query=query-only-users-fail(&|$)/,
        500,
      )
      .mock(/\/teams\/mentions\/search\?.*query=query-only-users-fail(&|$)/, {
        body: teamResults,
      })
      .mock(/\/users\/mentions\/search\?.*query=query-both-fail(&|$)/, 500)
      .mock(/\/teams\/mentions\/search\?.*query=query-both-fail(&|$)/, 500)
      .mock(
        /\/users\/mentions\/search\?.*team-faster-user(&|$)/,
        // user request is slower than team request
        new Promise(resolve => {
          setTimeout(() => {
            resolve({ body: { mentions: resultCraig } });
          }, REQUEST_DELAY);
        }),
      )
      .mock(/\/teams\/mentions\/search\?.*team-faster-user(&|$)/, {
        body: teamResults,
      });
  });

  afterEach(() => {
    fetchMock.restore();
    jest.useRealTimers();
  });

  describe('#subscribe', () => {
    it('subscribe should receive 2 updates: from user request first and then from team request', done => {
      // the event is called twice
      // 1st: with user results
      // 2nd: with users and team results
      resource.subscribe('craig', mentions => {
        // the first is for user results
        if (currentCount === 1) {
          expect(mentions).toHaveLength(resultCraig.length);
          // the second is for user results + team results
        } else if (currentCount === 2) {
          const firstTeam = mentions[resultCraig.length];
          expect(firstTeam.userType).toBe('TEAM');
          const teamLink = firstTeam.context
            ? firstTeam.context.teamLink
            : null;
          expect(teamLink).toBe(`/wiki/team/${firstTeam.id}`);

          expect(mentions).toHaveLength(
            resultCraig.length + teamResults.length,
          );
        }

        const queryParams = queryString.parse(
          queryString.extract(fetchMock.lastUrl()),
        );

        expect(queryParams.containerId).toBe('someContainerId');
        expect(queryParams.objectId).toBe('someObjectId');
        expect(queryParams.childObjectId).toBe('someChildObjectId');
        expect(queryParams.sessionId).toBe('someSessionId');
        expect(fetchMock.lastOptions().credentials).toEqual('include');

        doneWhen(done, 2);
      });

      resource.filter('craig', FULL_CONTEXT);
      jest.runTimersToTime(REQUEST_DELAY);
    });

    it('subscribe should receive 1 update when team request comes first and then from user request', done => {
      resource.subscribe('team-faster-user', mentions => {
        expect(mentions).toHaveLength(resultCraig.length + teamResults.length);
        done();
      });

      resource.filter('team-faster-user', FULL_CONTEXT);
      jest.runTimersToTime(REQUEST_DELAY);
    });

    it('subscribe should receive updates with credentials omitted', done => {
      const resource = new TeamMentionResource(
        {
          ...apiUserMentionConfig,
          securityProvider() {
            return options(defaultSecurityCode, true);
          },
        },
        {
          ...apiTeamMentionConfig,
          securityProvider() {
            return options(defaultSecurityCode, true);
          },
        },
      );

      resource.subscribe('test3', mentions => {
        expect(mentions).toHaveLength(0);
        const requestData = fetchMock.lastOptions();

        expect(requestData.credentials).toEqual('omit');
        done();
      });

      resource.filter('esoares');
    });

    it('should still receive updates when the user request succeeds, but team request fails', done => {
      resource.subscribe('test', mentions => {
        // just have users result
        expect(mentions).toHaveLength(resultCr.length);
        done();
      });
      resource.filter('query-only-teams-fail');
    });

    it('should still receive updates when the user requests fails, but team request succeeds', done => {
      resource.subscribe('test', mentions => {
        // just have users result
        expect(mentions).toHaveLength(teamResults.length);
        done();
      });

      resource.filter('query-only-users-fail');
    });

    it('should show error when both user and team requests fails', done => {
      resource.subscribe(
        'test',
        () => done.fail('listener should not be called'),
        error => {
          expect(error).toMatchObject({
            code: 500,
            reason: 'Internal Server Error',
          });
          done();
        },
      );

      resource.filter('query-both-fail');
    });
  });

  describe('#unsubscribe', () => {
    it('subscriber should no longer called', () => {
      const listener = jest.fn();
      resource.subscribe('test123', listener);
      resource.unsubscribe('test123');
      resource.filter('craig', FULL_CONTEXT);

      jest.runTimersToTime(REQUEST_DELAY);
      expect(listener).toHaveBeenCalledTimes(0);
    });
  });

  describe('#shouldHighlightMention', () => {
    it('should return false by default', () => {
      expect(resource.shouldHighlightMention(testMentionDesc)).toBe(false);
    });
  });

  describe('#spotlightEnable', () => {
    it('should return false by default', () => {
      expect(resource.mentionTypeaheadHighlightEnabled()).toBe(false);
    });
    it('should return true when enabled', () => {
      const withSpotlightResource = new TeamMentionResource(
        apiUserMentionConfig,
        {
          ...apiTeamMentionConfig,
          teamHighlightEnabled: true,
        },
      );
      expect(withSpotlightResource.mentionTypeaheadHighlightEnabled()).toBe(
        true,
      );
    });
  });
});
