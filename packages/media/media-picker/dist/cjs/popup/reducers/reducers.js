"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileClick_1 = tslib_1.__importDefault(require("./fileClick"));
var updatePopupUrls_1 = tslib_1.__importDefault(require("./updatePopupUrls"));
var fileListUpdate_1 = tslib_1.__importDefault(require("./fileListUpdate"));
var serviceListUpdate_1 = tslib_1.__importDefault(require("./serviceListUpdate"));
var accountChange_1 = tslib_1.__importDefault(require("./accountChange"));
var accountUnlink_1 = tslib_1.__importDefault(require("./accountUnlink"));
var serviceConnect_1 = tslib_1.__importDefault(require("./serviceConnect"));
var pathChangeRequest_1 = tslib_1.__importDefault(require("./pathChangeRequest"));
var fetchNextCloudFilesPage_1 = tslib_1.__importDefault(require("./fetchNextCloudFilesPage"));
var getFilesInRecents_1 = require("./getFilesInRecents");
var fileUploadsAdd_1 = tslib_1.__importDefault(require("./fileUploadsAdd"));
var filePreviewUpdate_1 = tslib_1.__importDefault(require("./filePreviewUpdate"));
var fileUploadProgress_1 = tslib_1.__importDefault(require("./fileUploadProgress"));
var fileUploadProcessingStart_1 = tslib_1.__importDefault(require("./fileUploadProcessingStart"));
var fileUploadEnd_1 = tslib_1.__importDefault(require("./fileUploadEnd"));
var setEventProxy_1 = tslib_1.__importDefault(require("./setEventProxy"));
var removeEventProxy_1 = tslib_1.__importDefault(require("./removeEventProxy"));
var resetView_1 = tslib_1.__importDefault(require("./resetView"));
var editorClose_1 = tslib_1.__importDefault(require("./editorClose"));
var editorShowError_1 = tslib_1.__importDefault(require("./editorShowError"));
var editorShowImage_1 = tslib_1.__importDefault(require("./editorShowImage"));
var editorShowLoading_1 = tslib_1.__importDefault(require("./editorShowLoading"));
var deselectItem_1 = tslib_1.__importDefault(require("./deselectItem"));
var isUploading_1 = tslib_1.__importDefault(require("./isUploading"));
var remoteUploadStart_1 = tslib_1.__importDefault(require("./remoteUploadStart"));
var searchGiphy_1 = require("./searchGiphy");
var showPopup_1 = tslib_1.__importDefault(require("./showPopup"));
var hidePopup_1 = tslib_1.__importDefault(require("./hidePopup"));
var startApp_1 = tslib_1.__importDefault(require("./startApp"));
var saveCollectionItemsSubscription_1 = tslib_1.__importDefault(require("./saveCollectionItemsSubscription"));
var removeFileFromRecents_1 = tslib_1.__importDefault(require("./removeFileFromRecents"));
var reducers = combineReducers([
    fileClick_1.default,
    fileListUpdate_1.default,
    pathChangeRequest_1.default,
    fetchNextCloudFilesPage_1.default,
    serviceListUpdate_1.default,
    accountChange_1.default,
    serviceConnect_1.default,
    accountUnlink_1.default,
    getFilesInRecents_1.getRecentFilesStarted,
    getFilesInRecents_1.getRecentFilesFullfilled,
    getFilesInRecents_1.getRecentFilesFailed,
    updatePopupUrls_1.default,
    fileUploadsAdd_1.default,
    filePreviewUpdate_1.default,
    fileUploadProgress_1.default,
    fileUploadProcessingStart_1.default,
    fileUploadEnd_1.default,
    setEventProxy_1.default,
    removeEventProxy_1.default,
    removeFileFromRecents_1.default,
    resetView_1.default,
    editorClose_1.default,
    editorShowError_1.default,
    editorShowImage_1.default,
    editorShowLoading_1.default,
    deselectItem_1.default,
    isUploading_1.default,
    remoteUploadStart_1.default,
    searchGiphy_1.giphySearchStarted,
    searchGiphy_1.giphySearchFullfilled,
    searchGiphy_1.giphySearchFailed,
    showPopup_1.default,
    hidePopup_1.default,
    startApp_1.default,
    saveCollectionItemsSubscription_1.default,
]);
function combineReducers(reducers) {
    return function (state, action) {
        return reducers.reduce(function (oldState, reducer) {
            return reducer(oldState, action);
        }, tslib_1.__assign({}, state));
    };
}
exports.default = reducers;
//# sourceMappingURL=reducers.js.map