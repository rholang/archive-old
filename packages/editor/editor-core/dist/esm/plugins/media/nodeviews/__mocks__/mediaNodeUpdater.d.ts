export declare class MediaNodeUpdater {
    static instances: MediaNodeUpdater[];
    static mockOverrides: {};
    static mockReset(): void;
    constructor();
    static setMock(thisKey: string, value: any): void;
    updateContextId(): Promise<void>;
    getAttrs(): void;
    getObjectId(): Promise<void>;
    getCurrentContextId(): void;
    updateDimensions(): void;
    getRemoteDimensions(): Promise<void>;
    isNodeFromDifferentCollection(): Promise<void>;
    copyNode(): Promise<void>;
    updateFileAttrs(): Promise<void>;
    uploadExternalMedia(): Promise<void>;
    isMediaBlobUrl(): void;
    copyNodeFromBlobUrl(): void;
}
