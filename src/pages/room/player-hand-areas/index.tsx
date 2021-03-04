import { PlayerHandArea } from 'components';
import React, { FC } from 'react';
import { PlayerIdToHandMap, Room } from 'typings';

interface IProps {
  playerIds: string[];
  playerIdToHandMap: PlayerIdToHandMap;
  room: Room;
}

const PlayerHandAreas: FC<IProps> = ({
  playerIds,
  playerIdToHandMap,
  room,
}) => {
  const playerHandAreaPositions = ['top', 'left', 'bottom', 'right'];

  return (
    <>
      {playerIds.map((playerId: string, index: number) => (
        <PlayerHandArea
          key={`PlayerHandArea of ${playerId}`}
          hand={playerIdToHandMap[playerId]}
          playerId={playerId}
          position={playerHandAreaPositions[index]}
          room={room}
        />
      ))}
    </>
  );
};

export default PlayerHandAreas;
