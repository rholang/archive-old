import React from 'react';
import PropTypes from 'prop-types';
import { Route, matchPath } from 'react-router-dom';

import { AkContainerNavigationNested as NestedNav } from '@atlaskit/navigation';

import DefaultNav from './navigations/Default';
import PackagesNav from './navigations/Packages';
import DocsNav from './navigations/Docs';
import PatternsNav from './navigations/Patterns';

import { Directory } from '../../types';
import * as fs from '../../utils/fs';

export type GroupsProps = {
  content: Directory;
  patterns: Directory;
  packages: Directory;
  onClick?: (e: Event) => void | undefined;
};

export type GroupsState = {
  parentRoute?: Object | null;
  stack: Array<React.ReactNode>;
};

export type GroupsContext = {
  router: { route: Route };
};

export default class Groups extends React.Component<GroupsProps, GroupsState> {
  static contextTypes = {
    router: PropTypes.object,
  };

  state: GroupsState = {
    parentRoute: null,
    stack: [[]],
  };

  UNSAFE_componentWillMount() {
    this.resolveRoutes(this.context.router.route.location.pathname);
  }

  UNSAFE_componentWillReceiveProps(
    nextProps: GroupsProps,
    nextContext: GroupsContext,
  ) {
    this.resolveRoutes((nextContext.router.route as any).location.pathname);
  }

  resolveRoutes(pathname: string) {
    const { content, packages, patterns } = this.props;
    const contentDir = fs.getDirectories(content.children);
    const menuBuilder = contentDir.map(item => {
      return (
        <Route path={`/content/${item.id}`}>
          <DocsNav
            pathname={pathname}
            prefix={`${item.id}`}
            content={content}
          />
        </Route>
      );
    });

    const menuRoot = [
      <Route path="/">
        <DefaultNav pathname={pathname} />
      </Route>,
    ];

    const menuPackages = [
      <Route path="/packages">
        <PackagesNav pathname={pathname} packages={packages} />
      </Route>,
      <Route path="/packages">
        <PackagesNav pathname={pathname} packages={packages} />
      </Route>,
    ];

    const menuPatterns = [
      <Route path="/patterns">
        <PatternsNav pathname={pathname} patterns={patterns} />
      </Route>,
    ];

    const menus = [
      ...menuRoot,
      ...menuBuilder,
      ...menuPackages,
      ...menuPatterns,
    ];

    const stack = menus
      .filter(menu => matchPath(pathname, menu.props))
      .map(menu => [React.cloneElement(menu, { key: menu.props.path })]);

    const parentRoute =
      stack.length > 1 ? stack[stack.length - 2][0].props.path : null;

    this.setState({ parentRoute, stack });
  }

  render() {
    console.log('desktiopnav');
    const { stack } = this.state;
    return <NestedNav stack={stack} />;
  }
}
