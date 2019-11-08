import { AnnotationMarkAttributes } from '@atlaskit/adf-schema';
import { WithMark } from '../types';
export declare const annotation: (attrs: AnnotationMarkAttributes) => (maybeNode: string | WithMark) => WithMark;
