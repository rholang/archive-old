import * as React from 'react';
import { ScreenCounter } from '../../util/ScreenCounter';
import { ReferralContextIdentifiers } from '../GlobalQuickSearchWrapper';
import { ResultsGroup } from '../../model/Result';
import { Scope } from '../../api/types';
import { CancelableEvent } from '@atlaskit/quick-search';
export declare enum ResultGroupType {
    PreQuery = "PreQuery",
    PostQuery = "PostQuery"
}
export interface Props {
    resultsGroups: ResultsGroup[];
    type: ResultGroupType;
    renderAdvancedSearch: (analyticsData?: any) => JSX.Element;
    searchSessionId: string;
    screenCounter?: ScreenCounter;
    referralContextIdentifiers?: ReferralContextIdentifiers;
    onShowMoreClicked: (scope: Scope) => void;
    onSearchMoreAdvancedSearchClicked?: (event: CancelableEvent) => void;
    query: string;
}
export default class ResultGroupsComponent extends React.Component<Props> {
    mapGroupsToSections: (resultsToShow: ResultsGroup[], analyticsData: any) => JSX.Element[];
    getAnalyticsComponent(): JSX.Element;
    getAnalyticsData: () => {
        resultCount: number;
    };
    render(): JSX.Element;
}
