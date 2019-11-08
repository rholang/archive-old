import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import React from 'react';
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';

const Progress = styled.div`
  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    display: none;
  }
`;
const items: Stages = [
  {
    id: 'test-1',
    label: 'Testnet-1',
    percentageComplete: 100,
    status: 'visited',
    href: '#',
  },
  {
    id: 'visited-1',
    label: 'Testnet-2',
    percentageComplete: 100,
    status: 'visited',
    href: '#',
  },
  {
    id: 'current-1',
    label: 'Testnet-3',
    percentageComplete: 100,
    status: 'visited',
    href: '#',
  },
  {
    id: 'unvisited-1',
    label: 'Hardening-Phase',
    percentageComplete: 50,
    status: 'current',
    href: '#',
  },
  {
    id: 'unvisited-2',
    label: 'Mainnet',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'unvisited-3',
    label: 'Venus update',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
];

export default () => (
  <Progress>
    <ProgressTracker items={items} />
  </Progress>
);
