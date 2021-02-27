import { CardState, CardType, Clue, Suit } from 'components';
import { TaskCard } from 'components';

export interface PlayCard {
  readonly value: number;
  readonly suit: Suit;
  readonly type: CardType.Play;
  playerId: number;
  state: CardState;
  clue?: Clue;
  taskCard?: TaskCard;
}

export const initPlayCard = (
  value: number,
  suit: Suit,
  playerId = -1,
  state = CardState.Deck,
  clue?: Clue,
  taskCard?: TaskCard
): PlayCard => {
  return {
    value: value,
    suit: suit,
    type: CardType.Play,
    playerId: playerId,
    state: state,
    clue: clue,
    taskCard: taskCard,
  };
};

export const isRocketFour = (playcard: PlayCard): boolean => {
  return playcard.suit === Suit.Rocket && playcard.value === 4;
};
