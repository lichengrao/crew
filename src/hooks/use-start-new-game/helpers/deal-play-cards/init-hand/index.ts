import { Hand, PlayCard } from 'typings';

export const initHand = (): Hand => {
  const hand: Hand = {
    0: <PlayCard[]>[],
    1: <PlayCard[]>[],
    2: <PlayCard[]>[],
    3: <PlayCard[]>[],
    4: <PlayCard[]>[],
  };
  return hand;
};
