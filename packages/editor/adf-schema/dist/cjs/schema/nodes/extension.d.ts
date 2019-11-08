import { NodeSpec } from 'prosemirror-model';
export declare type Layout = 'default' | 'wide' | 'full-width';
/**
 * @name extension_node
 */
export interface ExtensionDefinition {
    type: 'extension';
    attrs: {
        /**
         * @minLength 1
         */
        extensionKey: string;
        /**
         * @minLength 1
         */
        extensionType: string;
        parameters?: object;
        text?: string;
        layout?: Layout;
    };
}
export declare const extension: NodeSpec;
