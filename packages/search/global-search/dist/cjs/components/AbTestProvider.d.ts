import * as React from 'react';
import { QuickSearchContext } from '../api/types';
import { ABTest, CrossProductSearchClient } from '../api/CrossProductSearchClient';
interface Props {
    context: QuickSearchContext;
    crossProductSearchClient: CrossProductSearchClient;
    children: (abTest: ABTest) => React.ReactNode;
}
interface State {
    abTest: ABTest | null;
}
export declare class ABTestProvider extends React.Component<Props, State> {
    state: {
        abTest: null;
    };
    fetchAbTestOnce: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element | null;
}
export {};
