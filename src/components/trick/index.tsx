import { PlayCard } from 'components';
import React, { FC } from 'react';
import { Room } from 'typings';
import { Container, TrickCardContainer } from './styles';

interface IProps {
  room: Room;
}

const Trick: FC<IProps> = ({ room }) => {
  const { currentTrick } = room;
  const trickCardPositions = ['top', 'left', 'bottom', 'right'];

  return (
    <Container>
      {Object.entries(currentTrick).map(([playerId, playcard], index) => (
        <TrickCardContainer
          key={`trick${index}`}
          className={trickCardPositions[index]}
        >
          {playcard ? (
            <PlayCard
              playerId={playerId}
              suit={playcard.suit}
              value={playcard.value}
              room={room}
            />
          ) : null}
        </TrickCardContainer>
      ))}
    </Container>
  );
};

export default Trick;
