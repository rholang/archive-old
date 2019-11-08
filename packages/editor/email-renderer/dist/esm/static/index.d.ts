import * as icons from './icons';
import { SerializeFragmentWithAttachmentsResult } from '../serializer';
export * from './icons';
export declare const createContentId: (imageName: icons.IconString, isCidPrefixed?: boolean) => string;
export declare const processImages: (html: string, isMockEnabled?: boolean) => SerializeFragmentWithAttachmentsResult;
