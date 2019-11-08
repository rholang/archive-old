import * as React from 'react';
import { CancelableEvent } from '@atlaskit/quick-search';
import { Result } from '../model/Result';
import { InjectedIntlProps } from 'react-intl';
export interface Props {
    title?: JSX.Element | string;
    results: Result[];
    sectionIndex: number;
    analyticsData?: {};
    showTotalSize: boolean;
    totalSize: number;
    showMoreButton: boolean;
    onShowMoreClicked: () => void;
    onSearchMoreAdvancedSearch: undefined | ((e: CancelableEvent) => void);
    query: string;
}
export declare class ResultGroup extends React.Component<Props & InjectedIntlProps> {
    render(): JSX.Element | null;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
