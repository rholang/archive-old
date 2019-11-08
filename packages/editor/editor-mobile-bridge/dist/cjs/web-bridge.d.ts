declare type Padding = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export declare const defaultPadding: number[];
export default abstract class WebBridge {
    constructor();
    private padding;
    abstract getRootElement(): HTMLElement | null;
    setPadding(top?: number, right?: number, bottom?: number, left?: number): void;
    getPadding(): Padding;
    reload(): void;
}
export {};
