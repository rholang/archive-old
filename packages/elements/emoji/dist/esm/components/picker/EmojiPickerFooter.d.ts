import { PureComponent } from 'react';
import { EmojiDescription, EmojiDescriptionWithVariations, Message, OnToneSelected, OnToneSelectorCancelled, ToneSelection } from '../../types';
import { OnDeleteEmoji } from '../common/EmojiDeletePreview';
import { OnUploadEmoji } from '../common/EmojiUploadPicker';
export interface Props {
    selectedEmoji?: EmojiDescription;
    selectedTone?: ToneSelection;
    onToneSelected?: OnToneSelected;
    onToneSelectorCancelled?: OnToneSelectorCancelled;
    toneEmoji?: EmojiDescriptionWithVariations;
    uploading: boolean;
    uploadEnabled: boolean;
    emojiToDelete?: EmojiDescription;
    initialUploadName?: string;
    uploadErrorMessage?: Message;
    onUploadCancelled: () => void;
    onUploadEmoji: OnUploadEmoji;
    onCloseDelete: () => void;
    onDeleteEmoji: OnDeleteEmoji;
    onFileChooserClicked?: () => void;
    onOpenUpload: () => void;
}
export default class EmojiPickerFooter extends PureComponent<Props, {}> {
    render(): JSX.Element;
}
