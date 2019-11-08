import { CodeBlockDefinition, TextDefinition, NoMark } from '@atlaskit/adf-schema';
export declare type CodeBlockContent = TextDefinition & NoMark;
export declare const codeBlock: (attrs: import("@atlaskit/adf-schema").CodeBlockAttrs | undefined) => (...content: CodeBlockContent[]) => CodeBlockDefinition;
