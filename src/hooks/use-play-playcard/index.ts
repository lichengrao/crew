import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';
import { Room, Suit } from 'typings';

interface Output {
  isPlayingPlayCard: boolean;
  playPlayCard: (
    playerId: string,
    suit: Suit,
    value: number,
    room: Room
  ) => Promise<void>;
}

const usePlayPlayCard = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isPlayingPlayCard, setIsPlayingPlayCard] = useState(false);

  const playPlayCard = async (
    playerId: string,
    suit: Suit,
    value: number,
    room: Room
  ) => {
    setIsPlayingPlayCard(true);
    try {
      //update playerId's hand
      const { playerIdToHandMap } = room;

      const arrayContainingCard = playerIdToHandMap[playerId][suit];
      arrayContainingCard.splice(
        arrayContainingCard.findIndex((card) => card.value === value),
        1
      );

      await db.collection('rooms').doc(roomId).update({ playerIdToHandMap });
    } catch (err) {
      console.error(err);
      setIsPlayingPlayCard(false);
    }
  };

  return { isPlayingPlayCard, playPlayCard };
};

export default usePlayPlayCard;
