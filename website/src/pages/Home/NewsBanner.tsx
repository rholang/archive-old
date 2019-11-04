import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';
import { Container960 } from './Frontend';

const newsBanner = css`
  background: #1b41b3;
  width: 100%;
`;

const newsBannerContent = css`
  padding: 30px 0;
  display: flex;
`;

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

export const NewsBanner = styled.div`
  ${newsBanner}
`;

export const Container_960 = styled.div`
  ${_960}
`;

export const NewsBannerContent = styled.div`
  ${newsBannerContent}
`;

export default () => {
  return (
    <NewsBanner>
      <Container960>
        <NewsBannerContent>
          <h2>Test</h2>
        </NewsBannerContent>
      </Container960>
    </NewsBanner>
  );
};
