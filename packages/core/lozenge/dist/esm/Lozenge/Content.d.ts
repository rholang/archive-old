/** @jsx jsx */
import { ReactNode } from 'react';
import { ThemeTokens } from '../theme';
interface ThemeTokensWithChildren extends ThemeTokens {
    children?: ReactNode;
}
declare const _default: ({ maxWidth, children }: ThemeTokensWithChildren) => JSX.Element;
export default _default;
