"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var resource_1 = require("@atlaskit/mention/resource");
var logger_1 = tslib_1.__importDefault(require("../logger"));
var MockMentionNameClient = /** @class */ (function () {
    function MockMentionNameClient() {
    }
    MockMentionNameClient.prototype.getLookupLimit = function () {
        return 10;
    };
    MockMentionNameClient.prototype.lookupMentionNames = function (ids) {
        logger_1.default('lookupMentionNames', ids);
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(ids.map(function (id) {
                    if (id === 'unknown') {
                        return {
                            id: id,
                            status: resource_1.MentionNameStatus.UNKNOWN,
                        };
                    }
                    if (id === 'service_error') {
                        return {
                            id: id,
                            status: resource_1.MentionNameStatus.SERVICE_ERROR,
                        };
                    }
                    return {
                        id: id,
                        name: "Hydrated " + id + " name",
                        status: resource_1.MentionNameStatus.OK,
                    };
                }));
            }, 1500);
        });
    };
    return MockMentionNameClient;
}());
exports.MockMentionNameClient = MockMentionNameClient;
//# sourceMappingURL=MockMentionNameClient.js.map