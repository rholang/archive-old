import { Extension, ExtensionHandler } from '../types/extension-handler';
export declare function getExtensionRenderer<T>(extensionHandler: Extension<T> | ExtensionHandler<T>): ExtensionHandler<T>;
