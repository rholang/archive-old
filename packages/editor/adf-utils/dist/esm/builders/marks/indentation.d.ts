import { IndentationMarkDefinition, IndentationMarkAttributes, ParagraphDefinition } from '@atlaskit/adf-schema';
import { WithMark, WithAppliedMark } from '../types';
export declare const indentation: (attrs: IndentationMarkAttributes) => (maybeNode: string | WithMark) => WithAppliedMark<ParagraphDefinition, IndentationMarkDefinition>;
