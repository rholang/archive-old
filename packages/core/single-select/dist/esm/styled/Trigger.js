import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
var Trigger = styled.div.withConfig({
  displayName: "Trigger",
  componentId: "sc-10ra0wx-0"
})(["\n  align-items: center;\n  display: flex;\n  min-height: ", "px;\n  outline: none;\n  width: 100%;\n"], multiply(gridSize, 4.5));
Trigger.displayName = 'SingleSelectTrigger';
export default Trigger;