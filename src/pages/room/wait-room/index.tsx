import { Button, Field, H1 } from 'components';
import { useCurrentUser, useJoinRoom, useLogin, useStartNewGame } from 'hooks';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Room } from 'typings';

interface IProps {
  room: Room;
}

const WaitRoom: FC<IProps> = ({ room }) => {
  const { roomId } = useParams<{ roomId: string }>();
  const user = useCurrentUser();
  const { isJoining, joinRoom } = useJoinRoom();
  const { isLoggingIn, login } = useLogin();
  const { isStartingNewGame, startNewGame } = useStartNewGame();
  const [playerName, setPlayerName] = useState('');

  const { playerIds, playerNames } = room;

  const loginIfNotLoggedIn = async () => {
    if (!user && !isLoggingIn) {
      await login();
    }
  };

  const handleJoinRoom = async () => {
    if (!isJoining && user) {
      await joinRoom(user.id, playerName);
    }
  };

  const handleStartNewGame = async () => {
    if (!isStartingNewGame && playerIds.length === 4) {
      await startNewGame(playerIds);
    }
  };

  useEffect(() => {
    loginIfNotLoggedIn();
  }, []);

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
      <Button onClick={handleStartNewGame}>
        {playerIds.length === 4 ? 'Start Game' : 'Waiting For Players...'}
      </Button>
    </>
  );
};

export default WaitRoom;
