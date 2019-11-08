import { ExtensionDefinition } from '@atlaskit/adf-schema';
export declare const extension: (attrs: {
    extensionKey: string;
    extensionType: string;
    parameters?: object | undefined;
    text?: string | undefined;
    layout?: "wide" | "full-width" | "default" | undefined;
}) => ExtensionDefinition;
