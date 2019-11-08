import { MessageDescriptor } from '../../types';
export declare const messages: {
    normal: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading1: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading1Description: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading2: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading2Description: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading3: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading3Description: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading4: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading4Description: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading5: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading5Description: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading6: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    heading6Description: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    blockquote: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    blockquoteDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    codeblock: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    codeblockDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    infoPanel: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    infoPanelDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    notePanel: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    notePanelDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    successPanel: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    successPanelDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    warningPanel: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    warningPanelDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    errorPanel: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    errorPanelDescription: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    other: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
export declare const NORMAL_TEXT: BlockType;
export declare const HEADING_1: BlockType;
export declare const HEADING_2: BlockType;
export declare const HEADING_3: BlockType;
export declare const HEADING_4: BlockType;
export declare const HEADING_5: BlockType;
export declare const HEADING_6: BlockType;
export declare const BLOCK_QUOTE: BlockType;
export declare const CODE_BLOCK: BlockType;
export declare const PANEL: BlockType;
export declare const OTHER: BlockType;
export declare const TEXT_BLOCK_TYPES: BlockType[];
export declare const WRAPPER_BLOCK_TYPES: BlockType[];
export declare const ALL_BLOCK_TYPES: BlockType[];
export declare const HEADINGS_BY_LEVEL: Record<number, BlockType>;
export declare const HEADINGS_BY_NAME: {
    [blockType: string]: BlockType;
};
export declare type BlockTypeName = 'normal' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'blockquote' | 'codeblock' | 'panel' | 'notePanel' | 'successPanel' | 'warningPanel' | 'errorPanel' | 'other';
export interface BlockType {
    name: string;
    title: MessageDescriptor;
    nodeName: string;
    tagName?: string;
    level?: HeadingLevelsAndNormalText;
}
export declare type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export declare type NormalTextLevel = 0;
export declare type HeadingLevelsAndNormalText = HeadingLevels | NormalTextLevel;
