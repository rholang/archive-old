import githubLogo from '../../assets/home/github-logo.svg';
import styled, { css } from 'styled-components';
import React from 'react';
import { colors } from '@atlaskit/theme';
import FlexView from 'react-flexview';

const fonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const IconsCopyright = styled.div`
  color: ${colors.N900};
  font-size: 14px;
  margin-top: 10px;
  font-family: 'Charlie_Display_Regular', ${fonts}; /* stylelint-disable-line */
`;

const P = styled.p`
  margin: 0px;
  margin-right: 3px;
`;

export default () => (
  <IconsCopyright>
    <FlexView hAlignContent="center">
      <FlexView marginRight="5%">
        <P>Icons made by</P>
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
      </FlexView>
      <FlexView marginLeft="5%">
        <P>Contribute to this page </P>
        <a href="https://github.com/rholang/rholang.github.io">
          <img width="20px" src={githubLogo} alt="Logo" />
        </a>
      </FlexView>
    </FlexView>
  </IconsCopyright>
);
