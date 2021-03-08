import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

import { auth } from 'services';
import { User } from 'typings';

const CurrentUserContext = createContext<User | undefined>(undefined);

export const CurrentUserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        return setUser({ id: uid } as User);
      }
      return setUser(undefined);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
