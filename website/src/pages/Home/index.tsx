import { colors } from '@atlaskit/theme';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import Mission, { Title, fonts } from './Mission';
import { DESKTOP_BREAKPOINT_MIN } from '../../constants';
import Background from './Background';
import Below from './Below';
import Cards from './Cards';
import Frontend from './Frontend';
import NewsBanner from './NewsBanner';
import Footer from './Footer';

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
  text-align: left;
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
    max-width: 100%;

  }


`}</style>
);

const Test = styled(Background)`
  background: blue;
`;

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
          <Title data-testid="title">Rholang</Title>
          <Intro>
            A language for distributed computing and blockchain 4.0
          </Intro>
          <Cards />
          <Mission />
          <Footer />
        </Below>
      </HomePageWrapper>
    );
  }
}
