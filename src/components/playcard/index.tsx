import { usePlayPlayCard } from 'hooks';
import React, { FC } from 'react';

import { Room, Suit } from 'typings';
import { Card } from './styles';

interface IProps {
  playerId: string;
  suit: Suit;
  value: number;
  room: Room;
  handleClick?: () => void;
}

const PlayCard: FC<IProps> = ({ playerId, suit, value, room, handleClick }) => {
  return (
    <Card
      cardColor={Suit[suit] === 'Rocket' ? 'Gray' : Suit[suit]}
      onClick={handleClick}
    >
      <div>{value}</div>
      <div>{Suit[suit][0]}</div>
    </Card>
  );
};

export default PlayCard;
