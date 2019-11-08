import { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Avatar } from '../avatar-list';
import { CropProperties } from '../image-navigator';
import { LoadParameters } from '../image-navigator/index';
import { AvatarPickerDialogProps, AvatarPickerDialogState } from './types';
export declare const MAX_SIZE_MB = 10;
export declare const ERROR: {
    URL: FormattedMessage.MessageDescriptor;
    FORMAT: FormattedMessage.MessageDescriptor;
    SIZE: FormattedMessage.MessageDescriptor;
};
export declare const ACCEPT: string[];
export declare const fixedCrop: CropProperties;
export declare class AvatarPickerDialog extends PureComponent<AvatarPickerDialogProps, AvatarPickerDialogState> {
    static defaultProps: {
        avatars: never[];
    };
    state: AvatarPickerDialogState;
    setSelectedImageState: (selectedImage: File) => Promise<void>;
    setSelectedAvatarState: (avatar: Avatar) => void;
    onImageNavigatorLoad: (loadParams: LoadParameters) => void;
    /**
     * Initialised with no-op function.  Is assigned cropped image exporting
     * function when internal ImageCropper mounts via this.onImageNavigatorLoad
     */
    exportCroppedImage: () => string;
    onSaveClick: () => void;
    onShowMore: () => void;
    onGoBack: () => void;
    onRemoveImage: () => void;
    clearErrorState: () => void;
    setErrorState: (errorMessage: string) => void;
    onImageUploaded: () => void;
    onImageError: (errorMessage: string) => void;
    static contextTypes: {
        intl: ReactIntl.IntlShape;
    };
    render(): JSX.Element;
    headerContent: () => JSX.Element;
    footerContent: () => JSX.Element;
    readonly isDisabled: boolean;
    getPredefinedAvatars(): Avatar[];
    renderPredefinedAvatarList(): JSX.Element | null;
    renderBody(): JSX.Element;
}
