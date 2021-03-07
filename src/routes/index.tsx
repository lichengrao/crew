import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));
const Room = lazy(() => import('pages/room'));

const Routes = () => (
  <Switch>
    <Suspense fallback={<h1>Loading Page...</h1>}>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/r/:roomId" component={Room} />
    </Suspense>
  </Switch>
);

export default Routes;
