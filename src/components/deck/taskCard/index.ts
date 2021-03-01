import { CardType, Suit, TaskCard } from 'typings';

export const initTaskCard = (value: number, suit: Suit): TaskCard => {
  return {
    value: value,
    suit: suit,
    type: CardType.Task,
    //task: undefined,
  };
};
