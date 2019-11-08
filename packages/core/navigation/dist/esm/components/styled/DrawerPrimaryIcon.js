import styled from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import { N500, DN500 } from '@atlaskit/theme/colors';
import { drawerBackIconSize } from '../../utils/drawer-style-variables';
var DrawerPrimaryIcon = styled.div.withConfig({
  displayName: "DrawerPrimaryIcon",
  componentId: "sc-1ds7gho-0"
})(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n  color: ", ";\n"], drawerBackIconSize, drawerBackIconSize, themed({
  light: N500,
  dark: DN500
}));
DrawerPrimaryIcon.displayName = 'DrawerPrimaryIcon';
export default DrawerPrimaryIcon;