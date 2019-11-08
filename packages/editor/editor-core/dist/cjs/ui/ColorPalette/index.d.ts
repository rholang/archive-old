import * as React from 'react';
import { PaletteColor } from './Palettes/type';
import { InjectedIntlProps } from 'react-intl';
export interface Props {
    palette: PaletteColor[];
    selectedColor: string | null;
    onClick: (value: string) => void;
    cols?: number;
    className?: string;
    checkMarkColor?: string;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
