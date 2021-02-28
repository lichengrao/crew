import { Task, TaskCard, TaskState } from 'typings';

export const initTask = (taskCard: TaskCard, playerId: number): Task => {
  return {
    taskCard: taskCard,
    playerId: playerId,
    taskState: TaskState.InProgressUnlocked,
  };
};
