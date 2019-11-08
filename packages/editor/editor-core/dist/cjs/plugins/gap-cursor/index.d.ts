import { EditorPlugin } from '../../types';
export { GapCursorSelection, Side } from './selection';
export { setCursorForTopLevelBlocks } from './actions';
declare const gapCursorPlugin: () => EditorPlugin;
export default gapCursorPlugin;
