import { Button, Field, H1 } from 'components';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

const JoinRoom: FC = () => {
  const history = useHistory();
  const [roomId, setRoomId] = useState<string>('');

  const handleJoin = () => {
    history.push(`/r/${roomId}`);
  };

  return (
    <>
      <H1>Join Room</H1>
      <Field
        id="room-id"
        label="Room ID"
        onChange={setRoomId}
        placeHolder="Enter Room ID Here"
        value={roomId}
      />
      <Button onClick={handleJoin}>Join</Button>
    </>
  );
};

export default JoinRoom;
