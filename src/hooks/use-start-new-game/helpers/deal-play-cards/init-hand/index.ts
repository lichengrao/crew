import { Hand, Suit } from 'typings';

export const initHand = (): Hand => {
  const hand: Hand = new Map();
  hand.set(Suit.Pink, []);
  hand.set(Suit.Blue, []);
  hand.set(Suit.Green, []);
  hand.set(Suit.Yellow, []);
  hand.set(Suit.Rocket, []);
  return hand;
};
