import { Suit } from 'components';
import { PlayCard } from 'components';

export type Hand = Map<Suit, PlayCard[]>;

export const initHand = (): Hand => {
  const hand: Hand = new Map();
  hand.set(Suit.Pink, []);
  hand.set(Suit.Blue, []);
  hand.set(Suit.Green, []);
  hand.set(Suit.Yellow, []);
  hand.set(Suit.Rocket, []);
  return hand;
};

export const allCards = (hand: Hand): PlayCard[] => {
  return Array.from(hand.values()).reduce((all, cards) => {
    all.push(...cards);
    return all;
  }, []);
};

export const validCards = (hand: Hand, suit: Suit): PlayCard[] => {
  const cards: PlayCard[] | undefined = hand.get(suit);
  if (cards !== undefined && cards.length > 0) {
    return cards;
  } else {
    return allCards(hand);
  }
};

export const removeCard = (hand: Hand, playCard: PlayCard): boolean => {
  const cards: PlayCard[] | undefined = hand.get(playCard.suit);
  if (cards === undefined) {
    return false;
  }

  const i: number = cards.indexOf(playCard);
  if (i > -1) {
    cards.splice(i, 1);
    return true;
  } else {
    return false;
  }
};

export const cardFromString = (
  hand: Hand,
  card: string
): PlayCard | undefined => {
  const val: number = parseInt(card.charAt(0), 10);
  const suit: Suit = Suit[card.substring(1) as keyof typeof Suit];
  return hand.get(suit)?.find((playCard) => {
    return playCard.value === val && playCard.suit === suit;
  });
};
