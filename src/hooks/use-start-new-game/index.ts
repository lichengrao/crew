import { dealPlayCards, getNewTrick, initShuffledDeck } from './helpers';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';

interface Output {
  isStartingNewGame: boolean;
  startNewGame: (playerIds: string[]) => Promise<void>;
}

const useStartNewGame = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isStartingNewGame, setIsStartingNewGame] = useState(false);

  const startNewGame = async (playerIds: string[] = ['1', '2', '3', '4']) => {
    setIsStartingNewGame(true);
    const { playCards, taskCards } = initShuffledDeck();
    const { playerIdToHandMap, commanderId } = dealPlayCards(
      playCards,
      playerIds
    );
    const currentTrick = getNewTrick(playerIds);

    try {
      await db.collection('rooms').doc(roomId).update({
        currentTrick,
        playerIdToHandMap,
        commanderId,
        taskCards,
        isGameDone: false,
        isWaiting: false,
        playerIds,
        currentPlayerTurn: commanderId,
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
