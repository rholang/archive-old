import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
var SkeletonContainerHeaderWrapper = styled.div.withConfig({
  displayName: "SkeletonContainerHeaderWrapper",
  componentId: "aocgly-0"
})(["\n  margin-bottom: ", "px;\n"], gridSize() * 2);
SkeletonContainerHeaderWrapper.displayName = 'SkeletonContainerHeaderWrapper';
export default SkeletonContainerHeaderWrapper;