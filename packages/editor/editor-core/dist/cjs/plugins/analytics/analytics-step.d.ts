import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Node as PMNode } from 'prosemirror-model';
import { Step, StepResult, StepMap, ReplaceStep, Mappable } from 'prosemirror-transform';
import { AnalyticsEventPayloadWithChannel } from './types';
export declare const analyticsStepType = "atlaskit-analytics";
/**
 * Custom Prosemirror Step to fire our GAS V3 analytics events
 * Using a Step means that it will work with prosemirror-history and we get
 * undo/redo events for free
 */
export declare class AnalyticsStep extends Step {
    analyticsEvents: AnalyticsEventPayloadWithChannel[];
    createAnalyticsEvent: CreateUIAnalyticsEvent;
    pos?: number;
    constructor(createAnalyticsEvent: CreateUIAnalyticsEvent, analyticsEvents: AnalyticsEventPayloadWithChannel[], pos?: number);
    /**
     * Generate new undo/redo analytics event when step is inverted
     */
    invert(): AnalyticsStep;
    apply(doc: PMNode): StepResult<any>;
    map(mapping: Mappable): AnalyticsStep;
    getMap(): StepMap;
    merge(other: Step): AnalyticsStep | null;
    toJSON(): {
        stepType: string;
    };
    static fromJSON(): ReplaceStep<any>;
}
