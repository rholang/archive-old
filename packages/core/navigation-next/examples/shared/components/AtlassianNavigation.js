// @flow

import {
  AtlassianNavigation,
  AppSwitcher,
  Create,
  Help,
  Notifications,
  PrimaryButton,
  ProductHome,
  Profile,
  Search,
} from '@atlaskit/atlassian-navigation';
import Avatar from '@atlaskit/avatar';
import Badge from '@atlaskit/badge';
import { JiraIcon, JiraLogo } from '@atlaskit/logo';
// $FlowFixMe Remove this line once forwardRef is available in flow types
import React, { forwardRef, type Node } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { getAvatarUrl } from './helpers/avatar-data-url';

type ButtonLinkProps = {
  children: Node,
  href: string,
};

const ButtonLink = forwardRef(
  ({ href, children, ...rest }: ButtonLinkProps, ref) => (
    <Link {...rest} to={href} innerRef={ref}>
      {children}
    </Link>
  ),
);

const NavigationButton = (props: { href: string }) => (
  <PrimaryButton component={ButtonLink} {...props} />
);

const primaryItems = [
  <NavigationButton href="/projects">Projects</NavigationButton>,
  <NavigationButton href="/issues/search">Issues</NavigationButton>,
  <NavigationButton href="/">Dashboards</NavigationButton>,
];

const AppSwitcherExample = () => <AppSwitcher tooltip="Switch to..." />;

const CreateExample = () => <Create text="Create" />;

const HelpExample = () => <Help tooltip="Help" />;

const badge = () => <Badge appearance="important">3</Badge>;

const NotificationsExample = () => (
  <Notifications badge={badge} product="jira" tooltip="Notifications" />
);

const productHomeActiveStyle = {
  color: 'inherit',
};

const ProductHomeExample = () => (
  <NavLink activeStyle={productHomeActiveStyle} to="/">
    <ProductHome icon={JiraIcon} logo={JiraLogo} />
  </NavLink>
);

const avatarUrl = getAvatarUrl();

const ProfileExample = () => (
  <Profile
    icon={<Avatar src={avatarUrl} />}
    tooltip="Your profile and settings"
  />
);

const SearchExample = () => <Search text="Search" tooltip="Search" />;

const AppNavigationComponent = () => {
  return (
    <AtlassianNavigation
      primaryItems={primaryItems}
      renderAppSwitcher={AppSwitcherExample}
      renderCreate={CreateExample}
      renderHelp={HelpExample}
      renderNotifications={NotificationsExample}
      renderProductHome={ProductHomeExample}
      renderProfile={ProfileExample}
      renderSearch={SearchExample}
    />
  );
};

export default AppNavigationComponent;
