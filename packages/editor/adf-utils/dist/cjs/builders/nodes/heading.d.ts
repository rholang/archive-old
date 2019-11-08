import { Inline, HeadingDefinition } from '@atlaskit/adf-schema';
export declare const heading: (attrs: {
    level: number;
}) => (...content: Inline[]) => HeadingDefinition;
