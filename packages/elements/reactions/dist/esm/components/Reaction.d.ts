import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import * as React from 'react';
import { SyntheticEvent } from 'react';
import { ReactionSummary } from '../types/ReactionSummary';
export interface ReactionOnClick {
    (emojiId: string, event?: SyntheticEvent<any>): void;
}
export interface Props {
    reaction: ReactionSummary;
    emojiProvider: Promise<EmojiProvider>;
    onClick: ReactionOnClick;
    className?: string;
    onMouseOver?: (reaction: ReactionSummary, event?: SyntheticEvent<any>) => void;
    flash?: boolean;
}
export interface State {
    emojiName?: string;
}
export declare const Reaction: React.ForwardRefExoticComponent<Pick<Pick<Props & WithAnalyticsEventsProps, "className" | "reaction" | "emojiProvider" | "onClick" | "onMouseOver" | "flash">, "reaction" | "emojiProvider" | "onClick"> & Partial<Pick<Pick<Props & WithAnalyticsEventsProps, "className" | "reaction" | "emojiProvider" | "onClick" | "onMouseOver" | "flash">, "className" | "onMouseOver" | "flash">> & Partial<Pick<{
    flash: boolean;
    className: undefined;
    onMouseOver: undefined;
    flashOnMount: boolean;
}, "flashOnMount">> & React.RefAttributes<any>>;
