import React from 'react';
import PageIcon from '@atlaskit/icon/glyph/page';
import { Directory } from '../../../types';
import renderNav from '../utils/renderNav';
import buildNavGroups from '../utils/buildNavGroups';

export type DocsNavProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  pathname: string;
  content: Directory;
  prefix: string;
};

export default function DocsNav({ pathname, content, prefix, onClick }: DocsNavProps) {
  const groups = buildNavGroups(prefix, PageIcon, pathname, content);
  return <div>{renderNav(groups, { pathname, onClick })}</div>;
}

