import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { divide } from '@atlaskit/theme/math';
var SkeletonGlobalIconOuter = styled.div.withConfig({
  displayName: "SkeletonGlobalIconOuter",
  componentId: "sc-1kpch5t-0"
})(["\n  margin-bottom: ", "px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], divide(gridSize, 2));
SkeletonGlobalIconOuter.displayName = 'SkeletonGlobalIconOuter';
export default SkeletonGlobalIconOuter;