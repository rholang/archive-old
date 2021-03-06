import { Schema } from 'prosemirror-model';
import { Transformer, ADNode, EventHandlers } from '@atlaskit/editor-common';
import { Node as PMNode } from 'prosemirror-model';
export declare type TransformerProvider<T> = (schema: Schema) => Transformer<T>;
export declare class ADFEncoder<T> {
    encode: (value: T) => any;
    constructor(createTransformerWithSchema: TransformerProvider<T>);
}
export declare const getText: (node: ADNode | PMNode<any>) => string;
export declare const getEventHandler: (eventHandlers?: EventHandlers | undefined, type?: "link" | "media" | "mention" | "smartCard" | undefined, eventName?: string) => any;
