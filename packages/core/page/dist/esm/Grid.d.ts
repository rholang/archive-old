import React, { ReactNode } from 'react';
import { ThemeProps } from './types';
interface Props {
    children?: ReactNode;
    spacing?: 'cosy' | 'comfortable' | 'compact';
    layout?: 'fixed' | 'fluid';
    theme?: ThemeProps;
}
declare const _default: React.ComponentClass<Pick<Props, "children" | "spacing" | "layout"> & {
    theme?: unknown;
}, any>;
export default _default;
