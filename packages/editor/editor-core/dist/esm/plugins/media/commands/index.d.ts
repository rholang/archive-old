import { Command } from '../../../types';
export declare const updateAllMediaNodesAttrs: (id: string, attrs: object, isMediaSingle: boolean) => Command;
export declare const updateMediaNodeAttrs: (id: string, attrs: object, isMediaSingle: boolean) => Command;
export declare const replaceExternalMedia: (pos: number, attrs: object) => Command;
