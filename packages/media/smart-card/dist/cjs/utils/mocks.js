"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var client_1 = tslib_1.__importDefault(require("../client"));
exports.mocks = {
    success: {
        meta: {
            visibility: 'public',
            access: 'granted',
            auth: [],
            definitionId: 'd1',
        },
        data: {
            name: 'I love cheese',
            summary: 'Here is your serving of cheese: 🧀',
        },
    },
    notFound: {
        meta: {
            visibility: 'not_found',
            access: 'forbidden',
            auth: [],
            definitionId: 'd1',
        },
        data: {
            name: 'I love cheese',
        },
    },
    forbidden: {
        meta: {
            visibility: 'restricted',
            access: 'forbidden',
            auth: [
                {
                    key: 'some-flow',
                    displayName: 'Flow',
                    url: 'https://outbound-auth/flow',
                },
            ],
            definitionId: 'd1',
        },
        data: {
            name: 'I love cheese',
        },
    },
    unauthorized: {
        meta: {
            visibility: 'restricted',
            access: 'unauthorized',
            auth: [
                {
                    key: 'some-flow',
                    displayName: 'Flow',
                    url: 'https://outbound-auth/flow',
                },
            ],
            definitionId: 'd1',
        },
        data: {
            name: 'I love cheese',
        },
    },
};
exports.fakeResponse = function () { return Promise.resolve(exports.mocks.success); };
exports.fakeFactory = function (implementation) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(CustomClient, _super);
        function CustomClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomClient.prototype.fetchData = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, implementation()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return CustomClient;
    }(client_1.default));
};
exports.waitFor = function (time) {
    if (time === void 0) { time = 1; }
    return new Promise(function (res) { return setTimeout(res, time); });
};
//# sourceMappingURL=mocks.js.map