import { StatusDefinition } from '@atlaskit/adf-schema';
export declare const status: (attrs?: {
    text: string;
    color: "neutral" | "purple" | "blue" | "red" | "yellow" | "green";
    localId?: string | undefined;
    style?: string | undefined;
}) => StatusDefinition;
