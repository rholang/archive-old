import { NodeSpec, Node as PMNode } from 'prosemirror-model';
export declare enum USER_TYPES {
    DEFAULT = "DEFAULT",
    SPECIAL = "SPECIAL",
    APP = "APP"
}
export declare type UserType = keyof typeof USER_TYPES;
export interface MentionAttributes {
    id: string;
    text?: string;
    userType?: UserType;
    accessLevel?: string;
}
/**
 * @name mention_node
 */
export interface MentionDefinition {
    type: 'mention';
    attrs: MentionAttributes;
}
export declare const mention: NodeSpec;
export declare const toJSON: (node: PMNode<any>) => {
    attrs: {
        [key: string]: any;
    };
};
