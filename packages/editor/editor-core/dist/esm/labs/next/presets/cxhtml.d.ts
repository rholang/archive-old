import * as React from 'react';
import { EditorPresetProps } from './types';
import { MentionProvider } from '@atlaskit/mention/resource';
import { MediaProvider } from '../../../plugins/media';
interface EditorPresetCXHTMLProps {
    children?: React.ReactNode;
    placeholder?: string;
    mentionProvider?: Promise<MentionProvider>;
    mediaProvider?: Promise<MediaProvider>;
}
export declare function EditorPresetCXHTML({ children, mentionProvider, mediaProvider, placeholder, excludes, experimental, }: EditorPresetCXHTMLProps & EditorPresetProps): JSX.Element;
export {};
