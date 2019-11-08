import { NodeSpec } from 'prosemirror-model';
import { ExtensionContent } from './doc';
export declare type ExtensionLayout = 'default' | 'wide' | 'full-width';
/**
 * @name bodiedExtension_node
 */
export interface BodiedExtensionDefinition {
    type: 'bodiedExtension';
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
        layout?: ExtensionLayout;
    };
    content: ExtensionContent;
}
export declare const bodiedExtension: NodeSpec;
