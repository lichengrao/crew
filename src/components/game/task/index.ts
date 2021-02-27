import { TaskCard } from 'components';

import { TaskToken } from '../token';

export enum TaskState {
  InProgressLocked,
  InProgressUnlocked,
  Success,
  Failure,
}

export interface Task {
  taskCard: TaskCard;
  taskToken?: TaskToken;
  playerId: number;
  taskState: TaskState;
}

export const initTask = (taskCard: TaskCard, playerId: number): Task => {
  return {
    taskCard: taskCard,
    playerId: playerId,
    taskState: TaskState.InProgressUnlocked,
  };
};
