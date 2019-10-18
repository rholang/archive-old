import { themed } from '@atlaskit/theme/components';
import * as colors from '@atlaskit/theme/colors';

export const arrow = {
  defaultColor: themed({ light: colors.N40, dark: colors.DN40 }),
  selectedColor: themed({ light: colors.N300, dark: colors.DN300 }),
  hoverColor: themed({ light: colors.N60, dark: colors.DN60 }),
};

export const row = {
  highlightedBackground: themed({ light: colors.N20, dark: colors.DN50 }),
  hoverBackground: themed({ light: colors.N10, dark: colors.DN40 }),
  hoverHighlightedBackground: themed({ light: colors.N30, dark: colors.DN60 }),
};

export const head = {
  borderColor: themed({ light: colors.N40, dark: colors.DN50 }),
  textColor: themed({ light: colors.N300, dark: colors.DN300 }),
};
