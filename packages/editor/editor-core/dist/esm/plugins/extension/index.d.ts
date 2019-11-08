import { EditorPlugin } from '../../types';
interface ExtensionPluginOptions {
    breakoutEnabled?: boolean;
}
declare const extensionPlugin: (options?: ExtensionPluginOptions | undefined) => EditorPlugin;
export default extensionPlugin;
