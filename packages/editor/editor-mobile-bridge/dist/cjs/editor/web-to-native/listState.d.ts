import { ListsState } from '@atlaskit/editor-core';
export interface ListState {
    name: string;
    active: boolean;
    enabled: boolean;
}
export declare function valueOf(state: ListsState): ListState[];
