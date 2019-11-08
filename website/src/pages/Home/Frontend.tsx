import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';
import ModalDialogVideo from './ModalDialogVideo';
import rhoLogo from '../../assets/home/RholangLogo.png';
import network from '../../assets/home/network.svg';

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
  flex: 6;
  display: flex;
  justify-content: center;
  transition: opacity 100ms linear;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
  }
`;

const descriptionFont38 = css`
  margin-top: 30px;
  margin-left: 5px;
  max-width: 300px;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    font-size: 15px;
  }
`;

const firstViewRight = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 6;

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
            <div>
              <img width="200px" src={rhoLogo} alt="Logo" />
              <Descritption>
                Rholang is a massive scalable blockchain language with
                unprecedented speed and reliability. Build on latest research
                from the reflective high order calculus.
              </Descritption>
            </div>
          </FirstViewLeft>
          <ModalDialogVideo />
          <FirstViewRight>
            <img width="200px" src={network} alt="Logo" />
          </FirstViewRight>
        </Container960>
      </FullWith>
    </FrontendA>
  );
};
