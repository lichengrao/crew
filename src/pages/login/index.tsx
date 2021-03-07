import React, { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Error as ErrorComponent, Field, H1 } from 'components';
import { useCurrentUser, useSearchParams } from 'hooks';
import { auth } from 'services';

const LoginPage: FC = () => {
  const history = useHistory();
  const user = useCurrentUser();
  const [firebaseErr, setFirebaseErr] = useState<string | undefined>();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { redirect, player } = useSearchParams();

  const performRedirect = useCallback(() => {
    if (!redirect) return history.push('/');
    if (!player) return history.push(`/${redirect}`);
    return history.push(`/${redirect}?player=${player}`);
  }, [history, player, redirect]);

  useEffect(() => {
    if (user) history.push('/');
  }, [performRedirect, user]);

  const handleLogin = async () => {
    setIsLoggingIn(true);

    try {
      await auth.signInAnonymously();
      //performRedirect();
    } catch (err) {
      setFirebaseErr(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const goToHome = () => {
    history.push('/');
  };

  const goToSignUp = () => {
    history.push('/signup');
  };

  return (
    <>
      <H1>Login</H1>
      {firebaseErr && <ErrorComponent>{firebaseErr}</ErrorComponent>}
      <Button disabled={isLoggingIn} onClick={handleLogin}>
        Login
      </Button>
      <Button onClick={goToSignUp}>SignUp</Button>
      <Button onClick={goToHome}>Back To Home</Button>
    </>
  );
};

export default LoginPage;
