import React, { Component, ReactElement } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { background } from '@atlaskit/theme/colors';

import { sizeOpts } from '../types';
import { sizes } from '../constants';

interface WrapperProps {
  primaryColor?: string;
  secondaryColor?: string;
  size?: sizeOpts;
}

const getSize = ({ size }: WrapperProps) =>
  size ? `height: ${sizes[size]}; width: ${sizes[size]};` : null;

export const IconWrapper = styled.span<WrapperProps>`
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

export interface IconProps {
  /** Glyph to show by Icon component (not required when you import a glyph directly) */
  glyph?: (props: { role: string }) => ReactElement;
  /** More performant than the glyph prop, but potentially dangerous if the SVG string hasn't
   been "sanitised" */
  dangerouslySetGlyph?: string;
  /** String to use as the aria-label for the icon. Set to an empty string if you are rendering the icon with visible text to prevent accessibility label duplication. */
  label: string;
  /** For primary colour for icons */
  primaryColor?: string;
  /** For secondary colour for 2-color icons. Set to inherit to control this via "fill" in CSS */
  secondaryColor?: string;
  /** Control the size of the icon */
  size?: sizeOpts;
}

export default class Icon extends Component<IconProps, {}> {
  /* Icons need unique gradient IDs across instances for different gradient definitions to work
   * correctly.
   * A step in the icon build process replaces linear gradient IDs and their references in paths
   * to a placeholder string so we can replace them with a dynamic ID here.
   * Replacing the original IDs with placeholders in the build process is more robust than not
   * using placeholders as we do not have to rely on regular expressions to find specific element
   * to replace.
   */
  static insertDynamicGradientID(svgStr: string) {
    const id = uuid();

    const replacedSvgStr = svgStr
      .replace(/id="([^"]+)-idPlaceholder"/g, `id=$1-${id}`)
      .replace(
        /fill="url\(#([^"]+)-idPlaceholder\)"/g,
        `fill="url(#$1-${id})"`,
      );

    return replacedSvgStr;
  }

  render() {
    const {
      glyph: Glyph,
      dangerouslySetGlyph,
      primaryColor,
      secondaryColor,
      size,
    } = this.props;

    // handling the glyphs as strings
    if (dangerouslySetGlyph) {
      return (
        <IconWrapper
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          size={size}
          aria-label={this.props.label}
          dangerouslySetInnerHTML={{
            __html: Icon.insertDynamicGradientID(dangerouslySetGlyph),
          }}
        />
      );
    }
    // handling the glyphs when passed through as functions
    return (
      <IconWrapper
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        size={size}
        aria-label={this.props.label}
      >
        {Glyph ? <Glyph role="presentation" /> : null}
      </IconWrapper>
    );
  }
}
