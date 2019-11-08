import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
export declare const MessageContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare type InputProps = {
    text: string;
};
export declare const HiddenInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export declare type Props = {
    onLinkCopy?: (link: string) => void;
    link: string;
};
export declare type State = {
    shouldShowCopiedMessage: boolean;
};
export declare const AUTO_DISMISS_MS: number;
export declare class CopyLinkButton extends React.Component<Props & InjectedIntlProps, State> {
    private autoDismiss;
    private inputRef;
    state: {
        shouldShowCopiedMessage: boolean;
    };
    componentWillUnmount(): void;
    private clearAutoDismiss;
    private handleClick;
    private handleDismissCopiedMessage;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
