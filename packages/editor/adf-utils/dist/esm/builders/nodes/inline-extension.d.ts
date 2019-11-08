import { InlineExtensionDefinition } from '@atlaskit/adf-schema';
export declare const inlineExtension: (attrs: {
    extensionKey: string;
    extensionType: string;
    parameters?: object | undefined;
    text?: string | undefined;
}) => () => InlineExtensionDefinition;
