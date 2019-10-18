import React from 'react';
import { TableBodyRow } from '../styled/TableRow';
import { TableBodyCell } from '../styled/TableCell';
import { HeadType, RowType } from '../types';

interface Props {
  head?: HeadType;
  isFixedSize: boolean;
  isHighlighted?: boolean;
  row: RowType;
}

const Row = ({ row, head, isFixedSize, isHighlighted }: Props) => {
  const { cells, ...restRowProps } = row;

  return (
    <TableBodyRow {...restRowProps} isHighlighted={isHighlighted}>
      {cells.map((cell, cellIndex) => {
        const { content, ...restCellProps } = cell;
        const { shouldTruncate, width } =
          (head || { cells: [] }).cells[cellIndex] || ({} as any);

        return (
          <TableBodyCell
            {...restCellProps}
            isFixedSize={isFixedSize}
            key={cellIndex} // eslint-disable-line react/no-array-index-key
            shouldTruncate={shouldTruncate}
            width={width}
          >
            {content}
          </TableBodyCell>
        );
      })}
    </TableBodyRow>
  );
};

export default Row;
