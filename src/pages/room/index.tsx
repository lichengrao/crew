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
          <Center>:)</Center>
          <PlayerHandArea className="top">
            <PlayerHand className="top">
              {room.player3Hand.map((card) => (
                <PlayCardComponent value={card.value} suit={card.suit} />
              ))}
            </PlayerHand>
          </PlayerHandArea>
          <PlayerHandArea className="left">
            <PlayerHand className="left">
              {room.player2Hand.map((card) => (
                <PlayCardComponent value={card.value} suit={card.suit} />
              ))}
            </PlayerHand>
          </PlayerHandArea>
          <PlayerHandArea className="bottom">
            <PlayerHand className="bottom">
              {room.player1Hand.map((card) => (
                <PlayCardComponent value={card.value} suit={card.suit} />
              ))}
            </PlayerHand>
          </PlayerHandArea>
          <PlayerHandArea className="right">
            <PlayerHand className="right">
              {room.player4Hand.map((card) => (
                <PlayCardComponent value={card.value} suit={card.suit} />
              ))}
            </PlayerHand>
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
