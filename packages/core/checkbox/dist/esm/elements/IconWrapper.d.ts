/** @jsx jsx */
import { CSSObject } from '@emotion/core';
import { IconWrapperProps } from '../types';
export declare const iconWrapperCSS: (props: IconWrapperProps) => CSSObject;
export declare function IconWrapper({ attributesFn, cssFn, children, ...props }: IconWrapperProps): JSX.Element;
declare const _default: {
    component: typeof IconWrapper;
    cssFn: (props: IconWrapperProps) => CSSObject;
    attributesFn: <T extends Record<string, any>>(p?: T | undefined) => Record<string, any>;
};
export default _default;
