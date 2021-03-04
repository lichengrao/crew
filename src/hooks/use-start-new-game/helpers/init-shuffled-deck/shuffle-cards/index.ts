import { Card } from 'typings';

export const shuffleCards = (cards: Card[]): void => {
  for (let index = 0; index < cards.length; index++) {
    const k: number = Math.floor(Math.random() * (index + 1)); //generate random number between 0 and index, inclusive
    const temp: Card = cards[k];
    cards[k] = cards[index];
    cards[index] = temp;
  }
};
