import { Button } from 'components';
import { useStartNewGame } from 'hooks';
import React, { FC } from 'react';
import { Room } from 'typings';
import CurrentTrickArea from './current-trick-area';
import PlayerHandAreas from './player-hand-areas';
import { Board, Container } from './styles';

interface IProps {
  room: Room;
}
const GameRoom: FC<IProps> = ({ room }) => {
  const { isStartingNewGame, startNewGame } = useStartNewGame();

  const handleStartNewGame = async () => {
    if (!isStartingNewGame) {
      await startNewGame(room.playerIds);
    }
  };

  const { playerIds, playerIdToHandMap } = room;

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
    </>
  );
};

export default GameRoom;
