import { AnalyticsEventPayload, PasteType } from '../../analytics';
import { EditorView } from 'prosemirror-view';
import { Slice } from 'prosemirror-model';
import { Command } from '../../../types';
declare type PasteContext = {
    type: PasteType;
    asPlain?: boolean;
};
export declare function createPasteAnalyticsPayload(view: EditorView, event: ClipboardEvent, slice: Slice, pasteContext: PasteContext): AnalyticsEventPayload;
export declare function sendPasteAnalyticsEvent(view: EditorView, event: ClipboardEvent, slice: Slice, pasteContext: PasteContext): void;
export declare function pasteCommandWithAnalytics(view: EditorView, event: ClipboardEvent, slice: Slice, pasteContext: PasteContext): import("../../analytics").HigherOrderCommand;
export declare const handlePasteAsPlainTextWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>) => Command;
export declare const handlePasteIntoTaskAndDecisionWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>, type: PasteType) => Command;
export declare const handleCodeBlockWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>, text: string) => Command;
export declare const handleMediaSingleWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>, type: PasteType) => Command;
export declare const handlePastePreservingMarksWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>, type: PasteType) => Command;
export declare const handleMarkdownWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>) => Command;
export declare const handleRichTextWithAnalytics: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>) => Command;
export {};
