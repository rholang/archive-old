/// <reference types="react" />
import { Schema } from 'prosemirror-model';
import { Transformer } from '@atlaskit/editor-common';
import { EditorPlugin } from '../../../types';
export declare type EditorProps = {
    plugins?: Array<EditorPlugin>;
    transformer?: (schema: Schema) => Transformer<string>;
    children?: React.ReactChild;
    defaultValue?: string | object;
    popupsMountPoint?: HTMLElement;
    popupsBoundariesElement?: HTMLElement;
    popupsScrollableElement?: HTMLElement;
    disabled?: boolean;
    placeholder?: string;
    onChange?: (value: any) => void;
    onSave?: (value: any) => void;
    onCancel?: (value: any) => void;
};
