import { NodeSpec, MarkSpec, Schema } from 'prosemirror-model';
/**
 * Creates a schema preserving order of marks and nodes.
 */
export declare function createSchema(config: SchemaConfig): Schema;
export declare function sanitizeNodes(nodes: {
    [key: string]: NodeSpec;
}, supportedMarks: {
    [key: string]: MarkSpec;
}): {
    [key: string]: NodeSpec;
};
export interface SchemaConfig {
    nodes: string[];
    customNodeSpecs?: SchemaCustomNodeSpecs;
    marks?: string[];
    customMarkSpecs?: SchemaCustomMarkSpecs;
}
export interface SchemaBuiltInItem {
    name: string;
    spec: NodeSpec | MarkSpec;
}
export interface SchemaCustomNodeSpecs {
    [name: string]: NodeSpec;
}
export interface SchemaCustomMarkSpecs {
    [name: string]: MarkSpec;
}
