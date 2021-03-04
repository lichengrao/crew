import { PlayCard } from 'components';
import React, { FC } from 'react';
import { Hand } from 'typings';
import { PlayerHandContainer } from './styles';

interface IProps {
  position: string;
  hand: Hand;
}

const PlayerHand: FC<IProps> = ({ position, hand }) => {
  let cardNum = 0;
  return (
    <PlayerHandContainer className={position}>
      {Object.values(hand).map((playcards) =>
        Object.values(playcards).map((card) => (
          <PlayCard
            key={`card${cardNum++}`}
            suit={card.suit}
            value={card.value}
          />
        ))
      )}
    </PlayerHandContainer>
  );
};

export default PlayerHand;
