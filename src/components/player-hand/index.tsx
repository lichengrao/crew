import { PlayCard } from 'components';
import React, { FC } from 'react';
import { Hand, Room } from 'typings';
import { PlayerHandContainer } from './styles';

interface IProps {
  hand: Hand;
  playerId: string;
  position: string;
  room: Room;
}

const PlayerHand: FC<IProps> = ({ hand, playerId, position, room }) => {
  let cardNum = 0;

  return (
    <PlayerHandContainer className={position}>
      {Object.values(hand).map((playcards) =>
        Object.values(playcards).map((card) => (
          <PlayCard
            key={`${cardNum++}`}
            playerId={playerId}
            suit={card.suit}
            value={card.value}
            room={room}
          />
        ))
      )}
    </PlayerHandContainer>
  );
};

export default PlayerHand;
