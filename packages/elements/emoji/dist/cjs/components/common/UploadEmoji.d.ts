import { FormattedMessage } from 'react-intl';
import { EmojiProvider } from '../../api/EmojiResource';
import { EmojiDescription, EmojiUpload } from '../../types';
export declare const uploadEmoji: (upload: EmojiUpload, emojiProvider: EmojiProvider, errorSetter: (message: FormattedMessage.MessageDescriptor | undefined) => void, onSuccess: (emojiDescription: EmojiDescription) => void, fireAnalytics: (event: Record<string, any>) => void) => void;
