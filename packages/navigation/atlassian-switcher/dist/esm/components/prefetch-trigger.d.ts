import * as React from 'react';
import { FeatureFlagProps } from '../types';
import { AvailableProductsDataProvider } from '../providers/products-data-provider';
declare type PrefetchTriggerProps = {
    product?: string;
    children: React.ReactNode;
    cloudId?: string;
    Container?: React.ReactType;
    availableProductsDataProvider?: AvailableProductsDataProvider;
} & Partial<FeatureFlagProps>;
declare const _default: (props: PrefetchTriggerProps) => JSX.Element;
export default _default;
