import React, { FC } from 'react';

import { CardState, CardType, Clue, PlayCard, Suit, TaskCard } from 'typings';
import { Card } from './styles';

export const isRocketFour = (playcard: PlayCard): boolean => {
  return playcard.suit === Suit.Rocket && playcard.value === 4;
};

interface IProps {
  value: number;
  suit: Suit;
}

const PlayCardComponent: FC<IProps> = ({ value, suit }) => {
  return (
    <Card cardColor={Suit[suit] === 'Rocket' ? 'Gray' : Suit[suit]}>
      <div>{value}</div>
      <div>{Suit[suit][0]}</div>
    </Card>
  );
};

export default PlayCardComponent;
