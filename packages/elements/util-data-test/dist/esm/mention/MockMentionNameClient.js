import { MentionNameStatus, } from '@atlaskit/mention/resource';
import debug from '../logger';
var MockMentionNameClient = /** @class */ (function () {
    function MockMentionNameClient() {
    }
    MockMentionNameClient.prototype.getLookupLimit = function () {
        return 10;
    };
    MockMentionNameClient.prototype.lookupMentionNames = function (ids) {
        debug('lookupMentionNames', ids);
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(ids.map(function (id) {
                    if (id === 'unknown') {
                        return {
                            id: id,
                            status: MentionNameStatus.UNKNOWN,
                        };
                    }
                    if (id === 'service_error') {
                        return {
                            id: id,
                            status: MentionNameStatus.SERVICE_ERROR,
                        };
                    }
                    return {
                        id: id,
                        name: "Hydrated " + id + " name",
                        status: MentionNameStatus.OK,
                    };
                }));
            }, 1500);
        });
    };
    return MockMentionNameClient;
}());
export { MockMentionNameClient };
//# sourceMappingURL=MockMentionNameClient.js.map