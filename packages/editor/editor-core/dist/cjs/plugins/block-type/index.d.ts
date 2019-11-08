import { EditorPlugin } from '../../types';
interface BlockTypePluginOptions {
    lastNodeMustBeParagraph?: boolean;
}
declare const blockTypePlugin: (options?: BlockTypePluginOptions | undefined) => EditorPlugin;
export default blockTypePlugin;
export { pluginKey, BlockTypeState } from './pm-plugins/main';
