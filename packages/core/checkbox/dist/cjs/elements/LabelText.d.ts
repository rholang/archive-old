/** @jsx jsx */
import { CSSObject } from '@emotion/core';
import { LabelTextProps, LabelTextCSSProps } from '../types';
export declare const labelTextCSS: ({ tokens }: LabelTextCSSProps) => CSSObject;
export declare function LabelText({ attributesFn, tokens, children, cssFn, }: LabelTextProps): JSX.Element;
declare const _default: {
    component: typeof LabelText;
    cssFn: ({ tokens }: LabelTextCSSProps) => CSSObject;
    attributesFn: <T extends Record<string, any>>(p?: T | undefined) => Record<string, any>;
};
export default _default;
