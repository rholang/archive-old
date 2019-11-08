import { CardAppearance } from '../../view/Card';
import { EnvironmentsKeys } from '../../client/types';
import { CardProvider } from './types';
export declare class EditorCardProvider implements CardProvider {
    private baseUrl;
    private resolverUrl;
    constructor(envKey?: EnvironmentsKeys);
    resolve(url: string, appearance: CardAppearance): Promise<any>;
}
export declare const editorCardProvider: EditorCardProvider;
export * from './types';
