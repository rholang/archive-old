import React from 'react';
import { SortOrderType, StatefulProps, RankEnd, RowType } from '../types';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
interface State {
    page?: number;
    sortKey?: string;
    sortOrder?: SortOrderType;
    rows?: RowType[];
}
export default class DynamicTable extends React.Component<StatefulProps, State> {
    static defaultProps: {
        defaultPage: number;
        isLoading: boolean;
        isFixedSize: boolean;
        isRankable: boolean;
        onSetPage: () => void;
        onSort: () => void;
        rowsPerPage: number;
    };
    state: {
        page: number | undefined;
        sortKey: string | undefined;
        sortOrder: "ASC" | "DESC" | undefined;
        rows: RowType[] | undefined;
    };
    UNSAFE_componentWillReceiveProps(newProps: StatefulProps): void;
    onSetPage: (page: number, analyticsEvent?: UIAnalyticsEvent | undefined) => void;
    onSort: ({ key, item, sortOrder }: any, analyticsEvent?: UIAnalyticsEvent | undefined) => void;
    onRankEndIfExists: (params: RankEnd) => void;
    onRankEnd: (params: RankEnd) => void;
    render(): JSX.Element;
}
export {};
