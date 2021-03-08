import firebase from 'firebase/app';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';

interface Output {
  isJoining: boolean;
  joinRoom: (userId: string) => Promise<void>;
}

const useJoinRoom = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isJoining, setIsJoining] = useState(false);

  const joinRoom = async (userId: string) => {
    setIsJoining(true);
    try {
      const doc = await db.collection('rooms').doc(roomId).get();
      if (doc.exists) {
        const data = doc.data();
        if (data?.playerIds.includes(userId)) {
          return alert(`You're already in this game`);
        }
        await db
          .collection('rooms')
          .doc(roomId)
          .update({
            playerIds: firebase.firestore.FieldValue.arrayUnion(userId),
          });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsJoining(false);
    }
  };

  return { isJoining, joinRoom };
};

export default useJoinRoom;
