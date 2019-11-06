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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
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
  flex: 1;
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

export const FrontendA = styled.div`
  ${fronta}
`;

export const FullWith = styled.div`
  ${fullWith}
`;

export const Container960 = styled.div`
  ${_960FirstView}
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
          <FirstViewRight>
            <ModalDialogVideo />
          </FirstViewRight>
        </Container960>
      </FullWith>
    </FrontendA>
  );
};
