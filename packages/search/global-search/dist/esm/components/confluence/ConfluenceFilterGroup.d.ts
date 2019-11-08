import * as React from 'react';
import { CancelableEvent } from '@atlaskit/quick-search';
import { FilterWithMetadata } from '../../api/CrossProductSearchClient';
import { CreateAnalyticsEventFn } from '../analytics/types';
export interface Props {
    spaceAvatar: string;
    spaceTitle: string;
    spaceKey: string;
    isDisabled?: boolean;
    isFilterOn: boolean;
    onFilterChanged(filter: FilterWithMetadata[]): void;
    onAdvancedSearch(event: CancelableEvent): void;
    createAnalyticsEvent?: CreateAnalyticsEventFn;
    searchSessionId: string;
}
export declare class ConfluenceFilterGroup extends React.Component<Props> {
    onMoreFiltersClick: (event: CancelableEvent) => void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Props, "searchSessionId" | "isDisabled" | "onFilterChanged" | "spaceAvatar" | "spaceTitle" | "spaceKey" | "isFilterOn" | "onAdvancedSearch"> & React.RefAttributes<any>>;
export default _default;
