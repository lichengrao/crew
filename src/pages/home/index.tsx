import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, H1 } from 'components';
import { useCurrentUser } from 'hooks';

const Home: FC = () => {
  const history = useHistory();
  const currentUser = useCurrentUser();

  const goToJoinRoom = () => {
    history.push('/r/AAAA'); // for testing
  };

  const goToLogin = () => {
    history.push('/login');
  };

  console.log(currentUser);

  return (
    <>
      <H1>Home Page</H1>
      <Button onClick={goToJoinRoom}>Go to Game Room</Button>
      {currentUser ? <></> : <Button onClick={goToLogin}>Login</Button>}
    </>
  );
};

export default Home;
