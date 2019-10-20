import { colors, gridSize, typography } from '@atlaskit/theme';
import evaluateInner from './utils/evaluate-inner';

const tableBorderWdth = 2;

export default evaluateInner`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  thead,
  tbody,
  tfoot {
    border-bottom: ${tableBorderWdth}px solid ${colors.N40};
  }

  td,
  th {
    border: 1px solid #ddd;
    border-collapse: collapse;
    text-align: left;
    padding: ${gridSize()}px ${gridSize()}px;
    text-align: left;

  }

  th {
    vertical-align: top;
  }




  caption {
    ${typography.h600()}
    margin-bottom: ${gridSize()}px;
    text-align: left;
  }
`;
