import { ReactElement } from 'react';
import { Node, Schema } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import EditorActions from '../actions/index';
import { Transformer, ContextIdentifierProvider, ExtensionHandlers, ErrorReportingHandler } from '@atlaskit/editor-common';
import { ActivityProvider } from '@atlaskit/activity';
import { MentionProvider } from '@atlaskit/mention/resource';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import { TaskDecisionProvider } from '@atlaskit/task-decision';
import { PluginConfig as TablesPluginConfig } from '../plugins/table/types';
import { TextColorPluginConfig } from '../plugins/text-color/pm-plugins/main';
import { MediaProvider, MediaState } from '../plugins/media/types';
import { AnalyticsHandler } from '../analytics/handler';
import { ImageUploadHandler } from '../plugins/image-upload/types';
import { TextFormattingOptions } from '../plugins/text-formatting';
import { CollabEditProvider } from '../plugins/collab-edit/provider';
import { MacroProvider } from '../plugins/macro/types';
import { MediaOptions } from '../plugins/media';
import { PlaceholderTextOptions } from '../plugins/placeholder-text';
import { CollabEditOptions } from '../plugins/collab-edit/types';
import { CodeBlockOptions } from '../plugins/code-block';
import { CardProvider, CardOptions } from '../plugins/card/types';
import { QuickInsertOptions } from '../plugins/quick-insert/types';
import { AutoformattingProvider } from '../plugins/custom-autoformat/types';
import { AnnotationProvider } from '../plugins/annotation/types';
export declare type EditorAppearance = 'comment' | 'full-page' | 'full-width' | 'chromeless' | 'mobile';
export declare type ReactComponents = ReactElement<any> | ReactElement<any>[];
export declare type InsertMenuCustomItem = {
    content: string;
    value: {
        name: string | null;
    };
    tooltipDescription?: string;
    tooltipPosition?: string;
    elemBefore?: ReactComponents | string;
    elemAfter?: ReactComponents | string;
    isDisabled?: boolean;
    className?: string;
    onClick?: (editorActions: EditorActions) => void;
};
export declare type FeedbackInfo = {
    product?: string;
    packageVersion?: string;
    packageName?: string;
    labels?: Array<string>;
};
export declare type AllowedBlockTypes = 'heading' | 'blockquote' | 'hardBreak' | 'codeBlock';
export interface ExtensionConfig {
    stickToolbarToBottom?: boolean;
    allowBreakout?: boolean;
}
export interface EditorProps {
    appearance?: EditorAppearance;
    analyticsHandler?: AnalyticsHandler;
    contentComponents?: ReactComponents;
    primaryToolbarComponents?: ReactComponents;
    secondaryToolbarComponents?: ReactComponents;
    addonToolbarComponents?: ReactComponents;
    allowAnalyticsGASV3?: boolean;
    allowBlockType?: {
        exclude?: Array<AllowedBlockTypes>;
    };
    allowTasksAndDecisions?: boolean;
    allowBreakout?: boolean;
    allowRule?: boolean;
    allowCodeBlocks?: boolean | CodeBlockOptions;
    allowLists?: boolean;
    allowTextColor?: boolean | TextColorPluginConfig;
    allowTables?: boolean | TablesPluginConfig;
    allowHelpDialog?: boolean;
    feedbackInfo?: FeedbackInfo;
    allowJiraIssue?: boolean;
    allowUnsupportedContent?: boolean;
    allowPanel?: boolean;
    allowExtension?: boolean | ExtensionConfig;
    allowConfluenceInlineComment?: boolean;
    allowPlaceholderCursor?: boolean;
    allowTemplatePlaceholders?: boolean | PlaceholderTextOptions;
    allowDate?: boolean;
    allowLayouts?: boolean | {
        allowBreakout: boolean;
        UNSAFE_addSidebarLayouts?: boolean;
    };
    allowStatus?: boolean | {
        menuDisabled: boolean;
    };
    allowDynamicTextSizing?: boolean;
    allowTextAlignment?: boolean;
    allowIndentation?: boolean;
    /**
     * This enables new insertion behaviour only for horizontal rule and media single in certain conditions.
     * The idea of this new behaviour is to have a consistent outcome regardless of the insertion method.
     **/
    allowNewInsertionBehaviour?: boolean;
    quickInsert?: QuickInsertOptions;
    UNSAFE_cards?: CardOptions;
    saveOnEnter?: boolean;
    shouldFocus?: boolean;
    disabled?: boolean;
    errorReporterHandler?: ErrorReportingHandler;
    uploadErrorHandler?: (state: MediaState) => void;
    activityProvider?: Promise<ActivityProvider>;
    annotationProvider?: AnnotationProvider;
    collabEditProvider?: Promise<CollabEditProvider>;
    presenceProvider?: Promise<any>;
    emojiProvider?: Promise<EmojiProvider>;
    taskDecisionProvider?: Promise<TaskDecisionProvider>;
    allowNestedTasks?: boolean;
    contextIdentifierProvider?: Promise<ContextIdentifierProvider>;
    legacyImageUploadProvider?: Promise<ImageUploadHandler>;
    mentionProvider?: Promise<MentionProvider>;
    mediaProvider?: Promise<MediaProvider>;
    autoformattingProvider?: Promise<AutoformattingProvider>;
    macroProvider?: Promise<MacroProvider>;
    cardProvider?: Promise<CardProvider>;
    waitForMediaUpload?: boolean;
    contentTransformerProvider?: (schema: Schema) => Transformer<string>;
    media?: MediaOptions;
    collabEdit?: CollabEditOptions;
    textFormatting?: TextFormattingOptions;
    maxHeight?: number;
    maxContentSize?: number;
    placeholder?: string;
    defaultValue?: Node | string | Object;
    popupsMountPoint?: HTMLElement;
    popupsBoundariesElement?: HTMLElement;
    popupsScrollableElement?: HTMLElement;
    insertMenuItems?: InsertMenuCustomItem[];
    editorActions?: EditorActions;
    onChange?: (editorView: EditorView) => void;
    onSave?: (editorView: EditorView) => void;
    onCancel?: (editorView: EditorView) => void;
    extensionHandlers?: ExtensionHandlers;
    sanitizePrivateContent?: boolean;
    mentionInsertDisplayName?: boolean;
}
