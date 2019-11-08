import { PanelDefinition, PanelAttributes } from '@atlaskit/adf-schema';
export declare const panel: (attrs: PanelAttributes) => (...content: (import("@atlaskit/adf-schema").ParagraphDefinition | import("@atlaskit/adf-schema").HeadingDefinition | import("@atlaskit/adf-schema").OrderedListDefinition | import("@atlaskit/adf-schema").BulletListDefinition)[]) => PanelDefinition;
