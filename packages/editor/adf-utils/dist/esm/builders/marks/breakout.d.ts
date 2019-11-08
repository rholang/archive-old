import { BreakoutMarkAttrs, BreakoutMarkDefinition, CodeBlockDefinition, LayoutSectionDefinition } from '@atlaskit/adf-schema';
import { WithAppliedMark } from '../types';
export declare const breakout: (attrs: BreakoutMarkAttrs) => (maybeNode: CodeBlockDefinition | LayoutSectionDefinition) => WithAppliedMark<CodeBlockDefinition | LayoutSectionDefinition, BreakoutMarkDefinition>;
