import { PlayCard } from 'components';
import { TaskCard } from 'components';

export type Card = PlayCard | TaskCard;

export enum Suit {
  Pink,
  Blue,
  Green,
  Yellow,
  Rocket,
}

export enum CardType {
  Play,
  Task,
}

export enum CardState {
  Deck,
  Hand,
  Clue,
  Played,
}

export enum Clue {
  High,
  Low,
  Only,
}

export const printCard = (card: Card): string => {
  return `${card.value}${Suit[card.suit]}`;
};

export const printCards = (cards: Card[]): string => {
  const strCards = cards.map((card) => printCard(card));
  return strCards.join(', ');
};
