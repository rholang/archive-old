import { Node as PMNode, Schema } from 'prosemirror-model';
import { Context } from './parser/tokenize';
interface Transformer<T> {
    encode(node: PMNode): T;
    parse(content: T): PMNode;
}
export declare class WikiMarkupTransformer implements Transformer<string> {
    private schema;
    constructor(schema?: Schema);
    encode(node: PMNode): string;
    parse(wikiMarkup: string, context?: Context): PMNode;
    private buildContext;
}
export default WikiMarkupTransformer;
