import { TaskToken, TaskTokenCondition, TaskTokenNumber } from 'typings';

export const initTaskToken = (
  taskTokenNumber: TaskTokenNumber,
  taskTokenCondition: TaskTokenCondition
): TaskToken => {
  return {
    taskTokenNumber: taskTokenNumber,
    taskTokenCondition: taskTokenCondition,
  };
};
