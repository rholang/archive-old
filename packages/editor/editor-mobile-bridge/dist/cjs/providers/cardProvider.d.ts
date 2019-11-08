import { EditorCardProvider, CardAppearance, Client } from '@atlaskit/smart-card';
export declare class EditorMobileCardProvider extends EditorCardProvider {
    resolve(url: string, appearance: CardAppearance): Promise<any>;
}
export declare class MobileSmartCardClient extends Client {
    fetchData(url: string): Promise<any>;
}
export declare const cardProvider: EditorMobileCardProvider;
export declare const cardClient: MobileSmartCardClient;
