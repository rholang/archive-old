import * as React from 'react';
import { DataProviderProps } from './as-data-provider';
declare type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export declare type OptionalCloudId<U> = {
    cloudId?: string;
} & DataProviderProps<U>;
/**
 * Inject the ability to handle cases when cloudID is missing into the provided component.
 *
 * When cloud ID is available, this HOC will wrap {children} with the given provided component.
 * Otherwise, {children} is executed with the provided fallback result.
 *
 * @param ProviderComponent component to wrap
 * @param fallbackProviderResult result used to execute children if cloud id is missing
 *
 * @type P component props
 * @type U provider result type
 */
declare function withHandleOptionalCloudId<P extends DataProviderProps<U>, U>(ProviderComponent: React.ComponentType<P>, fallbackProviderResult: U): (props: Overwrite<P, OptionalCloudId<U>>) => JSX.Element;
export default withHandleOptionalCloudId;
