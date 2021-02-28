import { initHand } from 'components';
import { Player } from 'typings';

export const initPlayer = (playerId: number): Player => {
  return {
    playerId: playerId,
    myCards: initHand(),
    myTricks: [],
    myTasks: [],
  };
};
