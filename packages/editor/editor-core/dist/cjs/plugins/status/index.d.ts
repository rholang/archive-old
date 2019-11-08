import { EditorPlugin } from '../../types';
export interface StatusPluginOptions {
    menuDisabled: boolean;
    useInlineWrapper?: boolean;
    allowZeroWidthSpaceAfter?: boolean;
}
declare const statusPlugin: (options: StatusPluginOptions) => EditorPlugin;
export default statusPlugin;
