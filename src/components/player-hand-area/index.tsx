import { H1, PlayerHand } from 'components';
import React, { FC } from 'react';
import { Hand, Room } from 'typings';
import { PlayerHandAreaContainer } from './styles';

interface IProps {
  hand: Hand;
  playerId: string;
  position: string;
  room: Room;
}

const PlayerHandArea: FC<IProps> = ({ hand, playerId, position, room }) => {
  return (
    <PlayerHandAreaContainer
      className={position}
      currentTurn={playerId === room.currentPlayerTurn}
    >
      <PlayerHand
        hand={hand}
        playerId={playerId}
        position={position}
        room={room}
      />
    </PlayerHandAreaContainer>
  );
};

export default PlayerHandArea;
