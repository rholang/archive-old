"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Selector_1 = require("../components/Selector");
exports.containerAri = 'ari:cloud:owner:demo-cloud-id:container/1';
exports.ari = 'ari:cloud:owner:demo-cloud-id:item/1';
exports.reaction = function (shortName, count, reacted) { return ({
    ari: exports.ari,
    containerAri: exports.containerAri,
    emojiId: Selector_1.defaultReactionsByShortName.get(shortName).id,
    count: count,
    reacted: reacted,
}); };
exports.user = function (id, displayName) { return ({ id: id, displayName: displayName }); };
var objectReactionKey = function (containerAri, ari) {
    return containerAri + "|" + ari;
};
var defaultUsers = [
    exports.user('oscar', 'Oscar Wallhult'),
    exports.user('julien', 'Julien Michel Hoarau'),
    exports.user('craig', 'Craig Petchell'),
    exports.user('jerome', 'Jerome Touffe-Blin'),
    exports.user('esoares', 'Eduardo Soares'),
    exports.user('lpereira', 'Luiz Pereira'),
    exports.user('pcurren', 'Paul Curren'),
    exports.user('ttjandra', 'Tara Tjandra'),
    exports.user('severington', 'Ste Everington'),
    exports.user('sguillope', 'Sylvain Guillope'),
    exports.user('alunnon', 'Alex Lunnon'),
];
var MockReactionsClient = /** @class */ (function () {
    function MockReactionsClient(delay) {
        var _a;
        var _this = this;
        if (delay === void 0) { delay = 0; }
        this.mockData = (_a = {},
            _a[objectReactionKey(exports.containerAri, exports.ari)] = [
                exports.reaction(':fire:', 1, true),
                exports.reaction(':thumbsup:', 9, false),
                exports.reaction(':thumbsdown:', 5, false),
                exports.reaction(':heart_eyes:', 100, false),
            ],
            _a);
        this.delayPromise = function () {
            return new Promise(function (resolve) { return window.setTimeout(resolve, _this.delay); });
        };
        this.delay = delay;
    }
    MockReactionsClient.prototype.getReactions = function (containerAri, aris) {
        var _this = this;
        return this.delayPromise().then(function () {
            return aris.reduce(function (results, ari) {
                var reactionKey = objectReactionKey(containerAri, ari);
                results[ari] = _this.mockData[reactionKey] || [];
                return results;
            }, {});
        });
    };
    MockReactionsClient.prototype.getDetailedReaction = function (containerAri, ari, emojiId) {
        var _this = this;
        return this.delayPromise().then(function () {
            var reactionKey = containerAri + "|" + ari;
            var reactionsMockData = _this.mockData[reactionKey];
            if (reactionsMockData) {
                var reaction_1 = reactionsMockData.find(function (reaction) { return reaction.emojiId === emojiId; });
                if (reaction_1) {
                    var users = tslib_1.__spread(defaultUsers).slice(Math.floor(Math.random() * 4), Math.floor(Math.random() * 9) + 4)
                        .slice(0, reaction_1.count);
                    return tslib_1.__assign(tslib_1.__assign({}, reaction_1), { users: users });
                }
            }
            return {
                containerAri: containerAri,
                ari: ari,
                emojiId: emojiId,
                count: 1,
                reacted: true,
                users: [],
            };
        });
    };
    MockReactionsClient.prototype.addReaction = function (containerAri, ari, emojiId) {
        var _this = this;
        return this.delayPromise().then(function () {
            var reactionKey = objectReactionKey(containerAri, ari);
            var found = false;
            var reactionsMockData = _this.mockData[reactionKey];
            if (reactionsMockData) {
                _this.mockData[reactionKey] = reactionsMockData.map(function (reaction) {
                    if (reaction.emojiId === emojiId) {
                        found = true;
                        return tslib_1.__assign(tslib_1.__assign({}, reaction), { count: reaction.count + 1, reacted: true });
                    }
                    return reaction;
                });
            }
            if (!found) {
                _this.mockData[reactionKey] = tslib_1.__spread((reactionsMockData ? reactionsMockData : []), [
                    {
                        containerAri: containerAri,
                        ari: ari,
                        emojiId: emojiId,
                        count: 1,
                        reacted: true,
                    },
                ]);
            }
            return _this.mockData[reactionKey];
        });
    };
    MockReactionsClient.prototype.deleteReaction = function (containerAri, ari, emojiId) {
        var _this = this;
        return this.delayPromise().then(function () {
            var reactionKey = objectReactionKey(containerAri, ari);
            _this.mockData[reactionKey] = _this.mockData[reactionKey]
                .map(function (reaction) {
                if (reaction.emojiId === emojiId) {
                    if (reaction.count === 1) {
                        return undefined;
                    }
                    return tslib_1.__assign(tslib_1.__assign({}, reaction), { count: reaction.count - 1, reacted: false });
                }
                return reaction;
            })
                .filter(function (reaction) { return !!reaction; });
            return _this.mockData[reactionKey];
        });
    };
    return MockReactionsClient;
}());
exports.MockReactionsClient = MockReactionsClient;
//# sourceMappingURL=MockReactionsClient.js.map