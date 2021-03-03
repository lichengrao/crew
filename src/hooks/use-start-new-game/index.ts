import { dealPlayCards, initShuffledDeck } from './helpers';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';

interface Output {
  isStartingNewGame: boolean;
  startNewGame: () => Promise<void>;
}

const useStartNewGame = (
  playerIds: string[] = ['1', '2', '3', '4']
): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isStartingNewGame, setIsStartingNewGame] = useState(false);

  const startNewGame = async () => {
    setIsStartingNewGame(true);
    const { playCards, taskCards } = initShuffledDeck();
    const { playerIdToHandMap, commanderId } = dealPlayCards(
      playCards,
      playerIds
    );

    console.log(playerIdToHandMap);

    try {
      await db.collection('rooms').doc(roomId).update({
        playerIdToHandMap,
        commanderId,
        taskCards,
        isGameDone: false,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsStartingNewGame(false);
    }
  };

  return { isStartingNewGame, startNewGame };
};

export default useStartNewGame;
