import { Color as StatusColor } from '@atlaskit/status/element';
import { EditorBridges, EditorPluginBridges } from './index';
import NativeBridge from './bridge';
export default class DummyBridge implements NativeBridge {
    log: (...args: any[]) => void;
    showMentions(query: string): void;
    dismissMentions(): void;
    updateTextFormat(markStates: string): void;
    updateText(content: string): void;
    submitPromise(name: string, uuid: string, args: string): void;
    updateBlockState(currentBlockType: string): void;
    updateListState(listState: string): void;
    showStatusPicker(text: string, color: StatusColor, uuid: string, isNew: boolean): void;
    dismissStatusPicker(isNew: boolean): void;
    currentSelection(text: string, url: string, top: number, right: number, bottom: number, left: number): void;
    stateChanged(canUndo: boolean, canRedo: boolean): void;
    trackEvent(event: string): void;
    call<T extends EditorPluginBridges>(bridge: T, event: keyof Exclude<EditorBridges[T], undefined>, ...args: any[]): void;
    updateTextColor(): void;
}
