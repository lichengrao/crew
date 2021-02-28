import { generateDeck } from 'components';
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
    const newDeck = generateDeck();
    const newPlayCardDeck = newDeck.playCards;

    try {
      await db.collection('rooms').doc(roomId).update({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsStartingNewGame(false);
    }
  };

  return { isStartingNewGame, startNewGame };
};

export default useStartNewGame;
