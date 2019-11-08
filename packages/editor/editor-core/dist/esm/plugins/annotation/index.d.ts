import { EditorPlugin } from '../../types';
import { AnnotationProvider, AnnotationComponentProps, AnnotationInfo } from './types';
declare const annotationPlugin: (annotationProvider?: AnnotationProvider | undefined) => EditorPlugin;
export default annotationPlugin;
export { AnnotationProvider, AnnotationComponentProps, AnnotationInfo };
