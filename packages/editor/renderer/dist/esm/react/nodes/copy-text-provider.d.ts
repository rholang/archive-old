import React from 'react';
export declare const clipboardApiSupported: () => boolean;
export declare const copyToClipboardLegacy: (textToCopy: string, copyAreaRef: HTMLElement | null) => Promise<void>;
export declare const copyToClipboard: (textToCopy: string) => Promise<void>;
declare const CopyTextContext: React.Context<{
    copyTextToClipboard: (textToCopy: string) => Promise<void>;
}>;
declare const Consumer: React.ExoticComponent<React.ConsumerProps<{
    copyTextToClipboard: (textToCopy: string) => Promise<void>;
}>>;
export declare const CopyArea: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
export declare class CopyTextProvider extends React.Component {
    private copyAreaRef;
    copyTextToClipboard: (textToCopy: string) => Promise<void>;
    render(): JSX.Element;
}
export { Consumer as CopyTextConsumer };
export { CopyTextContext };
