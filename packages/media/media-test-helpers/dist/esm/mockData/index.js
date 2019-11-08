import { RECENTS_COLLECTION } from '@atlaskit/media-client/constants';
export * from './matchers';
export * from './utils';
export * from './handlers';
var MockContext = /** @class */ (function () {
    function MockContext() {
        this.userContext = {
            auth: {
                clientId: '',
                token: '',
                baseUrl: '',
            },
            collection: [],
            collectionName: RECENTS_COLLECTION,
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
export { MockContext };
//# sourceMappingURL=index.js.map