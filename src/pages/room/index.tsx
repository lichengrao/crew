import { Button, PlayCardComponent } from 'components';
import { Suit } from 'typings';

import { Board, Center, Container, PlayerHand, PlayerHandArea } from './styles';
import { useRoom, useStartNewGame } from 'hooks';

function Room() {
  const { isFetching, room } = useRoom();
  const { isStartingNewGame, startNewGame } = useStartNewGame();

  if (isFetching) return <div>Finding Room</div>;
  if (!room) return <div>Can't find Room</div>;

  const handleStartNewGame = async () => {
    if (!isStartingNewGame) {
      await startNewGame();
    }
  };

  return (
    <>
      <Container>
        <Board>
          <Center>Center Area</Center>
          <PlayerHandArea className="top">
            <PlayerHand className="top">top</PlayerHand>
          </PlayerHandArea>
          <PlayerHandArea className="left">
            <PlayerHand className="left">left</PlayerHand>
          </PlayerHandArea>
          <PlayerHandArea className="bottom">
            <PlayerHand className="bottom">
              <PlayCardComponent value={1} suit={Suit.Pink} />
            </PlayerHand>
          </PlayerHandArea>
          <PlayerHandArea className="right">
            <PlayerHand className="right">right</PlayerHand>
          </PlayerHandArea>
        </Board>
      </Container>
      <Button disabled={isStartingNewGame} onClick={handleStartNewGame}>
        Create New Game
      </Button>
    </>
  );
}

export default Room;
