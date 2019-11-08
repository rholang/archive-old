import { CardAppearance } from '../../view/Card';
export interface CardProvider {
    resolve(url: string, appearance: CardAppearance): Promise<any>;
}
export declare type ORSCheckResponse = {
    isSupported: boolean;
};
