import React, { FC } from 'react';

import { H1 } from 'components';
import { useRoom } from 'hooks';
import WaitRoom from './wait-room';
import GameRoom from './game-room';

const Room: FC = () => {
  const { isFetching, room } = useRoom();

  if (isFetching) return <H1>Finding Room</H1>;
  if (!room) return <H1>Can't find Room</H1>;

  const { isWaiting } = room;

  return isWaiting ? <WaitRoom room={room} /> : <GameRoom room={room} />;
};

export default Room;
