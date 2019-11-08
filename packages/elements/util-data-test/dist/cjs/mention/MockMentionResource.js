"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_search_1 = require("js-search");
var resource_1 = require("@atlaskit/mention/resource");
var analytics_next_1 = require("@atlaskit/analytics-next");
var logger_1 = tslib_1.__importDefault(require("../logger"));
var mention_data_1 = require("./mention-data");
var MockMentionNameClient_1 = require("./MockMentionNameClient");
var utils_1 = require("./utils");
var search = new js_search_1.Search('id');
search.addIndex('name');
search.addIndex('mentionName');
search.addIndex('nickname');
search.addDocuments(mention_data_1.mentionResult);
exports.createMockMentionNameResolver = function () {
    var analyticsProps = {
        createAnalyticsEvent: function (payload) {
            // eslint-disable-next-line no-console
            console.log('analytics event', payload);
            return new analytics_next_1.UIAnalyticsEvent({ payload: payload });
        },
    };
    return new resource_1.DefaultMentionNameResolver(new MockMentionNameClient_1.MockMentionNameClient(), analyticsProps);
};
var MockMentionResource = /** @class */ (function (_super) {
    tslib_1.__extends(MockMentionResource, _super);
    function MockMentionResource(config) {
        var _this = _super.call(this) || this;
        _this.mentionTypeaheadHighlightEnabled = function () {
            return _this.config.enableTeamMentionHighlight || false;
        };
        _this.mentionTypeaheadCreateTeamPath = function () { return '/people/search#createTeam'; };
        _this.config = config;
        _this.lastReturnedSearch = 0;
        return _this;
    }
    MockMentionResource.prototype.filter = function (query) {
        var _this = this;
        var searchTime = Date.now();
        var notify = function (mentions) {
            if (searchTime >= _this.lastReturnedSearch) {
                _this.lastReturnedSearch = searchTime;
                var stats = {};
                if (query === 'team') {
                    stats.teamMentionDuration = 200;
                }
                else {
                    stats.duration = 100;
                }
                _this._notifyListeners(mentions, stats);
            }
            else {
                var date = new Date(searchTime).toISOString().substr(17, 6);
                logger_1.default('Stale search result, skipping', date, query); // eslint-disable-line no-console, max-len
            }
            _this._notifyAllResultsListeners(mentions);
        };
        var notifyErrors = function (error) {
            _this._notifyErrorListeners(error);
        };
        var minWait = this.config.minWait || 0;
        var randomTime = (this.config.maxWait || 0) - minWait;
        var waitTime = Math.random() * randomTime + minWait;
        setTimeout(function () {
            var mentions;
            if (query === 'error') {
                notifyErrors(new Error('mock-error'));
                return;
            }
            else if (query === '401' || query === '403') {
                notifyErrors(new utils_1.HttpError(parseInt(query, 10), 'get off my lawn'));
                return;
            }
            else if (query) {
                mentions = search.search(query);
            }
            else {
                mentions = mention_data_1.mentionResult;
            }
            notify({
                mentions: mentions,
                query: query,
            });
        }, waitTime + 1);
    };
    // eslint-disable-next-line class-methods-use-this
    MockMentionResource.prototype.recordMentionSelection = function (mention) {
        logger_1.default("Record mention selection " + mention.id);
    };
    MockMentionResource.prototype.resolveMentionName = function (id) {
        logger_1.default('(mock)resolveMentionName', id);
        if (!this.config.mentionNameResolver) {
            return {
                id: id,
                name: '',
                status: resource_1.MentionNameStatus.UNKNOWN,
            };
        }
        return this.config.mentionNameResolver.lookupName(id);
    };
    MockMentionResource.prototype.cacheMentionName = function (id, name) {
        logger_1.default('(mock)cacheMentionName', id, name);
        if (this.config.mentionNameResolver) {
            this.config.mentionNameResolver.cacheName(id, name);
        }
    };
    MockMentionResource.prototype.supportsMentionNameResolving = function () {
        var supported = !!this.config.mentionNameResolver;
        logger_1.default('supportsMentionNameResolving', supported);
        return supported;
    };
    MockMentionResource.prototype.shouldHighlightMention = function (mention) {
        return mention.id === 'oscar';
    };
    return MockMentionResource;
}(resource_1.AbstractMentionResource));
exports.MockMentionResource = MockMentionResource;
//# sourceMappingURL=MockMentionResource.js.map