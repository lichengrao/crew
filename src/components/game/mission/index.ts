import { Deck } from 'components';
import { TaskCard } from 'components';
import { Player } from 'components';

import { initTask, Task, TaskState } from '../task';
import { Trick, trickWinner } from '../trick';

export enum MissionId {
  Easy,
  Medium,
  Hard,
}

export enum MissionState {
  Success,
  Failure,
  InProgress,
}

export interface Mission {
  readonly missionId: MissionId;
  unassignedTaskCards: TaskCard[];
  outstandingTasks: Task[];
  completedTasks: Task[];
  missionState: MissionState;
}

export const initMission = (missionId: MissionId): Mission => {
  return {
    missionId: missionId,
    unassignedTaskCards: [],
    outstandingTasks: [],
    completedTasks: [],
    missionState: MissionState.InProgress,
  };
};

export const drawTaskCards = (
  numberOfTaskCards: number,
  deck: Deck,
  mission: Mission
): void => {
  for (let i = 0; i < numberOfTaskCards; i++) {
    mission.unassignedTaskCards.push(deck.taskCards[i]);
  }
};

export const pickTaskCards = (
  player: Player,
  taskCard: TaskCard,
  mission: Mission
): boolean => {
  const availableTaskCards: TaskCard[] = mission.unassignedTaskCards;
  const i: number = availableTaskCards.indexOf(taskCard);

  if (i > -1) {
    availableTaskCards.splice(i, 1);
    const newTask: Task = initTask(taskCard, player.playerId);
    taskCard.task = newTask;
    player.myTasks.push(newTask);
    mission.outstandingTasks.push(newTask);
    return true;
  } else {
    return false;
  }
};

/**
 * mark relevant tasks as succeeded/failed after trick
 * return false if any task has failed, true otherwise
 * @param trick last played trick
 * @param mission current mission
 */
export const resolveTasks = (trick: Trick, mission: Mission): boolean => {
  const trickWinnerId: number = trickWinner(trick);
  for (const playCard of trick.cards) {
    if (playCard.taskCard && playCard.taskCard.task) {
      const task = playCard.taskCard.task;
      if (
        trickWinnerId !== task.playerId ||
        task.taskState === TaskState.InProgressLocked
      ) {
        task.taskState = TaskState.Failure;
        mission.missionState = MissionState.Failure;
        return false;
      } else {
        task.taskState = TaskState.Success;
        const taskIndex: number = mission.outstandingTasks.indexOf(task);
        mission.outstandingTasks.splice(taskIndex, 1);
        updateMissionSuccess(mission);
        mission.completedTasks.push(task);
      }
    }
  }
  return true;
};

export const updateMissionSuccess = (mission: Mission): void => {
  if (mission.outstandingTasks.length === 0) {
    mission.missionState = MissionState.Success;
  }
};

export const checkMissionSuccess = (mission: Mission): boolean => {
  return mission.missionState === MissionState.Success;
};
