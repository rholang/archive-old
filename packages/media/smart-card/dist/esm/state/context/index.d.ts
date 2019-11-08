/// <reference types="react" />
/// <reference types="@emotion/core" />
import { CardContext } from './types';
import { SmartCardProvider, ProviderProps } from './provider';
export declare const SmartCardContext: import("react").Context<CardContext | undefined>;
export declare function useSmartLinkContext(): CardContext;
export { SmartCardProvider, ProviderProps, CardContext };
export default SmartCardContext;
