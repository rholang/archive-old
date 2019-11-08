import * as React from 'react';
import { CancelableEvent } from '@atlaskit/quick-search';
import { UIAnalyticsEvent, WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export interface ShowMoreButtonProps extends WithAnalyticsEventsProps {
    resultLength: number;
    totalSize: number;
    onShowMoreClicked: () => void;
    onSearchMoreAdvancedSearch: undefined | ((e: CancelableEvent) => void);
    query: string;
}
export declare class ShowMoreButton extends React.PureComponent<ShowMoreButtonProps> {
    triggerEnrichedEvent(analyticsEvent: UIAnalyticsEvent, actionSubjectId: string): void;
    render(): JSX.Element | null;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ShowMoreButtonProps, "query" | "totalSize" | "resultLength" | "onShowMoreClicked" | "onSearchMoreAdvancedSearch"> & React.RefAttributes<any>>;
export default _default;
