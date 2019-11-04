import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';
import ModalDialogVideo from './ModalDialogVideo';
import { FullWith } from './Frontend';

const _960 = css`
  position: relative;
  display: block;
  width: 960px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const fullWidth = css`
  width: 100%;
`;
const mission = css`
  padding-top: 76px;
  padding-bottom: 114px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    padding-top: 30px;
  }
`;

const missionSection = css`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  /* min-height: 340px; */
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
`;

//const missionContent

const FullWidth = styled.div`
  ${fullWidth}
`;
const Container960 = styled.div`
  ${_960}
`;

interface Props {
  children?: React.ReactNode;
}

export const MissionItem = styled.div`
  ${mission}
`;
export const MissionSection = styled.div`
  ${missionSection}
`;

export default ({ children }: Props) => {
  return (
    <FullWith>
      <Container960>
        <MissionItem>{children}</MissionItem>
      </Container960>
    </FullWith>
  );
};
