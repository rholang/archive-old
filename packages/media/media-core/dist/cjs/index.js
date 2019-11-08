"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// WARNING! DO NOTE MOVE THIS EXPORT!
// mediaState should be exported BEFORE StreamsCache import later because
// StreamsCache will try to import mediaState from here.
var cache_1 = require("./cache");
exports.mediaState = cache_1.mediaState;
var auth_1 = require("./auth");
exports.isClientBasedAuth = auth_1.isClientBasedAuth;
exports.isAsapBasedAuth = auth_1.isAsapBasedAuth;
exports.authToOwner = auth_1.authToOwner;
var media_client_1 = require("@atlaskit/media-client");
exports.UploadController = media_client_1.UploadController;
exports.isPreviewableType = media_client_1.isPreviewableType;
var media_client_2 = require("@atlaskit/media-client");
exports.FileFetcherImpl = media_client_2.FileFetcherImpl;
tslib_1.__exportStar(require("./context/context"), exports);
// export * from './utils';
var media_client_3 = require("@atlaskit/media-client");
exports.isImageRemote = media_client_3.isImageRemote;
// export * from './fileState';
var media_client_4 = require("@atlaskit/media-client");
exports.isErrorFileState = media_client_4.isErrorFileState;
exports.isImageRepresentationReady = media_client_4.isImageRepresentationReady;
exports.mapMediaFileToFileState = media_client_4.mapMediaFileToFileState;
exports.mapMediaItemToFileState = media_client_4.mapMediaItemToFileState;
// export * from './utils/getMediaTypeFromMimeType';
var media_client_5 = require("@atlaskit/media-client");
exports.getMediaTypeFromMimeType = media_client_5.getMediaTypeFromMimeType;
var media_client_6 = require("@atlaskit/media-client");
exports.getFileStreamsCache = media_client_6.getFileStreamsCache;
// export * from './identifier';
var media_client_7 = require("@atlaskit/media-client");
exports.isFileIdentifier = media_client_7.isFileIdentifier;
exports.isExternalImageIdentifier = media_client_7.isExternalImageIdentifier;
exports.isDifferentIdentifier = media_client_7.isDifferentIdentifier;
//# sourceMappingURL=index.js.map