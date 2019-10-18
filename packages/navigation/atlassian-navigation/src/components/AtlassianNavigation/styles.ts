import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';

import { HORIZONTAL_GLOBAL_NAV_HEIGHT } from '../../common/constants';
import { NavigationTheme } from '../../theme';

const gridSize = gridSizeFn();

export const containerCSS = ({ mode: { navigation } }: NavigationTheme) => ({
  alignItems: 'center',
  boxSizing: 'border-box' as const,
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'space-between',
  paddingLeft: gridSize * 2,
  paddingRight: gridSize * 2,
  height: HORIZONTAL_GLOBAL_NAV_HEIGHT,
  ...navigation,
});

export const leftCSS = {
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  height: 'inherit',
};

export const rightCSS = {
  alignItems: 'center',
  display: 'flex',
  flexShrink: 0,
  right: gridSize * 4,
};
