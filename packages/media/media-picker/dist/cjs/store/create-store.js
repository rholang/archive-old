"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var developmentOnly_1 = require("redux-devtools-extension/developmentOnly");
var cloud_service_1 = require("../popup/services/cloud-service");
var fetcher_1 = require("../popup/tools/fetcher/fetcher");
var wsProvider_1 = require("../popup/tools/websocket/wsProvider");
var reducers_1 = tslib_1.__importDefault(require("../popup/reducers/reducers"));
var default_state_1 = tslib_1.__importDefault(require("../popup/default_state"));
var config_1 = tslib_1.__importDefault(require("../config"));
var changeAccount_1 = tslib_1.__importDefault(require("../popup/middleware/changeAccount"));
var changeService_1 = require("../popup/middleware/changeService");
var fetchNextCloudFilesPage_1 = require("../popup/middleware/fetchNextCloudFilesPage");
var changeCloudAccountFolder_1 = require("../popup/middleware/changeCloudAccountFolder");
var startApp_1 = tslib_1.__importDefault(require("../popup/middleware/startApp"));
var getConnectedRemoteAccounts_1 = require("../popup/middleware/getConnectedRemoteAccounts");
var getFilesInRecents_1 = require("../popup/middleware/getFilesInRecents");
var importFiles_1 = require("../popup/middleware/importFiles");
var startAuth_1 = require("../popup/middleware/startAuth");
var unlinkCloudAccount_1 = tslib_1.__importDefault(require("../popup/middleware/unlinkCloudAccount"));
var proxyUploadEvents_1 = require("../popup/middleware/proxyUploadEvents");
var cancelUpload_1 = tslib_1.__importDefault(require("../popup/middleware/cancelUpload"));
var editRemoteImage_1 = require("../popup/middleware/editRemoteImage");
var finalizeUpload_1 = tslib_1.__importDefault(require("../popup/middleware/finalizeUpload"));
var getPreview_1 = tslib_1.__importDefault(require("../popup/middleware/getPreview"));
var handleCloudFetchingEvent_1 = require("../popup/middleware/handleCloudFetchingEvent");
var searchGiphy_1 = tslib_1.__importDefault(require("../popup/middleware/searchGiphy"));
var hidePopup_1 = tslib_1.__importDefault(require("../popup/middleware/hidePopup"));
var sendUploadEvent_1 = tslib_1.__importDefault(require("../popup/middleware/sendUploadEvent"));
var analyticsProcessing_1 = tslib_1.__importDefault(require("../popup/middleware/analyticsProcessing"));
var removeFileFromRecents_1 = require("../popup/middleware/removeFileFromRecents");
exports.default = (function (eventEmitter, tenantMediaClient, userMediaClient, config) {
    var userAuthProvider = userMediaClient.config.authProvider;
    var redirectUrl = config_1.default.html.redirectUrl;
    var fetcher = new fetcher_1.MediaApiFetcher();
    var wsProvider = new wsProvider_1.WsProvider();
    var cloudService = new cloud_service_1.CloudService(userAuthProvider);
    var partialState = tslib_1.__assign(tslib_1.__assign({}, default_state_1.default), { redirectUrl: redirectUrl,
        tenantMediaClient: tenantMediaClient,
        userMediaClient: userMediaClient,
        config: config });
    return redux_1.createStore(reducers_1.default, partialState, developmentOnly_1.composeWithDevTools(redux_1.applyMiddleware(analyticsProcessing_1.default, startApp_1.default(), getFilesInRecents_1.getFilesInRecents(), changeService_1.changeService, changeAccount_1.default, changeCloudAccountFolder_1.changeCloudAccountFolderMiddleware(fetcher), fetchNextCloudFilesPage_1.fetchNextCloudFilesPageMiddleware(fetcher), startAuth_1.startCloudAccountOAuthFlow(fetcher, cloudService), unlinkCloudAccount_1.default(fetcher), getConnectedRemoteAccounts_1.getConnectedRemoteAccounts(fetcher), cancelUpload_1.default, importFiles_1.importFilesMiddleware(eventEmitter, wsProvider), editRemoteImage_1.editRemoteImageMiddleware(), getPreview_1.default(), finalizeUpload_1.default(), proxyUploadEvents_1.proxyUploadEvents, handleCloudFetchingEvent_1.handleCloudFetchingEvent, searchGiphy_1.default(fetcher), hidePopup_1.default(eventEmitter), sendUploadEvent_1.default(eventEmitter), removeFileFromRecents_1.removeFileFromRecents)));
});
//# sourceMappingURL=create-store.js.map