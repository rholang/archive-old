import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import { colors } from '@atlaskit/theme';
import Cards from './Cards';
import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import Page, { Grid, GridColumn } from '@atlaskit/page';

const bg = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
const bgGradient = css`
  position: relative;
  width: 100%;
  height: 100vh;
  float: left;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-image: -webkit-radial-gradient(
      circle farthest-side at 50% 0%,
      rgba(76, 115, 247, 0.55),
      hsla(0, 0%, 100%, 0) 36%
    ),
    -webkit-radial-gradient(circle farthest-side at 53% 126%, rgba(
            147,
            210,
            241,
            0.5
          )
          21%, hsla(0, 0%, 100%, 0) 40%),
    -webkit-radial-gradient(circle farthest-side at 103% 13%, #93d2f1, rgba(
            50,
            217,
            166,
            0.73
          )
          17%, rgba(45, 216, 163, 0.96) 26%, rgba(152, 230, 231, 0.2) 80%, hsla(0, 0%, 100%, 0)),
    -webkit-radial-gradient(circle farthest-side at 4% 71%, #021a85 3%, rgba(
            12,
            59,
            165,
            0.7
          )
          47%, hsla(0, 0%, 100%, 0)),
    -webkit-linear-gradient(301deg, #2971ff, #93d2f1);
  background-image: radial-gradient(
      circle farthest-side at 50% 0%,
      rgba(76, 115, 247, 0.55),
      hsla(0, 0%, 100%, 0) 36%
    ),
    radial-gradient(
      circle farthest-side at 53% 126%,
      rgba(147, 210, 241, 0.5) 21%,
      hsla(0, 0%, 100%, 0) 40%
    ),
    radial-gradient(
      circle farthest-side at 103% 13%,
      #93d2f1,
      rgba(50, 217, 166, 0.73) 17%,
      rgba(45, 216, 163, 0.96) 26%,
      rgba(152, 230, 231, 0.2) 80%,
      hsla(0, 0%, 100%, 0)
    ),
    radial-gradient(
      circle farthest-side at 4% 71%,
      #021a85 3%,
      rgba(12, 59, 165, 0.7) 47%,
      hsla(0, 0%, 100%, 0)
    ),
    linear-gradient(149deg, #2971ff, #93d2f1);
`;

const bgGradientGhost = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #082fa2;
  opacity: 0;
  -webkit-transition: opacity 100ms linear;
  transition: opacity 100ms linear;
`;

const bgIllustration = css`
  position: relative;
  overflow: hidden;
  width: calc(50% - 80px);
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: -webkit-linear-gradient(270deg, #091440, #091440);
  background-image: linear-gradient(180deg, #091440, #091440);
  background-position: 50% 50%, 0 0;
  background-size: 110%, auto;
  background-repeat: repeat, repeat;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    display: none;
  }
`;

const fronta = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
`;

const fullWith = css`
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
`;

const _960 = css`
  position: relative;
  display: block;
  width: 960px;
  margin-right: auto;
  margin-left: auto;
`;

const _960FirstView = css`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
`;

const firstViewLeft = css`
  position: relative;
  width: 570px;
  -webkit-transition: opacity 100ms linear;
  transition: opacity 100ms linear;
  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    width: 50%;
  }
`;

const logo = css`
  height: 80px;
  margin-left: -125px;
  background-image: url(../images/logo.svg);
  background-position: 0;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    margin-bottom: 35px;
    margin-left: 0;
  }
`;

const descriptionFont38 = css`
  padding-top: 56px;
  line-height: 42px;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    width: 300px;
    padding-top: 10px;
    padding-left: 0;
    font-size: 28px;
    line-height: 38px;
  }
`;

const firstViewRight = css`
  margin-left: -55px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    position: relative;
    margin-left: 0;
  }
`;

const playButton = css`
  position: relative;
  display: block;
  width: 89px;
  height: 89px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 50%;
  background-color: #e9f8fe;
  background-image: url(../images/video_play.svg);
  background-position: 34px;
  background-size: 30px 34px;
  background-repeat: no-repeat;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.21);
  -webkit-transition: all 80ms linear;
  transition: all 80ms linear;
  cursor: pointer;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    display: none;
  }
`;

const Background = styled.div`
  ${bg}
`;
const BackgroundGradient = styled.div`
  ${bgGradient}
`;
const BackgroundGhost = styled.div`
  ${bgGradientGhost}
`;

const BackgroundIllustration = styled.div`
  ${bgIllustration}
`;

const FrontendA = styled.div`
  ${fronta}
`;

const FullWith = styled.div`
  ${fullWith}
`;
const Container960 = styled.div`
  ${_960}
  ${_960FirstView}
`;
const FirstViewLeft = styled.div`
  ${firstViewLeft}
`;
const Logo = styled.div`
  ${logo}
`;
const Descritption = styled.div`
  ${descriptionFont38}
`;
const FirstViewRight = styled.div`
  ${firstViewRight}
`;
const PlayButton = styled.button`
  ${playButton}
`;

const fonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const Title = styled.h1`
  color: ${colors.N0};
  font-family: 'Charlie_Display_Semibold', ${fonts}; /* stylelint-disable-line */
  font-size: 52px;
  margin: 80px 0 0 !important;
  letter-spacing: 0;
  display: inline-block;
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
        <Background>
          <BackgroundGradient>
            <BackgroundGhost />
          </BackgroundGradient>
          <BackgroundIllustration />
        </Background>
        <FrontendA>
          <FullWith>
            <Container960>
              <FirstViewLeft>
                <Logo />
                <Descritption>
                  Rholang is a massive scalable blockchain language
                </Descritption>
              </FirstViewLeft>
              <FirstViewRight>
                <PlayButton />
              </FirstViewRight>
            </Container960>
          </FullWith>
        </FrontendA>
        {/*<Page>
          <Grid>
            <GridColumn>
              <h1>Atlaskit</h1>
            </GridColumn>
            <GridColumn>
              <h1 data-testid="title">Atlaskit</h1>
            </GridColumn>

            <GridColumn>
              <Intro>
                Atlassian&#39;s official UI library, built according to the
                Atlassian&nbsp;Design&nbsp;Guidelines.
              </Intro>
            </GridColumn>

            <GridColumn>
              <p>Lorem</p>
            </GridColumn>
            <GridColumn>
              <p>Lorem</p>
            </GridColumn>
            <GridColumn>
              <Title data-testid="title">Atlaskit</Title>
            </GridColumn>

            <GridColumn>
              <Intro>
                Atlassian&#39;s official UI library, built according to the
                Atlassian&nbsp;Design&nbsp;Guidelines.
              </Intro>
            </GridColumn>
            <Cards />
            <GridColumn>
              <h2>Content below which takes up remaining space</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis voluptatum perspiciatis doloribus dignissimos
                accusamus commodi, nobis ut, error iusto, quas vitae nesciunt
                consequatur possimus labore! Mollitia est quis minima
                asperiores.
              </p>
            </GridColumn>
          </Grid>
        </Page>
        */}
      </HomePageWrapper>
    );
  }
}
