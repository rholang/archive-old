/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/core';
import { defaultAttributesFn } from '../utils';
import {
  IconWrapperProps,
  ThemeIconTokens,
  IconWrapperCSSProps,
} from '../types';

const disabledBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.disabled,
  strokeWidth: iconTokens.borderWidth,
});

const activeBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.active,
  strokeWidth: iconTokens.borderWidth,
});

const hoveredAndCheckedBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.hoveredAndChecked,
  strokeWidth: iconTokens.borderWidth,
});

const hoveredBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.hovered,
  strokeWidth: iconTokens.borderWidth,
});

const checkedBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.checked,
  strokeWidth: iconTokens.borderWidth,
});

const focusedBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.focused,
  strokeWidth: iconTokens.borderWidth,
});

const invalidBorder = (iconTokens: ThemeIconTokens) => ({
  stroke: iconTokens.borderColor.invalid,
  strokeWidth: iconTokens.borderWidth,
});

const getBorderColor = ({ tokens, ...props }: IconWrapperCSSProps) => {
  if (props.isDisabled) {
    return disabledBorder(tokens.icon);
  }
  if (props.isActive) {
    return activeBorder(tokens.icon);
  }
  if (props.isHovered && props.isChecked) {
    return hoveredAndCheckedBorder(tokens.icon);
  }
  if (props.isHovered) {
    return hoveredBorder(tokens.icon);
  }
  if (props.isChecked) {
    return checkedBorder(tokens.icon);
  }
  if (props.isFocused) {
    return focusedBorder(tokens.icon);
  }
  if (props.isInvalid) {
    return invalidBorder(tokens.icon);
  }

  return {
    stroke: tokens.icon.borderColor.rest,
    strokeWidth: tokens.icon.borderWidth,
  };
};

const getTickColor = (props: IconWrapperCSSProps) => {
  const {
    isChecked,
    isDisabled,
    isActive,
    tokens: { icon },
  } = props;

  let color = icon.tickColor.checked;

  if (isDisabled && isChecked) {
    color = icon.tickColor.disabledAndChecked;
  } else if (isActive && isChecked && !isDisabled) {
    color = icon.tickColor.activeAndChecked;
  } else if (!isChecked) {
    color = icon.tickColor.rest;
  }
  return color;
};

const getBoxColor = (props: IconWrapperCSSProps) => {
  const {
    isChecked,
    isDisabled,
    isActive,
    isHovered,
    tokens: { icon },
  } = props;
  // set the default
  let color = icon.boxColor.rest;

  if (isDisabled) {
    color = icon.boxColor.disabled;
  } else if (isActive) {
    color = icon.boxColor.active;
  } else if (isHovered && isChecked) {
    color = icon.boxColor.hoveredAndChecked;
  } else if (isHovered) {
    color = icon.boxColor.hovered;
  } else if (isChecked) {
    color = icon.boxColor.checked;
  }
  return color;
};

export const iconWrapperCSS = (props: IconWrapperProps): CSSObject => ({
  lineHeight: 0,
  flexShrink: 0,
  color: getBoxColor(props),
  fill: getTickColor(props),
  transition: 'all 0.2s ease-in-out;',

  /* This is adding a property to the inner svg, to add a border to the checkbox */
  '& rect:first-of-type': {
    transition: 'stroke 0.2s ease-in-out;',
    ...getBorderColor(props),
  },

  /**
   * Need to set the Icon component wrapper to flex to avoid a scrollbar bug which
   * happens when checkboxes are flex items in a parent with overflow.
   * See AK-6321 for more details.
   **/
  '> span': {
    display: 'flex',
  },
});

export function IconWrapper({
  attributesFn,
  cssFn,
  children,
  ...props
}: IconWrapperProps) {
  return (
    <span css={cssFn(props)} {...attributesFn(props)} children={children} />
  );
}

export default {
  component: IconWrapper,
  cssFn: iconWrapperCSS,
  attributesFn: defaultAttributesFn,
};
