import { Button, Field, H1 } from 'components';
import { useCurrentUser, useJoinRoom, useLogin } from 'hooks';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Room } from 'typings';

interface IProps {
  room: Room;
}

const Waiting: FC<IProps> = ({ room }) => {
  const { roomId } = useParams<{ roomId: string }>();
  const user = useCurrentUser();
  const { isJoining, joinRoom } = useJoinRoom();
  const { isLoggingIn, login } = useLogin();
  const [playerName, setPlayerName] = useState('');

  const loginIfNotLoggedIn = async () => {
    if (!user && !isLoggingIn) {
      await login();
    }
  };

  const handleJoinRoom = async () => {
    if (!isJoining && user) {
      joinRoom(user.id, playerName);
    }
  };

  useEffect(() => {
    loginIfNotLoggedIn();
  }, []);

  const { playerIds, playerNames } = room;

  return (
    <>
      <H1>Waiting Area for Room {roomId}</H1>
      <H1>Currently {playerIds.length} / 4 players</H1>
      {playerIds.map((playerId: string, index: number) => (
        <H1 key={index}>{playerNames[playerId]}</H1>
      ))}

      {user && !playerIds.includes(user.id) && playerIds.length < 4 && (
        <>
          <Field
            id="playerName"
            label="Choose your player name"
            onChange={setPlayerName}
            value={playerName}
          />
          <Button
            disabled={isJoining || playerName === ''}
            onClick={handleJoinRoom}
          >
            Join Room
          </Button>
        </>
      )}
      {playerIds.length === 4 && <Button>Start Game</Button>}
    </>
  );
};

export default Waiting;
