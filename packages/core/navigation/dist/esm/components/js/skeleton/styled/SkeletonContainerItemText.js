import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { multiply, divide } from '@atlaskit/theme/math';
var SkeletonContainerItemText = styled.div.withConfig({
  displayName: "SkeletonContainerItemText",
  componentId: "sc-5ck6m2-0"
})(["\n  height: ", "px;\n  background-color: currentColor;\n  border-radius: ", "px;\n  opacity: 0.15;\n  margin-left: ", "px;\n  width: ", ";\n"], multiply(gridSize, 2.5), divide(gridSize, 2), gridSize() * 3, function (props) {
  return props.textWidth || "".concat(gridSize() * 17, "px");
});
SkeletonContainerItemText.displayName = 'SkeletonContainerItemText';
export default SkeletonContainerItemText;