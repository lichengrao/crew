import { Deck, PlayCard, TaskCard } from 'typings';
import { initPlayCard, initTaskCard } from './init-card';

export const initUnshuffledDeck = (): Deck => {
  const playCards: PlayCard[] = Array.from(Array(40).keys()).map((i) => {
    return initPlayCard((i % 9) + 1, Math.floor(i / 9));
  });

  const taskCards: TaskCard[] = Array.from(Array(36).keys()).map((i) => {
    return initTaskCard((i % 9) + 1, Math.floor(i / 9));
  });

  return { playCards, taskCards };
};
