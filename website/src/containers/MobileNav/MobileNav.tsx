import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Tooltip from '@atlaskit/tooltip';
import MobileHeader from '@atlaskit/mobile-header';
import Navigation, {
  AkContainerTitle,
  presetThemes,
} from '@atlaskit/navigation';

import Groups from './Groups';
import { AtlaskitIcon } from '../../components/AtlaskitIcon';
import { externalPackages as packages, content, patterns } from '../../site';

import GroupDrawer from './GroupDrawer';
import MenuIcon from '@atlaskit/icon/glyph/menu';
import SearchDrawer, { LinkComponentProps } from './SearchDrawer';
import SearchIcon from '@atlaskit/icon/glyph/search';
import { Link } from '../../components/WrappedLink';
import HeaderIcon from '../../components/HeaderIcon';
import { CONTAINER_HEADERS_CONFIG } from '../DesktopNav/constants';
import { toClass } from 'recompose';

export function Nav({
  location,
  closeNav,
}: RouteComponentProps & { closeNav: () => void }) {
  const [groupDrawerOpen, setGroupDrawerOpen] = React.useState<boolean>(false);
  const headerKey = location.pathname.split('/').filter(p => p)[0];
  const header = CONTAINER_HEADERS_CONFIG[headerKey];

  const groups = (
    <Groups
      onClick={closeNav}
      content={content}
      packages={packages}
      patterns={patterns}
    />
  );

  const [searchDrawerOpen, setSearchDrawerOpen] = React.useState<boolean>(
    false,
  );

  const [searchDrawerValue, setSearchDrawerValue] = React.useState<string>('');
  const isContainerNavOpen = location.pathname !== '/';
  const theme = isContainerNavOpen ? null : presetThemes.global;

  return (
    <Navigation
      containerTheme={theme}
      isCollapsible={!isContainerNavOpen}
      isOpen={isContainerNavOpen}
      isResizeable={false}
      globalCreateIcon={
        <Tooltip content="Menu" position="right">
          <MenuIcon label="Menu" />
        </Tooltip>
      }
      globalPrimaryItemHref={'/'}
      globalPrimaryIcon={
        <Tooltip content="Home" position="right">
          <AtlaskitIcon />
        </Tooltip>
      }
      globalSearchIcon={
        <Tooltip content="Search" position="right">
          <SearchIcon label="search" />
        </Tooltip>
      }
      onSearchDrawerOpen={() => setSearchDrawerOpen(true)}
      onCreateDrawerOpen={() => setGroupDrawerOpen(true)}
      drawers={[
        <SearchDrawer
          isOpen={searchDrawerOpen}
          closeDrawer={() => {
            setSearchDrawerOpen(false);
            setSearchDrawerValue('');
          }}
          searchDrawerValue={searchDrawerValue}
          updateSearchValue={({ target: { value } }) =>
            setSearchDrawerValue(value)
          }
          packages={packages}
          key="searchDrawer"
        />,
        <GroupDrawer
          key="groupDrawer"
          isOpen={groupDrawerOpen}
          closeDrawer={() => setGroupDrawerOpen(false)}
          pathname={location.pathname}
        />,
      ]}
      containerHeaderComponent={() =>
        isContainerNavOpen &&
        header && (
          <AkContainerTitle
            icon={<HeaderIcon {...header} />}
            text={header.label}
            href={`/${headerKey}`}
            linkComponent={toClass(
              ({ href, children, className, onClick }: LinkComponentProps) => (
                <Link onClick={onClick} to={href} className={className}>
                  {children}
                </Link>
              ),
            )}
          />
        )
      }
    >
      {isContainerNavOpen && groups}
    </Navigation>
  );
}

export default function MobileNav(props: RouteComponentProps) {
  const [drawerState, setDrawerState] = React.useState<string>('none');
  return (
    <MobileHeader
      navigation={(isOpen: boolean) =>
        isOpen && <Nav closeNav={() => setDrawerState('none')} {...props} />
      }
      menuIconLabel="Open navigation"
      drawerState={drawerState}
      onNavigationOpen={() => setDrawerState('navigation')}
      onDrawerClose={() => setDrawerState('none')}
    />
  );
}
