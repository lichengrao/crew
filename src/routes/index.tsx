import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const CreateRoom = lazy(() => import('pages/create-room'));
const Home = lazy(() => import('pages/home'));
const JoinRoom = lazy(() => import('pages/join-room'));
const Login = lazy(() => import('pages/login'));
const Room = lazy(() => import('pages/room'));

const Routes = () => (
  <Switch>
    <Suspense fallback={<h1>Loading Page...</h1>}>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={CreateRoom} />
      <Route exact path="/join" component={JoinRoom} />
      <Route path="/login" component={Login} />
      <Route path="/r/:roomId" component={Room} />
    </Suspense>
  </Switch>
);

export default Routes;
