import { initDeck } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';

interface Output {
  isStartingNewGame: boolean;
  startNewGame: () => Promise<void>;
}

const useStartNewGame = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isStartingNewGame, setIsStartingNewGame] = useState(false);

  const startNewGame = async () => {
    setIsStartingNewGame(true);
    const { playCards, taskCards } = initDeck();

    console.log(playCards.slice(10, 20));

    try {
      await db.collection('rooms').doc(roomId).update({
        player1Hand: null,
        // player2Hand: playCards.slice(10, 20),
        // player3Hand: playCards.slice(20, 30),
        // player4Hand: playCards.slice(30, 40),
        taskCards: null,
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
