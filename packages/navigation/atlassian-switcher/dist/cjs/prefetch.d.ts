import * as React from 'react';
import { AvailableProductsDataProvider } from './providers/products-data-provider';
import { FeatureFlagProps } from './types';
declare type PrefetchTriggerProps = {
    cloudId?: string;
    product?: string;
    Container?: React.ReactType;
    availableProductsDataProvider?: AvailableProductsDataProvider;
} & Partial<FeatureFlagProps>;
export declare const prefetch: (props: PrefetchTriggerProps) => void;
export {};
