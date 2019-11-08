import { DataProviderProps } from './as-data-provider';
import { WithCached } from '../utils/with-cached';
/**
 * Some items might be using the type `ExportedDataProvider` instead due to errors with
 * the generated documentation
 */
export declare type DataProvider<T> = {
    fetchMethod: WithCached<(param: object) => Promise<T>>;
    ProviderComponent: DataProviderProps<T> & any;
};
/**
 * `WithCached` within `DataProvider` breaks the documentation with error:
 * `Error: Missing converter for: TSMappedType` due to usage of Proxy function
 * so we are exporting a simpler type here just for the docs. There has been reported
 * on their repo already: https://github.com/atlassian/extract-react-types/issues/75
 */
export declare type ExportedDataProvider<T> = {
    fetchMethod: (param: object) => Promise<T>;
    ProviderComponent: DataProviderProps<T> & any;
};
export declare const createProvider: <T>(name: string, url: string) => DataProvider<T>;
