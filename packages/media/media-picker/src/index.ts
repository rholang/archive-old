export { PopupUploadEventPayloadMap } from './components/types';

import {
  BrowserConfig,
  ClipboardConfig,
  DropzoneConfig,
  Popup,
  PopupConfig,
  PopupConstructor,
} from './components/types';

import { MediaClientConfig } from '@atlaskit/media-core';

// Events public API and types
export {
  UploadsStartEventPayload,
  UploadStatusUpdateEventPayload,
  UploadPreviewUpdateEventPayload,
  UploadProcessingEventPayload,
  UploadEndEventPayload,
  UploadErrorEventPayload,
  UploadEventPayloadMap,
  isImagePreview,
} from './domain/uploadEvent';

export { MediaFile } from './domain/file';
export { MediaProgress } from './domain/progress';
export { MediaError } from './domain/error';
export { ImagePreview, Preview, NonImagePreview } from './domain/preview';

export { Popup };

export { UploadParams } from './domain/config';
export { BrowserConfig, PopupConfig, ClipboardConfig, DropzoneConfig };
export { PopupConstructor };

export async function MediaPicker(
  mediaClientConfig: MediaClientConfig,
  pickerConfig: PopupConfig,
): Promise<Popup> {
  const [{ PopupImpl }, { getMediaClient }] = await Promise.all([
    import(/* webpackChunkName:"@atlaskit-internal_media-picker-popup" */ './components/popup'),
    import(/* webpackChunkName:"@atlaskit-media-client" */ '@atlaskit/media-client'),
  ]);

  const mediaClient = getMediaClient(mediaClientConfig);

  return new PopupImpl(mediaClient, pickerConfig);
}

// REACT COMPONENTS

export { DropzoneLoader as Dropzone } from './components/dropzone';
export { ClipboardLoader as Clipboard } from './components/clipboard';
export { BrowserLoader as Browser } from './components/browser';
