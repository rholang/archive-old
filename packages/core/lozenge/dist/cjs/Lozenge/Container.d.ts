/** @jsx jsx */
import { ReactNode } from 'react';
import { ThemeTokens } from '../theme';
interface ThemeTokensWithChildren extends ThemeTokens {
    children?: ReactNode;
    testId?: string;
}
declare const _default: ({ backgroundColor, textColor, children, testId, }: ThemeTokensWithChildren) => JSX.Element;
export default _default;
