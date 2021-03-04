import { PlayCard, Suit } from 'typings';

export const isRocketFour = (playcard: PlayCard): boolean => {
  return playcard.suit === Suit.Rocket && playcard.value === 4;
};
