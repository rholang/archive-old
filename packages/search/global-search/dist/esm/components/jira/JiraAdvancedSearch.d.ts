import * as React from 'react';
import { CancelableEvent } from '@atlaskit/quick-search';
import { JiraEntityTypes } from '../SearchResultsUtil';
import { JiraApplicationPermission } from '../GlobalQuickSearchWrapper';
declare type onAdvancedSearchClick = (e: CancelableEvent, entity: JiraEntityTypes) => void;
export interface Props {
    query: string;
    analyticsData?: object;
    onClick?: onAdvancedSearchClick;
    appPermission?: JiraApplicationPermission;
    isJiraPeopleProfilesEnabled?: boolean;
}
interface State {
    entity: JiraEntityTypes;
}
export default class JiraAdvancedSearch extends React.Component<Props, State> {
    state: {
        entity: JiraEntityTypes;
    };
    renderLinks: () => JSX.Element[];
    render(): JSX.Element;
}
export {};
