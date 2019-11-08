import React from 'react';
import { HeadType, RowType } from '../../types';
import { WithDimensionsProps } from '../../hoc/withDimensions';
export interface Props extends WithDimensionsProps {
    head?: HeadType;
    isFixedSize: boolean;
    row: RowType;
    rowIndex: number;
    isRankingDisabled: boolean;
    isHighlighted?: boolean;
}
export declare class RankableTableRow extends React.Component<Props, {}> {
    innerRef: (innerRefFn: Function) => (ref?: HTMLElement | undefined) => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Props, "head" | "isFixedSize" | "isRanking" | "isHighlighted" | "row" | "rowIndex" | "isRankingDisabled">, import("../../hoc/withDimensions").State>;
export default _default;
