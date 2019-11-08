import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import * as React from 'react';
import { OnEmoji, OnReaction } from '../types';
import { ReactionStatus } from '../types/ReactionStatus';
import { ReactionSummary } from '../types/ReactionSummary';
export interface Props {
    reactions: ReactionSummary[];
    status: ReactionStatus;
    loadReaction: () => void;
    onSelection: OnEmoji;
    onReactionClick: OnEmoji;
    onReactionHover?: OnReaction;
    allowAllEmojis?: boolean;
    flash?: {
        [emojiId: string]: boolean;
    };
    boundariesElement?: string;
    errorMessage?: string;
    emojiProvider: Promise<EmojiProvider>;
}
export declare const Reactions: React.ForwardRefExoticComponent<Pick<Pick<Props & WithAnalyticsEventsProps, "reactions" | "emojiProvider" | "flash" | "onSelection" | "boundariesElement" | "allowAllEmojis" | "status" | "loadReaction" | "onReactionClick" | "onReactionHover" | "errorMessage">, "emojiProvider" | "onSelection" | "boundariesElement" | "allowAllEmojis" | "status" | "loadReaction" | "onReactionClick" | "onReactionHover" | "errorMessage"> & Partial<Pick<Pick<Props & WithAnalyticsEventsProps, "reactions" | "emojiProvider" | "flash" | "onSelection" | "boundariesElement" | "allowAllEmojis" | "status" | "loadReaction" | "onReactionClick" | "onReactionHover" | "errorMessage">, "reactions" | "flash">> & Partial<Pick<{
    flash: {};
    reactions: never[];
}, never>> & React.RefAttributes<any>>;
