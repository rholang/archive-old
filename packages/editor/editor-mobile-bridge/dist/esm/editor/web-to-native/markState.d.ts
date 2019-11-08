import { TextFormattingState } from '@atlaskit/editor-core';
export interface MarkState {
    name: string;
    active: boolean;
    enabled: boolean;
}
export declare function valueOf(state: TextFormattingState): MarkState[];
