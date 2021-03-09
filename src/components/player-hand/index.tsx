import { PlayCardBack, PlayCardFront } from 'components';
import { useCurrentUser, usePlayPlayCard } from 'hooks';
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
  const user = useCurrentUser();
  let cardNum = 0;

  const { isPlayingPlayCard, playPlayCard } = usePlayPlayCard();

  const handleClick = async (suit: Suit, value: number) => {
    if (isPlayingPlayCard) return;

    await playPlayCard(user?.id, suit, value, room);
  };

  return (
    <PlayerHandContainer className={position}>
      {Object.values(hand).map((playcards) =>
        Object.values(playcards).map((card) =>
          user?.id === playerId ? (
            <PlayCardFront
              key={`${cardNum++}`}
              suit={card.suit}
              value={card.value}
              handleClick={() => handleClick(card.suit, card.value)}
            />
          ) : (
            <PlayCardBack />
          )
        )
      )}
    </PlayerHandContainer>
  );
};

export default PlayerHand;
