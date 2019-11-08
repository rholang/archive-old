// WARNING! DO NOTE MOVE THIS EXPORT!
// mediaState should be exported BEFORE StreamsCache import later because
// StreamsCache will try to import mediaState from here.
export { mediaState } from './cache';
export { isClientBasedAuth, isAsapBasedAuth, authToOwner, } from './auth';
export { UploadController, isPreviewableType, } from '@atlaskit/media-client';
export { FileFetcherImpl } from '@atlaskit/media-client';
export * from './context/context';
// export * from './utils';
export { isImageRemote } from '@atlaskit/media-client';
// export * from './fileState';
export { isErrorFileState, isImageRepresentationReady, mapMediaFileToFileState, mapMediaItemToFileState, } from '@atlaskit/media-client';
// export * from './utils/getMediaTypeFromMimeType';
export { getMediaTypeFromMimeType } from '@atlaskit/media-client';
export { getFileStreamsCache } from '@atlaskit/media-client';
// export * from './identifier';
export { isFileIdentifier, isExternalImageIdentifier, isDifferentIdentifier, } from '@atlaskit/media-client';
//# sourceMappingURL=index.js.map