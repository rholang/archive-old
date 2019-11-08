import { AlignmentMarkDefinition, AlignmentAttributes, ParagraphDefinition, HeadingDefinition } from '@atlaskit/adf-schema';
import { WithMark, WithAppliedMark } from '../types';
export declare const alignment: (attrs: AlignmentAttributes) => (maybeNode: string | WithMark) => WithAppliedMark<ParagraphDefinition | HeadingDefinition, AlignmentMarkDefinition>;
