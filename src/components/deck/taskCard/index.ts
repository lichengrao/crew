import { Task } from 'components';

import { CardType, Suit } from 'components';

export interface TaskCard {
  readonly value: number;
  readonly suit: Suit;
  readonly type: CardType.Task;
  task?: Task;
}

export const initTaskCard = (value: number, suit: Suit): TaskCard => {
  return {
    value: value,
    suit: suit,
    type: CardType.Task,
    task: undefined,
  };
};
