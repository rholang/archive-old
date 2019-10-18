import styled, { css } from 'styled-components';
import { row } from '../theme';

export interface ITableRowProps {
  isHighlighted?: boolean;
}

export const TableBodyRow = styled.tr<ITableRowProps>`
  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background-color: ${row.highlightedBackground};
    `}

  &:hover {
    ${({ isHighlighted }) =>
      css`
        background-color: ${isHighlighted
          ? row.hoverHighlightedBackground
          : row.hoverBackground};
      `}
`;
