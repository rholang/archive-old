import { Schema } from 'prosemirror-model';
export interface JIRASchemaConfig {
    allowLists?: boolean;
    allowMentions?: boolean;
    allowEmojis?: boolean;
    allowLinks?: boolean;
    allowAdvancedTextFormatting?: boolean;
    allowCodeBlock?: boolean;
    allowBlockQuote?: boolean;
    allowSubSup?: boolean;
    allowMedia?: boolean;
    allowTextColor?: boolean;
    allowTables?: boolean;
}
export default function makeSchema(config: JIRASchemaConfig): Schema<any, any>;
export declare function isSchemaWithLists(schema: Schema): boolean;
export declare function isSchemaWithMentions(schema: Schema): boolean;
export declare function isSchemaWithEmojis(schema: Schema): boolean;
export declare function isSchemaWithLinks(schema: Schema): boolean;
export declare function isSchemaWithAdvancedTextFormattingMarks(schema: Schema): boolean;
export declare function isSchemaWithSubSupMark(schema: Schema): boolean;
export declare function isSchemaWithCodeBlock(schema: Schema): boolean;
export declare function isSchemaWithBlockQuotes(schema: Schema): boolean;
export declare function isSchemaWithMedia(schema: Schema): boolean;
export declare function isSchemaWithTextColor(schema: Schema): boolean;
export declare function isSchemaWithTables(schema: Schema): boolean;
