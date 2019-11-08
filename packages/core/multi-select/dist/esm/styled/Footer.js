import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { N40A } from '@atlaskit/theme/colors';
var FooterDiv = styled.div.withConfig({
  displayName: "Footer__FooterDiv",
  componentId: "sc-1xuos4y-0"
})(["\n  padding: ", "px 0 ", "px 0;\n  border-top: ", ";\n"], gridSize(), gridSize() / 2, function (_ref) {
  var shouldHideSeparator = _ref.shouldHideSeparator;
  return shouldHideSeparator ? '0' : "2px solid ".concat(N40A);
});
export default FooterDiv;