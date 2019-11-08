import { __assign, __awaiter, __extends, __generator, __read, __spread } from "tslib";
import { utils as serviceUtils, } from '@atlaskit/util-service-support';
import { UserType, UserAccessLevel, } from '../types';
import MentionResource from './MentionResource';
import debug from '../util/logger';
var MAX_QUERY_TEAMS = 20;
/**
 * Provides a Javascript API to fetch users and teams
 * In future we will have a new endpoint to return both users and teams, we can
 * remove this class at this point
 */
var TeamMentionResource = /** @class */ (function (_super) {
    __extends(TeamMentionResource, _super);
    function TeamMentionResource(userMentionConfig, teamMentionConfig) {
        var _this = _super.call(this, userMentionConfig) || this;
        _this.lastSearchQuery = '';
        _this.mentionTypeaheadHighlightEnabled = function () {
            return _this.teamMentionConfig.teamHighlightEnabled || false;
        };
        _this.mentionTypeaheadCreateTeamPath = function () { return _this.teamMentionConfig.createTeamPath; };
        _this.verifyMentionConfig(teamMentionConfig);
        _this.teamMentionConfig = teamMentionConfig;
        _this.lastReturnedSearchTeam = 0;
        return _this;
    }
    TeamMentionResource.prototype.filter = function (query, contextIdentifier) {
        this.lastSearchQuery = query;
        if (!query) {
            this.remoteInitialStateTeamAndUsers(contextIdentifier);
        }
        else {
            this.updateActiveSearches(query);
            // both user and team requests start at the same time
            var getUserPromise = this.remoteUserSearch(query, contextIdentifier);
            var getTeamsPromise = this.remoteTeamSearch(query, contextIdentifier);
            this.handleBothRequests(query, getUserPromise, getTeamsPromise);
        }
    };
    /**
     * Returns the initial mention display list before a search is performed for the specified
     * container.
     */
    TeamMentionResource.prototype.remoteInitialStateTeamAndUsers = function (contextIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var emptyQuery, getUserPromise, queryParams, options, getTeamsPromise;
            return __generator(this, function (_a) {
                emptyQuery = '';
                getUserPromise = _super.prototype.remoteInitialState.call(this, contextIdentifier);
                queryParams = this.getQueryParamsOfTeamMentionConfig(contextIdentifier);
                options = {
                    path: 'bootstrap',
                    queryParams: queryParams,
                };
                getTeamsPromise = serviceUtils.requestService(this.teamMentionConfig, options);
                this.handleBothRequests(emptyQuery, getUserPromise, getTeamsPromise);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Both user and team requests are not blocked together
     * If users request arrives first, show users. Show teams when team request arrives.
     * If team request arrives first, block waiting for user request, then show both
     * If one errors, show the non-erroring one
     * If both error, show error
     */
    TeamMentionResource.prototype.handleBothRequests = function (query, userRequest, teamRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var searchTime, accumulatedResults, notifyWhenOneRequestDone, userResults, userRequestError, teamRequestError, error_1, teamsResult, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTime = Date.now();
                        accumulatedResults = {
                            mentions: [],
                            query: query,
                        };
                        notifyWhenOneRequestDone = function (results, hasTeamResults) {
                            // just update UI for the last query string
                            if (query !== _this.lastSearchQuery) {
                                return;
                            }
                            accumulatedResults = {
                                mentions: __spread(accumulatedResults.mentions, results.mentions),
                                query: query,
                            };
                            // we need to calculate different `duration` for user and team request.
                            if (hasTeamResults) {
                                _this.notify(searchTime, accumulatedResults, query);
                            }
                            else {
                                _super.prototype.notify.call(_this, searchTime, accumulatedResults, query);
                            }
                        };
                        userRequestError = null;
                        teamRequestError = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, userRequest];
                    case 2:
                        // user requests finishes, update the UI, don't need to wait for team requests
                        userResults = _a.sent();
                        notifyWhenOneRequestDone(userResults, false);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        userRequestError = error_1;
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, teamRequest];
                    case 5:
                        teamsResult = _a.sent();
                        // update search time after team results returns
                        notifyWhenOneRequestDone(Array.isArray(teamsResult)
                            ? this.convertTeamResultToMentionResult(teamsResult, query)
                            : teamsResult, true);
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        teamRequestError = error_2;
                        return [3 /*break*/, 7];
                    case 7:
                        // both requests fail, show one of errors in UI
                        if (userRequestError && teamRequestError) {
                            this.notifyError(userRequestError, query);
                            debug('User mention request fails. ', userRequestError);
                            debug('Team mention request fails. ', teamRequestError);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamMentionResource.prototype.notify = function (searchTime, mentionResult, query) {
        if (searchTime > this.lastReturnedSearchTeam) {
            this.lastReturnedSearchTeam = searchTime;
            this._notifyListeners(mentionResult, {
                teamMentionDuration: Date.now() - searchTime,
            });
        }
        else {
            var date = new Date(searchTime).toISOString().substr(17, 6);
            debug('Stale search result, skipping', date, query); // eslint-disable-line no-console, max-len
        }
        this._notifyAllResultsListeners(mentionResult);
    };
    TeamMentionResource.prototype.getQueryParamsOfTeamMentionConfig = function (contextIdentifier) {
        var configParams = {};
        if (this.teamMentionConfig.containerId) {
            configParams['containerId'] = this.teamMentionConfig.containerId;
        }
        if (this.teamMentionConfig.productId) {
            configParams['productIdentifier'] = this.teamMentionConfig.productId;
        }
        // if contextParams exist then it will override configParams for containerId
        return __assign(__assign({}, configParams), contextIdentifier);
    };
    TeamMentionResource.prototype.remoteUserSearch = function (query, contextIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.remoteSearch.call(this, query, contextIdentifier)];
            });
        });
    };
    TeamMentionResource.prototype.remoteTeamSearch = function (query, contextIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var options, teamResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            path: 'search',
                            queryParams: __assign({ query: query, limit: MAX_QUERY_TEAMS }, this.getQueryParamsOfTeamMentionConfig(contextIdentifier)),
                        };
                        return [4 /*yield*/, serviceUtils.requestService(this.teamMentionConfig, options)];
                    case 1:
                        teamResult = _a.sent();
                        return [2 /*return*/, this.convertTeamResultToMentionResult(teamResult, query)];
                }
            });
        });
    };
    TeamMentionResource.prototype.convertTeamResultToMentionResult = function (result, query) {
        var _this = this;
        var teamLinkResolver = this.teamMentionConfig.teamLinkResolver;
        var mentions = result.map(function (team) {
            var teamLink = '';
            var defaultTeamLink = window.location.origin + "/people/team/" + team.id;
            if (typeof teamLinkResolver === 'function') {
                teamLink = teamLinkResolver(team.id);
            }
            return {
                id: _this.trimTeamARI(team.id),
                avatarUrl: team.smallAvatarImageUrl,
                name: team.displayName,
                accessLevel: UserAccessLevel[UserAccessLevel.CONTAINER],
                userType: UserType[UserType.TEAM],
                highlight: team.highlight,
                context: {
                    members: team.members,
                    includesYou: team.includesYou,
                    memberCount: team.memberCount,
                    teamLink: teamLink || defaultTeamLink,
                },
            };
        });
        return { mentions: mentions, query: query };
    };
    TeamMentionResource.prototype.trimTeamARI = function (teamId) {
        if (teamId === void 0) { teamId = ''; }
        var TEAM_ARI_PREFIX = 'ari:cloud:teams::team/';
        return teamId.replace(TEAM_ARI_PREFIX, '');
    };
    return TeamMentionResource;
}(MentionResource));
export default TeamMentionResource;
//# sourceMappingURL=TeamMentionResource.js.map