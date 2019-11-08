"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FETCH_NEXT_CLOUD_FILES_PAGE = 'FETCH_NEXT_CLOUD_FILES_PAGE';
function fetchNextCloudFilesPage(serviceName, accountId, path, nextCursor) {
    return {
        type: FETCH_NEXT_CLOUD_FILES_PAGE,
        serviceName: serviceName,
        accountId: accountId,
        path: path,
        nextCursor: nextCursor,
    };
}
exports.fetchNextCloudFilesPage = fetchNextCloudFilesPage;
function isFetchNextCloudFilesPageAction(action) {
    return action.type === FETCH_NEXT_CLOUD_FILES_PAGE;
}
exports.isFetchNextCloudFilesPageAction = isFetchNextCloudFilesPageAction;
//# sourceMappingURL=fetchNextCloudFilesPage.js.map