import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { divide } from '@atlaskit/theme/math';
var SkeletonDefaultContainerHeaderInner = styled.div.withConfig({
  displayName: "SkeletonDefaultContainerHeaderInner",
  componentId: "v596gu-0"
})(["\n  display: flex;\n  align-items: center;\n  margin: ", "px\n    ", "px 0 ", "px;\n"], function (props) {
  return props.isAvatarHidden ? gridSize() * 2 : divide(gridSize, 2);
}, gridSize(), gridSize());
SkeletonDefaultContainerHeaderInner.displayName = 'SkeletonDefaultContainerHeaderInner';
export default SkeletonDefaultContainerHeaderInner;