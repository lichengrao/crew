import { Card, Suit } from 'typings';

export const printCard = (card: Card): string => {
  return `${card.value}${Suit[card.suit]}`;
};

export const printCards = (cards: Card[]): string => {
  const strCards = cards.map((card) => printCard(card));
  return strCards.join(', ');
};
