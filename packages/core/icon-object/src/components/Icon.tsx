import React, { Component } from 'react';
import styled from 'styled-components';
import { background } from '@atlaskit/theme/colors';

const sizes = {
  small: { height: '16px', width: '16px' },
  medium: { height: '24px', width: '24px' },
};

const getSize = (props: IconWrapperProps) => {
  if (props.size) {
    return `height: ${sizes[props.size].height}; width: ${
      sizes[props.size].width
    };`;
  }
  return null;
};

interface IconWrapperProps {
  size?: 'small' | 'medium';
  primaryColor?: string;
  secondaryColor?: string;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  ${getSize} color: ${p => p.primaryColor || 'currentColor'};
  display: inline-block;
  fill: ${p => p.secondaryColor || background};
  flex-shrink: 0;
  line-height: 1;

  > svg {
    ${getSize} max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    pointer-events: none;
    vertical-align: bottom;
  }
  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.
   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS
   * rule) and then override it with currentColor for the color changes to be picked up.
   */
  stop {
    stop-color: currentColor;
  }
`;

interface Props {
  /** More performant than the glyph prop, but potentially dangerous if the SVG string hasn't
   been "sanitised" */
  dangerouslySetGlyph?: string;
  /** String to use as the aria-label for the icon. Set to an empty string if you are rendering the icon with visible text to prevent accessibility label duplication. */
  label: string;
  /** Control the size of the icon */
  size?: 'small' | 'medium';
}

export default class Icon extends Component<Props, {}> {
  render() {
    const { dangerouslySetGlyph, size } = this.props;

    return (
      <IconWrapper
        size={size}
        aria-label={this.props.label}
        dangerouslySetInnerHTML={
          dangerouslySetGlyph
            ? {
                __html: dangerouslySetGlyph,
              }
            : undefined
        }
      />
    );
  }
}

export const size = Object.keys(sizes).reduce(
  (p, c) => Object.assign(p, { [c]: c }),
  {},
);
