import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';

export const bg = css`
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
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
`;
export const bgGradient = css`
  position: relative;
  width: 100%;
  flex: 1;
  background: 600% 500%/90% 90%
      radial-gradient(
        closest-side,
        rgba(179, 66, 66, 0.7),
        rgba(228, 79, 79, 0)
      )
      no-repeat,
    600% 180%/90% 90%
      radial-gradient(
        closest-side,
        rgba(228, 79, 79, 0.7),
        rgba(228, 79, 79, 0)
      )
      no-repeat,
    100% 150%/75% 50%
      radial-gradient(
        closest-side,
        rgba(250, 250, 218, 0.2),
        rgba(250, 250, 218, 0)
      )
      no-repeat,
    -400% -100%/90% 80%
      radial-gradient(
        closest-side,
        rgba(250, 250, 218, 0.3),
        rgba(250, 250, 218, 0)
      )
      no-repeat,
    -100% -250%/85% 80%
      radial-gradient(
        closest-side,
        rgba(150, 26, 26, 0.8),
        rgba(94, 225, 249, 0)
      )
      no-repeat,
    -170% 100%/70% 60% radial-gradient(
        closest-side,
        rgba(94, 225, 249, 0.6),
        rgba(94, 225, 249, 0)
      ) no-repeat,
    50% 50%/100% 100%
      linear-gradient(
        30deg,
        #d4342c 10%,
        rgba(110, 16, 206, 0) 70%,
        hsla(0, 0%, 100%, 0) 90%
      )
      no-repeat,
    linear-gradient(144deg, rgba(233, 235, 104, 0), rgba(233, 235, 104, 0.3))
      no-repeat,
    linear-gradient(90deg, rgba(104, 184, 235, 0.11), rgba(15, 216, 223, 0.11))
      no-repeat,
    #fff;
`;

export const bgGradientGhost = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: #082fa2;
  opacity: 0;
  -webkit-transition: opacity 100ms linear;
  transition: opacity 100ms linear;
`;

export const bgIllustration = css`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  background-image: linear-gradient(rgb(16, 16, 16), rgb(16, 16, 16));
  background-position: 50% 50%, 0 0;
  background-size: 110%, auto;
  background-repeat: repeat, repeat;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    display: none;
  }
`;

export const Background = styled.div`
  ${bg}
`;
export const BackgroundGradient = styled.div`
  ${bgGradient}
`;
export const BackgroundGhost = styled.div`
  ${bgGradientGhost}
`;

export const BackgroundIllustration = styled.div`
  ${bgIllustration}
`;

export default () => {
  return (
    <Background>
      <BackgroundGradient>
        <BackgroundGhost />
      </BackgroundGradient>
      <BackgroundIllustration />
    </Background>
  );
};
