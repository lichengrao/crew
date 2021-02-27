export interface TaskToken {
  // TODO: just do it bro
}

export enum TaskTokenNumber {
  One,
  Two,
  Three,
  Four,
  Five,
  Last,
}

export enum TaskTokenCondition {
  Strict,
  Relative,
}

export interface TaskToken {
  readonly taskTokenNumber: TaskTokenNumber;
  readonly taskTokenCondition: TaskTokenCondition;
}

export const initTaskToken = (
  taskTokenNumber: TaskTokenNumber,
  taskTokenCondition: TaskTokenCondition
): TaskToken => {
  return {
    taskTokenNumber: taskTokenNumber,
    taskTokenCondition: taskTokenCondition,
  };
};
