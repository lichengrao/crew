import { Trick } from 'typings';

const getNewTrick = (playerIds: string[]): Trick => {
  const newTrick: Trick = {};
  playerIds.forEach((playerId) => {
    newTrick[playerId] = null;
  });
  return newTrick;
};

export default getNewTrick;
