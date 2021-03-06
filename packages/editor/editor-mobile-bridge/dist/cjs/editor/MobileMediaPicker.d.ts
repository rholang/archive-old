import { CustomMediaPicker } from '@atlaskit/editor-core';
export default class MobileMediaPicker implements CustomMediaPicker {
    private listeners;
    on(event: string, cb: any): void;
    removeAllListeners(event: any): void;
    emit(event: string, data: any): void;
    destroy(): void;
    setUploadParams(_uploadParams: any): void;
}
