import * as React from 'react';
import { Component } from 'react';
import { InjectedIntlProps } from 'react-intl';
export interface ColorButtonProps {
    readonly color: string;
    readonly isActive: boolean;
    readonly onClick: () => void;
}
export declare class ColorButton extends Component<ColorButtonProps & InjectedIntlProps> {
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<ColorButtonProps, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<ColorButtonProps & InjectedIntlProps>;
};
export default _default;
