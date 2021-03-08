import { Button, H1 } from 'components';
import { useCreateRoom } from 'hooks';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateRoom: FC = () => {
  const { createRoom, isCreatingRoom } = useCreateRoom();
  const history = useHistory();
  const [roomId, setRoomId] = useState<string>('');

  const handleJoin = () => {
    history.push(`/r/${roomId}`);
  };

  const createNewRoom = async () => {
    const newRoomId = await createRoom();
    setRoomId(newRoomId);
  };

  useEffect(() => {
    createNewRoom();
  }, []);

  return isCreatingRoom ? (
    <H1>Creating Room</H1>
  ) : (
    <>
      <H1>You Room ID Is</H1>
      <H1>{roomId}</H1>
      <Button onClick={handleJoin}>Join</Button>
    </>
  );
};

export default CreateRoom;
