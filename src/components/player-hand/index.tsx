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
    await playPlayCard(playerId, suit, value, room);
  };

  return (
    <PlayerHandContainer className={position}>
      {Object.values(hand).map((playcards) =>
        Object.values(playcards).map((card) => (
          <PlayCard
            key={`${cardNum++}`}
            playerId={playerId}
            suit={card.suit}
            value={card.value}
            room={room}
            handleClick={() => handleClick(playerId, card.suit, card.value)}
          />
        ))
      )}
    </PlayerHandContainer>
  );
};

export default PlayerHand;
