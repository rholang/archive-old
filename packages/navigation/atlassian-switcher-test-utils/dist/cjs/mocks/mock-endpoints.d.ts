import { MockData } from './mock-data';
interface DataTransformer {
    (originalMockData: MockData): MockData;
}
interface LoadTimes {
    containers?: number;
    xflow?: number;
    permitted?: number;
    appswitcher?: number;
    availableProducts?: number;
}
export declare const REQUEST_SLOW: {
    containers: number;
    xflow: number;
    permitted: number;
    appswitcher: number;
    availableProducts: number;
};
export declare const REQUEST_MEDIUM: {
    containers: number;
    xflow: number;
    permitted: number;
    appswitcher: number;
    availableProducts: number;
};
export declare const REQUEST_FAST: {
    containers: number;
    xflow: number;
    permitted: number;
    appswitcher: number;
    availableProducts: number;
};
export declare const getMockData: (transformer?: DataTransformer | undefined) => MockData;
export declare const mockEndpoints: (product: string, transformer?: DataTransformer | undefined, loadTimes?: LoadTimes) => void;
export declare const mockAvailableProductsEndpoint: (endpoint: string, transformer?: DataTransformer | undefined, loadTimes?: LoadTimes) => void;
export {};
