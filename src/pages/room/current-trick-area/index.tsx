import { Trick } from 'components';
import React, { FC } from 'react';
import { Room } from 'typings';
import { Container } from './styles';

interface IProps {
  room: Room;
}

const CurrentTrickArea: FC<IProps> = ({ room }) => {
  return (
    <Container>
      <Trick room={room} />
    </Container>
  );
};

export default CurrentTrickArea;
