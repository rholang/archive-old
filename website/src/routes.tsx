import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import Home from './pages/Home';

const ModalTransition = React.lazy(() => import('@atlaskit/modal-dialog'));
const Package = React.lazy(() => import('./pages/Package'));
const Pattern = React.lazy(() => import('./pages/Pattern'));
const Document = React.lazy(() => import('./pages/Document'));
const FourOhFour = React.lazy(() => import('./pages/FourOhFour'));
const PackagesList = React.lazy(() => import('./pages/PackagesList'));
const PatternsInfo = React.lazy(() => import('./pages/PatternsInfo'));
const PackageDocument = React.lazy(() => import('./pages/PackageDocument'));
const ChangeLogExplorer = React.lazy(() => import('./pages/ChangeLogExplorer'));
const ChangelogModal = React.lazy(() =>
  import('./pages/Package/ChangelogModal'),
);
import { Props as ChangelogModalProps } from './pages/Package/ChangelogModal';
import { Props as ExamplesModalProps } from './pages/Package/ExamplesModal';

const ExamplesModal = React.lazy(() => import('./pages/Package/ExamplesModal'));

const home = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
];

//const staticDocs = [...routesBuilderDocs]
const staticDocs = [
  {
    path: '/content/:rootId/:docId*',
    component: Document,
  },
  {
    path: '/content/',
    component: Document,
  },
];
/**
 * We do not support patterns on the current website
 * This exist as part of the migration from old build
 * Keeping it here for reference
 */
// @ts-ignore pattern is here for reference, it is not used on website anywhere
const patterns = [
  { path: '/patterns/:patternId*', component: Pattern },
  {
    path: '/patterns',
    component: PatternsInfo,
    exact: true,
  },
];

const packagesDocs = [
  { path: '/packages/:groupId/:pkgId/docs/:docId', component: PackageDocument },
  { path: '/packages/:groupId/:pkgId', component: Package },
  {
    path: '/packages',
    component: PackagesList,
  },
];

const examples = [
  {
    path: '/packages/examples',
    component: ({ location }: RouteComponentProps) => (
      <Redirect to={location.pathname.replace('/examples', '')} />
    ),
  },
];

const changelogs = [
  { path: '/changelog/:groupId/:pkgId/:semver?', component: ChangeLogExplorer },
];

const fourOhFour = [
  {
    path: '/error',
    component: FourOhFour,
  },
];

const redirects = [
  {
    path: '/mk-2',
    render: (props: RouteComponentProps) => (
      <Redirect to={props.location.pathname.replace('/mk-2', '')} />
    ),
  },
  {
    path: '/components',
    render: (props: RouteComponentProps) => (
      <Redirect
        to={props.location.pathname.replace('/components', '/packages/core')}
      />
    ),
  },
];

export const pageRoutes = [
  ...redirects,
  ...home,
  ...staticDocs,
  ...packagesDocs,
  ...examples,
  ...changelogs,
  ...fourOhFour,
  // fallback url in case there are no matches
  {
    component: FourOhFour,
  },
];

const changelogModal = [
  {
    path: '/packages/:groupId/:pkgId/changelog/:semver?',
    children: (props: RouteComponentProps) => (
      <ModalTransition>
        {props.match && <ChangelogModal {...props as ChangelogModalProps} />}
      </ModalTransition>
    ),
  },
];

const examplesModal = [
  {
    path: '/packages/:groupId/:pkgId/example/:exampleId',
    children: (props: RouteComponentProps) => (
      <ModalTransition>
        {props.match && <ExamplesModal {...props as ExamplesModalProps} />}
      </ModalTransition>
    ),
  },
];

export const modalRoutes = [...changelogModal, ...examplesModal];
