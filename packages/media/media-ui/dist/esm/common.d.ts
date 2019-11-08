export declare type LozengeColor = 'default' | 'success' | 'removed' | 'inprogress' | 'new' | 'moved';
export interface LozengeViewModel {
    text: string;
    appearance?: LozengeColor;
    isBold?: boolean;
}
