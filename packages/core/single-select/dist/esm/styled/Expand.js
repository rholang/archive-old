import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
var Expand = styled.div.withConfig({
  displayName: "Expand",
  componentId: "r9emlm-0"
})(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 ", "px;\n  justify-content: center;\n  margin: 0 ", "px;\n"], multiply(gridSize, 3), gridSize);
Expand.displayName = 'SingleSelectExpand';
export default Expand;