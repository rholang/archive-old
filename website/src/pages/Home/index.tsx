import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import { colors } from '@atlaskit/theme';
import Cards from './Cards';
import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Background from './Background';
import Frontend from './Frontend';
import NewsBanner from './NewsBanner';
import Below from './Below';
import MissionContainer, { MissionItem, MissionSection } from './Mission';

const fonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const Title = styled.h1`
  color: ${colors.N900};
  font-family: 'Charlie_Display_Semibold', ${fonts}; /* stylelint-disable-line */
  font-size: 52px;
  margin: 80px 0 0 !important;
  letter-spacing: 0;
  display: block;
  text-align: center;
`;
const Intro = styled.div`
  color: ${colors.N900};
  display: block;
  font-size: 24px;
  font-family: 'Charlie_Display_Regular', ${fonts}; /* stylelint-disable-line */
  font-weight: 300;
  margin-bottom: 80px;
  margin-top: 24px;
  letter-spacing: 0;
  text-align: center;

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

  div {
    max-width: none;
    max-height: none;
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
        <Background />
        <Frontend />
        <Below>
          <NewsBanner />
          <Title data-testid="title">Atlaskit</Title>
          <Intro>
            Atlassian&#39;s official UI library, built according to the
            Atlassian&nbsp;Design&nbsp;Guidelines.
          </Intro>
          <Cards />
        </Below>
      </HomePageWrapper>
    );
  }
}
