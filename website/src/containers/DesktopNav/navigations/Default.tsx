import React from 'react';
import HomeIcon from '@atlaskit/icon/glyph/home';
import ComponentIcon from '@atlaskit/icon/glyph/component';
import OverviewIcon from '@atlaskit/icon/glyph/overview';
import { BitbucketIcon } from '@atlaskit/logo';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import renderNav from '../utils/renderNav';

const defaultNavGroups = [
  {
    items: [
      {
        to: '/',
        title: 'Welcome',
        icon: <HomeIcon label="Welcome icon" />,
      },
    ],
  },
  {
    title: 'Get Started',
    items: [
      {
        to: '/content/guide',
        title: 'Documentation',
        icon: <OverviewIcon label="Documentation" />,
      },
      {
        to: '/content/tutorials',
        title: 'Tutorials',
        icon: <OverviewIcon label="Tutorials" />,
      },
      /* {
        to: '/packages',
        title: 'Packages',
        icon: <ComponentIcon label="Packages icon" />,
      },*/

      // {
      //   to: '/patterns',
      //   title: 'Patterns',
      //   icon: <IssuesIcon label="Patterns icon" />,
      // },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        to: 'https://github.com/rchain/',
        title: 'Official Rchain Repository',
        icon: <BitbucketIcon label="Repository" />,
        external: true,
      },
      {
        to: 'https://github.com/rchain-community',
        title: 'Rchain Community Repository',
        icon: <BitbucketIcon label="Repository" />,
        external: true,
      },
      {
        to: 'https://github.com/tgrospic/rnode-client-js',
        title: 'RNode Client',
        icon: <BitbucketIcon label="Repository" />,
        external: true,
      },
      {
        to: 'https://github.com/fabcotech/rchain-toolkit',
        title: 'RChain Toolkit',
        icon: <BitbucketIcon label="Repository" />,
        external: true,
      },

      {
        to: 'https://developer.rchain.coop/',
        title: 'Developer Site',
        icon: <DashboardIcon label="Rholang Cloud" />,
        external: true,
      },
      {
        to:
          'https://rchain.atlassian.net/wiki/spaces/DOC/pages/3014657/Reading+List',
        title: 'Blockchain 101',
        icon: <DashboardIcon label="Rholang Cloud" />,
        external: true,
      },
      {
        to: 'http://rchain.cloud',
        title: 'Rholang Cloud',
        icon: <DashboardIcon label="Rholang Cloud" />,
        external: true,
      },
      {
        to: 'https://myrchainwallet.com',
        title: 'My Rchain Wallet',
        icon: <DashboardIcon label="Rholang Cloud" />,
        external: true,
      },
    ],
  },
];

export type DefaultNavProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  pathname: string;
};

export default function DefaultNav({ pathname, onClick }: DefaultNavProps) {
  return <div>{renderNav(defaultNavGroups, { pathname, onClick })}</div>;
}
