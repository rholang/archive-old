import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
/**
 * Provide a styled container for form headers.
 */

export var FormFooterWrapper = styled.footer.withConfig({
  displayName: "FormFooter__FormFooterWrapper",
  componentId: "jnns5q-0"
})(["\n  margin-top: ", "px;\n  display: flex;\n  justify-content: ", ";\n"], multiply(gridSize, 3), function (props) {
  return props.align === 'start' ? 'flex-start' : 'flex-end';
});