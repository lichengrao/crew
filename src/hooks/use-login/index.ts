import React, { useState } from 'react';
import { auth } from 'services';

interface Output {
  isLoggingIn: boolean;
  login: () => Promise<void>;
}

const useLogin = (): Output => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async () => {
    setIsLoggingIn(true);

    try {
      await auth.signInAnonymously();
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return { isLoggingIn, login };
};

export default useLogin;
