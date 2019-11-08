import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';
import ModalDialogVideo from './ModalDialogVideo';

const fronta = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    justify-content: flex-start;
  }
`;

const fullWith = css`
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    flex: 1;
  }
`;

const container960 = css`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const firstViewLeft = css`
  position: relative;
  flex: 2;
  display: flex;
  transition: opacity 100ms linear;
  justify-content: center;
  align-items: center;
  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
  }
`;

const logo = css`
  height: 80px;
  background-image: url(../images/logo.svg);
  background-position: 0;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
  }
`;

const descriptionFont38 = css`
  line-height: 42px;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    width: 300px;
    font-size: 28px;
    line-height: 38px;
  }
`;

const firstViewRight = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 2;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    display: none;
  }
`;

export const FrontendA = styled.div`
  ${fronta}
`;

export const FullWith = styled.div`
  ${fullWith}
`;

export const Container960 = styled.div`
  ${container960}
`;
export const FirstViewLeft = styled.div`
  ${firstViewLeft}
`;
export const Logo = styled.div`
  ${logo}
`;
export const Descritption = styled.div`
  ${descriptionFont38}
`;
export const FirstViewRight = styled.div`
  ${firstViewRight}
`;

export default () => {
  return (
    <FrontendA>
      <FullWith>
        <Container960>
          <FirstViewLeft>
            <Logo />
            <Descritption>
              Rholang is a massive scalable blockchain language
            </Descritption>
          </FirstViewLeft>
          <ModalDialogVideo />
          <FirstViewRight>
            <Descritption>
              Rholang is a massive scalable blockchain language
            </Descritption>
          </FirstViewRight>
        </Container960>
      </FullWith>
    </FrontendA>
  );
};
