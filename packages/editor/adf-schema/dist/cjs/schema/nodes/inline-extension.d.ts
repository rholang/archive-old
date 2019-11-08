import { NodeSpec } from 'prosemirror-model';
/**
 * @name inlineExtension_node
 */
export interface InlineExtensionDefinition {
    type: 'inlineExtension';
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
    };
}
export declare const inlineExtension: NodeSpec;
