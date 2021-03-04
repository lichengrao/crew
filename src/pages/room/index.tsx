import { Button } from 'components';

import { Board, Center, Container } from './styles';
import { useRoom, useStartNewGame } from 'hooks';
import PlayerHandAreas from './player-hand-areas';
import CurrentTrickArea from './current-trick-area';

function Room() {
  const { isFetching, room } = useRoom();
  const { isStartingNewGame, startNewGame } = useStartNewGame();

  if (isFetching) return <div>Finding Room</div>;
  if (!room) return <div>Can't find Room</div>;

  const { playerIds, playerIdToHandMap } = room;

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
    </>
  );
}

export default Room;
