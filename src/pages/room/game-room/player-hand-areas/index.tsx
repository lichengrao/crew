import { PlayerHandArea } from 'components';
import getBoardPosition from 'helpers/get-board-position';
import { useCurrentUser } from 'hooks';
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
  const user = useCurrentUser();
  const playerHandAreaPositions = ['bottom', 'left', 'top', 'right'];

  return (
    <>
      {playerIds.map((playerId: string, index: number) => (
        <PlayerHandArea
          key={`PlayerHandArea of ${playerId}`}
          hand={playerIdToHandMap[playerId]}
          playerId={playerId}
          position={getBoardPosition(playerId, user?.id, playerIds)}
          room={room}
        />
      ))}
    </>
  );
};

export default PlayerHandAreas;
