import { Task } from "components/game/task";

import { CardType, Suit } from "./card";

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
