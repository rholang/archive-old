import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';

const below = css`
  position: absolute;
  left: 0;
  top: 100%;
  right: 0;
  z-index: 1;
  overflow: hidden;
  background-color: #fff;
`;

const BelowA = styled.div`
  ${below}
`;

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
  return <BelowA>{children}</BelowA>;
};
