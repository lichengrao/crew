import { usePlayPlayCard } from 'hooks';
import React, { FC } from 'react';

import { Room, Suit } from 'typings';
import { Card } from './styles';

interface IProps {
  playerId: string;
  suit: Suit;
  value: number;
  room: Room;
}

const PlayCard: FC<IProps> = ({ playerId, suit, value, room }) => {
  const { isPlayingPlayCard, playPlayCard } = usePlayPlayCard();

  const handleClick = async (playerId: string, suit: Suit, value: number) => {
    await playPlayCard(playerId, suit, value, room);
  };

  return (
    <Card
      cardColor={Suit[suit] === 'Rocket' ? 'Gray' : Suit[suit]}
      onClick={() => handleClick(playerId, suit, value)}
    >
      <div>{value}</div>
      <div>{Suit[suit][0]}</div>
    </Card>
  );
};

export default PlayCard;
