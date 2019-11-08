import * as React from 'react';
import { CancelableEvent } from '@atlaskit/quick-search';
export interface Props {
    query: string;
    onClickAdvancedSearch?: (e: CancelableEvent, entity: string) => void;
    onClearFilters: () => void;
    spaceTitle: string;
}
export default class NoResultsInFilterState extends React.Component<Props> {
    render(): JSX.Element;
}
