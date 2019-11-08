import { ListItemDefinition, OrderedListDefinition } from '@atlaskit/adf-schema';
export declare const orderedList: (attrs?: {
    order: number;
} | undefined) => (...content: ListItemDefinition[]) => OrderedListDefinition;
