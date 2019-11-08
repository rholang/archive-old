import React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
interface Props {
    value?: number;
    onChange: (newValue: any, analyticsEvent?: UIAnalyticsEvent) => void;
    total: number;
    i18n?: {
        next: string;
        prev: string;
    };
}
export default class ManagedPagination extends React.Component<Props> {
    onChange: (_event: any, newValue: any, analyticsEvent?: UIAnalyticsEvent | undefined) => void;
    render(): JSX.Element;
}
export {};
