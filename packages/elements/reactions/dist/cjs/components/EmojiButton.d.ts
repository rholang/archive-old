import { EmojiId, OnEmojiEvent } from '@atlaskit/emoji/types';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import { PureComponent } from 'react';
export interface Props {
    emojiId: EmojiId;
    emojiProvider: Promise<EmojiProvider>;
    onClick: OnEmojiEvent;
}
export declare class EmojiButton extends PureComponent<Props, {}> {
    private handleMouseDown;
    render(): JSX.Element;
}
