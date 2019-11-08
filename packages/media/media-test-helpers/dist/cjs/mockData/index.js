"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/media-client/constants");
tslib_1.__exportStar(require("./matchers"), exports);
tslib_1.__exportStar(require("./utils"), exports);
tslib_1.__exportStar(require("./handlers"), exports);
var MockContext = /** @class */ (function () {
    function MockContext() {
        this.userContext = {
            auth: {
                clientId: '',
                token: '',
                baseUrl: '',
            },
            collection: [],
            collectionName: constants_1.RECENTS_COLLECTION,
        };
        this.tenantContext = {
            auth: {
                clientId: '',
                token: '',
                baseUrl: '',
            },
            collection: [],
            collectionName: 'MediaServicesSample',
        };
    }
    return MockContext;
}());
exports.MockContext = MockContext;
//# sourceMappingURL=index.js.map