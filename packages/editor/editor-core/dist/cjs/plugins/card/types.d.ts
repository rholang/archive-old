import { INPUT_METHOD } from '../analytics';
export declare type CardAppearance = 'inline' | 'block';
export interface CardProvider {
    resolve(url: string, appearance: CardAppearance): Promise<any>;
}
export declare type CardInfo = {
    title?: string;
    url?: string;
    pos: number;
};
export interface CardOptions {
    provider?: Promise<CardProvider>;
    resolveBeforeMacros?: string[];
}
export declare type Request = {
    pos: number;
    url: string;
    appearance: CardAppearance;
    compareLinkText: boolean;
    source: CardReplacementInputMethod;
};
export declare type CardPluginState = {
    requests: Request[];
    provider: CardProvider | null;
    cards: CardInfo[];
    showLinkingToolbar: boolean;
};
export declare type SetProvider = {
    type: 'SET_PROVIDER';
    provider: CardProvider | null;
};
export declare type Queue = {
    type: 'QUEUE';
    requests: Request[];
};
export declare type Resolve = {
    type: 'RESOLVE';
    url: string;
};
export declare type Register = {
    type: 'REGISTER';
    info: CardInfo;
};
export declare type ShowLinkToolbar = {
    type: 'SHOW_LINK_TOOLBAR';
};
export declare type HideLinkToolbar = {
    type: 'HIDE_LINK_TOOLBAR';
};
export declare type CardPluginAction = SetProvider | Queue | Resolve | Register | ShowLinkToolbar | HideLinkToolbar;
export declare type CardReplacementInputMethod = INPUT_METHOD.CLIPBOARD | INPUT_METHOD.AUTO_DETECT | INPUT_METHOD.FORMATTING | INPUT_METHOD.MANUAL | INPUT_METHOD.TYPEAHEAD;
