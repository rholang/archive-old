import React from 'react';
import { Link, LinkProps } from '../../components/WrappedLink';
import { toClass } from 'recompose';
import {
  AkSearchDrawer,
  AkNavigationItem,
} from '@atlaskit/navigation';
import BasicQuickSearch from '../../components/Search/BasicQuickSearch';

import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';

import * as fs from '../../utils/fs';
import { Directory } from '../../types';
import { AtlaskitIcon } from '../../components/AtlaskitIcon';

export type LinkComponentProps = LinkProps & {
  href: string | Record<string, string | Location>;
};

const LinkComponent = toClass(
  ({ href, children, onClick, className }: LinkComponentProps) => (
    <Link className={className} onClick={onClick} to={href}>
      {children}
    </Link>
  ),
);

type NavItemProps = {
  dirId: string;
  id: string;
  closeDrawer: (e: Event) => void;
};

const NavItem = ({ dirId, id, closeDrawer }: NavItemProps) => (
  <AkNavigationItem
    onClick={closeDrawer}
    href={`/packages/${dirId}/${id}`}
    linkComponent={LinkComponent}
    text={fs.titleize(id)}
  />
);

const SearchDrawer = ({
  isOpen,
  closeDrawer,
  searchDrawerValue,
  updateSearchValue,
  packages,
}: {
  isOpen: boolean;
  closeDrawer: (e: Event) => void;
  searchDrawerValue: string;

  // TODO: [strictFunctionTypes] Fix any
  updateSearchValue: (e: React.ChangeEvent<any>) => void;
  packages: Directory;
}) => (
  <AkSearchDrawer
    backIcon={<ArrowLeftIcon label="go back" />}
    isOpen={isOpen}
    key="search"
    width= 'narrow'
    onBackButton={closeDrawer}
    primaryIcon={<AtlaskitIcon monochrome />}
  >
    <BasicQuickSearch/>
  </AkSearchDrawer>
);

export default SearchDrawer;
