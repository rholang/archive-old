import { Component } from './component';
import { Signal } from '../signal';
export interface UndoerRedoer extends Component {
    undoEnabled(): void;
    undoDisabled(): void;
    redoEnabled(): void;
    redoDisabled(): void;
    readonly undo: Signal<{}>;
    readonly redo: Signal<{}>;
}
export declare class DefaultUndoerRedoer implements UndoerRedoer {
    readonly undo: Signal<{}>;
    readonly redo: Signal<{}>;
    private readonly keyDownListener;
    private isUndoEnabled;
    private isRedoEnabled;
    constructor();
    unload(): void;
    undoEnabled(): void;
    undoDisabled(): void;
    redoEnabled(): void;
    redoDisabled(): void;
    private keyDown;
}
