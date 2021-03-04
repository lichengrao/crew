import { PlayerHandArea } from 'components';
import React, { FC } from 'react';
import { PlayerIdToHandMap } from 'typings';

interface IProps {
  playerIds: string[];
  playerIdToHandMap: PlayerIdToHandMap;
}

const PlayerHands: FC<IProps> = ({ playerIds, playerIdToHandMap }) => {
  const playerHandAreaPositions = ['top', 'left', 'bottom', 'right'];

  return (
    <>
      {playerIds.map((playerId: string, index: number) => (
        <PlayerHandArea
          key={`PlayerHandArea ${playerId}`}
          position={playerHandAreaPositions[index]}
          hand={playerIdToHandMap[playerId]}
        />
      ))}
    </>
  );
};

export default PlayerHands;
