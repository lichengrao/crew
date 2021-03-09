import React, { FC } from 'react';

import { Suit } from 'typings';
import { Card } from './styles';

interface IProps {
  suit: Suit;
  value: number;
  handleClick?: () => void;
}

export const PlayCardFront: FC<IProps> = ({ suit, value, handleClick }) => {
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

export const PlayCardBack: FC = () => {
  return <Card cardColor="Gray" />;
};
