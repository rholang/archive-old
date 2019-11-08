import { EmojiDescription } from '../types';
export declare const createAndFireEventInElementsChannel: (payload: Record<string, any>) => (createAnalyticsEvent: import("@atlaskit/analytics-next").CreateUIAnalyticsEvent) => import("@atlaskit/analytics-next").UIAnalyticsEvent;
interface Duration {
    duration: number;
}
export declare const openedPickerEvent: () => Record<string, any>;
export declare const closedPickerEvent: (attributes: Duration) => Record<string, any>;
interface EmojiAttributes {
    emojiId: string;
    baseEmojiId?: string;
    skinToneModifier?: string;
    category: string;
    type: string;
}
export declare const pickerClickedEvent: (attributes: {
    queryLength: number;
} & EmojiAttributes & Duration) => Record<string, any>;
export declare const categoryClickedEvent: (attributes: {
    category: string;
}) => Record<string, any>;
export declare const pickerSearchedEvent: (attributes: {
    queryLength: number;
    numMatches: number;
}) => Record<string, any>;
export declare const toneSelectedEvent: (attributes: {
    skinToneModifier: string;
}) => Record<string, any>;
export declare const toneSelectorOpenedEvent: (attributes: {
    skinToneModifier?: string | undefined;
}) => Record<string, any>;
export declare const toneSelectorClosedEvent: () => Record<string, any>;
export declare const uploadBeginButton: () => Record<string, any>;
export declare const uploadConfirmButton: (attributes: {
    retry: boolean;
}) => Record<string, any>;
export declare const uploadCancelButton: () => Record<string, any>;
export declare const uploadSucceededEvent: (attributes: Duration) => Record<string, any>;
export declare const uploadFailedEvent: (attributes: {
    reason: string;
} & Duration) => Record<string, any>;
interface EmojiId {
    emojiId?: string;
}
export declare const deleteBeginEvent: (attributes: EmojiId) => Record<string, any>;
export declare const deleteConfirmEvent: (attributes: EmojiId) => Record<string, any>;
export declare const deleteCancelEvent: (attributes: EmojiId) => Record<string, any>;
export declare const selectedFileEvent: () => Record<string, any>;
export declare const typeaheadCancelledEvent: (duration: number, query?: string | undefined, emojiList?: EmojiDescription[] | undefined) => Record<string, any>;
export declare const typeaheadSelectedEvent: (pressed: boolean, duration: number, emoji: EmojiDescription, emojiList?: EmojiDescription[] | undefined, query?: string | undefined, exactMatch?: boolean | undefined) => Record<string, any>;
export declare const typeaheadRenderedEvent: (duration: number, query?: string | undefined, emojiList?: EmojiDescription[] | undefined) => Record<string, any>;
export {};
