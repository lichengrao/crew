import { PlayerHand } from 'components';
import React, { FC } from 'react';
import { Hand } from 'typings';
import { PlayerHandAreaContainer } from './styles';

interface IProps {
  position: string;
  hand: Hand;
}

const PlayerHandArea: FC<IProps> = ({ position, hand }) => {
  return (
    <PlayerHandAreaContainer className={position}>
      <PlayerHand position={position} hand={hand} />
    </PlayerHandAreaContainer>
  );
};

export default PlayerHandArea;
