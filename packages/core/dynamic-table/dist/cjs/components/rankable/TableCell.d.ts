import React from 'react';
import { HeadCellType, RowCellType } from '../../types';
import { WithDimensionsProps } from '../../hoc/withDimensions';
export interface Props extends WithDimensionsProps {
    head?: HeadCellType;
    cell: RowCellType;
    isFixedSize: boolean;
}
export declare class RankableTableCell extends React.Component<Props, {}> {
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Props, "head" | "isFixedSize" | "isRanking" | "cell">, import("../../hoc/withDimensions").State>;
export default _default;
