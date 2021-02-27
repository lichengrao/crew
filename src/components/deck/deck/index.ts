import { Card, printCards } from 'components';
import { initPlayCard, PlayCard } from 'components';
import { initTaskCard, TaskCard } from 'components';

export interface Deck {
  playCards: PlayCard[];
  taskCards: TaskCard[];
}

export const initDeck = (): Deck => {
  const deck: Deck = generateDeck();
  shuffleCards(deck.playCards);
  shuffleCards(deck.taskCards);
  return deck;
};

export const shuffleCards = (cards: Card[]): void => {
  for (let index = 0; index < cards.length; index++) {
    const k: number = Math.floor(Math.random() * (index + 1)); //generate random number between 0 and index, inclusive
    const temp: Card = cards[k];
    cards[k] = cards[index];
    cards[index] = temp;
  }
};

export const generateDeck = (): Deck => {
  const playCards: PlayCard[] = Array.from(Array(40).keys()).map((i) => {
    return initPlayCard((i % 9) + 1, Math.floor(i / 9));
  });

  const taskCards: TaskCard[] = Array.from(Array(36).keys()).map((i) => {
    return initTaskCard((i % 9) + 1, Math.floor(i / 9));
  });

  taskCards.forEach((taskCard: TaskCard, index: number) => {
    playCards[index].taskCard = taskCard;
  });

  const deck: Deck = {
    playCards: playCards,
    taskCards: taskCards,
  };

  return deck;
};

export const printDeck = (deck: Deck): string => {
  const playCards: string = printCards(deck.playCards);
  const taskCards: string = printCards(deck.taskCards);
  return `Play Cards: ${playCards}\nTask Cards: ${taskCards}`;
};
