import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, H1 } from 'components';

const Home: FC = () => {
  const history = useHistory();

  const goToJoinRoom = () => {
    history.push('/r/AAAA'); // for testing
  };

  return (
    <>
      <H1>Home Page</H1>
      <Button onClick={goToJoinRoom}>Go to Game Room</Button>
    </>
  );
};

export default Home;
