import { NodeSpec } from 'prosemirror-model';
/**
 * @name status_node
 */
export interface StatusDefinition {
    type: 'status';
    attrs: {
        /**
         * @minLength 1
         */
        text: string;
        color: 'neutral' | 'purple' | 'blue' | 'red' | 'yellow' | 'green';
        localId?: string;
        /**
         * Supported values are bold and subtle
         */
        style?: string;
    };
}
export declare const status: NodeSpec;
