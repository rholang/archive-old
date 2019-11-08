import { TokenParser } from './';
export declare const emoji: TokenParser;
interface AdfEmojiItems {
    [key: string]: {
        id: string;
        shortName: string;
        text: string;
    };
}
export declare const adfEmojiItems: AdfEmojiItems;
export interface WikiToEmojiMapping {
    [key: string]: string;
}
export declare const wikiToAdfEmojiMapping: WikiToEmojiMapping;
export {};
