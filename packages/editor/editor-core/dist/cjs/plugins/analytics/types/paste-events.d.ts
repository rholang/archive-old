import { TrackAEP } from './events';
import { ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, INPUT_METHOD } from './enums';
export declare const PasteTypes: {
    [type: string]: PasteType;
};
export declare type PasteType = 'richText' | 'plain' | 'markdown' | 'binary';
export declare const PasteSources: {
    [type: string]: PasteSource;
};
export declare type PasteSource = 'fabric-editor' | 'apple-pages' | 'google-spreadsheets' | 'google-docs' | 'microsoft-excel' | 'microsoft-word' | 'dropbox-paper' | 'uncategorized';
export declare const PasteContents: {
    [P in PasteContent]: P;
};
export declare type PasteContent = 'text' | 'url' | 'code' | 'mediaSingle' | 'blockquote' | 'blockCard' | 'bodiedExtension' | 'bulletList' | 'codeBlock' | 'decisionList' | 'decisionItem' | 'extension' | 'heading' | 'mediaCard' | 'tableCells' | 'table' | 'orderedList' | 'panel' | 'rule' | 'tableHeader' | 'tableRow' | 'taskItem' | 'uncategorized' | 'mixed';
export declare type PASTE_ACTION_SUBJECT_ID = ACTION_SUBJECT_ID.PASTE_BLOCKQUOTE | ACTION_SUBJECT_ID.PASTE_BLOCK_CARD | ACTION_SUBJECT_ID.PASTE_BODIED_EXTENSION | ACTION_SUBJECT_ID.PASTE_BULLET_LIST | ACTION_SUBJECT_ID.PASTE_CODE_BLOCK | ACTION_SUBJECT_ID.PASTE_DECISION_LIST | ACTION_SUBJECT_ID.PASTE_EXTENSION | ACTION_SUBJECT_ID.PASTE_HEADING | ACTION_SUBJECT_ID.PASTE_MEDIA_GROUP | ACTION_SUBJECT_ID.PASTE_MEDIA_SINGLE | ACTION_SUBJECT_ID.PASTE_ORDERED_LIST | ACTION_SUBJECT_ID.PASTE_PANEL | ACTION_SUBJECT_ID.PASTE_PARAGRAPH | ACTION_SUBJECT_ID.PASTE_RULE | ACTION_SUBJECT_ID.PASTE_TABLE | ACTION_SUBJECT_ID.PASTE_TABLE_CELL | ACTION_SUBJECT_ID.PASTE_TABLE_HEADER | ACTION_SUBJECT_ID.PASTE_TABLE_ROW | ACTION_SUBJECT_ID.PASTE_TASK_LIST;
declare type PasteBaseAEP<Action, Attributes> = TrackAEP<Action, ACTION_SUBJECT.DOCUMENT, PASTE_ACTION_SUBJECT_ID, Attributes, undefined>;
declare type PasteAEP = PasteBaseAEP<ACTION.PASTED, {
    inputMethod: INPUT_METHOD.KEYBOARD;
    type: PasteType;
    content: PasteContent;
    source?: PasteSource;
    pasteSize: number;
}>;
declare type PasteAsPlainAEP = PasteBaseAEP<ACTION.PASTED_AS_PLAIN, {
    inputMethod: string;
    pasteSize: number;
}>;
export declare type PasteEventPayload = PasteAEP | PasteAsPlainAEP;
export {};
