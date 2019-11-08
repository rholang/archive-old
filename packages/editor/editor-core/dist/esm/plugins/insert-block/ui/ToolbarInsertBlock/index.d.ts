import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { EditorView } from 'prosemirror-view';
import { Node as PMNode } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import EditorActions from '../../../../actions';
import { InsertMenuCustomItem, CommandDispatch } from '../../../../types';
import { BlockType } from '../../../block-type/types';
import { MacroProvider } from '../../../macro/types';
import { Command } from '../../../../types';
import { INPUT_METHOD, DispatchAnalyticsEvent } from '../../../analytics';
export declare const messages: {
    action: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    actionDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    link: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    linkDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    filesAndImages: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    filesAndImagesDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    image: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    mention: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    mentionDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    emoji: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    emojiDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    table: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    tableDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    decision: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    decisionDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    feedbackDialog: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    feedbackDialogDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    horizontalRule: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    horizontalRuleDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    date: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    dateDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    placeholderText: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    columns: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    columnsDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    status: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    statusDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    viewMore: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    insertMenu: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
export interface Props {
    buttons: number;
    isReducedSpacing: boolean;
    isDisabled?: boolean;
    isTypeAheadAllowed?: boolean;
    editorView: EditorView;
    editorActions?: EditorActions;
    tableSupported?: boolean;
    mentionsEnabled?: boolean;
    actionSupported?: boolean;
    decisionSupported?: boolean;
    mentionsSupported?: boolean;
    insertMentionQuery?: () => void;
    mediaUploadsEnabled?: boolean;
    mediaSupported?: boolean;
    imageUploadSupported?: boolean;
    imageUploadEnabled?: boolean;
    handleImageUpload?: (event?: Event) => Command;
    dateEnabled?: boolean;
    horizontalRuleEnabled?: boolean;
    placeholderTextEnabled?: boolean;
    layoutSectionEnabled?: boolean;
    emojiProvider?: Promise<EmojiProvider>;
    availableWrapperBlockTypes?: BlockType[];
    linkSupported?: boolean;
    linkDisabled?: boolean;
    emojiDisabled?: boolean;
    nativeStatusSupported?: boolean;
    popupsMountPoint?: HTMLElement;
    popupsBoundariesElement?: HTMLElement;
    popupsScrollableElement?: HTMLElement;
    macroProvider?: MacroProvider | null;
    insertMenuItems?: InsertMenuCustomItem[];
    onShowMediaPicker?: () => void;
    onInsertBlockType?: (name: string) => Command;
    onInsertMacroFromMacroBrowser?: (macroProvider: MacroProvider, node?: PMNode, isEditing?: boolean) => (state: EditorState, dispatch: CommandDispatch) => void;
    dispatchAnalyticsEvent?: DispatchAnalyticsEvent;
}
export interface State {
    isOpen: boolean;
    emojiPickerOpen: boolean;
}
export declare type TOOLBAR_MENU_TYPE = INPUT_METHOD.TOOLBAR | INPUT_METHOD.INSERT_MENU;
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
