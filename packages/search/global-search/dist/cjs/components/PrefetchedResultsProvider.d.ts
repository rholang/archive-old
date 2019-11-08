import * as React from 'react';
import { GlobalSearchPrefetchedResults } from '../api/prefetchResults';
import { QuickSearchContext } from '../api/types';
export declare const GlobalSearchPreFetchContext: React.Context<import("../api/prefetchResults").ConfluencePrefetchedResults | import("../api/prefetchResults").JiraPrefetchedResults | undefined>;
interface Props {
    context: QuickSearchContext;
    cloudId: string;
    userId: string | null;
    children: JSX.Element;
    baseUrl?: string;
}
interface State {
    prefetchedResults: GlobalSearchPrefetchedResults | undefined;
}
export default class PrefetchedResultsProvider extends React.Component<Props, State> {
    state: {
        prefetchedResults: undefined;
    };
    getPrefetchedResults: (cloudId: string, userId: string | null) => import("../api/prefetchResults").ConfluencePrefetchedResults | import("../api/prefetchResults").JiraPrefetchedResults | undefined;
    doPrefetchOnce: () => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
