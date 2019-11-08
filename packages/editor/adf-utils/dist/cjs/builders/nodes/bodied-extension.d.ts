import { BodiedExtensionDefinition } from '@atlaskit/adf-schema';
export declare const bodiedExtension: (attrs: {
    extensionKey: string;
    extensionType: string;
    parameters?: object | undefined;
    text?: string | undefined;
    layout?: "wide" | "full-width" | "default" | undefined;
}) => (...content: (import("@atlaskit/adf-schema").CodeBlockDefinition | import("@atlaskit/adf-schema").ParagraphDefinition | import("@atlaskit/adf-schema").HeadingDefinition | import("@atlaskit/adf-schema").BlockQuoteDefinition | import("@atlaskit/adf-schema").PanelDefinition | import("@atlaskit/adf-schema").OrderedListDefinition | import("@atlaskit/adf-schema").BulletListDefinition | import("@atlaskit/adf-schema").RuleDefinition | import("@atlaskit/adf-schema").MediaGroupDefinition | import("@atlaskit/adf-schema").MediaSingleDefinition | import("@atlaskit/adf-schema").DecisionListDefinition | import("@atlaskit/adf-schema").TaskListDefinition | import("@atlaskit/adf-schema").TaskListWithNestingDefinition | import("@atlaskit/adf-schema").TableDefinition | import("@atlaskit/adf-schema").ExtensionDefinition | import("@atlaskit/adf-schema").BlockCardDefinition)[]) => BodiedExtensionDefinition;
