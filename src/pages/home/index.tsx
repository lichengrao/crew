import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, H1 } from 'components';
import { useCurrentUser } from 'hooks';

const Home: FC = () => {
  const history = useHistory();
  const currentUser = useCurrentUser();

  const goToCreateRoom = () => {
    history.push('/create');
  };

  const goToJoinRoom = () => {
    history.push('/join');
  };

  const goToLogin = () => {
    history.push('/login');
  };

  return (
    <>
      <H1>Home</H1>
      <Button onClick={goToCreateRoom}>Create Room</Button>
      <Button onClick={goToJoinRoom}>Join Room</Button>
      {currentUser ? <></> : <Button onClick={goToLogin}>Login</Button>}
    </>
  );
};

export default Home;
