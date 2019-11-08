import { ConfluenceModelContext } from '../api/types';
export interface ModelParam {
    '@type': string;
    [value: string]: string | number;
}
export declare const buildJiraModelParams: (queryVersion: number, currentContainerId?: string | undefined) => ModelParam[];
export declare const buildConfluenceModelParams: (queryVersion: number, modelContext: ConfluenceModelContext) => ModelParam[];
