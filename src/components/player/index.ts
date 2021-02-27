import { Hand, initHand } from 'components';
import { Task } from 'components';
import { Trick } from 'components';

export interface Player {
  readonly playerId: number;
  myCards: Hand;
  myTricks: Trick[];
  myTasks: Task[];
}

export const initPlayer = (playerId: number): Player => {
  return {
    playerId: playerId,
    myCards: initHand(),
    myTricks: [],
    myTasks: [],
  };
};
