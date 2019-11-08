import * as React from 'react';
import { EditorPresetProps } from './types';
import { MentionProvider } from '@atlaskit/mention/resource';
import { MediaProvider, CustomMediaPicker } from '../../../plugins/media';
import { EmojiProvider } from '@atlaskit/emoji';
interface EditorPresetMobileProps {
    children?: React.ReactNode;
    placeholder?: string;
    mentionProvider?: Promise<MentionProvider>;
    emojiProvider?: Promise<EmojiProvider>;
    media?: {
        provider?: Promise<MediaProvider>;
        picker?: CustomMediaPicker;
    };
}
export declare function EditorPresetMobile({ children, mentionProvider, emojiProvider, media, placeholder, excludes, experimental, }: EditorPresetMobileProps & EditorPresetProps): JSX.Element;
export {};
