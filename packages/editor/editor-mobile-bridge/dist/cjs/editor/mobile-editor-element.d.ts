import { MediaProvider as MediaProviderType, EditorProps } from '@atlaskit/editor-core';
import WebBridgeImpl from './native-to-web';
export declare const bridge: WebBridgeImpl;
declare type Props = EditorProps & {
    mode?: 'light' | 'dark';
    mediaProvider?: Promise<MediaProviderType>;
};
export default function mobileEditor(props: Props): JSX.Element;
export {};
