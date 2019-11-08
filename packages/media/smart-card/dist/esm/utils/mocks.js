import { __awaiter, __extends, __generator } from "tslib";
import CardClient from '../client';
export var mocks = {
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
export var fakeResponse = function () { return Promise.resolve(mocks.success); };
export var fakeFactory = function (implementation) {
    return /** @class */ (function (_super) {
        __extends(CustomClient, _super);
        function CustomClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomClient.prototype.fetchData = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, implementation()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return CustomClient;
    }(CardClient));
};
export var waitFor = function (time) {
    if (time === void 0) { time = 1; }
    return new Promise(function (res) { return setTimeout(res, time); });
};
//# sourceMappingURL=mocks.js.map