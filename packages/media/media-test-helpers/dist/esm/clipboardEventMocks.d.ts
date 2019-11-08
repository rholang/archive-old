export declare class MockFile implements File {
    readonly size: number;
    readonly type: string;
    readonly lastModified: number;
    readonly lastModifiedDate: any;
    readonly name: string;
    readonly webkitRelativePath: string;
    msClose(): void;
    msDetachStream(): any;
    slice(): Blob;
    constructor(options?: {
        type: string;
        name: string;
    });
}
export declare class MockFileList extends Array<File> {
    item(index: number): File;
    static fromArray(files: File[]): MockFileList;
}
export declare class MockDataTransfer implements DataTransfer {
    readonly files: FileList;
    readonly types: string[];
    readonly items: DataTransferItemList;
    readonly dropEffect: string;
    readonly effectAllowed: string;
    constructor(files: FileList, types?: string[], items?: DataTransferItemList, dropEffect?: string, effectAllowed?: string);
    clearData(): boolean;
    getData(): string;
    setData(): boolean;
    setDragImage(): void;
}
export declare const getMockClipboardEvent: () => {
    new (event: string, files?: File[], types?: string[]): {
        clipboardData: DataTransfer;
        readonly bubbles: boolean;
        cancelBubble: boolean;
        readonly cancelable: boolean;
        readonly composed: boolean;
        readonly currentTarget: EventTarget | null;
        readonly defaultPrevented: boolean;
        readonly eventPhase: number;
        readonly isTrusted: boolean;
        returnValue: boolean;
        readonly srcElement: EventTarget | null;
        readonly target: EventTarget | null;
        readonly timeStamp: number;
        readonly type: string;
        composedPath(): EventTarget[];
        initEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined): void;
        preventDefault(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        readonly AT_TARGET: number;
        readonly BUBBLING_PHASE: number;
        readonly CAPTURING_PHASE: number;
        readonly NONE: number;
    };
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};
export declare const MockDragEvent: () => {
    new (event: string, files?: File[]): {
        dataTransfer: DataTransfer;
        initDragEvent(): void;
        msConvertURL(): void;
        readonly altKey: boolean;
        readonly button: number;
        readonly buttons: number;
        readonly clientX: number;
        readonly clientY: number;
        readonly ctrlKey: boolean;
        readonly metaKey: boolean;
        readonly movementX: number;
        readonly movementY: number;
        readonly offsetX: number;
        readonly offsetY: number;
        readonly pageX: number;
        readonly pageY: number;
        readonly relatedTarget: EventTarget | null;
        readonly screenX: number;
        readonly screenY: number;
        readonly shiftKey: boolean;
        readonly x: number;
        readonly y: number;
        getModifierState(keyArg: string): boolean;
        initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
        readonly detail: number;
        readonly view: Window | null;
        readonly which: number;
        readonly bubbles: boolean;
        cancelBubble: boolean;
        readonly cancelable: boolean;
        readonly composed: boolean;
        readonly currentTarget: EventTarget | null;
        readonly defaultPrevented: boolean;
        readonly eventPhase: number;
        readonly isTrusted: boolean;
        returnValue: boolean;
        readonly srcElement: EventTarget | null;
        readonly target: EventTarget | null;
        readonly timeStamp: number;
        readonly type: string;
        composedPath(): EventTarget[];
        initEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined): void;
        preventDefault(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        readonly AT_TARGET: number;
        readonly BUBBLING_PHASE: number;
        readonly CAPTURING_PHASE: number;
        readonly NONE: number;
    };
};
