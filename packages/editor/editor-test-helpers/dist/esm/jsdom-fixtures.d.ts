/**
 * Provides a mock HTMLImageElement that supports urls of the form
 * http://some.domain/path/to/mock/image/128x256.png
 *
 * Only `load` and `error` events are currently supported.
 */
export declare class Image {
    private _src;
    private dimensions;
    private eventListeners;
    private onEvents;
    constructor(width?: number, height?: number);
    onload: (...args: any) => void;
    onerror: (...args: any) => void;
    private fireEvent;
    addEventListener<K extends keyof HTMLElementEventMap>(eventName: K, cb: ((...args: any) => void)): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(eventName: K, cb: ((...args: any) => void)): void;
    src: string;
    readonly width: number | null;
    readonly naturalWidth: number | null;
    readonly height: number | null;
    readonly naturalHeight: number | null;
}
export declare class NullSelectionReader {
    private warnOnce;
    constructor(warnOnce: () => void);
    destroy(): void;
    poll(): void;
    editableChanged(): void;
    domChanged(): boolean;
    storeDOMState(_selection: any): void;
    clearDOMState(): void;
    readFromDOM(_origin: any): boolean;
}
declare const _default: (editorView: any) => void;
export default _default;
