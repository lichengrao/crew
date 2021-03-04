import { PlayCard } from 'typings';

export const sortPlayCardsByValue = (playcards: PlayCard[]): void => {
  playcards.sort((a: PlayCard, b: PlayCard) => a.value - b.value);
};
