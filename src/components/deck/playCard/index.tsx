import React, { FC } from 'react';

import { CardState, CardType, Clue, PlayCard, Suit, TaskCard } from 'typings';
import { Card } from './styles';

export const initPlayCard = (
  value: number,
  suit: Suit,
  playerId = -1,
  state = CardState.Deck
  //clue?: Clue,
  //taskCard?: TaskCard
): PlayCard => {
  return {
    value: value,
    suit: suit,
    type: CardType.Play,
    playerId: playerId,
    state: state,
    //clue: clue,
    //taskCard: taskCard,
  };
};

export const isRocketFour = (playcard: PlayCard): boolean => {
  return playcard.suit === Suit.Rocket && playcard.value === 4;
};

interface IProps {
  value: number;
  suit: Suit;
}

const PlayCardComponent: FC<IProps> = ({ value, suit }) => {
  return (
    <Card>
      <div>{value}</div>
      <div>{Suit[suit]}</div>
    </Card>
  );
};

export default PlayCardComponent;
