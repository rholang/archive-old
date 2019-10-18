import React from 'react';
import { RouteProps } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { pageRoutes } from './routes';

console.log(
  <Switch>
    {pageRoutes.map((routeProps: RouteProps, index) => (
      <Route {...routeProps} key={index} />
    ))}
  </Switch>,
);
