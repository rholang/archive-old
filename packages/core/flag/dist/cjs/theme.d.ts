export declare const flagBackgroundColor: any;
export declare const flagBorderColor: any;
export declare const flagTextColor: any;
export declare const flagShadowColor: any;
export declare const flagFocusRingColor: any;
interface Colors {
    [key: string]: {
        [key: string]: string;
    };
}
export declare const background: Colors;
export declare const color: Colors;
export declare const actionButtonStyles: (props: any) => {
    background: string;
    color: string;
};
export declare const getPseudos: (p: any) => {
    '&, a&': {
        fontWeight: string;
        padding: string;
    };
    '&:focus': {
        boxShadow: string;
    };
    '&:hover, &:active': {
        textDecoration: string;
    };
};
export {};
