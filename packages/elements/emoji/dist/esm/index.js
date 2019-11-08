import { AbstractResource } from '@atlaskit/util-service-support';
import Emoji from './components/common/Emoji';
import EmojiPlaceholder from './components/common/EmojiPlaceholder';
import ResourcedEmoji from './components/common/ResourcedEmoji';
import EmojiPicker from './components/picker/EmojiPicker';
import EmojiUploader from './components/uploader/EmojiUploader';
import EmojiTypeAhead from './components/typeahead/EmojiTypeAhead';
import EmojiTypeAheadItem from './components/typeahead/EmojiTypeAheadItem';
import EmojiResource from './api/EmojiResource';
import EmojiRepository from './api/EmojiRepository';
import EmojiLoader from './api/EmojiLoader';
import { denormaliseEmojiServiceResponse } from './api/EmojiUtils';
import { toEmojiId, toOptionalEmojiId } from './util/type-helpers';
import { customCategory, defaultEmojiHeight, emojiPickerWidth, emojiPickerHeight, } from './util/constants';
import { UsageFrequencyTracker } from './api/internal/UsageFrequencyTracker';
export { 
// Classes
AbstractResource, Emoji, EmojiPlaceholder, EmojiLoader, EmojiPicker, EmojiUploader, EmojiResource, EmojiRepository, EmojiTypeAhead, ResourcedEmoji, 
// functions
denormaliseEmojiServiceResponse, toEmojiId, toOptionalEmojiId, 
// Constants
emojiPickerWidth, emojiPickerHeight, defaultEmojiHeight, customCategory, UsageFrequencyTracker, EmojiTypeAheadItem, };
export * from './types';
export default EmojiPicker;
//# sourceMappingURL=index.js.map