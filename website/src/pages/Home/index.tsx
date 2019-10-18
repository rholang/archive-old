import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import Cards from './Cards';
import { DESKTOP_BREAKPOINT_MIN } from '../../constants';

const fonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const Title = styled.h1`
  color: ${colors.N0};
  font-family: 'Charlie_Display_Semibold', ${fonts}; /* stylelint-disable-line */
  font-size: 52px;
  margin: 80px 0 0 !important;
  letter-spacing: 0;
`;
const Intro = styled.div`
  color: ${colors.N0};
  display: inline-block;
  font-size: 24px;
  font-family: 'Charlie_Display_Regular', ${fonts}; /* stylelint-disable-line */
  font-weight: 300;
  margin-bottom: 80px;
  margin-top: 24px;
  max-width: 640px;
  letter-spacing: 0;

  a {
    color: ${colors.B75};

    &:hover {
      color: ${colors.N0};
    }
  }
`;

const HomePageWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  color: ${colors.N0};

  @media (min-width: ${DESKTOP_BREAKPOINT_MIN}px) {
    margin-right: 64px;
  }
`;

const Style = () => (
  <style>{`
  body {
    background-color: ${colors.B500};
  }
`}</style>
);

export default class HomePage extends React.Component {
  render() {
    return (
      <HomePageWrapper>
        <Helmet>
          <title>{`${BASE_TITLE}`}</title>
        </Helmet>
        <Style />
        <Title data-testid="title">Atlaskit</Title>
        <Intro>
          Atlassian&#39;s official UI library, built according to the
          Atlassian&nbsp;Design&nbsp;Guidelines.
        </Intro>
        <Cards />
      </HomePageWrapper>
    );
  }
}
