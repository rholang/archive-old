import React from 'react';
import Media from 'react-media';
import GlobalTheme from '@atlaskit/theme';
import Page from '@atlaskit/page';
import { RouteProps } from 'react-router';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import { DESKTOP_BREAKPOINT_MIN } from '../constants';
import { pageRoutes } from '../routes';
import ErrorBoundary from '../components/ErrorBoundary';
const DesktopNav = React.lazy(() => import('./DesktopNav'));
const MobileNav = React.lazy(() => import('./MobileNav'));

export default () => {
  return (
    <GlobalTheme.Provider value={() => ({ mode: 'light' })}>
      <BrowserRouter>
        <Media query={`(min-width: ${DESKTOP_BREAKPOINT_MIN}px)`}>
          {(isDesktop: boolean) => (
            <React.Suspense fallback={<></>}>
              <Switch>
                <Route
                  render={appRouteDetails => (
                    <Page
                      navigation={
                        isDesktop ? <DesktopNav {...appRouteDetails} /> : false
                      }
                    >
                      {!isDesktop && <MobileNav {...appRouteDetails} />}
                      <ErrorBoundary>
                        <Switch>
                          {pageRoutes.map((routeProps: RouteProps, index) => (
                            <Route {...routeProps} key={index} />
                          ))}
                        </Switch>
                      </ErrorBoundary>
                    </Page>
                  )}
                />
              </Switch>
            </React.Suspense>
          )}
        </Media>
      </BrowserRouter>
    </GlobalTheme.Provider>
  );
};
