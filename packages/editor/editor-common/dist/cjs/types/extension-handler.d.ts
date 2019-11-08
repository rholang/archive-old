import { ADNode } from '../';
export interface ExtensionParams<T> {
    extensionKey: string;
    extensionType: string;
    type?: 'extension' | 'inlineExtension' | 'bodiedExtension';
    parameters?: T;
    content?: Object | string;
}
export declare type ExtensionHandler<T> = (ext: ExtensionParams<T>, doc: Object) => JSX.Element | ADNode[] | null;
export declare type UpdateExtension<T> = (extensionParameters: T) => Promise<T | undefined>;
export interface Extension<T> {
    render: ExtensionHandler<T>;
    update?: UpdateExtension<T>;
}
export interface ExtensionHandlers {
    [key: string]: Extension<any> | ExtensionHandler<any>;
}
