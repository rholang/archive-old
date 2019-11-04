import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';

export const bg = css`
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
export const bgGradient = css`
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

export const bgGradientGhost = css`
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

export const bgIllustration = css`
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
