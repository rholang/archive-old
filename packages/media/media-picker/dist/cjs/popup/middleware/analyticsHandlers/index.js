"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var fileUploadEndHandler_1 = tslib_1.__importDefault(require("./fileUploadEndHandler"));
var fileUploadErrorHandler_1 = tslib_1.__importDefault(require("./fileUploadErrorHandler"));
var fileUploadsStartHandler_1 = tslib_1.__importDefault(require("./fileUploadsStartHandler"));
var handleCloudFetchingEventHandler_1 = tslib_1.__importDefault(require("./handleCloudFetchingEventHandler"));
var editorCloseHandler_1 = tslib_1.__importDefault(require("./editorCloseHandler"));
var editRemoteImageHandler_1 = tslib_1.__importDefault(require("./editRemoteImageHandler"));
var changeServiceHandler_1 = tslib_1.__importDefault(require("./changeServiceHandler"));
var hidePopupHandler_1 = tslib_1.__importDefault(require("./hidePopupHandler"));
var startAuthHandler_1 = tslib_1.__importDefault(require("./startAuthHandler"));
var startFileBrowserHandler_1 = tslib_1.__importDefault(require("./startFileBrowserHandler"));
var fileListUpdateHandler_1 = tslib_1.__importDefault(require("./fileListUpdateHandler"));
var searchGiphyHandler_1 = tslib_1.__importDefault(require("./searchGiphyHandler"));
var editorShowImageHandler_1 = tslib_1.__importDefault(require("./editorShowImageHandler"));
var showPopupHandler_1 = tslib_1.__importDefault(require("./showPopupHandler"));
var failureErrorLoggerHandler_1 = tslib_1.__importDefault(require("./failureErrorLoggerHandler"));
exports.buttonClickPayload = {
    action: 'clicked',
    actionSubject: 'button',
    eventType: analytics_gas_types_1.UI_EVENT_TYPE,
};
exports.default = [
    fileUploadEndHandler_1.default,
    fileUploadErrorHandler_1.default,
    fileUploadsStartHandler_1.default,
    handleCloudFetchingEventHandler_1.default,
    editorCloseHandler_1.default,
    editRemoteImageHandler_1.default,
    changeServiceHandler_1.default,
    hidePopupHandler_1.default,
    startAuthHandler_1.default,
    startFileBrowserHandler_1.default,
    fileListUpdateHandler_1.default,
    searchGiphyHandler_1.default,
    editorShowImageHandler_1.default,
    showPopupHandler_1.default,
    failureErrorLoggerHandler_1.default,
];
//# sourceMappingURL=index.js.map