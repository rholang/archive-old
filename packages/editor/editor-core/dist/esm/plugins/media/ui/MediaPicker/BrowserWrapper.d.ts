import { MediaPluginState } from '../../pm-plugins/main';
declare type Props = {
    mediaState: MediaPluginState;
    isOpen?: boolean;
    onBrowseFn: (browse: () => void) => void;
};
export declare const BrowserWrapper: ({ mediaState, isOpen, onBrowseFn }: Props) => JSX.Element;
export {};
