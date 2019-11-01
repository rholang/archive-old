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
      {
        to: '/packages',
        title: 'Packages',
        icon: <ComponentIcon label="Packages icon" />,
      },

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
        to: 'https://bitbucket.org/atlassian/atlaskit-mk-2',
        title: 'Repository',
        icon: <BitbucketIcon label="Repository" />,
        external: true,
      },
      {
        to: 'https://atlassian.design/',
        title: 'Design guidelines',
        icon: <DashboardIcon label="Design guidelines icon" />,
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
