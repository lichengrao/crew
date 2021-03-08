import React, { FC } from 'react';

import { Button, H1 } from 'components';
import { Board, Container } from './styles';
import {
  useCurrentUser,
  useJoinRoom,
  useLeaveRoom,
  useRoom,
  useStartNewGame,
} from 'hooks';
import PlayerHandAreas from './player-hand-areas';
import CurrentTrickArea from './current-trick-area';

const Room: FC = () => {
  const user = useCurrentUser();
  const { isJoining, joinRoom } = useJoinRoom();
  const { isLeaving, leaveRoom } = useLeaveRoom();
  const { isFetching, room } = useRoom();
  const { isStartingNewGame, startNewGame } = useStartNewGame();

  if (isFetching) return <H1>Finding Room</H1>;
  if (!room) return <H1>Can't find Room</H1>;

  const { playerIds, playerIdToHandMap } = room;

  const handleJoinRoom = async () => {
    if (user && !isJoining) {
      await joinRoom(user.id);
    }
  };

  const handleLeaveRoom = async () => {
    if (user && !isLeaving) {
      await leaveRoom('1');
    }
  };

  const handleStartNewGame = async () => {
    if (!isStartingNewGame) {
      await startNewGame();
    }
  };

  return (
    <>
      <Container>
        <Board>
          <CurrentTrickArea room={room} />
          <PlayerHandAreas
            playerIds={playerIds}
            playerIdToHandMap={playerIdToHandMap}
            room={room}
          />
        </Board>
      </Container>
      <Button disabled={isStartingNewGame} onClick={handleStartNewGame}>
        Create New Game
      </Button>
      {user && (
        <>
          <Button onClick={handleJoinRoom}>Join Room</Button>
          <Button onClick={handleLeaveRoom}>Leave Room</Button>
        </>
      )}
    </>
  );
};

export default Room;
