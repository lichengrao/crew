import { Button } from 'components';

import { Board, Center, Container } from './styles';
import { useRoom, useStartNewGame } from 'hooks';
import PlayerHands from './player-hands';

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
          <Center>hi</Center>
          <PlayerHands
            playerIds={playerIds}
            playerIdToHandMap={playerIdToHandMap}
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
