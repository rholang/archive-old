import { HeadType, RowType } from '../types';
interface Props {
    head?: HeadType;
    isFixedSize: boolean;
    isHighlighted?: boolean;
    row: RowType;
}
declare const Row: ({ row, head, isFixedSize, isHighlighted }: Props) => JSX.Element;
export default Row;
