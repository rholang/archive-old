/** @jsx jsx */
import { CSSObject } from '@emotion/core';
import { LabelProps } from '../types';
export declare const labelCSS: ({ isDisabled, tokens }: Pick<LabelProps, "isDisabled" | "tokens">) => CSSObject;
export declare function Label({ attributesFn, children, isDisabled, onMouseUp, onMouseDown, onMouseLeave, onMouseEnter, tokens, cssFn, testId, }: LabelProps): JSX.Element;
declare const _default: {
    component: typeof Label;
    cssFn: ({ isDisabled, tokens }: Pick<LabelProps, "isDisabled" | "tokens">) => CSSObject;
    attributesFn: <T extends Record<string, any>>(p?: T | undefined) => Record<string, any>;
};
export default _default;
