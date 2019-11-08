import { MediaClient, } from '@atlaskit/media-client';
var ContextFactory = /** @class */ (function () {
    function ContextFactory() {
    }
    ContextFactory.create = function (config) {
        return new MediaClient(config);
    };
    return ContextFactory;
}());
export { ContextFactory };
//# sourceMappingURL=context.js.map