import { PlayCard } from 'components';
import { usePlayPlayCard } from 'hooks';
import React, { FC } from 'react';
import { Hand, Room, Suit } from 'typings';
import { PlayerHandContainer } from './styles';

interface IProps {
  hand: Hand;
  playerId: string;
  position: string;
  room: Room;
}

const PlayerHand: FC<IProps> = ({ hand, playerId, position, room }) => {
  let cardNum = 0;

  const { isPlayingPlayCard, playPlayCard } = usePlayPlayCard();

  const handleClick = async (playerId: string, suit: Suit, value: number) => {
    if (isPlayingPlayCard) return;
    console.log(room);

    await playPlayCard(playerId, suit, value, room);

    console.log(room);
    //check trick if trick is full
    //resolveTrick();

    setTimeout(() => console.log(room), 5000);
  };

  return (
    <PlayerHandContainer className={position}>
      {Object.values(hand).map((playcards) =>
        Object.values(playcards).map((card) => (
          <PlayCard
            key={`${cardNum++}`}
            suit={card.suit}
            value={card.value}
            handleClick={() => handleClick(playerId, card.suit, card.value)}
          />
        ))
      )}
    </PlayerHandContainer>
  );
};

export default PlayerHand;
