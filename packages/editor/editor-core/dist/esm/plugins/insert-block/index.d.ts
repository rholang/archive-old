import { EditorPlugin } from '../../types';
export interface InsertBlockOptions {
    allowTables?: boolean;
    insertMenuItems?: any;
    horizontalRuleEnabled?: boolean;
    nativeStatusSupported?: boolean;
}
declare const insertBlockPlugin: (options: InsertBlockOptions) => EditorPlugin;
export default insertBlockPlugin;
