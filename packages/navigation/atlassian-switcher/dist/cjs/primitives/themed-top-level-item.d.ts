import * as React from 'react';
import { ThemeTokens } from '../theme/types';
interface ToggleProps {
    isParentHovered?: boolean;
    tokens?: Partial<ThemeTokens>;
    children: React.ReactNode;
}
export declare const ItemWrapper: (props: ToggleProps) => JSX.Element;
export declare const Toggle: (props: ToggleProps) => JSX.Element;
export {};
