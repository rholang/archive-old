/**
 * Confluence glyphs ac:name of <ac:emoticon /> map to new emojis
 * {
 *   [ac:name] : ['emoji-id', 'emoji-shortName', 'emoji-fallback']
 *   ...
 * }
 * Glyphs that do not map to Fabric Emoji
 * will be mapped to Emoji Id '2b50' (:star:) with preserving ac:name as shortName attribute;
 */
declare const acNameToEmojiMap: {
    smile: string[];
    sad: string[];
    cheeky: string[];
    laugh: string[];
    wink: string[];
    information: string[];
    tick: string[];
    cross: string[];
    warning: string[];
    plus: string[];
    minus: string[];
    question: string[];
    'thumbs-up': string[];
    'thumbs-down': string[];
    'light-on': string[];
    'yellow-star': string[];
    'light-off': string[];
    'red-star': string[];
    'green-star': string[];
    'blue-star': string[];
    heart: string[];
    'broken-heart': string[];
};
export declare type NameToEmoji = keyof typeof acNameToEmojiMap;
export declare function acNameToEmoji(acName: NameToEmoji): {
    id: string;
    shortName: string;
    text: string;
};
export declare function emojiIdToAcName(emojiId: string): never;
export declare function acShortcutToEmoji(hipchatEmoticonShortName: string): {
    id: string;
    shortName: string;
    text: string;
};
export declare function getEmojiAcName({ id, shortName, }: {
    id: string;
    shortName: string;
}): string;
export {};
