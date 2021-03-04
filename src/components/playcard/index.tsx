import React, { FC } from 'react';

import { Suit } from 'typings';
import { Card } from './styles';

interface IProps {
  value: number;
  suit: Suit;
}

const PlayCard: FC<IProps> = ({ value, suit }) => {
  return (
    <Card cardColor={Suit[suit] === 'Rocket' ? 'Gray' : Suit[suit]}>
      <div>{value}</div>
      <div>{Suit[suit][0]}</div>
    </Card>
  );
};

export default PlayCard;
