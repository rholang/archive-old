import { __extends } from "tslib";
import { ActivityResource } from '@atlaskit/activity';
var MockActivityResource = /** @class */ (function (_super) {
    __extends(MockActivityResource, _super);
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
}(ActivityResource));
export { MockActivityResource };
export function activityProviderFactory(items) {
    return Promise.resolve(new MockActivityResource(items));
}
//# sourceMappingURL=activity-provider.js.map