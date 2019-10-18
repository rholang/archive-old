import React from 'react';
import TableRow from './TableRow';
import withSortedPageRows, {
  WithSortedPageRowsProps,
} from '../hoc/withSortedPageRows';
import { HeadType } from '../types';

interface Props extends WithSortedPageRowsProps {
  head?: HeadType;
  highlightedRowIndex?: number;
  isFixedSize: boolean;
}

class Body extends React.Component<Props, {}> {
  render() {
    const { pageRows, head, isFixedSize, highlightedRowIndex } = this.props;

    return (
      <tbody>
        {pageRows.map((row, rowIndex) => (
          <TableRow
            head={head}
            isFixedSize={isFixedSize}
            key={rowIndex} // eslint-disable-line react/no-array-index-key
            row={row}
            isHighlighted={highlightedRowIndex === rowIndex}
          />
        ))}
      </tbody>
    );
  }
}

export default withSortedPageRows<Props>(Body);
