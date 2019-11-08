"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var activity_1 = require("@atlaskit/activity");
var MockActivityResource = /** @class */ (function (_super) {
    tslib_1.__extends(MockActivityResource, _super);
    function MockActivityResource(items) {
        var _this = _super.call(this, '', '') || this;
        _this.items = [];
        _this.items = items;
        return _this;
    }
    MockActivityResource.prototype.getRecentItems = function () {
        return Promise.resolve(this.items);
    };
    return MockActivityResource;
}(activity_1.ActivityResource));
exports.MockActivityResource = MockActivityResource;
function activityProviderFactory(items) {
    return Promise.resolve(new MockActivityResource(items));
}
exports.activityProviderFactory = activityProviderFactory;
//# sourceMappingURL=activity-provider.js.map