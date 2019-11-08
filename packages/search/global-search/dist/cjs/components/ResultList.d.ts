import * as React from 'react';
import { Result } from '../model/Result';
import { ConfluenceFeatures, JiraFeatures } from '../util/features';
export interface Props {
    results: Result[];
    sectionIndex: number;
    analyticsData?: {};
    features: ConfluenceFeatures | JiraFeatures;
}
export declare const getUniqueResultId: (result: Result) => string;
declare class ResultList extends React.Component<Props> {
    render(): JSX.Element[];
}
export declare const UnwrappedResultList: typeof ResultList;
declare const _default: (props: Pick<Props, "results" | "analyticsData" | "sectionIndex">) => JSX.Element;
export default _default;
