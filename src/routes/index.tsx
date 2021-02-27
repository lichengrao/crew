import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Room = lazy(() => import('pages/room'));

const Routes = () => (
  <Switch>
    <Suspense fallback={<h1>Loading Page...</h1>}>
      <Route exact path="/" component={Room} />
    </Suspense>
  </Switch>
);

export default Routes;
