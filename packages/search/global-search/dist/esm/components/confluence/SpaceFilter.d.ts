import * as React from 'react';
import { FilterWithMetadata } from '../../api/CrossProductSearchClient';
import { CreateAnalyticsEventFn } from '../analytics/types';
export interface Props {
    spaceAvatar: string;
    spaceTitle: string;
    spaceKey: string;
    searchSessionId: string;
    isDisabled?: boolean;
    isFilterOn?: boolean;
    onFilterChanged(filter: FilterWithMetadata[]): void;
    createAnalyticsEvent?: CreateAnalyticsEventFn;
}
interface State {
    isChecked: boolean;
}
export declare class ConfluenceSpaceFilter extends React.Component<Props, State> {
    state: {
        isChecked: boolean;
    };
    generateFilter: () => FilterWithMetadata<import("../../api/CrossProductSearchClient").Filter, import("../../api/CrossProductSearchClient").QueryBasedSpaceFilterMetadata>[];
    toggleCheckbox: () => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    getIcons(): JSX.Element;
    static getDerivedStateFromProps(props: Props, state: State): {
        isChecked: boolean | undefined;
    } | null;
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
