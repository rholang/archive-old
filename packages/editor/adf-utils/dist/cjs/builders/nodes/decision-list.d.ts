import { DecisionListDefinition, DecisionItemDefinition } from '@atlaskit/adf-schema';
export declare const decisionList: (attrs: {
    localId: string;
}) => (...content: DecisionItemDefinition[]) => DecisionListDefinition;
