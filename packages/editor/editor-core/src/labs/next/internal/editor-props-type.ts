import { Schema } from 'prosemirror-model';
import { Transformer } from '@atlaskit/editor-common';
import { EditorPlugin } from '../../../types';

export type EditorProps = {
  plugins?: Array<EditorPlugin>;
  transformer?: (schema: Schema) => Transformer<string>;
  children?: React.ReactChild;

  // Set the default editor content.
  defaultValue?: string | object;

  popupsMountPoint?: HTMLElement;
  popupsBoundariesElement?: HTMLElement;
  popupsScrollableElement?: HTMLElement;

  disabled?: boolean;
  placeholder?: string;

  // Set for an on change callback.
  onChange?: (value: any) => void;

  // Set for an on save callback.
  onSave?: (value: any) => void;

  // Set for an on cancel callback.
  onCancel?: (value: any) => void;
};
