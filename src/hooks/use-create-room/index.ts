import { useState } from 'react';

import { db } from 'services';

interface Output {
  createRoom: () => Promise<string>;
  isCreatingRoom: boolean;
}

const genId = (): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const useCreateRoom = (): Output => {
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  const createRoom = async (): Promise<string> => {
    setIsCreatingRoom(true);
    let roomId = '';
    try {
      let newIdGenerated = false;
      roomId = genId();

      while (!newIdGenerated) {
        const foundRoom = await db.collection('rooms').doc(roomId).get();
        if (foundRoom.exists) roomId = genId();
        else newIdGenerated = true;
      }

      await db.collection('rooms').doc(roomId).set({
        playerIds: [],
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsCreatingRoom(false);
      return roomId;
    }
  };

  return { createRoom, isCreatingRoom };
};

export default useCreateRoom;
