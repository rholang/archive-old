import { EditorProps } from 'prosemirror-view';
import { PresetProvider } from './internal/context/preset-context';
import { EditorSharedConfig, EditorSharedConfigConsumer } from './internal/context/shared-config';
import { EditorContent } from './internal/components/EditorContent';
declare function Editor(props: EditorProps): JSX.Element;
/**
 *
 * Public API Exports.
 *
 */
export { PresetProvider, Editor, EditorContent, EditorProps, EditorSharedConfigConsumer, EditorSharedConfig, };
