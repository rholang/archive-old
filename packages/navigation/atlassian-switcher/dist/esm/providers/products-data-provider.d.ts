import * as React from 'react';
import { ProviderResult } from './as-data-provider';
import { AvailableProductsResponse } from '../types';
import { ExportedDataProvider } from './create-data-provider';
export declare type AvailableProductsDataProvider = ExportedDataProvider<AvailableProductsResponse>;
export declare const AvailableProductsProvider: ({ children, availableProductsDataProvider, }: {
    children: (availableProducts: ProviderResult<AvailableProductsResponse>) => React.ReactNode;
    availableProductsDataProvider?: ExportedDataProvider<AvailableProductsResponse> | undefined;
}) => JSX.Element;
export declare const prefetchAvailableProducts: (customProvider?: ExportedDataProvider<AvailableProductsResponse> | undefined) => void;
export declare const resetAvailableProducts: (customProvider?: ExportedDataProvider<AvailableProductsResponse> | undefined) => void;
