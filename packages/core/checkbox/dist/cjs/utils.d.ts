export declare const defaultAttributesFn: <T extends Record<string, any>>(p?: T | undefined) => Record<string, any>;
declare type OverridesFunc<X extends Record<string, any>, Y extends Record<string, any>> = (key: string) => Record<string, any>;
export declare type ExtenderType = <D extends Record<string, any>, O extends Record<string, any>>(d: D, o?: O) => OverridesFunc<D, O>;
export declare const createExtender: ExtenderType;
export {};
