/**
 * Internal hook used for the `withAnalyticsHook` HOC and eventually
 * will be used to replace `AnalyticsContextConsumer`.
 */
import { CreateEventMap, AnalyticsEventCreator } from './types';
export declare type PatchedPropsHook = {
    patchedEventProps: CreateEventMap;
};
export declare function usePatchedProps<Props extends Record<string, any>>(createEventMap: Record<string, Record<string, any> | AnalyticsEventCreator> | undefined, wrappedComponentProps: Props): PatchedPropsHook;
