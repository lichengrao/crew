import { PlayCard, Suit, TaskCard } from 'typings';

export const initPlayCard = (value: number, suit: Suit): PlayCard => {
  return {
    value: value,
    suit: suit,
  };
};

export const initTaskCard = (value: number, suit: Suit): TaskCard => {
  return {
    value: value,
    suit: suit,
  };
};
