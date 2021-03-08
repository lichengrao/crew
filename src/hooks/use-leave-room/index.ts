import firebase from 'firebase/app';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';

interface Output {
  isLeaving: boolean;
  leaveRoom: (userId: string) => Promise<void>;
}

const useLeaveRoom = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isLeaving, setIsLeaving] = useState(false);

  const leaveRoom = async (userId: string) => {
    setIsLeaving(true);
    try {
      const doc = await db.collection('rooms').doc(roomId).get();
      if (doc.exists) {
        const data = doc.data();
        if (!data?.playerIds.includes(userId)) {
          return alert(`You're not in this game`);
        }
        await db
          .collection('rooms')
          .doc(roomId)
          .update({
            playerIds: firebase.firestore.FieldValue.arrayRemove(userId),
          });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLeaving(false);
    }
  };

  return { isLeaving, leaveRoom };
};

export default useLeaveRoom;
