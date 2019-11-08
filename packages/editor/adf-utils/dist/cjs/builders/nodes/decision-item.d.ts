import { DecisionItemDefinition, Inline } from '@atlaskit/adf-schema';
export declare const decisionItem: (attrs: {
    localId: string;
    state: string;
}) => (...content: Inline[]) => DecisionItemDefinition;
