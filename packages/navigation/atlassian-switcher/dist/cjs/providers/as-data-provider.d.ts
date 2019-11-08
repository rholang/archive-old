import * as React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare enum Status {
    LOADING = "loading",
    COMPLETE = "complete",
    ERROR = "error"
}
export interface ResultComplete<T> {
    status: Status.COMPLETE;
    data: T;
}
export interface ResultLoading {
    status: Status.LOADING;
    data: null;
}
export interface ResultError {
    status: Status.ERROR;
    error: any;
    data: null;
}
export declare const isComplete: <T>(result: ProviderResult<T>) => result is ResultComplete<T>;
export declare const isError: <T>(result: ProviderResult<T>) => result is ResultError;
export declare const isLoading: <T>(result: ProviderResult<T>) => result is ResultLoading;
export declare const hasLoaded: <T>(result: ProviderResult<T>) => boolean;
export declare type ProviderResult<T> = ResultComplete<T> | ResultLoading | ResultError;
interface PropsToPromiseMapper<P, D> extends Function {
    (props: P): Promise<D>;
}
interface PropsToValueMapper<P, D> {
    (props: P): D;
}
declare type ProviderRenderer<D> = (props: ProviderResult<D>) => React.ReactNode;
export interface DataProviderProps<D> {
    children: ProviderRenderer<D>;
}
export default function <P, D>(name: string, mapPropsToPromise: PropsToPromiseMapper<Readonly<P>, D>, mapPropsToInitialValue?: PropsToValueMapper<Readonly<P>, D | void>): React.ForwardRefExoticComponent<React.PropsWithoutRef<Pick<P & DataProviderProps<D> & WithAnalyticsEventsProps, "children" | Exclude<keyof P, "createAnalyticsEvent" | "ref">>> & React.RefAttributes<any>>;
export {};
