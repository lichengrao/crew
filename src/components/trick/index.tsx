import { PlayCardFront } from 'components/playcard';
import getBoardPosition from 'helpers/get-board-position';
import { useCurrentUser } from 'hooks';
import React, { FC } from 'react';
import { Room } from 'typings';
import { Container, TrickCardContainer } from './styles';

interface IProps {
  room: Room;
}

const Trick: FC<IProps> = ({ room }) => {
  const user = useCurrentUser();
  const { currentTrick, playerIds } = room;
  const trickCardPositions = ['bottom', 'left', 'top', 'right'];

  return (
    <Container>
      {Object.entries(currentTrick).map(([playerId, playcard], index) => (
        <TrickCardContainer
          key={`trick${index}`}
          className={getBoardPosition(playerId, user?.id, playerIds)}
        >
          {playcard && (
            <PlayCardFront suit={playcard.suit} value={playcard.value} />
          )}
        </TrickCardContainer>
      ))}
    </Container>
  );
};

export default Trick;
