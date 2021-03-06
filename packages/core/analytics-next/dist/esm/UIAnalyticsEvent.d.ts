import AnalyticsEvent, { AnalyticsEventProps, AnalyticsEventPayload } from './AnalyticsEvent';
declare type ChannelIdentifier = string;
declare type Context = Record<string, any>[];
export declare type UIAnalyticsEventHandler = (event: UIAnalyticsEvent, channel?: ChannelIdentifier) => void;
export declare type UIAnalyticsEventProps = AnalyticsEventProps & {
    context?: Context;
    handlers?: UIAnalyticsEventHandler[];
};
export default class UIAnalyticsEvent extends AnalyticsEvent {
    context: Context;
    handlers: UIAnalyticsEventHandler[];
    hasFired: boolean;
    constructor(props: UIAnalyticsEventProps);
    clone: () => UIAnalyticsEvent | null;
    fire: (channel?: string | undefined) => void;
    update(updater: Record<string, any> | ((payload: AnalyticsEventPayload) => AnalyticsEventPayload)): this;
}
export {};
