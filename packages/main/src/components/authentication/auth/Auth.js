import React from 'react';
import styles from './Auth.scss';
import { StyledFirebaseAuth } from 'react-firebaseui';

import { auth, fbAuth } from 'shared/services/firebase/firebase';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    fbAuth.EmailAuthProvider.PROVIDER_ID,
    fbAuth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    // fbAuth.GoogleAuthProvider.PROVIDER_ID,
    // auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const Auth = () => {
  return (
    <div className={styles.Auth}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default Auth;
