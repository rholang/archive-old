import { ReactNode } from 'react';
import { BrowserConfig } from '../types';
import { LocalUploadComponentReact, LocalUploadComponentBaseProps } from '../localUploadReact';
export declare type RenderBrowserFunc = () => ReactNode;
export interface BrowserOwnProps {
    config: BrowserConfig;
    isOpen?: boolean;
    onClose?: () => void;
    /**
     * This prop will be mainly used for those contexts (like Editor) where there is no react lifecylce and we cannot rerender easily.
     * Otherwise, isOpen prop is prefered.
     */
    onBrowseFn?: (browse: () => void) => void;
    onCancelFn?: (cancel: (uploadId: string) => void) => void;
}
export declare type BrowserProps = BrowserOwnProps & LocalUploadComponentBaseProps;
export declare class Browser extends LocalUploadComponentReact<BrowserProps> {
    private browserRef;
    static defaultProps: {
        config: BrowserConfig;
    };
    private onFilePicked;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: BrowserProps): void;
    browse: () => void;
    render(): JSX.Element;
}
